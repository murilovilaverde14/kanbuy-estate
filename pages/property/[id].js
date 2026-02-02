import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Property(){
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Head><title>Property {id} — Kanbuy.estate</title></Head>
      <Header/>
      <main style={{fontFamily:'Inter,sans-serif',padding:'4rem 2rem'}}>
        <h1 style={{color:'#003366'}}>Property #{id}</h1>
        <p>This property is available for purchase with flexible financing options.</p>
      </main>
      <Footer/>
    </>
  );
}
