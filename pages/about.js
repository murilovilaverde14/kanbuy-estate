import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head><title>About — Kanbuy.estate</title></Head>
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
        <h1 style={textAlign:'center',color:'#003366',marginBottom:'1rem'}>About Kanbuy</h1>
        <p style={maxWidth:'700px',margin:'0 auto 2rem',textAlign:'center',color:'#555'}>
          Kanbuy.estate connects people with affordable land. Our goal is to simplify property ownership through transparency, simplicity, and direct deals.
        </p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d87673.27088171342!2d-93.234!3d34.580!"
          width="100%" height="400" style={border:0} allowFullScreen loading="lazy"></iframe>
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
