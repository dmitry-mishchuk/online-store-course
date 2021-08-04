import React, {useContext} from 'react';
import {Col, Card, Image} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import {PRODUCT_ROUTE} from '../../utils/constants';

const ProductItem = ({product}) => {
  const history = useHistory()
  return (
    <Col md={3} className={"mt-3"} onClick={ () => history.push(PRODUCT_ROUTE + '/' + product.id) }>
        <Card style={{width: 150, cursor: 'pointer'}} border={'loght'}>
            <Image width={150} height={150} src={product.img}/>
            <div className='text-black-50 mt-1 d-flex justify-content-between align-items-center'>
              <div>Samsung...</div>
              <div className='d-flex align-items-center'>
                  <div>{product.rating}</div>
                  <Image height={20} src={"https://img.icons8.com/cotton/2x/facebook-like.png"}/>
              </div>
            </div>
            <div>{product.title}</div>
        </Card>
    </Col>
  );
}

export default ProductItem;
