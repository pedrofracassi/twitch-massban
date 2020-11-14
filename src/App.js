import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Card, Container, Form } from 'react-bootstrap';

import tmi from 'tmi.js'

export default function App() {
  return (
    <div className="App">
      <Container>
        <Card>
          <Card.Body>
            <h1>Twitch Mass Ban</h1>
            <br></br>
            <Form>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Target channels</Form.Label>
                <Form.Check 
                  type='checkbox'
                  id='canal'
                  label='Nome canal'
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Nicknames</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}