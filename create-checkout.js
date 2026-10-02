
const SERVICES = {
  essential_website: {name:"Essential Website", baseCents:35000},
  business_website: {name:"Business Website", baseCents:65000},
  digital_card: {name:"Digital Business Card", baseCents:2500},
  social_flyer: {name:"Social Media Flyer", baseCents:2500},
  digital_menu_1: {name:"Digital Menu · 1 page", baseCents:3500},
  digital_menu_23: {name:"Digital Menu · 2–3 pages", baseCents:5000},
  elaborate_menu: {name:"Elaborate Digital Menu", baseCents:6500}
};

function json(data,status=200){
  return new Response(JSON.stringify(data),{status,headers:{"content-type":"application/json;charset=utf-8"}});
}

export async function onRequestPost(context){
  try{
    const { request, env } = context;
    if (!env.STRIPE_SECRET_KEY) return json({error:"Stripe secret is not configured."},500);
    if (!env.SUPABASE_URL || !env.SUPABASE_ANON_KEY) return json({error:"Supabase server variables are not configured."},500);

    const auth = request.headers.get("authorization") || "";
    if (!auth.startsWith("Bearer ")) return json({error:"Authentication required."},401);

    const token = auth.slice(7);
    const userRes = await fetch(`${env.SUPABASE_URL}/auth/v1/user`,{
      headers:{apikey:env.SUPABASE_ANON_KEY,Authorization:`Bearer ${token}`}
    });
    if (!userRes.ok) return json({error:"Invalid session."},401);
    const user = await userRes.json();

    const body = await request.json();
    const service = SERVICES[body.serviceId];
    if (!service) return json({error:"This service requires a quote or is not available for direct deposit."},400);

    const depositCents = Math.round(service.baseCents * 0.5);
    const origin = new URL(request.url).origin;

    const params = new URLSearchParams();
    params.set("mode","payment");
    params.set("success_url",`${origin}/success.html?session_id={CHECKOUT_SESSION_ID}`);
    params.set("cancel_url",`${origin}/cancel.html`);
    params.set("customer_email",user.email || "");
    params.set("client_reference_id",user.id);
    params.set("line_items[0][quantity]","1");
    params.set("line_items[0][price_data][currency]","usd");
    params.set("line_items[0][price_data][unit_amount]",String(depositCents));
    params.set("line_items[0][price_data][product_data][name]",`${service.name} — 50% starting deposit`);
    params.set("metadata[user_id]",user.id);
    params.set("metadata[service_id]",body.serviceId);
    params.set("metadata[service_name]",service.name);
    params.set("metadata[deposit_cents]",String(depositCents));

    const stripeRes = await fetch("https://api.stripe.com/v1/checkout/sessions",{
      method:"POST",
      headers:{
        Authorization:`Bearer ${env.STRIPE_SECRET_KEY}`,
        "content-type":"application/x-www-form-urlencoded"
      },
      body:params
    });
    const session = await stripeRes.json();
    if (!stripeRes.ok) return json({error:session?.error?.message || "Unable to create Stripe Checkout."},500);

    if (env.SUPABASE_SERVICE_ROLE_KEY){
      await fetch(`${env.SUPABASE_URL}/rest/v1/orders`,{
        method:"POST",
        headers:{
          apikey:env.SUPABASE_SERVICE_ROLE_KEY,
          Authorization:`Bearer ${env.SUPABASE_SERVICE_ROLE_KEY}`,
          "content-type":"application/json",
          Prefer:"return=minimal"
        },
        body:JSON.stringify({
          user_id:user.id,
          email:user.email,
          service_id:body.serviceId,
          service_name:service.name,
          amount_cents:depositCents,
          stripe_session_id:session.id,
          status:"checkout_created"
        })
      });
    }

    return json({url:session.url});
  }catch(err){
    return json({error:err.message || "Unexpected checkout error."},500);
  }
}
