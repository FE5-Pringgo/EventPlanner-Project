import React from "react";
import styles from "../styles/Navbar.module.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Form,
  Container,
  FormControl,
} from "react-bootstrap";
import Image from "next/image";

function NavbarComponent() {
  return (
    <div className={styles.bodyNavbar}>
      <Navbar className={styles.navbarWrap} expand="lg">
        <Container fluid>
          <a href="/">
            <Image
              className={styles.navbarLogo}
              src="/logo.png"
              width={80}
              height={80}
            ></Image>
          </a>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <div className={styles.searchWrap}>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className={styles.formControl}
                  aria-label="Search"
                />
                <Button className={styles.btnNavbar}>Search</Button>
              </Form>
            </div>

            <Nav.Link className={styles.linkNav} href="/Register">
              Register
            </Nav.Link>

            <Nav.Link className={styles.linkNav} href="/login">
              Login
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
