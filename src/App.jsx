import { ArrowDown, ArrowUp } from 'phosphor-react'
import './App.css'

function App() {

  return (
    <main>
      <nav> <p>00/00 - Recife - Pernambuco</p></nav>
      <div className='container-content'>
        <div className='wheather-card'>
          <h2>AGORA</h2>
          <div className='temp-info'>
            <div className='max-min-temp'>
              <p> Máx: 30º</p>
              <p>Min: 29º</p>
            </div>
            <img src="/public/img/sunny-with-clouds.png" alt="" />
          </div>
          <p>Sensação térmica: 34ºC</p>
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
          <p><ArrowDown size={16} style={{color:'blue'}}/>24°</p>
          <p><ArrowDown size={16} style={{color:'blue'}}/>50%</p>
          <p><ArrowDown size={16} style={{color:'blue'}}/>50</p>
          <p>1015 hPa</p>
          <p>10 m</p>
          <p>8mm</p>
        </div>
        <div className="info-values">
          <p><ArrowUp size={16} style={{color:'red'}}/>29°</p>
          <p><ArrowUp size={16} style={{color:'red'}}/>292%</p>
          <p><ArrowUp size={16} style={{color:'red'}}/>2100</p>
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
          <p>6.17m/s</p>
        </div>
        <div className='card'>
          <p>Ditância para o Aeroporto</p>
          <p>14,2km</p>
        </div>
        <div className='card'>
          <p>Nascer do Sol</p>
          <p>4:50</p>
        </div>
        <div className='card'>
          <p>Por do Sol</p>
          <p>17:20</p>
        </div>
        <div className='card'>
          <p>Horário</p>
          <p>13:20</p>
        </div>
      </div>
      <footer>footer</footer>
    </main>
  )
}

export default App
