import React, { useState } from "react";
import { Col, Button, Row, Container, Card, Form, Alert } from "react-bootstrap";
import authService from "../services/auth-service";
import { useNavigate } from "react-router-dom";

const SingInPage = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (email.trim() === '') {
      setError('Email is required');
      return;
    }
    try {
      await authService.singIn(email);
      setError(null);
      navigate('/feed');
    } catch (error) {
      setError(error.response.data.message);
    }
  }

  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={6} lg={4} xs={12}>
            <div style={{ position: "relative" }}>
              <Card className="shadow">
                <Card.Body>
                  <div className="mb-3 mt-md-4">
                    <h2 className="fw-bold mb-4 text-uppercase ">AWARD</h2>
                    <p className=" mb-3">Enter your email address to Sign In and continue</p>
                    <div className="mb-3">
                      <Form onSubmit={handleSignInSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control type="email" placeholder="Email Address" value={email} onChange={handleEmailChange} />
                          {formSubmitted && email.trim() === '' && <div className="text-danger"></div>}
                        </Form.Group>
                        <Button variant="secondary" type="submit">
                          Sign In
                        </Button>
                      </Form>
                    </div>
                  </div>
                </Card.Body>
              </Card>
              {error && <Alert variant="danger" style={{ position: "absolute", width: "100%" }} className="mt-3">{error}</Alert>}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SingInPage