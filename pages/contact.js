import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
export default function Contact() {
  return (
    <>
      <Head><title>Contact — Kanbuy.estate</title></Head>
      <Header/>
      <main style={fontFamily:'Inter,sans-serif',padding:'4rem 2rem',textAlign:'center',color:'#003366'}>
        <h1>Contact Us</h1>
        <p style={maxWidth:'700px',margin:'1rem auto',color:'#555'}>Reach out to our team for inquiries, support or partnership opportunities.</p>
      </main>
      <Footer/>
    </>
  );
}