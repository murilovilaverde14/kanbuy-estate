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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Cabeçalho */}
      <header
        style={{
          background: '#ffffff',
          borderBottom: '1px solid #eee',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem 2rem',
          }}
        >
          <h1 style={{ color: '#003366', fontWeight: 'bold', fontSize: '1.5rem' }}>
            <span style={{ color: '#55cc44' }}>Kanbuy</span>.estate
          </h1>
          <nav>
            <a href="/" style={{ marginRight: '1.5rem', color: '#003366' }}>
              Home
            </a>
            <a href="/properties" style={{ marginRight: '1.5rem', color: '#003366' }}>
              Propriedades
            </a>
            <a href="/financing" style={{ marginRight: '1.5rem', color: '#003366' }}>
              Financiamento
            </a>
            <a href="/contact" style={{ color: '#003366' }}>
              Contato
            </a>
          </nav>
        </div>
      </header>

      {/* Seção principal */}
      <main style={{ fontFamily: 'Inter, sans-serif', color: '#333' }}>
        {/* Hero Section */}
        <section
          style={{
            textAlign: 'center',
            padding: '5rem 2rem',
            background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
          }}
        >
          <h2 style={{ fontSize: '2.8rem', color: '#003366', marginBottom: '1rem' }}>
            Encontre seu terreno ideal
          </h2>
          <p
            style={{
              color: '#555',
              maxWidth: '620px',
              margin: '0 auto 2.5rem',
              fontSize: '1.1rem',
              lineHeight: 1.6,
            }}
          >
            Terrenos selecionados com financiamento direto, acesso fácil e parcelamento
            flexível. Seu próximo investimento começa aqui.
          </p>

          {/* Campo de busca */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
            <input
              type="text"
              placeholder="Busque por cidade, condado ou ZIP..."
              style={{
                padding: '0.8rem 1rem',
                border: '1px solid #ccc',
                borderRadius: '8px 0 0 8px',
                width: '300px',
                outline: 'none',
              }}
            />
            <button
              style={{
                background: '#55cc44',
                color: '#fff',
                border: 'none',
                padding: '0 1.5rem',
                borderRadius: '0 8px 8px 0',
                cursor: 'pointer',
                fontWeight: '600',
              }}
            >
              Buscar
            </button>
          </div>

          {/* Chamada extra */}
          <button
            style={{
              background: '#003366',
              color: '#fff',
              border: 'none',
              padding: '0.9rem 2rem',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600',
            }}
            onClick={() => (window.location.href = '/properties')}
          >
            Ver terrenos disponíveis
          </button>
        </section>

        {/* Seção de destaque */}
        <section style={{ padding: '4rem 2rem', background: '#ffffff' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h3
              style={{
                textAlign: 'center',
                color: '#003366',
                fontSize: '2rem',
                marginBottom: '2rem',
              }}
            >
              Terrenos em destaque
            </h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem',
              }}
            >
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  style={{
                    border: '1px solid #eee',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                  }}
                >
                  <img
                    src={`https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=900&q=60`}
                    alt="Terreno"
                    style={{ width: '100%', height: '220px', objectFit: 'cover' }}
                  />
                  <div style={{ padding: '1.2rem' }}>
                    <h4 style={{ color: '#003366', marginBottom: '0.5rem' }}>
                      Terreno nº {item}
                    </h4>
                    <p style={{ color: '#666' }}>Parcelas a partir de $129/mês</p>
                    <button
                      style={{
                        background: '#55cc44',
                        color: '#fff',
                        border: 'none',
                        padding: '0.6rem 1.2rem',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontWeight: '600',
                        marginTop: '0.8rem',
                      }}
                    >
                      Ver Detalhes
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section
          style={{
            padding: '4rem 2rem',
            background: 'linear-gradient(180deg, #f5f7fa 0%, #ffffff 100%)',
          }}
        >
          <h3
            style={{
              textAlign: 'center',
              color: '#003366',
              fontSize: '2rem',
              marginBottom: '3rem',
            }}
          >
            Por que escolher a Kanbuy.estate?
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              maxWidth: '1200px',
              margin: '0 auto',
            }}
          >
            {[
              {
                title: 'Financiamento direto',
                text: 'Sem burocracia bancária, direto com o vendedor.',
              },
              {
                title: 'Compra 100% online',
                text: 'Escolha seu terreno, assine o contrato digitalmente e comece hoje.',
              },
              {
                title: 'Terrenos selecionados',
                text: 'Curadoria profissional com foco em liquidez e valorização.',
              },
            ].map((b, idx) => (
              <div
                key={idx}
                style={{
                  textAlign: 'center',
                  padding: '2rem',
                  border: '1px solid #e6e6e6',
                  borderRadius: '8px',
                  background: '#fff',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                }}
              >
                <h4 style={{ color: '#003366', marginBottom: '0.5rem' }}>{b.title}</h4>
                <p style={{ color: '#555' }}>{b.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer
        style={{
          background: '#003366',
          color: '#fff',
          textAlign: 'center',
          padding: '2rem 1rem',
          fontSize: '0.9rem',
          marginTop: '3rem',
        }}
      >
        <p>© {new Date().getFullYear()} Kanbuy.estate — Todos os direitos reservados.</p>
        <p>
          Desenvolvido com 💚 em parceria com Galaxy AI.
        </p>
      </footer>
    </>
  );
}
