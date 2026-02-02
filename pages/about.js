import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
export default function About() {
  return (
    <>
      <Head><title>About — Kanbuy.estate</title></Head>
      <Header/>
      <main style={fontFamily:'Inter,sans-serif',padding:'4rem 2rem',textAlign:'center',color:'#003366'}>
        <h1>About Us</h1>
        <p style={maxWidth:'700px',margin:'1rem auto',color:'#555'}>Kanbuy.estate connects people with affordable rural land and simplifies ownership through transparency and direct financing.</p>
      </main>
      <Footer/>
    </>
  );
}