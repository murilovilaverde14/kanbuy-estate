import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
export default function Financing() {
  return (
    <>
      <Head><title>Financing — Kanbuy.estate</title></Head>
      <Header/>
      <main style={fontFamily:'Inter,sans-serif',padding:'4rem 2rem',textAlign:'center',color:'#003366'}>
        <h1>Owner Financing</h1>
        <p style={maxWidth:'700px',margin:'1rem auto',color:'#555'}>Buy land directly with simple monthly payments and no credit checks.</p>
      </main>
      <Footer/>
    </>
  );
}