import React from "react";
import { Card, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Link } from "react-router-dom";
import "./Cards.css";

const CardItem = ({ data }) => {
  return (
    <div className="divCards">
      <Card>
        <Card.Content>
          <Image src={data.img} alt= "imagenes productos" />
          <Card.Header id="title">{data.title}</Card.Header>
          <Card.Meta id="info">{data.price}</Card.Meta>
          <Card.Description id="descripcion">
            {data.description}
          </Card.Description>
        </Card.Content>
        
        <button>
          <Link to={`/detail/${data.products}`} id="link">
            Ver más
          </Link>
        </button>
      </Card>
    </div>
  );
};

export default CardItem;