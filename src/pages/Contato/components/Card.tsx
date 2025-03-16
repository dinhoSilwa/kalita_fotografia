
interface cardProps {
  img: string,
  alt: string,
  titulo: string,
  textButton: string,
}

//Componente de cards
const Card = ({img, alt="", titulo="", textButton=""}: cardProps ) => {
  return (
    <article>
      <img src={img} alt={alt} />
      <h2>{titulo}</h2>
      <button>{textButton}</button>
    </article>
  )
}

export default Card
