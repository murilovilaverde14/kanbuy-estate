import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
export default function Properties() {
  return (
    <>
      <Head><title>Properties — Kanbuy.estate</title></Head>
      <Header/>
      <main style={fontFamily:'Inter,sans-serif',padding:'4rem 2rem',textAlign:'center',color:'#003366'}>
        <h1>Available Properties</h1>
        <p style={maxWidth:'700px',margin:'1rem auto',color:'#555'}>Explore affordable lots and acreages with flexible financing options.</p>
      </main>
      <Footer/>
    </>
  );
}