import React, { useEffect, useState } from "react";
import axios from "axios";

import Form from "react-bootstrap/Form";
import Listcar from "../Listcar/Listcar";

import "./Search.scss";
import "../../style/global.scss";
import Navigation from "../Navbar/Navbar";

//Função criada para pesquisar os carros atráves da propriedade marca_nome
const Search = () => {
  const [stocks, setStocks] = useState([]);
  const [search, setSearch] = useState("");

  //Buscando dados da Api através do axios e chamando a propriedade nome_marca
  useEffect(() => {
    const params = {};

    if (search) {
      params.marca_nome_like = search;
    }
    axios
      .get("http://localhost:5000/stocks", { params })
      .then((response) => {
        setStocks(response.data);
      })
      .catch(() => {
        console.log("Deu errado!");
      });
  }, [search]);
  return (
    <>
      {/* Importando o componente Navigation (Navbar) */}
      <Navigation />
      <Form className="d-flex container mt-4">
        <Form.Control
          type="search"
          placeholder="Ex.: toyota"
          className="me-2"
          aria-label="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </Form>

      {/* Importando o componente Listcar */}
      <Listcar stocks={stocks} />
    </>
  );
};

export default Search;
