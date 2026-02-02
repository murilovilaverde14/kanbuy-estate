import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Kanbuy.estate — Seu terreno ideal</title>
        <meta name="description" content="Compre terrenos nos EUA com facilidade e financiamento direto com a Kanbuy.estate." />
      </Head>

      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', background: '#fff', borderBottom: '1px solid #eee' }}>
        <img src="/logo.png" alt="Kanbuy Logo" style={{ height: '48px' }} />
      </header>

      <main style={{ fontFamily: 'Inter, sans-serif', color: '#003366' }}>
        <section style={{ textAlign: 'center', padding: '6rem 2rem', background: 'linear-gradient(120deg, #003366, #004c99, #55cc44)', color: '#fff' }}>
          <h1 style={{ fontSize: '2.8rem', fontWeight: '700' }}>Encontre seu terreno ideal</h1>
          <p style={{ marginTop: '1rem', fontSize: '1.1rem' }}>Explore oportunidades únicas e adquira seu lote com parcelas acessíveis.</p>
          <div style={{ marginTop: '2rem' }}>
            <input type="text" placeholder="Buscar cidade, condado ou ZIP..." style={{ padding: '0.8rem', width: '300px', borderRadius: '6px', border: 'none', outline: 'none' }} />
            <Link href="/properties">
              <button style={{ marginLeft: '0.5rem', padding: '0.8rem 1.6rem', background: '#55cc44', borderRadius: '6px', border: 'none', color: '#003366', fontWeight: '600', cursor: 'pointer' }}>Buscar</button>
            </Link>
          </div>
        </section>

        <section style={{ padding: '4rem 2rem', background: '#f7f9fb' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: '700' }}>Propriedades em destaque</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '2rem', marginTop: '2rem', maxWidth: '1080px', marginInline: 'auto' }}>
            {[1,2,3].map(i => (
              <div key={i} style={{ background:'#fff', borderRadius:'8px', boxShadow:'0 2px 8px rgba(0,0,0,0.1)', overflow:'hidden' }}>
                <img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60" alt="Terreno" style={{ width:'100%', height:'200px', objectFit:'cover' }}/>
                <div style={{ padding:'1.5rem' }}>
                  <h3>Terreno {i} — Florida</h3>
                  <p style={{ color:'#555' }}>Parcelas a partir de $129/mês</p>
                  <Link href="/property/123">
                    <button style={{ marginTop:'1rem', background:'#003366', color:'#fff', border:'none', borderRadius:'6px', padding:'.6rem 1.2rem', cursor:'pointer' }}>Ver detalhes</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ textAlign:'center', padding:'4rem 2rem', background:'#fff' }}>
          <h2>Por que comprar com a Kanbuy?</h2>
          <p style={{ maxWidth:'600px', margin:'1rem auto', color:'#555' }}>
            Financiamento fácil, compra 100% online e transparência total em todos os processos.
          </p>
        </section>

        <section style={{ background:'#003366', color:'#fff', textAlign:'center', padding:'4rem 2rem' }}>
          <h2>Pronto para conquistar seu terreno?</h2>
          <p>Escolha, simule o financiamento e adquira seu lote agora mesmo.</p>
          <Link href="/properties">
            <button style={{ background:'#55cc44', color:'#003366', border:'none', borderRadius:'6px', padding:'1rem 2rem', fontWeight:'600', marginTop:'1rem' }}>Ver terrenos disponíveis</button>
          </Link>
        </section>

        <footer style={{ textAlign:'center', padding:'1rem', background:'#f7f9fb', color:'#555' }}>
          © {new Date().getFullYear()} Kanbuy.estate — Compra de terrenos simplificada.
        </footer>
      </main>
    </>
  );
}
