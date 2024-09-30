import { ArrowDown, ArrowUp } from 'phosphor-react'
import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import sunnyWithClouds from "/public/img/sunny-with-clouds.png"

const apiUrl = (city) => {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9aeec46714c85f0982712bf766189463&units=metric&&lang=pt`
}

const getData = async (city) => {
  const response = await axios.get(apiUrl(city))
  return response.data;
}

function App() {

  const data = new Date();
  const hours = data.getHours();
  const minutes = data.getMinutes();
  const timeOfDay = getTimeOfDay();

  const [allData, setAllData] = useState(null)

  useEffect(() => {

    const fetchData = async () => {
      const data = await getData('recife,BR');
      setAllData(data);
    };

    fetchData();
  }, []);

  function getTimeOfDay() {
    const hours = new Date().getHours();

    if (hours >= 6 && hours < 12) {
      return 'morning';
    } else if (hours >= 12 && hours < 18) {
      return 'afternoon';
    } else {
      return 'night';
    }
  }

  console.log(allData)
  return (

    <main className={timeOfDay}>
      <div className='container'>
        <nav> <p>{allData ? `Cidade: ${allData.name}` : 'Carregando...'}</p></nav>
        <div className='container-content'>
          <div className='wheather-card'>
            <h2>AGORA</h2>
            <div className='temp-info'>
              <div className='max-min-temp'>
                <p>Máx: {allData ? `${Math.floor(allData.main.temp_max)}ºC` : 'Carregando...'}</p>
                <p>Min: {allData ? `${Math.floor(allData.main.temp_min)}ºC` : 'Carregando...'}</p>
              </div>
              <img src={sunnyWithClouds} alt="" />
            </div>
            <p>Sençação térmica {allData ? `${Math.floor(allData.main.feels_like)}ºC` : 'Carregando...'}</p>
          </div>

          <div className="wheater-info">
            <div className="info-title">
              <p>Informações Climáticas</p>
            </div>
            <div className="info-lines">
              <div className="info-category">
                <p>Temperatura</p>
                <p>Umidade</p>
                <p>Luminosidade</p>
                <p>Pressão</p>
                <p>Altitude</p>
                <p>Pluviometria</p>
              </div>
              <div className="info-values">
                <p><ArrowDown size={16} style={{ color: 'blue' }} />{allData ? `${Math.floor(allData.main.temp_min)}º` : 'Carregando...'}</p>
                <p><ArrowDown size={16} style={{ color: 'blue' }} />50%</p>
                <p><ArrowDown size={16} style={{ color: 'blue' }} />50</p>
                <p>1015 hPa</p>
                <p>10 m</p>
                <p>8mm</p>
              </div>
              <div className="info-values">
                <p><ArrowUp size={16} style={{ color: 'red' }} />{allData ? `${Math.floor(allData.main.temp_max)}º` : 'Carregando...'}</p>
                <p><ArrowUp size={16} style={{ color: 'red' }} />292%</p>
                <p><ArrowUp size={16} style={{ color: 'red' }} />2100</p>
                <p>1011 hPa</p>
                <p>-</p>
                <p>90%</p>
              </div>
            </div>
          </div>
        </div>
        <div className='container-cards'>
          <div className='card'>
            <p>Velocidade do Vento</p>
            <p>{allData ? `${allData.wind.speed} m/s` : 'Carregando...'}</p>
          </div>
          <div className='card'>
            <p>Ditância para o Aeroporto</p>
            <p>14,2km</p>
          </div>
          <div className='card'>
            <p>Nascer do Sol</p>
            <p>{allData ? new Date(allData.sys.sunrise * 1000).toLocaleTimeString() : 'Carregando...'}</p>
          </div>
          <div className='card'>
            <p>Por do Sol</p>
            <p>{allData ? new Date(allData.sys.sunset * 1000).toLocaleTimeString() : 'Carregando...'}</p>
          </div>
          <div className='card'>
            <p>Horário</p>
            <p>{`${hours}:${String(minutes).padStart(2, '0')}`}</p>
          </div>
        </div>
        <footer>footer</footer>
      </div>
    </main>

  )
}

export default App
