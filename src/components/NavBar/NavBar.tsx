import { Button } from "../Buttom/Buttom";
import "./NavBarStyles.scss";
import logo from "@images/ENG 1.png";

export function NavBar() {
  return (
    <section className="nav_container">
      <div className="content_logo">
        <img src={logo} alt="Naped" />
        <span className="span_gradiant">Naped</span>
      </div>

      <div className="content_links">
        <a href="#">Início</a>
        <a href="#">Séries</a>
        <a href="#">Filmer</a>
        <a href="#">Animes</a>
        <a href="#">Jogos</a>
        <Button label="Minha conta" />
      </div>
    </section>
  );
}
