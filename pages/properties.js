import Link from 'next/link';

export default function PropertiesPage() {
  const properties = [
    { id: 1, name: 'Lote em Lake County, FL', price: 7499, parcela: 159 },
    { id: 2, name: 'Terreno em Cochise County, AZ', price: 5800, parcela: 129 },
    { id: 3, name: 'Área em Hudspeth County, TX', price: 9200, parcela: 189 },
  ];

  return (
    <main style={{ padding:'4rem 2rem', fontFamily:'sans-serif', background:'#f7f9fb' }}>
      <h1 style={{ textAlign:'center', color:'#003366', marginBottom:'2rem' }}>Propriedades Disponíveis</h1>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'2rem', maxWidth:'1080px', margin:'auto' }}>
        {properties.map(p => (
          <div key={p.id} style={{ background:'#fff', borderRadius:'10px', boxShadow:'0 3px 8px rgba(0,0,0,0.08)', padding:'1.5rem' }}>
            <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=60" alt={p.name} style={{ borderRadius:'6px', marginBottom:'1rem' }}/>
            <h3>{p.name}</h3>
            <p style={{ color:'#555' }}>Preço à vista: ${p.price.toLocaleString()}</p>
            <p style={{ color:'#55cc44', fontWeight:'600' }}>Parcelas de ${p.parcela}/mês</p>
            <Link href={`/property/${p.id}`}>
              <button style={{ marginTop:'1rem', background:'#003366', color:'#fff', border:'none', borderRadius:'6px', padding:'0.6rem 1rem', cursor:'pointer' }}>Ver detalhes</button>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
