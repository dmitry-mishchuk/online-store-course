import React, {useContext} from 'react';
import {Row, Card} from 'react-bootstrap';
import {observer} from 'mobx-react-lite';
import {Context} from '../../index';

const BrendBar = observer( () => {
  const {product} = useContext(Context)
  return (
    <Row className="d-flex">

            {product.brends.map( brend =>
              <Card key={brend.id}
                    style={{cursor : 'pointer'}}
                    className='p-3'
                    onClick={ () => product.setSelectedBrend(brend) }
                    border={brend.id === product.selectedBrend.id ? 'danger' : 'light'} >{brend.title}</Card>)}

    </Row>
  );
})

export default BrendBar;
