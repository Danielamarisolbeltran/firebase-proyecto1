import React, { useContext } from 'react'
import { ItemsContext} from '../ItemsContext'
import Card from './Cards/Cards'
import { Button, Image } from "semantic-ui-react"
// import { ItemsContext } from '../../Components/ItemsContext'



const Tienda = ({ img, name, price, description }) => {
    const [items, setItems] = useContext(ItemsContext);
    return (
      <div className="divCards">
        <nav style={styles.tienda}>
          <p style={styles.text}>Items: {items.length}</p>
          <buttton onClick={setItems}>Modificar</buttton>
        </nav>

        <h1>Tienda online de pedidos</h1>
        <Card className="cards">
          <Image src={img} />
          <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Meta>
              <span className="date">{price}</span>
            </Card.Meta>
            <Card.Description>{description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div>
              <Button primary>Agregar</Button>
              <Button secondary>Borrrar</Button>
            </div>
          </Card.Content>
        </Card>
      </div>
    );
};

export default Tienda;


    
    //   <div>
    //     <h1>Tienda online de pedidos</h1>
    //     <CardExampleCard
    //       img={Img1}
    //       name="Cafe/Capuchino"
    //       price="$200"
    //       description="Descripcion del sabor/producto"
    //     />
    //     <CardExampleCard
    //       img={Img2}
    //       name="Porcion de torta"
    //       price="$300"
    //       description="Descripcion del sabor/producto"
    //     />
    //     <CardExampleCard
    //       img={Img3}
    //       name="1/4 Kilo de Helado"
    //       price="$500"
    //       description="Descripcion del sabor/producto"
    //     />
    //     <CardExampleCard
    //       img={Img4}
    //       name="1/2 Kilo de Helado"
    //       price="$850"
    //       description="Descripcion del sabor/producto"
    //     />
    //     <CardExampleCard
    //       img={Img5}
    //       name="1 Kilo de Helado"
    //       price="$1400"
    //       description="Descripcion del sabor/producto"
    //     />
    //   </div>
    

