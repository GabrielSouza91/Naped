import './TextCardStyles.scss';

interface SimpleCardProps {
  title: string;
  description: string;
  emphasisText: string;
}

export function TextCard({
  description,
  emphasisText,
  title,
}: SimpleCardProps) {
  return (
    <div>
      <div className="card_text_content">
        <span >{emphasisText}</span>
        <h2>{title}</h2>
        <p>{description}</p>
        <a className="span_gradiant" href="#">
          Ler Mais
        </a>
      </div>
    </div>
  );
}
