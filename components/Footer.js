export default function Footer(){
  return (
    <footer
      style={{
        textAlign:'center',
        padding:'1rem',
        background:'#f6f8fa',
        color:'#555',
        fontSize:'.9rem'
      }}
    >
      © {new Date().getFullYear()} Kanbuy.estate — Land made simple.
    </footer>
  );
}
