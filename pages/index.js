import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Kanbuy.estate — Find Land You Love</title>
        <meta name="description" content="Discover and buy land across the U.S. with owner financing through Kanbuy.estate." />
      </Head>

      <header style={{
        display:'flex',justifyContent:'space-between',alignItems:'center',
        padding:'1rem 2rem',background:'#fff',borderBottom:'1px solid #eee',position:'sticky',top:0,zIndex:1000
      }}>
        <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
          <img src="/logo.png" alt="Kanbuy Logo" style={{height:'45px'}}/>
          <nav style={{display:'flex',gap:'1.5rem',fontWeight:'600'}}>
            {['Home','Properties','Financing','About','Contact'].map((item)=>(
              <Link key={item} href={`/${item.toLowerCase()}`}>{item}</Link>
            ))}
          </nav>
        </div>
      </header>

      <main style={{fontFamily:'Inter, sans-serif', color:'#003366'}}>
        {/* HERO SECTION */}
        <section
          style={{
            position:'relative',
            backgroundImage:'url(https://images.unsplash.com/photo-1526413232574-04696c1372ed?auto=format&fit=crop&w=2000&q=60)',
            backgroundSize:'cover',
            backgroundPosition:'center',
            padding:'10rem 2rem',
            textAlign:'center',
            color:'#fff',
          }}
        >
          <div style={{
            position:'absolute',top:0,left:0,right:0,bottom:0,
            background:'rgba(0,0,0,0.4)',zIndex:1
          }}></div>
          <div style={{position:'relative',zIndex:2}}>
            <h1 style={{fontSize:'3rem',fontWeight:'700',marginBottom:'1rem'}}>Find Land You Love</h1>
            <p style={{fontSize:'1.2rem',maxWidth:'600px',margin:'0 auto 2rem'}}>
              Search thousands of lots available with easy monthly payments.
            </p>
            <div>
              <input type="text" placeholder="Search by state, county or ZIP..." 
                style={{padding:'0.9rem',width:'300px',borderRadius:'5px',border:'none',marginRight:'8px'}}/>
              <Link href="/properties">
                <button style={{
                  padding:'0.9rem 1.6rem',background:'#55cc44',color:'#003366',
                  fontWeight:'600',border:'none',borderRadius:'6px',cursor:'pointer'
                }}>Search</button>
              </Link>
            </div>
          </div>
        </section>

        {/* LAND LISTINGS */}
        <section style={{padding:'5rem 2rem',background:'#f7f9fb'}}>
          <h2 style={{textAlign:'center',fontSize:'2rem',marginBottom:'3rem',color:'#003366'}}>Featured Land Listings</h2>
          <div style={{
            display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',
            gap:'2rem',maxWidth:'1080px',margin:'auto'
          }}>
            {[1,2,3,4,5,6].map((i)=>(
              <div key={i} style={{
                background:'#fff',borderRadius:'10px',boxShadow:'0 4px 8px rgba(0,0,0,0.08)',overflow:'hidden'
              }}>
                <img src={`https://images.unsplash.com/photo-${1553551021+i*2}-accb4d9d2a9f?auto=format&fit=crop&w=800&q=60`}
                  alt={`Land ${i}`} style={{width:'100%',height:'220px',objectFit:'cover'}}/>
                <div style={{padding:'1.5rem'}}>
                  <h3>Lot #{i} - Cochise County, AZ</h3>
                  <p style={{color:'#555'}}>Starting from <strong>$129/month</strong></p>
                  <Link href={`/property/${i}`}>
                    <button style={{
                      marginTop:'1rem',background:'#003366',color:'#fff',border:'none',
                      borderRadius:'6px',padding:'0.6rem 1.2rem',cursor:'pointer'
                    }}>View Lot</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{background:'#003366',color:'#fff',textAlign:'center',padding:'4rem 2rem'}}>
          <h2 style={{fontSize:'2rem',marginBottom:'1rem'}}>Ready to Own Land?</h2>
          <p style={{marginBottom:'1.5rem'}}>View our full inventory and find your next investment opportunity.</p>
          <Link href="/properties">
            <button style={{
              background:'#55cc44',color:'#003366',border:'none',borderRadius:'6px',
              padding:'1rem 2rem',fontWeight:'600',cursor:'pointer'
            }}>Explore Properties</button>
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
