import Menu from '../components/menu'
import Rodape from '../components/rodape'
import './css/sobre.css'

function Sobre() {
    return (
      <>
        <Menu/>

          <div className="container d-flex flex-column justify-content-center align-items-center">

            <h1> Sobre mim</h1>
            <h3> Sou amante de tecnologia e música boa, quis passar uma <br /> breve <span className='span'>explicação sobre alguns estilos musicais que sou fã</span> </h3>

          </div>

        <Rodape/>

      </>
    )
  }
  
  export default Sobre