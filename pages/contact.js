import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Page(){
  return(
    <>
      <Head><title>Contact — Kanbuy.estate</title></Head>
      <Header/>
      <main style={fontFamily:'Inter,sans-serif',padding:'4rem 2rem',textAlign:'center',color:'#003366'}>
        <div dangerouslySetInnerHTML={__html:`<h1>Contact Us</h1><p>Reach our team for any questions or collaborations.</p>`}/>
      </main>
      <Footer/>
    </>
  )
}