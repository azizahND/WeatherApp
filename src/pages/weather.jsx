import React, { useState } from 'react';
import Input from '../components/Input';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [current, setCurrent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiKey = 'beda759a57a2e8e955a3a94e17c8efd3';
  const proxyUrl = 'https://api.allorigins.win/raw?url=';
  const apiUrl = (city) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const fetchWeather = async () => {
    if (!city) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(proxyUrl + encodeURIComponent(apiUrl(city)));
      const data = await res.json();

      if (data.cod !== 200) {
        setError(data.message);
        setLoading(false);
        return;
      }

      setCurrent(data.main);
      setLoading(false);
    } catch (err) {
      console.error('Gagal mengambil data cuaca:', err);
      setError('Gagal mengambil data cuaca');
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      fetchWeather();
    }
  };

  return (
    <div
      style={{
        padding: '6rem',
        maxWidth: '500px',
        margin: '0 auto',
        fontFamily: 'Arial, sans-serif',
        border: '2px solid #007BFF',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        paddingTop: '5rem',
        marginTop: '18rem',
      }}
    >
      <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '1rem' }}>
        Cek Cuaca
      </h2>

      <Input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyPress}
        style={{
          marginBottom: '1rem',
        }}
      />

      <button
        onClick={fetchWeather}
        style={{
          padding: '10px 16px',
          backgroundColor: '#007BFF',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          width: '100%',
        }}
      >
        Lihat
      </button>

      {loading && <p style={{ marginTop: '1rem' }}>Loading...</p>}

      {error && <p style={{ marginTop: '1rem', color: 'red' }}>{error}</p>}

      {current && !loading && !error && (
        <div style={{ marginTop: '1.5rem', borderTop: '1px solid #ccc', paddingTop: '1rem' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '500' }}>Cuaca di {city}</h3>
          <p><strong>Suhu:</strong> {current.temp} °C</p>
          <p><strong>Kelembapan:</strong> {current.humidity} %</p>
          <p><strong>Tekanan:</strong> {current.pressure} hPa</p>
        </div>
      )}

      {city && !current && !loading && !error && (
        <p style={{ marginTop: '1rem', color: 'gray' }}>
          Data cuaca untuk kota "{city}" tidak ditemukan. Silakan coba lagi.
        </p>
      )}
    </div>
  );
};

export default WeatherApp;
