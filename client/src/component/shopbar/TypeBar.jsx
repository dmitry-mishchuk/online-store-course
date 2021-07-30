import React, {useContext} from 'react';
import {ListGroup} from 'react-bootstrap';
import {observer} from 'mobx-react-lite';
import {Context} from '../../index';

const TypeBar = observer( () => {
  const {product} = useContext(Context)
  return (
    <div>
        <ListGroup>
            {product.types.map( type => <ListGroup.Item key={type.id}> {type.title}</ListGroup.Item>)}
        </ListGroup>
    </div>
  );
})

export default TypeBar;
