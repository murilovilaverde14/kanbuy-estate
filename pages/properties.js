import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Page(){
  return(
    <>
      <Head><title>Properties — Kanbuy.estate</title></Head>
      <Header/>
      <main style={fontFamily:'Inter,sans-serif',padding:'4rem 2rem',textAlign:'center',color:'#003366'}>
        <div dangerouslySetInnerHTML={__html:`<h1>Available Properties</h1><p>Discover great land deals with owner financing.</p>`}/>
      </main>
      <Footer/>
    </>
  )
}