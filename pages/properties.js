import Link from 'next/link';

export default function PropertiesPage() {
  const listings = [
    { id: 101, name: 'Lot — Apache County, AZ', price: 7200, parcel: 139 },
    { id: 102, name: 'Rural Land — Polk County, FL', price: 8800, parcel: 169 },
    { id: 103, name: 'Desert Lot — Hudspeth County, TX', price: 6600, parcel: 125 },
    { id: 104, name: 'Forest Plot — Columbia County, GA', price: 9450, parcel: 179 },
  ];

  return (
    <main style={{padding:'5rem 2rem',fontFamily:'Inter, sans-serif',background:'#fff'}}>
      <h1 style={{textAlign:'center',color:'#003366',marginBottom:'2rem'}}>Available Properties</h1>
      <div style={{
        display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',
        gap:'2rem',maxWidth:'1080px',margin:'auto'
      }}>
        {listings.map((p) => (
          <div key={p.id} style={{
            background:'#f7f9fb',borderRadius:'10px',padding:'1.5rem',
            boxShadow:'0 3px 8px rgba(0,0,0,0.08)'
          }}>
            <img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=900&q=60"
                 alt={p.name} style={{borderRadius:'6px',marginBottom:'1rem'}}/>
            <h3>{p.name}</h3>
            <p>Cash Price: ${p.price.toLocaleString()}</p>
            <p style={{color:'#55cc44',fontWeight:'600'}}>Owner Financing: ${p.parcel}/month</p>
            <Link href={`/property/${p.id}`}>
              <button style={{
                background:'#003366',color:'#fff',border:'none',borderRadius:'6px',
                padding:'.6rem 1rem',cursor:'pointer',marginTop:'1rem'
              }}>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
