import React from "react";
import { Form, Row, Button, Col } from "react-bootstrap";
import styles from "../styles/Register.module.css";

function Register() {
  return (
    <div>
      <h1 className={styles.registerTitle}>Register</h1>
      <div className={styles.registerBody}>
        <div className={styles.registerBorder}>
          <div className={styles.registerWrap}>
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridFullname">
                  <Form.Label>Fullname</Form.Label>
                  <Form.Control type="text" placeholder="Enter Fullname" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="Username" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridDateBirth">
                <Form.Label>Date Birth</Form.Label>
                <Form.Control type="date" placeholder="dd-mm-yy" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Apartment, studio, or floor"
                />
              </Form.Group>
              <div className={styles.registerBtnWrap}>
                <Button className={styles.registerBtn}>Submit</Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
