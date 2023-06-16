import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import api from "../../services/api";

export default function Login() {
  async function getHelloWorld() {
    const response = await api.get("/api/hello");
    return response.data;
  }

  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2">Login</h2>
                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">Usuário</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Usuário ou email"
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Senha" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <p className="small">
                          <a className="text-primary" href="#!">
                            Esqueceu sua senha?
                          </a>
                        </p>
                      </Form.Group>
                      <div className="d-grid">
                        <Button
                          variant="primary"
                          onClick={() => getHelloWorld()}
                        >
                          Login
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0 text-center">
                        Ainda não possui uma conta?{" "}
                        <Link to="/new-register"
                          className="text-primary fw-bold"
                        >Cadastre-se</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}