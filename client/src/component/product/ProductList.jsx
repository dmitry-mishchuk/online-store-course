import React, {useContext} from 'react';
import {Row, Card} from 'react-bootstrap';
import {observer} from 'mobx-react-lite';
import {Context} from '../../index';
import ProductItem from './ProductItem';

const ProductList = observer( () => {
  const {product} = useContext(Context)
  return (
    <Row className="d-flex">
        {product.products.map( p =>
          <ProductItem key={product.id}
                       product={p}/>
         )}
    </Row>
  );
})

export default ProductList;
