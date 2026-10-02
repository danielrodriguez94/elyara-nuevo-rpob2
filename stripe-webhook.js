
function json(data,status=200){
  return new Response(JSON.stringify(data),{status,headers:{"content-type":"application/json;charset=utf-8"}});
}
function hex(buffer){
  return [...new Uint8Array(buffer)].map(b=>b.toString(16).padStart(2,"0")).join("");
}
function timingSafeEqual(a,b){
  if (a.length !== b.length) return false;
  let out = 0;
  for(let i=0;i<a.length;i++) out |= a.charCodeAt(i)^b.charCodeAt(i);
  return out === 0;
}
async function verify(raw,sigHeader,secret){
  const parts = Object.fromEntries(sigHeader.split(",").map(p=>p.split("=")));
  if (!parts.t || !parts.v1) return false;
  const payload = `${parts.t}.${raw}`;
  const key = await crypto.subtle.importKey("raw",new TextEncoder().encode(secret),{name:"HMAC",hash:"SHA-256"},false,["sign"]);
  const digest = await crypto.subtle.sign("HMAC",key,new TextEncoder().encode(payload));
  return timingSafeEqual(hex(digest),parts.v1);
}

export async function onRequestPost(context){
  const { request, env } = context;
  if (!env.STRIPE_WEBHOOK_SECRET) return json({error:"Webhook secret not configured."},500);
  const raw = await request.text();
  const sig = request.headers.get("stripe-signature") || "";
  if (!(await verify(raw,sig,env.STRIPE_WEBHOOK_SECRET))) return json({error:"Invalid Stripe signature."},400);

  const event = JSON.parse(raw);
  if (event.type === "checkout.session.completed" && env.SUPABASE_URL && env.SUPABASE_SERVICE_ROLE_KEY){
    const session = event.data.object;
    await fetch(`${env.SUPABASE_URL}/rest/v1/orders?stripe_session_id=eq.${encodeURIComponent(session.id)}`,{
      method:"PATCH",
      headers:{
        apikey:env.SUPABASE_SERVICE_ROLE_KEY,
        Authorization:`Bearer ${env.SUPABASE_SERVICE_ROLE_KEY}`,
        "content-type":"application/json",
        Prefer:"return=minimal"
      },
      body:JSON.stringify({status:"paid",paid_at:new Date().toISOString()})
    });
  }
  return json({received:true});
}
