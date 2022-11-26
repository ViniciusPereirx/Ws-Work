import React from "react";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

//Função criada para exibir a página de navegação do site, foi utilizado SASS e Bootstrap para estilização do formulário
const Navigation = () => {
  return (
    <div>
      <Navbar expand="lg" className="nav-bar">
        <Container>
          <Navbar.Brand href="/">
            <img
              className="logo"
              src="https://www.wswork.com.br/assets/img/logows.svg"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/" className="link-ancora">
                Estoque de carros
              </Nav.Link>
              <Nav.Link href="/newcar" className="link-ancora">
                Adicionar carros
              </Nav.Link>
              <Nav.Link href="/home" className="link-ancora">
                Home
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
