import Menu from '../components/menu'
import Rodape from '../components/rodape'
import './css/home.css'
import drill from './card images/drill.png'
import jersey from './card images/jersey.png'
import detroid from './card images/detroid.png'

function Home() {
    return (
      <>
      <Menu/>

      <div className="body container-fluid d-flex flex-column" style={{ minHeight: '100vh' }}>
        <div className="row h-100">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={drill} className="card-img-top" alt="Pop smoke, artista de drill" />
              <div className="card-body">
                <h5 className="card-title">Drill</h5>
                <p className="card-text">O drill é um gênero musical originário do sul de Chicago no final da década de 2000, caracterizado por letras sombrias e violentas, além de batidas sinistras influenciadas pelo Trap. Ele alcançou o mainstream nos Estados Unidos por volta de 2012, impulsionado pelo sucesso de artistas como Young Chop, Chief Keef, King Von, Lil Durk, Fredo Santana e Lil Reese. O drill também deu origem a um subgênero no Reino Unido, especialmente em Londres, a partir de 2012, que se destacou na cena musical global.

                O drill do Reino Unido ganhou notoriedade na década de 2010 e influenciou outras cenas regionais ao redor do mundo. O texto destaca a associação do gênero com conteúdo lírico relacionado ao crime em Chicago e menciona sua expansão para cenas musicais em vários países, incluindo Austrália, Brasil, França, Espanha, Irlanda, Itália, Holanda e Nova York.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={jersey} className="card-img-top" alt="IshowSpedd artista de jersey club" />
              <div className="card-body">
                <h5 className="card-title">Jersey</h5>
                <p className="card-text">O Jersey Club é um vibrante gênero musical e estilo de dança originário de Newark, Nova Jersey, que ganhou destaque nas últimas décadas. Caracterizado por batidas aceleradas, samples distintos e ritmos pulsantes, o Jersey Club é uma fusão única de influências que incluem house, hip-hop e música eletrônica. Suas batidas repetitivas, muitas vezes em torno de 130 a 140 BPM, proporcionam uma experiência energética e cativante para os ouvintes.

                Os padrões de percussão distintos, conhecidos como "breakbeats", são uma marca registrada do Jersey Club, e suas músicas frequentemente apresentam remixes criativos de faixas populares. Além de ser um gênero musical, o Jersey Club está intrinsecamente ligado a um estilo de dança único, com movimentos rápidos dos pés e uso intenso de sample vocal. DJs e produtores notáveis desse cenário têm contribuído para a evolução contínua do Jersey Club, tornando-o uma expressão vibrante da cultura musical urbana e da cena de dança.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={detroid} className="card-img-top" alt="Eminem rapper com alguns trabalhos faixas de Detroit" />
              <div className="card-body">
                <h5 className="card-title">Detroit</h5>
                <p className="card-text">O estilo musical de Detroit é uma rica tapeçaria sonora que reflete a diversidade cultural e a influência histórica dessa cidade icônica nos Estados Unidos. Emergindo como um importante centro de produção musical, Detroit foi fundamental para o desenvolvimento de gêneros como o Motown, com sua característica soul e R&B, liderado por artistas como Stevie Wonder e Marvin Gaye.

                Além disso, Detroit é conhecida como o berço da música eletrônica, com a ascensão de gêneros como Techno e House nas décadas de 1980 e 1990. Artistas como Juan Atkins, Derrick May e Kevin Saunderson foram pioneiros nesse movimento, deixando um impacto duradouro na cena eletrônica global.
                
                O estilo musical de Detroit não se limita apenas a esses gêneros, abraçando uma variedade de influências que vão do rock ao hip-hop. A cidade continua a ser um viveiro criativo para músicos inovadores que contribuem para a evolução constante da paisagem musical americana.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-grow-1"></div>

        <Rodape/>
      </div>
      </>
    )
}

export default Home
