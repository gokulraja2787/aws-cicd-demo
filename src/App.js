//import logo from './logo.svg';
//import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import ListGroup from "react-bootstrap/ListGroup";

function App() {
  return (
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
    <Container fluid>
      <Row>
        <Col xs={12}>
          <header>
            <Navbar>
              <Container>
                <Navbar.Brand href="#home">Demo application</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#profile">Profile</Nav.Link>
                    <Nav.Link href="#message">Messages</Nav.Link>
                    <Nav.Link href="/ci">Jenkins</Nav.Link>
                    <NavDropdown title="Action" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">
                        Action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Someother action
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">
                        Separated link
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </header>
          <main>
            <Container>
              <h3 xs={12} className="text-center">
                Demo application - Sample
              </h3>
              <Row class="mt-4">
                <Col xs={12} className="d-flex justify-content-center">
                  <ListGroup as="ol" numbered>
                    <ListGroup.Item
                      as="li"
                      className="d-flex justify-content-between align-items-start"
                    >
                      <div className="ms-2 me-auto">
                        <div className="text-warning fw-bold">
                          Changes by Gokul Rangarajan
                        </div>
                        before 2021-10-12
                      </div>
                    </ListGroup.Item>
                    <ListGroup.Item
                      as="li"
                      className="d-flex justify-content-between align-items-start"
                    >
                      <div className="ms-2 me-auto">
                        <div className="fw-bold text-primary">
                          Changes by Goutham Rangarajan
                        </div>
                        on 2021-10-12
                      </div>
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
            </Container>
          </main>
          {/* <Row>
          <Col xs={8}>
            <blockquote class="blockquote">
              <p class="mb-0">
                A demo application to learn and show CICD with in AWS. 
                CI Pending
                CD Pending
              </p>
              <footer class="blockquote-footer">
                A work in progress <cite>Gokul RANGARAJAN</cite>
              </footer>
            </blockquote>
          </Col>
          <Col xs={4}>
            <blockquote class="blockquote">
              <header class="blockquote-footer">
                Message board
              </header>
              <p class="mb-0">
                Work in progress.
              </p>
              <footer class="blockquote-footer">
                A work in progress <cite>Gokul RANGARAJAN</cite>
              </footer>
            </blockquote>
          </Col>
        </Row> */}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
