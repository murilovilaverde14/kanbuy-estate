import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Kanbuy.estate — Seu terreno ideal</title>
        <meta
          name="description"
          content="Compre terrenos com facilidade e financiamento direto. Kanbuy.estate — seu marketplace de propriedades."
        />
      </Head>

      <main style={{ fontFamily: 'sans-serif' }}>
        {/* Hero Section */}
        <section style={{ padding: '5rem 2rem', textAlign: 'center', background: '#f5f7fa' }}>
          <h1 style={{ fontSize: '2.5rem', color: '#003366' }}>Encontre seu terreno ideal</h1>
          <p style={{ fontSize: '1.15rem', color: '#555', marginTop: '1rem', maxWidth: '600px', marginInline: 'auto' }}>
            Explore oportunidades únicas e adquira seu lote com parcelas acessíveis.
          </p>

          <div style={{ marginTop: '2rem' }}>
            <input
              type="text"
              placeholder="Procure por estado, condado ou ZIP..."
              style={{
                padding: '0.75rem 1.25rem',
                width: '280px',
                borderRadius: '6px',
                border: '1px solid #ccc',
                marginRight: '8px',
              }}
            />
            <button
              style={{
                background: '#55cc44',
                color: 'white',
                border: 'none',
                padding: '0.8rem 1.5rem',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              Buscar
            </button>
          </div>
        </section>

        {/* Sessão de Destaques */}
        <section style={{ padding: '3rem 2rem' }}>
          <h2 style={{ textAlign: 'center', color: '#003366' }}>Propriedades em destaque</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              marginTop: '2rem',
            }}
          >
            {[1, 2, 3].map((item) => (
              <div key={item} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem' }}>
                <img
                  src={`https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=60`}
                  alt=""
                  style={{ borderRadius: '6px', marginBottom: '1rem' }}
                />
                <h3 style={{ color: '#003366' }}>Terreno nº {item}</h3>
                <p style={{ color: '#666' }}>A partir de $129/mês</p>
                <button
                  style={{
                    background: '#003366',
                    color: '#fff',
                    padding: '0.6rem 1.2rem',
                    borderRadius: '6px',
                    border: 'none',
                    cursor: 'pointer',
                    marginTop: '1rem',
                  }}
                >
                  Mais detalhes
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
