import React from 'react';
import depoimentos from '../../assets/depoimentos.png';

import './styles.css';

function Depoimentos() {
    return (
        <section>
            <div className='div-depoimento'>
                <div className='minha-imagem'>
                    <img className='imagem-depoimento' src={depoimentos} alt='Imagem'></img>
                    <p className='compartilhar'>Compartilha sua história connosco.Dê onde você vem?Quais suas imprensões bore o Brasil?
                </p>
                </div>

                <div className='texto-depoimentos'>
                    <h2>Depoimento da Marisa</h2>
                    <p>Em 2015, um ano depois da minha chegada, fiquei grávida e foi o ano mais desafiador na minha vida, porque tinha que conciliar a gravidez com os estudos. Em agosto de 2016, dei à luz ao meu primogênito, a razão da minha vida e das minhas conquistas. Com um mês de vida ele foi internado e foi outro desafio. Dependia inteiramente do auxílio da universidade, então, aumentou ainda mais a dificuldade para administrar o pouco recurso que tenho. Ninguém disse que seria fácil, mas foi uma experiência gratificante. Apesar de tudo, agradeço todos os dias a Deus pelo lindo presente e pela vida</p>
                    <p>Uma outra dificuldade está relacionada ao comportamento dos senhorios que alugam as casas. Muitas vezes alugam por um valor mais caro, só por ser estrangeiros, outras vezes, não alugam pelo mesmo motivo. E o pior de tudo, se alugam não podes receber visitas, se receberes tens que pagar os dias que tua visita vai ficar. Isso acontece mais no Estado de São Paulo, já no Estado de Ceará isso não aconteceu. Existe um certo preconceito por parte dos senhorios, porque alegam que os africanos vivem como um animal e que não sabem cuidar das casas, que alugar a casa para um africano é o mesmo que estragar a casa</p>
                    <p>A pesar de pertencermos a mesma comunidade dos Países da Língua Portuguesa, isso também me implicou outros tipos de dificuldades em termos da variedade linguista, mas, dentro desses pontos negativos eu tive grande aprendizado. Conheci melhor África que não me dei a oportunidade de conhecer quando estava minha terra natal (Angola). África que eu conhecia era aquela África perdida e sem esperança para novas gerações. No Brasil, mudei minha visão sobre o sentido de africanidade e valorizei minha identidade depois de enxergar por outra perspectiva. Quando vemos de fora, nossos costumes e identidades ganham mais sentido. Hoje não vejo mais o continente africano, em especial meu país de origem, como via há seis anos atrás.</p>
                    <p>Outro ponto que gostaria relatar sobre minha trajetória é que eu tive mais coragem e esperança de seguir em frente com os objetivos que me trouxeram para Brasil. Conheci muitas pessoas que não suportaram viver em outro país, seja pelo clima, ou pelo racismo, ou simplesmente pela infraestrutura da cidade. Eu consegui perseverar na busca da formação adequada, me tornando uma cidadã melhor, crítica e participativa afim de ajudar minha família e o meu povo. Desde sempre sou entusiasta dos estudos. Aprendi fazer novas amizades, novas culturas e me adaptei e readaptei na sociedade que é muito diferente da minha.</p>
                    <p>Em suma, agradeço ao governo brasileiro pela oportunidade concedida para realizar o sonho da formação superior e abrir a porta para outras coisas.
                    </p>
                </div>

            </div>
            <div className='compartilha'>
            <div>
                
            </div>
            </div>
        </section>



    )
}
export default Depoimentos;