import React from 'react';
import{Link} from 'react-router-dom';
import servicosuteis from '../../assets/servicosuteis.png'

import './styles.css';

function Servicos() {
    return(
      <section className='section-embaixadas'>
        <div className='div-imagem-embaixada'>
          <h2>Segue alguns links de embaixadas e consulados que podem ajudar você durante sua estadia no Brasil:</h2>
          <img className='imagem-embaixada' src={servicosuteis} alt='imagem de embaixada'></img>

        </div>

        <div className='sobre-links'>
          <div>
            <div className='conteudo-links'>
              <h2>Embaixadas e consolados</h2>
              <Link link='http://www.embaixadadeangola.com.br/'>Angola</Link>
              <Link link=' https://consuladoangolarj.org/'>Angola</Link>
              <Link link='http://consuladogeraldeangolasp.net/'>Angola</Link>
              <Link link='http://www.embcv.org.br/portal/embaixada/'>Cabo Verde</Link>
              <Link link='https://www.embaixadas.net/Consulado/'>Cabo Verde</Link>
              <Link link='https://www.embaixadas.net/'>Guiné-Bissau</Link>
              <Link link=' https://consulados.com.br/'>Guiné-Bissau</Link>
              <Link link='https://www.embaixadas.net/Consulado'>Moçambique</Link>
              <Link link='http://www.mozambique.org.br/'>Moçambique</Link>
            </div>
            <div>
              <h2>Emergências</h2>
              <p>No Brasil,os números de emergência são os mesmos para todas as regiões e as chamadas são encaminhadas para a localidade que você está.Segue alguns números:</p>
            </div>
            <div className='sobre-numeros'>
              <p>Corpo de Bombeiros <span>-193</span></p>
              <p>Policia Militar  <span>-190</span></p>
              <p>Policia Rodiviária Federal <span>-191</span></p>
              <p>Policia Rodoviária Estadual <span>-198</span></p>
              <p> Defesa Civíl<span>-199</span></p>
              <p> Serviço de Atendimento Móvel de Urgência - SAMU (pronto-socorro) <span>-192</span></p>
              <p>Central de Atendimento à Mulher no Brasil<span>-180</span></p>
              <p> Correios - Nacional <span>-0800-725-7282</span></p>
              <p>Correios - (sugestões, elogios e reclamações)<span>-0800-725-0100</span></p>
              <p> Direitos Humanos <span> -100</span></p>
              <p>Disque-Defensorias Públicas  <span>-129</span></p>
              <p>Ouvidoria do Ministério Público <span>-127</span></p>
              <p>Procon- atendimento ao consumidor <span>-151</span></p>
              <p> Receita Federal (Receita Fone) <span>-146</span></p>
            </div>
          </div >
                    
          <div className='orgoas-publicos'>
            <div>
              <h2>Órgãos públicos</h2>
              <p>Você pode tratar assuntos de CPF e vistos na Receita e na Polícia Federal. Procure o site do Estado que mora. Segue alguns deles</p>
              <Link link='http://www.pf.gov.br/'>Brasilia</Link>
              <Link link='http://receita.economia.gov.br/'>Brasilia</Link>
              <Link link='http://www.pf.gov.br/'>Ceará</Link>
              <Link link='http://receita.economia.gov.br/'></Link>
              <Link link='http://receita.economia.gov.br/'>São Paulo</Link>
              <Link link='http://www.pf.gov.br/'>São Paulo</Link>
            </div>
            <div>
              <h2>Outros</h2>
              <p></p>
            </div>
          </div>
        </div>

      </section>
    )
}
export default Servicos;