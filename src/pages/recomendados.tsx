import { useEffect, useState } from "react";
import { Header, Loading } from "../components";
import Image from "next/image";

export default function RECOMENDADOS() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  });
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
            <div className="titulo">
                <h1>
                    RECOMENDADOS
                </h1>
            </div>
            <div className="imagens">
            <Image
              src="/img/Otávio/PLL.png"
              alt="Imagem Recomendados"
              width={282}
              height={356}
            />
            <Image
              src="/img/Otávio/A.png"
              alt="Imagem Recomendados"
              width={282}
              height={356}
            />
            <Image
              src="/img/Otávio/L.png"
              alt="Imagem Recomendados"
              width={282}
              height={356}
            />
            <Image
              src="/img/Otávio/S.png"
              alt="Imagem Recomendados"
              width={282}
              height={356}
            />
            <Image
              src="/img/Otávio/SH.png"
              alt="Imagem Recomendados"
              width={282}
              height={356}
            />
            <Image
              src="/img/Otávio/VU.png"
              alt="Imagem Recomendados"
              width={282}
              height={356}
            />
            </div>
            <div className="fundos">
            <div className="informacao">
                <h1 className="tituloo">Pretty Little Liars (série)</h1>
                <p>Temporadas: 7</p> <p>Categoria: Suspense</p>
                <h1 className="tituloo">Sinopse</h1>
                <p>Na pequena cidade de Rosewood, na Pensilvânia, as melhores amigas Spencer Hastings (Troian Bellisario), Aria Montgomery (Lucy Hale), Hanna Marin (Ashley Benson) e Emily Fields (Shay Mitchell) guardam complexos segredos. Alison (Sasha Pieterse), 5ª membra e líder do grupo, desapareceu há um ano e não deixou qualquer pista. As amigas recebem cartas misteriosas assinadas por uma letra e suspeitam que seja sua antiga companheira, mas a desconfiança que possuem em relação ao universo perverso no qual vivem provoca uma reflexão cada vez maior.</p>
            </div>
        </div>
        <div className="fundos">
            <div className="informacao">
                <h1 className="tituloo">Aquaman (filme)</h1>
                <p>Duração: 2h22m</p> <p>Categoria: Ação</p>
                <h1 className="tituloo">Sinopse</h1>
                <p>A cidade de Atlantis, que já foi lar de uma das mais avançadas civilizações do mundo, agora é um reino submerso dominado pelo ganancioso Rei Orm. Com um vasto exército a seu dispor, Orm planeja conquistar tanto os demais reinos do oceano, quanto o mundo da superfície. Em seu caminho está Aquaman, meio-humano e meio-atlante, e verdadeiro herdeiro do trono. Com a ajuda da princesa Mera, Aquaman precisa recuperar o lendário Tridente de Atlan e aceitar seu destino como protetor das profundezas.</p>
            </div>
        </div>
        <div className="fundos">
            <div className="informacao">
                <h1 className="tituloo">Lúcifer(série)</h1>
                <p>Temporadas: 5(atualmente)</p> <p>Categoria: Drama</p>
                <h1 className="tituloo">Sinopse</h1>
                <p>A série se desenvolve ao redor de Lucifer Morningstar, que está entediado e infeliz como o Senhor do Inferno. Ele renuncia seu trono e abandona seu reinado para tirar férias em Los Angeles, onde dá início a uma casa noturna com a ajuda de sua aliada demoníaca, Mazikeen Smith. Depois que uma celebridade a quem Lucifer ajudou a alcançar a fama é assassinada, ele se envolve com a polícia de Los Angeles, onde começa a trabalhar com a Detetive Chloe Decker, e resolver casos de homicídio, para assim, encontrar os responsáveis, e "puní-los".</p>
            </div>
        </div>
        <div className="fundos">
            <div className="informacao">
                <h1 className="tituloo">Sonic(filme)</h1>
                <p>Duração: 1h39m</p> <p>Categoria: Aventura</p>
                <h1 className="tituloo">Sinopse</h1>
                <p>Sonic, o porco-espinho azul mais famoso do mundo, se junta com os seus amigos para derrotar o terrível Doutor Eggman, um cientista louco que planeja dominar o mundo, e o Doutor Robotnik, responsável por aprisionar animais inocentes em robôs.</p>
            </div>
        </div>
        <div className="fundos">
            <div className="informacao">
                <h1 className="tituloo">Shadowhunters(série)</h1>
                <p>Temporadas: 5</p> <p>Categoria: Suspense</p>
                <h1 className="tituloo">Sinopse</h1>
                <p>Em Shadowhunters, Clary Fray (Katherine McNamara) é uma jovem de 18 anos que vê sua vida mudar completamente quando descobre ser parte de uma raça de meio humanos e meio anjos responsável por caçar demônios. Ela se une aos jovens caçadores Jace (Dominic Sherwood), Alec (Matthew Daddario) e Isabelle (Emeraude Toubia) e passa a proteger o mundo de vampiros, lobisomens e monstros malignos.</p>
            </div>
        </div>
        <div className="fundos">
            <div className="informacao">
                <h1 className="tituloo">Vingadores: Guerra Infinita(filme)</h1>
                <p>Duração: 2h</p> <p>Categoria: Ação</p>
                <h1 className="tituloo">Sinopse</h1>
                <p>Homem de Ferro, Thor, Hulk e os Vingadores se unem para combater seu inimigo mais poderoso, o maligno Thanos. Em uma missão para coletar todas as seis pedras infinitas, Thanos planeja usá-las para infligir sua vontade maléfica sobre a realidade.</p>
            </div>
        </div>
        </>
      )}
    </>
  );
}