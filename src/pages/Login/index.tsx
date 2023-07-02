import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function login() {
    try {
      const response = await api.post("login", { email, password });
      const { token } = response.data;
      if (token && token.token) {
        // Verifique se o token não está expirado
        const expirationDate = new Date(token.expires_at);
        const currentDate = new Date();
        if (expirationDate > currentDate) {
          localStorage.setItem("token", token.token);
          navigate("/home");
        } else {
          setError("O token de autenticação expirou. Faça login novamente.");
        }
      } else {
        setError("Credenciais inválidas. Verifique seu e-mail e senha.");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        setError("E-mail ou senha incorreta.");
      } else {
        setError("Ocorreu um erro ao fazer login. Por favor, tente novamente mais tarde.");
      }
    }
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
                        <Form.Label className="text-center">E-mail</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Senha</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Senha"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
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
                        <Button variant="primary" onClick={login}>
                          Login
                        </Button>
                      </div>
                    </Form>
                    {error && (
                      <div className="mt-3 text-danger">
                        <p>{error}</p>
                      </div>
                    )}
                    <div className="mt-3">
                      <p className="mb-0 text-center">
                        Ainda não possui uma conta?{" "}
                        <Link
                          to="/new-register"
                          className="text-primary fw-bold"
                        >
                          Cadastre-se
                        </Link>
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