import React, { useState, useEffect } from "react";
import { Form, Row, Button, Col, Alert } from "react-bootstrap";
import styles from "../styles/Event.module.css";

function Event() {
  const [field, setFields] = useState({
    eventTitle: "",
    date: "",
    time: "",
    place: "",
    host: "",
    description: "",
  });
  const [uname, setUname] = useState();
  const [status, setStatus] = useState("");
  const [color, setColor] = useState("success");

  useEffect(() => {
    const uname = localStorage.getItem("username");
    setUname(uname);
  }, []);

  async function eventHandler(e) {
    e.preventDefault();
    if (
      !field.eventTitle ||
      !field.date ||
      !field.time ||
      !field.place ||
      !field.host ||
      !field.description
    ) {
      setStatus("Seluruh data harap diisi!");
      setColor("danger");
    } else if (field.host != uname) {
      setStatus("Host harus sama dengan username");
      setColor("danger");
    } else {
      const eventReq = await fetch("http://18.136.202.111:8001/api/events", {
        method: "POST",
        body: JSON.stringify(field),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const eventRes = await eventReq.json();
      setStatus("Input Event Berhasil");
      setColor("success");
      location.replace("/");
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
      <h1 className={styles.eventTitle}>Add Event</h1>
      <div className={styles.eventBody}>
        <div className={styles.eventBorder}>
          <div className={styles.eventWrap}>
            <Form onSubmit={eventHandler.bind(this)}>
              {status && <Alert variant={color}> {status}</Alert>}
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Event Title</Form.Label>
                <Form.Control
                  name="eventTitle"
                  type="text"
                  placeholder="Enter Event Title"
                  onChange={fieldHandler.bind(this)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridDate">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  name="date"
                  type="date"
                  placeholder="Date"
                  onChange={fieldHandler.bind(this)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridTime">
                <Form.Label>Time</Form.Label>
                <Form.Control
                  name="time"
                  type="time"
                  placeholder="Time"
                  onChange={fieldHandler.bind(this)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPlace">
                <Form.Label>Place</Form.Label>
                <Form.Control
                  name="place"
                  type="text"
                  placeholder="Place"
                  onChange={fieldHandler.bind(this)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridHost">
                <Form.Label>Host</Form.Label>
                <Form.Control
                  name="host"
                  type="disabled"
                  placeholder="Host"
                  onChange={fieldHandler.bind(this)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  name="description"
                  as="textarea"
                  placeholder="Description"
                  onChange={fieldHandler.bind(this)}
                />
              </Form.Group>
              <div className={styles.eventBtnWrap}>
                <Button type="submit" className={styles.eventBtn}>
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
