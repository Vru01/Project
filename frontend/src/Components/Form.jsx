import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Form() {
  const [N, setN] = useState('');
  const [P, setP] = useState('');
  const [K, setK] = useState('');
  const [temperature, setTemperature] = useState('');
  const [humidity, setHumidity] = useState('');
  const [ph, setPH] = useState('');
  const [rainfall, setRainfall] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/getcrop', {
        N: N,
        P: P,
        K: K,
        temperature: temperature,
        humidity: humidity,
        ph: ph,
        rainfall: rainfall
      });
      localStorage.setItem('cropName', response.data);
      navigate('/result');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="form">
      <h1>Crop Predictor</h1>
      <form onSubmit={handleSubmit}>
        <div className="field-wrap">
          <input
            placeholder="Nitrogen (N) - kg/ha"
            type="text"
            required
            autoComplete="off"
            value={N}
            onChange={(e) => setN(e.target.value)}
          />
        </div>

        <div className="field-wrap">
          <input
            placeholder="Phosphorous (P) - kg/ha *"
            type="text"
            required
            autoComplete="off"
            value={P}
            onChange={(e) => setP(e.target.value)}
          />
        </div>

        <div className="field-wrap">
          <input
            placeholder="Pottasium (K) - kg/ha *"
            type="text"
            required
            autoComplete="off"
            value={K}
            onChange={(e) => setK(e.target.value)}
          />
        </div>

        <div className="field-wrap">
          <input
            placeholder="Temperature - °C *"
            type="text"
            required
            autoComplete="off"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
          />
        </div>

        <div className="field-wrap">
          <input
            placeholder="Humidity - % *"
            type="text"
            required
            autoComplete="off"
            value={humidity}
            onChange={(e) => setHumidity(e.target.value)}
          />
        </div>

        <div className="field-wrap">
          <input
            placeholder="pH *"
            type="text"
            required
            autoComplete="off"
            value={ph}
            onChange={(e) => setPH(e.target.value)}
          />
        </div>

        <div className="field-wrap">
          <input
            placeholder="Rainfall - mm *"
            type="text"
            required
            autoComplete="off"
            value={rainfall}
            onChange={(e) => setRainfall(e.target.value)}
          />
        </div>

        <button type="submit" className="button button-block">
          Get Prediction
        </button>
      </form>
    </div>
  );
}
