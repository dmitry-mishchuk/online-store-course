import React from 'react';
import {Container, Form, Card, Button} from 'react-bootstrap';

const Auth = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Card style={{width: 600}} className="p-5">
        <h2 className="m-auto">Autorisation</h2>
        <Form className="d-flex flex-column">
          <Form.Control className="mt-2" placeholder="Введите email..."/>
          <Form.Control className="mt-2" placeholder="Введите password..."/>
          <Button className="mt-2" variant={"outline-success"}>SignIn</Button>
        </Form>
      </Card>
    </Container>
  );
}

export default Auth;
