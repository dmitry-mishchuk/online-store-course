import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import TypeBar from './shopbar/TypeBar';
import BrendBar from './shopbar/BrendBar';
import ProductList from './product/ProductList';

const Shop = () => {
  return (
    <Container>
        <Row className="mt-2">
            <Col md={3}>
              <TypeBar />
            </Col>
            <Col md={9}>
              <BrendBar />
              <ProductList />
            </Col>
        </Row>
    </Container>
  );
}

export default Shop;
