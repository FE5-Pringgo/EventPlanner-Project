import React from "react";
import { Form, Button } from "react-bootstrap";
import styles from "../styles/Login.module.css";

function Login() {
  return (
    <div>
      <h1 className={styles.loginTitle}>Login</h1>
      <div className={styles.loginBody}>
        <div className={styles.loginBorder}>
          <div className={styles.loginWrap}>
            <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Form>
            <div className={styles.loginBtnWrap}>
              <Button className={styles.loginBtn}>Login</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
