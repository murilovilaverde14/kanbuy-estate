export default function Header() {
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.2rem 2rem',
        background: '#fff',
        borderBottom: '1px solid #eee',
        position: 'sticky',
        top: 0,
        zIndex: 999,
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
      }}
    >
      <a href="/">
        <img src="/logo.png" alt="Kanbuy Logo" style={{ height: '48px', cursor: 'pointer' }}/>
      </a>
      <nav style={{ display: 'flex', gap: '1.5rem', fontWeight: '600', color: '#003366' }}>
        {['Home','Properties','Financing','About','Contact'].map(n=>(
          <a key={n} href={`/${n==='Home'?'':n.toLowerCase()}`} style={{ textDecoration:'none', color:'#003366' }}>{n}</a>
        ))}
      </nav>
    </header>
  );
}
