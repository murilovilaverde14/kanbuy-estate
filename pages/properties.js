import Head from 'next/head';

export default function Properties() {
  const list = [
    {id:1,name:'Lot — Lake County, FL',price:6900,payment:129},
    {id:2,name:'Desert Land — Cochise County, AZ',price:7200,payment:139},
    {id:3,name:'Open Acre — Hudspeth County, TX',price:9100,payment:179},
  ];
  return (
    <>
      <Head><title>Properties — Kanbuy.estate</title></Head>
      <header
  style={{
    display:'flex',justifyContent:'space-between',alignItems:'center',
    padding:'1.2rem 2rem',background:'#fff',borderBottom:'1px solid #eee',
    position:'sticky',top:0,zIndex:999
  }}
>
  <div style={{display:'flex',alignItems:'center',gap:'1rem'}}>
    <a href="/">
      <img src="/logo.png" alt="Kanbuy logo" style={{height:'48px',cursor:'pointer'}}/>
    </a>
    <nav style={{display:'flex',gap:'1.5rem',fontWeight:'600',color:'#003366'}}>
      {['Home','Properties','Financing','About','Contact'].map(n=>(
        <a key={n} href={`/${n==='Home'?'':n.toLowerCase()}`} style={{textDecoration:'none',color:'#003366'}}>{n}</a>
      ))}
    </nav>
  </div>
</header>
      <main style={fontFamily:'Inter,sans-serif',padding:'4rem 2rem'}>
        <h1 style={textAlign:'center',color:'#003366',marginBottom:'2rem'}>Available Properties</h1>
        <div style={
          display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',
          gap:'2rem',maxWidth:'1080px',margin:'auto'
        }>
          {list.map(p=>(<div key={p.id} style={
            background:'#fff',borderRadius:'10px',boxShadow:'0 3px 8px rgba(0,0,0,0.1)',padding:'1.5rem'
          }>
            <img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60" alt="land"
              style={borderRadius:'6px',marginBottom:'1rem'}/>
            <h3>{p.name}</h3>
            <p>Cash Price: ${p.price.toLocaleString()}</p>
            <p style={color:'#55cc44',fontWeight:'600'}>Financing: ${p.payment}/month</p>
            <a href={`/property/{p.id}`}>
              <button style={marginTop:'0.5rem',background:'#003366',color:'#fff',border:'none',padding:'0.6rem 1rem',borderRadius:'6px'}>View Details</button>
            </a>
          </div>))}
        </div>
      </main>
      <footer
  style={{
    textAlign:'center',padding:'1rem',background:'#f6f8fa',color:'#555',fontSize:'.9rem'
  }}
>
  © {new Date().getFullYear()} Kanbuy.estate — Land made simple.
</footer>
    </>
  );
}
