import { useState } from 'react';
import './App.css';
import { fetchWeatherData } from './utils/WeatherAPI';
import WeatherCard, { WeatherData } from './components/WeatherCard';

function App() {
  const [city, setCity] = useState('');
  const [apiData, setApiData] = useState<WeatherData>();

  async function submitHandler(e: React.FormEvent) {
    e.preventDefault();
    if (city != '') {
      const data = await fetchWeatherData(city);
      setApiData(data);
    }
  }

  return (
    <>
      <div className='app'>
        <h1>Weather App ⛅</h1>

        <div className='search-bar'>
          <form onSubmit={submitHandler}>
            <input
              type='text'
              placeholder='Enter city...'
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button type='submit'>Search</button>
          </form>
        </div>
        {apiData && <WeatherCard data={apiData} />}
      </div>
    </>
  );
}

export default App;
