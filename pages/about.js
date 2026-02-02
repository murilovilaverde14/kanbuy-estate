import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Page(){
  return(
    <>
      <Head><title>About — Kanbuy.estate</title></Head>
      <Header/>
      <main style={fontFamily:'Inter,sans-serif',padding:'4rem 2rem',textAlign:'center',color:'#003366'}>
        <div dangerouslySetInnerHTML={__html:`<h1>About Us</h1><p>Kanbuy.estate simplifies land ownership with transparency and flexible financing.</p>`}/>
      </main>
      <Footer/>
    </>
  )
}