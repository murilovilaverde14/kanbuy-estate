import { useState } from 'react';

export default function FinancingSimulator() {
  const [entrada, setEntrada] = useState(1000);
  const [meses, setMeses] = useState(48);
  const preco = 7500;
  const saldo = preco - entrada;
  const parcela = Math.round(saldo / meses);

  return (
    <div style={{ marginTop:'2rem', padding:'1.5rem', border:'1px solid #ddd', borderRadius:'8px', maxWidth:'400px' }}>
      <h3 style={{ color:'#003366', marginBottom:'1rem' }}>Simulador de Financiamento</h3>
      <label>Entrada (USD): </label>
      <input type="number" value={entrada} onChange={(e)=>setEntrada(e.target.value)} style={{ width:'100%', padding:'0.5rem', marginBottom:'1rem' }}/>
      <label>Prazo (meses): </label>
      <select value={meses} onChange={(e)=>setMeses(e.target.value)} style={{ width:'100%', padding:'0.5rem', marginBottom:'1rem' }}>
        <option value="36">36 meses</option>
        <option value="48">48 meses</option>
        <option value="60">60 meses</option>
      </select>
      <p style={{ color:'#003366', fontWeight:'600' }}>Parcela estimada: ${parcela}/mês</p>
    </div>
  );
}
