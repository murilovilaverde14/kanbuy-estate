import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Kanbuy.estate — Find Land You Love</title>
        <meta name='description' content='Discover land for sale across the U.S. with easy owner financing through Kanbuy.estate.' />
      </Head>

      <header style={{
        display:'flex',justifyContent:'space-between',alignItems:'center',
        padding:'1.2rem 2rem',background:'#fff',borderBottom:'1px solid #eee',
        position:'sticky',top:0,zIndex:999
      }}>
        <div style={{display:'flex',alignItems:'center',gap:'1rem'}}>
          <img src='/logo.png' alt='Kanbuy Logo' style={{height:'48px'}} />
          <nav style={{display:'flex',gap:'1.5rem',fontWeight:'600',color:'#003366'}}>
            {['Home','Properties','Financing','About','Contact'].map(n=>(
              <Link key={n} href={`/${n.toLowerCase()}`}>{n}</Link>
            ))}
          </nav>
        </div>
      </header>

      <main style={{fontFamily:'Inter, sans-serif',color:'#003366'}}>
        <section style={{
          position:'relative',
          backgroundImage:'url(https://images.unsplash.com/photo-1526413232574-04696c1372ed?auto=format&fit=crop&w=2000&q=60)',
          backgroundSize:'cover',
          backgroundPosition:'center',
          padding:'10rem 2rem',
          textAlign:'center',
          color:'#fff'
        }}>
          <div style={{
            position:'absolute',top:0,left:0,right:0,bottom:0,
            background:'rgba(0,0,0,0.5)',zIndex:1
          }}></div>
          <div style={{position:'relative',zIndex:2}}>
            <h1 style={{fontSize:'3rem',fontWeight:'700',marginBottom:'1rem'}}>Find Land You Love</h1>
            <p style={{maxWidth:'600px',margin:'0 auto 2rem',fontSize:'1.1rem'}}>
              Browse rural lots and acreage with flexible payment options.
            </p>
            <input type='text' placeholder='Search by state, county or ZIP...'
              style={{padding:'0.8rem 1rem',width:'300px',borderRadius:'6px',border:'none'}} />
            <Link href='/properties'>
              <button style={{
                padding:'0.85rem 1.6rem',marginLeft:'8px',background:'#55cc44',
                border:'none',borderRadius:'6px',color:'#003366',fontWeight:'600'
              }}>Search</button>
            </Link>
          </div>
        </section>

        <section style={{padding:'5rem 2rem',background:'#f7f9fb'}}>
          <h2 style={{textAlign:'center',fontSize:'2rem',marginBottom:'2rem'}}>Featured Land Listings</h2>
          <div style={{
            display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',
            gap:'2rem',maxWidth:'1080px',margin:'auto'
          }}>
            {[1,2,3,4,5,6].map(i=>(
              <div key={i} style={{
                background:'#fff',borderRadius:'10px',boxShadow:'0 4px 10px rgba(0,0,0,0.08)',
                overflow:'hidden'
              }}>
                <img src='https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60'
                     alt='Land' style={{width:'100%',height:'220px',objectFit:'cover'}} />
                <div style={{padding:'1.5rem'}}>
                  <h3>Lot #{i} — Arizona</h3>
                  <p>Starting at <strong>$129/month</strong></p>
                  <Link href={`/property/${i}`}>
                    <button style={{
                      marginTop:'1rem',background:'#003366',color:'#fff',
                      border:'none',borderRadius:'6px',padding:'0.6rem 1.2rem',cursor:'pointer'
                    }}>View Lot</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{background:'#003366',color:'#fff',textAlign:'center',padding:'4rem 2rem'}}>
          <h2>Looking to purchase rural land?</h2>
          <p style={{color:'#e5f1ff',marginBottom:'1.5rem'}}>View properties with flexible owner financing.</p>
          <Link href='/properties'>
            <button style={{
              background:'#55cc44',color:'#003366',border:'none',borderRadius:'6px',
              padding:'1rem 2rem',fontWeight:'600'
            }}>Explore Listings</button>
          </Link>
        </section>

        <footer style={{
          textAlign:'center',padding:'1rem',background:'#f6f8fa',color:'#555',fontSize:'.9rem'
        }}>
          © {new Date().getFullYear()} Kanbuy.estate — Land made simple.
        </footer>
      </main>
    </>
  );
}
