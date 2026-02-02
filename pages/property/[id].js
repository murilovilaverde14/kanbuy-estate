import { useRouter } from 'next/router';

export default function PropertyDetail() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <main style={{fontFamily:'Inter, sans-serif',padding:'4rem 2rem'}}>
      <img src="https://images.unsplash.com/photo-1505691723518-36a3f9386933?auto=format&fit=crop&w=1000&q=60"
           alt="Lot" style={{width:'100%',borderRadius:'10px',marginBottom:'2rem'}}/>
      <h1 style={{color:'#003366'}}>Property #{id}</h1>
      <p>This property is available for purchase via owner financing.</p>
      <ul style={{color:'#555',marginTop:'1rem',lineHeight:'1.6'}}>
        <li>Location: Rural County, USA</li>
        <li>Size: 1.25 acres</li>
        <li>Terms: 60 months, $159/month</li>
      </ul>
    </main>
  );
}
