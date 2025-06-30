import { Link } from "react-router-dom";

import newborn from "../../assets/newborn.webp";
import pregnant from "../../assets/pregnant_.webp";
import wedding from "../../assets/wedding_.webp";
import christmas from "../../assets/christmas.webp";

// Lista de cards do portfólio com imagens, textos e margens personalizadas

const portfolioItems = [
  {
    title: "gestantes",
    image: pregnant,
    alt: "Foto de uma mulher grávida em ensaio fotográfico",
    path: "#",
    marginTop: "mt-[120px]",
  },
  {
    title: "nascimentos",
    image: newborn,
    alt: "Foto de um par de sapatinhos de recém-nascido",
    path: "#",
    marginTop: "xl:mt-[68px] mt-[40px]",
  },
  {
    title: "ensaios em casa",
    image: wedding,
    alt: "Foto de um parto",
    path: "#",
    marginTop: "xl:mt-[120px] mt-[40px]",
  },
  {
    title: "natal",
    image: christmas,
    alt: "Foto temática de Natal",
    path: "#",
    marginTop: "xl:mt-[68px] mt-[40px] xl:mb-0 m-5",
  },
];

const Portfolio = () => {
  return (
  <>
    <title>Portfólio | Ensaio Fotográfico Profissional</title>
    <meta
      name="description"
      content="Confira os ensaios fotográficos realizados por Kalita Fotografia. Especializada em newborn, gestantes, partos e fotos temáticas como o Natal."
    />
    <meta
      name="keywords"
      content="fotografia, portfólio, ensaio fotográfico, newborn, gestantes, partos, fotos natalinas"
    />
    <meta name="author" content="Kalita Fotografia" />
    <meta property="og:title" content="Portfólio | Ensaio Fotográfico Profissional" />
    <meta
      property="og:description"
      content="Veja os ensaios fotográficos realizados por Kalita Fotografia."
    />
    <meta property="og:image" content="URL_DA_IMAGEM_DESTAQUE" />
    <meta property="og:url" content="URL_DA_PAGINA" />

    <main className="font-homeKalita bg-quaternary flex justify-center flex-col items-center h-full">
      <section className="relative flex flex-col justify-start items-center xl:h-[170px] h-0 xl:mb-0 mb-10">
        <h1 className="z-10 text-6xl font-light text-primary mt-10">Portfolio</h1>
        <div className="hidden xl:flex none absolute z-0 w-[422px] h-[45px] bg-fundo mt-11" />
      </section>

      <section className="relative w-full xl:h-[863px] h-full mb-10 flex justify-center items-center">
        <div className="w-full xl:w-7xl h-full flex xl:flex-row flex-col justify-center xl:items-start items-center gap-7.5 z-30">
          {portfolioItems.map((item, index) => (
            <article
              key={index}
              className={`flex relative bg-quaternary w-[264px] xl:h-[500px] h-[550px] ${item.marginTop}`}
            >
              <div className="absolute top-[-18px] w-full flex justify-evenly items-center">
                {/* Adiciona estilos diferentes ao traço e ao título com base no índice do card */}
                <div 
                  className={`xl:w-[34px] lg:w-[34px] w-[17px] h-[2px] bg-primary ${
                    index === 0 ? "xl:mr-0 mr-[305px] xl:static absolute " : index === 1 ? "xl:ml-[0px] ml-[35px] xl:static absolute " : index === 2 ? "xl:mr-0 mr-[305px] xl:static absolute " : index === 3 ? "xl:ml-[0px] ml-[180px] xl:static absolute" : "" } `} 
                />
                <p
                  className={`text-3xl text-primary ${
                    index === 0 ? "xl:mr-0 mr-[155px]" : index === 1 ? "xl:ml-0 ml-[175px]" : index === 2 ? "xl:mr-0 mr-[65px]" : index === 3 ? "xl:ml-0 ml-[245px]" : ""
                  }`}
                >
                  {item.title}
                </p>
              </div>
              <figure>
                <img
                  className="absolute top-0 xl:mt-[43px] mt-6 xl:ml-[30px] ml-0"
                  src={item.image}
                  alt={item.alt}
                  />
              </figure>
              <Link
                className="absolute flex justify-center items-center text-center w-[134px] h-[34px] text-2xl text-primary font-light bg-fundo xl:bottom-[-76px] bottom-[-5px] xl:right-[-55px] right-[66px] pt-1 z-10"
                to={item.path}
                >
                Ver fotos
              </Link>
            </article>
          ))}
        </div>
        <div className="hidden xl:flex absolute w-full h-[526px] top-0 bg-fundo" />
      </section>
    </main>
  </>
  );
};

export default Portfolio;