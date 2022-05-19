import React, { useState } from "react";
import { Form, Row, Button, Col, Alert } from "react-bootstrap";
import { useRouter } from "next/router";
import styles from "../styles/Register.module.css";

function Register() {
  const [field, setFields] = useState({
    email: "",
    password: "",
    fullname: "",
    username: "",
    date: "",
    address: "",
  });
  const [status, setStatus] = useState("");
  const [color, setColor] = useState("success");

  const router = useRouter();

  async function registerHandler(e) {
    e.preventDefault();

    setStatus("loading");

    if (
      !field.email ||
      !field.password ||
      !field.fullname ||
      !field.username ||
      !field.date ||
      !field.address
    ) {
      setStatus("Seluruh data harap diisi!");
      setColor("danger");
    } else {
      const registerReq = await fetch(
        "http://18.136.202.111:8001/api/register",
        {
          method: "POST",
          body: JSON.stringify(field),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const registerRes = await registerReq.json();
      router.push("/login");
    }
  }

  function fieldHandler(e) {
    const name = e.target.getAttribute("name");

    setFields({
      ...field,
      [name]: e.target.value,
    });
  }

  return (
    <div>
      <h1 className={styles.registerTitle}>Register</h1>
      <div className={styles.registerBody}>
        <div className={styles.registerBorder}>
          <div className={styles.registerWrap}>
            <Form onSubmit={registerHandler.bind(this)}>
              {status && <Alert variant={color}>{status}</Alert>}
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    onChange={fieldHandler.bind(this)}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={fieldHandler.bind(this)}
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridFullname">
                  <Form.Label>Fullname</Form.Label>
                  <Form.Control
                    name="fullname"
                    type="text"
                    placeholder="Enter Fullname"
                    onChange={fieldHandler.bind(this)}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    name="username"
                    type="text"
                    placeholder="Username"
                    onChange={fieldHandler.bind(this)}
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridDateBirth">
                <Form.Label>Date Birth</Form.Label>
                <Form.Control
                  name="date"
                  type="date"
                  placeholder="dd-mm-yy"
                  onChange={fieldHandler.bind(this)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  name="address"
                  as="textarea"
                  placeholder="Apartment, studio, or floor"
                  onChange={fieldHandler.bind(this)}
                />
              </Form.Group>
              <div className={styles.registerBtnWrap}>
                <Button className={styles.registerBtn} type="submit">
                  Register
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
