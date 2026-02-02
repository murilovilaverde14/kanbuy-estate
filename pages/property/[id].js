import { useRouter } from 'next/router';
export default function PropertyDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#003366' }}>Detalhes da Propriedade</h1>
      <p><strong>ID:</strong> {id}</p>
      <p style={{ color: '#555' }}>
        Informações detalhadas do terreno aparecerão aqui assim que a base de dados for integrada.
      </p>
    </main>
  );
}
