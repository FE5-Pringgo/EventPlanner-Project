import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import styles from "../styles/Login.module.css";
import { useRouter } from "next/router";

function Login() {
  const [field, setFields] = useState({
    email: "",
    password: "",
  });
  const [status, setStatus] = useState();
  const [color, setColor] = useState();

  const router = useRouter();

  async function loginHandler(e) {
    e.preventDefault();

    setStatus("Loading..");

    if (!field.email || !field.password) {
      setStatus("Data tidak boleh kosong!");
      setColor("danger");
    } else {
      const loginReq = await fetch("http://18.136.202.111:8001/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(field),
      });

      const loginRes = await loginReq.json();
      localStorage.setItem("token", loginRes.data.token);
      localStorage.setItem("username", loginRes.data.user.username);

      setStatus("Login Success");
      setColor("success");
      console.log(loginRes);
      router.push("/");
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
      <h1 className={styles.loginTitle}>Login</h1>
      <div className={styles.loginBody}>
        <div className={styles.loginBorder}>
          <div className={styles.loginWrap}>
            <Form onSubmit={loginHandler.bind(this)}>
              {status && <Alert variant={color}> {status}</Alert>}
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  onChange={fieldHandler.bind(this)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={fieldHandler.bind(this)}
                />
              </Form.Group>
              <div className={styles.loginBtnWrap}>
                <Button className={styles.loginBtn} type="submit">
                  Login
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
