import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './Body.css'
function Body() {
  return (
  <div className='Body'>
      <Form>
      <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Paciente</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>...</option>
            <option>Paciente1</option>
          </Form.Select>
        </Form.Group>

        <InputGroup className="mb-3">
        <InputGroup.Text>$</InputGroup.Text>
        <InputGroup.Text>0.00</InputGroup.Text>
        <Form.Control aria-label="Dollar amount (with dot and two decimal places)" />
      </InputGroup>

      <FloatingLabel controlId="floatingSelect" label="Método de pagamento">
      <Form.Select aria-label="Floating label select example">
        <option>...</option>
        <option value="1">Crédito</option>
        <option value="2">Débito</option>
        <option value="3">Dinheiro</option>
      </Form.Select>
    </FloatingLabel>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="Nome" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>CPF</Form.Label>
          <Form.Control type="text" placeholder="CPF do paciente" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Endereço</Form.Label>
        <Form.Control placeholder="Endereço" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Cidade</Form.Label>
          <Form.Control />
        </Form.Group>

        

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Telefone</Form.Label>
          <Form.Control placeholder="Telefone" />
          <Form.Control />
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        ENVIAR
      </Button>
    </Form>

  </div>
  );
}

export default Body;