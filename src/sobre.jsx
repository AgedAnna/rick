import React from "react";
import "./sobre.css";
import imagemRickMorty from "./copyright.svg";

function Sobre() {
  return (
    <div class="container px-4 text-center">
      <div class="row gx-5">
        <div class="col">
          <div class="p-3">
            <h2 className="text-baixo">Sobre Rick and Morty</h2>
            <div className="content-container">
              <p>
                Rick é um cientista brilhante e um inventor altamente
                habilidoso, mas perdido na bebida e desilusão. Já Morty é um
                garoto comum, talvez até meio lerdo para a idade dele, que se vê
                sempre arrastado para as confusões do avô. Ambos são
                interpretados por Justin Roiland no inglês.
                <br />A série estreou em 2 de dezembro de 2013 e acompanha as
                perigosas aventuras do cientista alcoólatra Rick e seu neto
                Morty, que divide seu tempo entre a vida familiar e viagens
                interdimensionais. Em 2016, suas duas primeiras temporadas foram
                lançadas na Netflix com a dublagem brasileira realizada pelo
                estúdio Dubbing Company, de Campinas, com tradução de Carlos
                Freires, e também foi transmitida nos canais pagos TBS, I.Sat e
                TNT Séries, atualmente é exibida no Brasil pelo canal Warner
                Channel desde 4 de maio de 2020 com a estreia do bloco do Adult
                Swim no canal. Em agosto de 2015, o Adult Swim renovou a série
                para uma terceira temporada de 10 episódios, que estreou no dia
                1 de abril de 2017 com o resto da temporada programada para ir
                ao ar durante o verão do mesmo ano.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="p-3">
            <img
              src={imagemRickMorty}
              alt="Rick and Morty"
              className="imagem-3d"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
