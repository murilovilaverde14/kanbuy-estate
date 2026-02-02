import { useRouter } from 'next/router';
import Link from 'next/link';
import FinancingSimulator from '../../components/FinancingSimulator';

export default function PropertyDetail() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <main style={{ fontFamily:'sans-serif', padding:'4rem 2rem' }}>
      <h1 style={{ color:'#003366', marginBottom:'1rem' }}>Detalhes da Propriedade #{id}</h1>
      <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=60" alt="" style={{ borderRadius:'10px', maxWidth:'900px', width:'100%', marginBottom:'2rem' }}/>
      <p style={{ color:'#555', marginBottom:'1rem' }}>
        Localização: Florida, EUA - Área plana com acesso direto por estrada.
      </p>
      <p style={{ color:'#555' }}>Parcelamento: até 60 meses com entrada flexível.</p>

      <FinancingSimulator />

      <section style={{ marginTop:'2rem' }}>
        <Link href="/properties">
          <button style={{ background:'#003366', color:'#fff', border:'none', borderRadius:'6px', padding:'1rem 2rem', cursor:'pointer' }}>Voltar à lista</button>
        </Link>
      </section>
    </main>
  );
}
