import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

//const API_URL = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=4aff148292d86a5f3cdb134d6cf3d0e4'

function Header() {
  return (
   <Container>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#">Weather</Navbar.Brand>
        </Container>

        <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Enter city here..."
                    className="me-2"
                    aria-label="Search"
                  >
                    </Form.Control>
                     <Button variant="primary">Primary</Button>
                  </Form>
                
        
      </Navbar>
    </Container>
  );
}

export default Header;