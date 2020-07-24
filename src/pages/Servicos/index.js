import React from 'react';
import servicosuteis from '../../assets/servicosuteis.png'

import './styles.css';

function Servicos() {
  return (
    // section principal
    <section className='section-embaixadas'>

      {/* div da imagem */}
      <div className='div-imagem-embaixada'>
        <h2>Segue alguns links de embaixadas e consulados que podem ajudar você durante sua estadia no Brasil:</h2>
        <img className='imagem-embaixada' src={servicosuteis} alt='imagem da embaixada'></img>
      </div>
      <div className='geral'>
        <div className='lateral-1'>
          <div className='embaixadas'>
            <h2>Embaixadas e Consulados</h2>
            <ul>
              <li><a href='http://www.embaixadadeangola.com.br/' target="_blank">Angola-Brasilia</a></li>
              <li><a href=' https://consuladoangolarj.org/' target="_blank">Angola-rio de Janeiro</a></li>
              <li><a href=' http://consuladogeraldeangolasp.net/' target="_blank">Angola-São Paulo</a></li>
              <li><a href=' http://www.embcv.org.br/portal/embaixada/ ' target="_blank">Cabo Verde-Brasilia</a></li>
              <li><a href='https://www.embaixadas.net/Consulado/' target="_blank">Cabo Verde-São Paulo</a></li>
              <li><a href=' https://www.embaixadas.net/' target="_blank">Guiné-Bissau-Brasilia</a></li>
              <li><a href=' https://consulados.com.br/' target="_blank">Guiné-Bissau-São Paulo</a></li>
              <li><a href=' http://www.mozambique.org.br/' target="_blank">Moçambique-Brasilia</a></li>
              <li><a href=' https://www.embaixadas.net/' target="_blank">Moçambique-São Paulo</a></li>
            </ul>
          </div>

          <div className='orgaos-publicos'>
            <h2>Órgãos públicos</h2>
            <p>Você pode tratar assuntos de CPF e vistos na Receita e na Polícia Federal. Procure o site do Estado que mora. Segue alguns deles:</p>
            <ul>
              <li><a href='http://www.pf.gov.br/' target="_blank">Brasilia</a></li>
              <li><a href='http://receita.economia.gov.br/ ' target="_blank">Brasilia</a></li>
              <li><a href=' http://www.pf.gov.br/' target="_blank">Ceará</a></li>
              <li><a href=' http://receita.economia.gov.br/ ' target="_blank">Ceará</a></li>
              <li><a href=' http://receita.economia.gov.br/ ' target="_blank">São Paulo</a></li>
              <li><a href=' http://www.pf.gov.br/ ' target="_blank">São Paulo</a></li>
            </ul>
          </div>
          
        </div>
        <div className='lateral-2'>
        <h2>Emergências</h2>
        <p className='subtitulo'>No Brasil,os números de emergência são os mesmos para todas as regiões e as chamadas são encaminhadas para a localidade que você está.Segue alguns números:</p>
        <div className='emergencias'>
      
            <div className='sobre-numeros'>
              <p>Central de Atendimento à Mulher no Brasil<span className='numero-destaque'>-180</span></p>
              <p>Corpo de Bombeiros <span className='numero-destaque'>-193</span></p>
              <p>Policia Militar  <span className='numero-destaque'>-190</span></p>
              <p>Policia Rodiviária Federal <span className='numero-destaque'>-191</span></p>
              <p>Policia Rodoviária Estadual <span className='numero-destaque'>-198</span></p>
              <p> Defesa Civíl<span className='numero-destaque'>-199</span></p>
              <p> Serviço de Atendimento Móvel de Urgência - SAMU (pronto-socorro) <span className='numero-destaque' >-192</span></p>

            </div>
         
          
          <div className='sobre-numeros'>
        
            <p> Correios - Nacional <span className='numero-destaque'>-0800-725-7282</span></p>
            <p>Correios - (sugestões, elogios e reclamações)<span className='numero-destaque'>-0800-725-0100</span></p>
            <p> Direitos Humanos <span className='numero-destaque'> -100</span></p>
            <p>Disque-Defensorias Públicas  <span className='numero-destaque'>-129</span></p>
            <p>Ouvidoria do Ministério Público <span className='numero-destaque'>-127</span></p>
            <p>Procon- atendimento ao consumidor <span className='numero-destaque'>-151</span></p>
            <p> Receita Federal (Receita Fone) <span className='numero-destaque'>-146</span></p>
          </div>
          </div>
        </div>
      </div>

    </section>
  )
}
export default Servicos;