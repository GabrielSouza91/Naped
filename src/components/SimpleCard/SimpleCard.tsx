import "./SimpleCardStyles.scss";

interface SimpleCardProps {
  image: string;
  title: string;
  description: string;
  emphasisText: string;
}

export function SimpleCard({
  description,
  emphasisText,
  image,
  title,
}: SimpleCardProps) {
  return (
    <div className="basic_card">
      <img src={image} alt={title} />
      <div className="basica_card_content_text">
        <span className="span_gradiant">{emphasisText}</span>
        <h2>{title}</h2>
        <p>{description}</p>
				<a className="span_gradiant" href="#">Ler Mais</a>
      </div>
    </div>
  );
}
