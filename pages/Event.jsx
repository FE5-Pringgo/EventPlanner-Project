import React from "react";
import { Form, Row, Button, Col } from "react-bootstrap";
import styles from "../styles/Event.module.css";

function Event() {
  return (
    <div>
      <h1 className={styles.eventTitle}>Add Event</h1>
      <div className={styles.eventBody}>
        <div className={styles.eventBorder}>
          <div className={styles.eventWrap}>
            <Form>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Event Title</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridDate">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" placeholder="Date" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridTime">
                <Form.Label>Time</Form.Label>
                <Form.Control type="time" placeholder="Time" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPlace">
                <Form.Label>Place</Form.Label>
                <Form.Control type="text" placeholder="Place" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridDateBirth">
                <Form.Label>Host</Form.Label>
                <Form.Control type="disabled" placeholder="Host" disabled />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" placeholder="Description" />
              </Form.Group>
              <div className={styles.eventBtnWrap}>
                <Button className={styles.eventBtn}>Submit</Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
