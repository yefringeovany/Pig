import React, { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [timestamp, setTimestamp] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Obtener el estado inicial
  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL)
      .then(res => res.json())
      .then(data => {
        setCount(data.count);
        setTimestamp(data.timestamp);
        setLoading(false);
      })
      .catch(() => {
        setError('No se pudo obtener el estado del backend');
        setLoading(false);
      });
  }, []);

  // Manejar clic en el botón
  const handleClick = () => {
    fetch(`${import.meta.env.VITE_API_URL}/increment`, { method: 'POST' })
      .then(res => res.json())
      .then(data => {
        setCount(data.count);
        setTimestamp(data.timestamp);
      })
      .catch(() => setError('No se pudo registrar el clic'));
  };

  if (loading) return <div>Cargando...</div>;
  if (error) return <div style={{color: 'red'}}>{error}</div>;

  return (
    <div style={{textAlign: 'center', marginTop: '3rem'}}>
      <h1>Contador de Clics</h1>
      <p>Cantidad de clics: <b>{count}</b></p>
      <p>Último clic: <b>{timestamp ? new Date(timestamp).toLocaleString() : '-'}</b></p>
      <button onClick={handleClick} style={{fontSize: '1.2rem', padding: '0.5rem 2rem'}}>¡Clic!</button>
    </div>
  );
}

export default App;
