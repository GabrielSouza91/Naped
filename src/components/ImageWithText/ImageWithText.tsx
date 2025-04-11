import './ImageWithTextStyles.scss';

interface ImageWithTextProps {
  image: string;
  title: string;
  description?: string;
  emphasisText?: string;
}

export function ImageWithText({
  image,
  title,
  description,
  emphasisText,
}: ImageWithTextProps) {
  return (
    <div
      style={{
				background: `url(${image}) lightgray 50% / cover no-repeat`
      }}
			className="container_image_with_text"
    >
			<div className='imagem'></div>
      <span>{emphasisText}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
