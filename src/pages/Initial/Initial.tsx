import { ImageWithText } from "@/components/ImageWithText/ImageWithText";
import "./InitialStyles.scss";
import { Images } from "./images";
import { SimpleCard } from "@/components/SimpleCard/SimpleCard";
import { TextCard } from "@/components/TextCard/TextCard";

export default function InitialPage() {
  return (
    <div className="container_initial_page mt-4">
      <h3 className="heading-2">
        Mundo Nerd? <br /> Naped
      </h3>
      <h3 className="heading-3 opacity">
        O Naped pode ser sua fonte de informações sobre o mundo nerd e outros
        <br />
        assuntos relacionados.
      </h3>

      <section className="content_images_section_grid">
        <ImageWithText
          image={Images.url1}
          title="O legado de Ragnar em Vikings"
          description="Explore as batalhas, conquistas e dilemas de um dos maiores guerreiros nórdicos da ficção moderna."
          emphasisText="SÉRIES"
        />
        <ImageWithText
          image={Images.url2}
          title="A magia do Studio Ghibli"
          description="Embarque na jornada de Chihiro e descubra o que torna 'A Viagem de Chihiro' um clássico atemporal."
          emphasisText="ANIMES"
        />
        <ImageWithText
          image={Images.url3}
          title="Kratos e Atreus em Midgard"
          description="Mergulhe na mitologia nórdica e reviva a épica jornada de pai e filho em God of War (2018)."
          emphasisText="JOGOS"
        />
      </section>

      <section className="mt-3 release_notes">
        <h3 className="heading-3 title">Notícias mais recentes</h3>

        <div className="release_notes_grid">
          <SimpleCard
            description={
              "O aclamado exclusivo da Naughty Dog finalmente chega aos PCs com gráficos aprimorados e suporte a novas tecnologias. Uma oportunidade perfeita para reviver a jornada de Joel e Ellie."
            }
            emphasisText="JOGOS"
            image={
              "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1888930/header.jpg?t=1741209545"
            }
            title="The Last of Us Part I chega ao PC com melhorias visuais"
          />
          <SimpleCard
            description="A Obsidian compartilhou novas informações de gameplay e ambientação de Avowed, prometendo uma experiência imersiva de RPG em um universo repleto de mistérios, magias e criaturas fantásticas."
            emphasisText="JOGOS"
            image={
              "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2457220/header.jpg?t=1740094213"
            }
            title="Avowed revela mais detalhes sobre seu mundo mágico e combates"
          />
          <SimpleCard
            description="A Ubisoft apresenta Shadows, nova entrada da franquia Assassin’s Creed ambientada no Japão feudal, trazendo duas novas perspectivas jogáveis, furtividade aprimorada e combate visceral."
            emphasisText="JOGOS"
            image={
              "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3159330/header.jpg?t=1742705129"
            }
            title="Assassin’s Creed Shadows leva a franquia ao Japão feudal"
          />
        </div>
      </section>

      <section className="mt-3 release_data">
        <h3 className="heading-3 title">Lançamentos</h3>
        <div className="release_data_grid">
          <TextCard
            description="A aguardada sequência do premiado roguelike da Supergiant Games já está disponível em acesso antecipado. Com uma nova protagonista, Melinoë, e mecânicas aprimoradas de combate, Hades II promete expandir o universo mitológico com desafios inéditos e visuais ainda mais deslumbrantes."
            emphasisText="JOGOS"
            title="Hades II entra em acesso antecipado com novidades no combate e nova protagonista"
          />
          <TextCard
            description="Inspirada no romance clássico de James Clavell, Shogun narra o embate cultural e político entre samurais, senhores da guerra e um forasteiro europeu. A série é elogiada pela fidelidade histórica, atuações intensas e uma direção cinematográfica de alto níve"
            emphasisText="SÉRIES"
            title="Shogun: Série da FX impressiona com trama política e ambientação histórica do Japão feudal"
          />
        </div>
      </section>
    </div>
  );
}
