import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import {Context} from '../../index';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Container} from 'react-bootstrap';
import {SHOP_ROUTE} from '../../utils/constants';
import {Button} from 'react-bootstrap';
import {observer} from 'mobx-react-lite';

const NavBar = observer( () => {
  const {user} = useContext(Context)
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <NavLink to={SHOP_ROUTE}>Navbar</NavLink>
        {user.isAuth ?
          <Nav className="ml-auto">
            <Button variant={"outline-secondary"}>AdminPanel</Button>
            <Button variant={"outline-secondary"} className="ml-4" onClick={() => user.setIsAuth(false)}>SignUp</Button>
          </Nav>
          :
          <Nav className="ml-auto">
            <Button variant={"outline-secondary"} onClick={() => user.setIsAuth(true)}>SignIn</Button>
          </Nav>
        }

      </Container>
    </Navbar>
  )
});
export default NavBar;
