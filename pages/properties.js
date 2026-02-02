import Link from 'next/link';

export default function PropertiesPage() {
  const listings = [
    {id:1, title:'Rural Lot — Lake County, FL', price:6999, payment:139},
    {id:2, title:'Desert Plot — Cochise County, AZ', price:7499, payment:149},
    {id:3, title:'Wooded Acre — Columbia County, GA', price:9200, payment:189},
    {id:4, title:'Open Land — Hudspeth County, TX', price:6900, payment:129},
  ];

  return (
    <main style={{padding:'5rem 2rem',fontFamily:'Inter,sans-serif'}}>
      <h1 style={{textAlign:'center',color:'#003366',marginBottom:'2rem'}}>Available Properties</h1>
      <div style={{
        display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',
        gap:'2rem',maxWidth:'1080px',margin:'auto'
      }}>
        {listings.map(l=>(
          <div key={l.id} style={{
            background:'#fff',borderRadius:'10px',boxShadow:'0 3px 8px rgba(0,0,0,0.1)',padding:'1.5rem'
          }}>
            <img src='https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1000&q=60'
                 alt={l.title} style={{borderRadius:'6px',marginBottom:'1rem'}}/>
            <h3>{l.title}</h3>
            <p>Cash Price: ${l.price.toLocaleString()}</p>
            <p style={{color:'#55cc44',fontWeight:'600'}}>Owner Financing: ${l.payment}/month</p>
            <Link href={`/property/${l.id}`}>
              <button style={{
                marginTop:'1rem',background:'#003366',color:'#fff',border:'none',
                borderRadius:'6px',padding:'.6rem 1rem',cursor:'pointer'
              }}>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
