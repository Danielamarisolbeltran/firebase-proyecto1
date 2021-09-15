import './Cards.css'
import React from "react";
import Img1 from "./Img/capuchino.jpg";
import Img2 from "./Img/tortabalcarce.jpg";
import Img3 from "./Img/dulcedeleche.jpg";
import Img4 from "./Img/frutasalacrema.jpg";
import Img5 from "./Img/doscucuruchos.jpg";



const CardExampleCard = () => {
  <div>
    <CardExampleCard
      img={Img1}
      name="Cafe/Capuchino"
      price="$200"
      description="Descripcion del sabor/producto"
    />
    <CardExampleCard
      img={Img2}
      name="Porcion de torta"
      price="$300"
      description="Descripcion del sabor/producto"
    />
    <CardExampleCard
      img={Img3}
      name="1/4 Kilo de Helado"
      price="$500"
      description="Descripcion del sabor/producto"
    />
    <CardExampleCard
      img={Img4}
      name="1/2 Kilo de Helado"
      price="$850"
      description="Descripcion del sabor/producto"
    />
    <CardExampleCard
      img={Img5}
      name="1 Kilo de Helado"
      price="$1400"
      description="Descripcion del sabor/producto"
    />
  </div>;
};

export default CardExampleCard;
