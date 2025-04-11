import NotFound from "@images/404.png";
import "./NotFoundPageStyles.scss";
import { Button } from "@/components/Buttom/Buttom";

export default function NotFoundPage() {
  return (
    <div className="container_not_found">
      <div className="text_content">
        <h2>Tenho más notícias para você!</h2>
        <p>
          A página que você está procurando pode ter sido removida ou está
          temporariamente indisponível.
        </p>
        <Button label="Voltar para o início" />
      </div>

      <div className="image_content">
        <img src={NotFound} alt="Pagina 404" />
        <p>Ups! Você chegou no espaço... </p>
        <p>volte para o mundo nerd!</p>
      </div>
    </div>
  );
}
