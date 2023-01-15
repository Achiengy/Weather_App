import React from 'react'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Weather() {
  return (
    <Card style={{ width: '40rem', height: '30rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
       
      </Card.Body>
    </Card>
  );
}

export default Weather;