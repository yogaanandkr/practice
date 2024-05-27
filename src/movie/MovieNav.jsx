import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function MovieNav({ search, setSearch, setIndMovie }) {
  // console.log(setIndMovie);
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            {/* <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={search}
                onInput={e => setSearch(e.target.value)}
              />
              <Button
                variant="outline-success"
                onClick={() => setIndMovie(search)}
              >
                Search
              </Button>
            </Form> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="nav-search-container">
        <div className="nav-search container">
          <input
            value={search}
            onInput={e => setSearch(e.target.value)}
            className="w-100"
            type="search"
            name=""
            id=""
            placeholder="Search for movies..."
          />
          <button
            onClick={() => setIndMovie(search)}
            className="btn btn-success"
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
}

export default MovieNav;
