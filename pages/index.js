import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head><title>Kanbuy.estate — Find Land You Love</title></Head>
      <Header/>
      <main style={{fontFamily:'Inter,sans-serif',color:'#003366'}}>
        <section style={{
          position:'relative',
          backgroundImage:'url(/banner.jpg)',
          backgroundSize:'cover',
          backgroundPosition:'center',
          padding:'10rem 2rem',
          textAlign:'center',
          color:'#fff'
        }}>
          <div style={{
            position:'absolute',top:0,left:0,right:0,bottom:0,
            background:'rgba(0,0,0,0.5)',zIndex:1
          }}></div>
          <div style={{position:'relative',zIndex:2}}>
            <h1 style={{fontSize:'3rem',fontWeight:'700',marginBottom:'1rem'}}>Find Land You Love</h1>
            <p style={{maxWidth:'600px',margin:'0 auto 2rem',fontSize:'1.1rem'}}>
              Browse lots and acreage with flexible payment options.
            </p>
            <a href="/properties">
              <button style={{
                padding:'0.85rem 1.6rem',
                background:'#55cc44',
                border:'none',
                borderRadius:'6px',
                color:'#003366',
                fontWeight:'600',
                cursor:'pointer'
              }}>View Properties</button>
            </a>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}
