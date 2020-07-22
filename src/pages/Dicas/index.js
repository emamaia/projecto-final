import React from 'react';
import{Link} from 'react-router-dom';
import dicas from '../../assets/dicas.png';
import saude from '../../assets/saude.jpg';
import OJXLemprego from '../../assets/OJXLemprego.jpg';
import educacao from '../../assets/educacao.jpg';
import cultura from '../../assets/cultura.jpg';
import './styles.css';

function Dicas() {
    return (
    <section className='div-mae-dicas'>
        <h1 className='titulo-dicas'> Sugestões para aquelas pessoas que chegaram ou pensam em vir para morar ou estudar por conta própria ou até mesmo por bolsa no Brasil.</h1>
      <div className=' conteudo'>
        <div className='imagem'>
            <img className='imagem-dicas' src={dicas} alt='Imagem de viajantes'></img>
        </div>

          <div className='texto'>
            
            <p>Aconselho a se informar desde seu país, como é a cidade onde vai morar, como é a cultura, a gastronomia, a infraestrutura da cidade, fazer pesquisa do tipo:
                        PLANEJAMENTO, é o ponto mais importante. Quando surgir a ideia da viagem, pense em todos os fatores que serão essenciais para a sobrevivência longe da sua terra natal como: família, moradia, trabalho, e, claro, dinheiro. CUIDE DA LEGALIZAÇÃO, é importante saber tudo o que for preciso para ficar legalmente no país. CONHEÇA O BRASIL, O olhar da pessoa residente é muito diferente de quem vem para passear.</p>
            <p> Então, procure conhecer e estudar regras, como as leis, costumes do país, sabemos que a cultura muda muito de uma nação para outra, portanto, é preciso se adequar aos hábitos locais para que não sofremos com punições e multas do país. Se puder, faça as contas de tudo, o que se vai gastar, por exemplo, em moradia, alimentação, transporte, educação, etc.</p>
          </div>
      </div >

        <div className='conteudo'>
          <div>
            <h2 className='titulo-geral'>Saúde</h2>
            <img className='imagens-dicas-geral' src={saude} alt='pesquisar imagem de saude'></img>
          </div>

          <div className='texto'>

            <p>A saúde no Brasil é muito boa dependendo do lugar. Em comparação de alguns Países do Continente Africano.
            É importante, entender como funciona o Sistema Únio de Saúde (SUS), evitar desgastes emocionais e para que serve o cadastro de pessoa física (CPF).
            Sendo brasileiro ou estrangeiro, para utilizar o SUS, você precisa fazer o cartão ou se cadastrar em postos de saúde. Na maioria das cidades, o atendimento é demorado, além da falta de alguns medicamentos. Mas a saúde é pública e gratuita. Na maioria dos postos, pedem apenas documento e comprovante de residência para se cadastrar.
                    </p>
          </div>
        </div>

       <div className='conteudo'>
        <div>
           <h2 className='titulo-geral'>Emprego</h2>
          <img className='imagens-dicas-geral' src={OJXLemprego} alt='imagem de emprego'></img>
        </div>

        <div  className='texto'>
                     
                  <p>A diversidade no Brasil também se estende pela educação e trabalho. Há regiões que é quase impossível achar um emprego, ao passo que, outras apresentam relativa facilidade.
                     Digo isso, porque estamos em um país que não garante educação e estabilidade, Brasil é um lugar de muitas oportunidades para estudar, mas, também tem outras coisas que muitas vezes podem te levar a influências ruins. No entanto, seja firme nos teus objetivos, pois pode ser influenciada por vários fatores e pessoas, pois existem aquelas que querem estudar e também outros que não querem. Isso tudo vai depender com quem vais interagir, ou seja, andas, falas e até confiar
                    
                    Se você pretende encontrar empregos, existem sites onde pode cadastrar suas informações, currículo e também entrar em contato com outros profissionais da sua área. Isso vale para qualquer profissão. Segue alguns deles:
                
                    </p>
                    <div className='links-empregos'>
                    <Link link='https://br.linkedin.com/'>Cadastre-se no Linkedin</Link>
                    <Link link='https://www.vagas.com.br/'>Veja vagas no vagas.com</Link>
                    <Link link='https://www.curriculum.com.br/'>Veja vagas no vaga.com</Link>

                    </div>
        </div>
       </div>


       
       <div className='conteudo'>
               <div>
                 <h2 className='titulo-geral'>Educação</h2>
                <img className='imagens-dicas-geral' src={educacao} alt='pesquisar imagem de educacao'></img>
              </div>
                
                <div className='texto'>
                   
                    <p>
                    Outro ponto essencial da minha trajetória é questão da bolsa Unilab, que é um projeto fantástico. Eu sou fruto desse projeto, porque tive a oportunidade de me formar numa Universidade Federal da Integração Internacional da Lusofonia Afro-Brasileira (UNILAB) tanto pelos meus esforços, mais também era meu sonho de estudar no exterior, não importava o País.
                    Foi um desafio deixar minha terra, atravessando o Atlântico à procura de ensino de qualidade e conhecimentos oferecidos por algumas instituições brasileiras, para ter um olhar diferenciado perante a vida, para além de conhecimentos intectuais. Durante minha jornada estudantil, amadureci não só o intelecto, como o lado emocional
                    </p>
                    <p>
                    Hoje, posso dizer que todos esforços valeram e sou privilegiada. Em 2020, fui selecionada para fazer parte do bootcam intensivo da -Reprograma-, uma iniciativa que ajuda mulheres a programar e entrar no mercado de tecnologia, tudo isso gratuitamente. E graças a isso, estou aqui criando meu próprio site e o meu desejo é atuar como desenvolvedora Front-End, unindo o aprendizado técnico de novas linguagens à construção de soluções tecnológicas mais favorável para todos.
                    </p>
                </div>
            </div>
                    

            <div className='conteudo'>
               <div>
                  <h2 className='titulo-geral'>Diferenças Culturais</h2>
                <img className='imagens-dicas-geral' src={cultura} alt='imagem da cultura'></img>
              </div>
                
                <div className='texto'>
                   
                    <p>
                    A cultura brasileira é totalmente diferente da africana, especialmente a angolana. Nós valorizamos a vida e a família de modo geral, e respeito acima de tudo pelo nosso próximo e principalmente pelos nossos mais velhos. Percebo a banalização da morte no Brasil, onde pessoas matam por motivos fúteis, o que não é comum no meu país. Vejo muitos casos de desrespeito com pessoas idosas e entre pais e filhos. 
                    </p>
                    <p>
                    A maneira de vestir também é bastante distinta dos meus costumes. Onde fui criada, as vestimentas costumam ser mais conservadoras e tradicionais, mas isso também depende da educação familiar. Após cinco anos no Brasil, me sinto um pássaro sem dono, sem precisar seguir algumas regras ou dar satisfação de como me comporto. 
                    </p>
                    <p>
                    A alimentação é outro ponto que se diferencia muito. O feijão é sempre presente no prato dos brasileiros, e nós estamos acostumados a comer mais verduras.  Com por exemplo, a folha de mandioca é algo venenoso no Brasil, o que é comum na minha terra. 
                    </p>
                    <p>
                    O Brasil é um pais heterogêneo, a realidade de um estado pode ser completamente diferente do outro. Inclusive no que diz respeito à vegetação e ao clima. Passei alguns anos no Nordeste, e lá o povo enfrenta problemas de seca no sertão e faz bastante calor. O inverno não existe. Em São Paulo, o contrário, é a terra da garoa e as estações do ano são bem definidas.  Na região sul chega a nevar no inverno. 
                    </p>

                </div>

            </div>



    </section>

    )
}



export default Dicas;