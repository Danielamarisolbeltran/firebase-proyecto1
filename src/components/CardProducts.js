import React from 'react'
import { Card, Image, data } from 'semantic-ui-react'

const CardExampleCard = () => (
  <Card>
        <Image src={ data.img} wrapped ui={false} />
    <Card.Content>
            <Card.Header>{ data.title} </Card.Header>
      <Card.Meta>
                <span> { data.price } </span>
      </Card.Meta>
      <Card.Description>
                { data.description}
      </Card.Description>
    </Card.Content>
  </Card>
)

export default CardExampleCard
