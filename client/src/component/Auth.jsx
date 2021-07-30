import React from 'react';
import {Container, Form, Card, Button} from 'react-bootstrap';
import {NavLink, useLocation} from 'react-router-dom';
import {REGISTRATION_ROUTE, LOGIN_ROUTE} from '../utils/constants';

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{height: window.innerHeight - 50}}>
      <Card style={{width: 600}} className="p-5">
        <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form className="d-flex flex-column">
          <Form.Control className="mt-2" placeholder="Введите email..."/>

          <Form.Control className="mt-2" placeholder="Введите password..."/>
          <Button className="mt-2" variant={"outline-success"}>{isLogin ? 'LogIn' : 'Submit'}</Button>
          {isLogin ?
              <div>
                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
              </div>
              :
              <div>
                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
              </div>
          }
        </Form>
      </Card>
    </Container>
  );
}

export default Auth;
