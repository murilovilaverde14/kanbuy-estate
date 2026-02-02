import { useRouter } from 'next/router';

export default function PropertyDetail() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <main style={{fontFamily:'Inter,sans-serif',padding:'4rem 2rem'}}>
      <h1 style={{color:'#003366',marginBottom:'1rem'}}>Property #{id}</h1>
      <img src='https://images.unsplash.com/photo-1505691723518-36a3f9386933?auto=format&fit=crop&w=1000&q=60'
           alt='Land Image' style={{borderRadius:'8px',marginBottom:'2rem',maxWidth:'900px',width:'100%'}}/>
      <p>This property is available for purchase via owner financing. Reach out to our team for more details.</p>
      <ul style={{lineHeight:'1.8',marginTop:'1rem',color:'#555'}}>
        <li>Location: United States</li>
        <li>Parcel ID: {id}</li>
        <li>Owner Financing: from $149/month</li>
      </ul>
    </main>
  );
}
