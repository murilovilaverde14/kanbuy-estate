import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Page(){
  return(
    <>
      <Head><title>Financing — Kanbuy.estate</title></Head>
      <Header/>
      <main style={fontFamily:'Inter,sans-serif',padding:'4rem 2rem',textAlign:'center',color:'#003366'}>
        <div dangerouslySetInnerHTML={__html:`<h1>Owner Financing</h1><p>Buy land directly with easy monthly payments — no banks required.</p>`}/>
      </main>
      <Footer/>
    </>
  )
}