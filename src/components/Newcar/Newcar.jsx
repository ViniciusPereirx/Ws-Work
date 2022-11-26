import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "../Navbar/Navbar";
import "./Newcar.scss";

//Iniciando os Input's vazios
const initialState = {
  marca_nome: "",
  nome_modelo: "",
  ano: "",
  combustivel: "",
  num_portas: "",
  valor_fipe: "",
  cor: "",
  imageUrl: "",
  timestamp_cadastro: "",
};

//Função criada para adicionar novos carros na Api, foi utilizado SASS e Bootstrap para estilização do formulário
const Newcar = () => {
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/stocks", values)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        console.log("Erro ao adicionar um novo carro!");
      });
  };
  return (
    <>
      {/* Importando o componente Navigation (Navbar) */}
      <Navigation />
      <div className="container mb-3">
        <div className="text-center mt-3">
          <h1>Concessionária Ws Work</h1>
        </div>
        <div className="row">
          <div className="col-lg-7 mx-auto">
            <div className="card mt-2 mx-auto p-4 bg-light">
              <div className="card-body bg-light">
                <div className="container">
                  <form onSubmit={onSubmit} id="contact-form" role="form">
                    <div className="controls">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="marca_nome" className="p-2">
                              Marca *
                            </label>
                            <input
                              id="marca_nome"
                              type="text"
                              name="marca_nome"
                              className="form-control"
                              placeholder="Informe a marca do carro *"
                              required
                              value={values.marca_nome}
                              onChange={onChange}
                            ></input>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="nome_modelo" className="p-2">
                              Modelo *
                            </label>
                            <input
                              id="nome_modelo"
                              type="text"
                              name="nome_modelo"
                              className="form-control"
                              placeholder="Informe o modelo do carro *"
                              required
                              value={values.nome_modelo}
                              onChange={onChange}
                            ></input>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="ano" className="p-2">
                              Ano *
                            </label>
                            <input
                              id="ano"
                              type="text"
                              name="ano"
                              className="form-control"
                              placeholder="Informe o ano do carro *"
                              required
                              value={values.ano}
                              onChange={onChange}
                            ></input>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="combustivel" className="p-2">
                              Combustível *
                            </label>
                            <input
                              id="combustivel"
                              type="text"
                              name="combustivel"
                              className="form-control"
                              placeholder="Informe o combustível do carro *"
                              required
                              value={values.combustivel}
                              onChange={onChange}
                            ></input>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="num_portas" className="p-2">
                              Portas *
                            </label>
                            <input
                              id="num_portas"
                              type="text"
                              name="num_portas"
                              className="form-control"
                              placeholder="Informe o nº de portas do carro *"
                              required
                              value={values.num_portas}
                              onChange={onChange}
                            ></input>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="valor_fipe" className="p-2">
                              R$ *
                            </label>
                            <input
                              id="valor_fipe"
                              type="text"
                              name="valor_fipe"
                              className="form-control"
                              placeholder="Informe o preço do carro *"
                              required
                              value={values.valor_fipe}
                              onChange={onChange}
                            ></input>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="cor" className="p-2">
                              Cor *
                            </label>
                            <input
                              id="cor"
                              type="text"
                              name="cor"
                              className="form-control"
                              placeholder="Informe a cor do carro *"
                              required
                              value={values.cor}
                              onChange={onChange}
                            ></input>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="timestamp_cadastro" className="p-2">
                              Data do Anúncio *
                            </label>
                            <input
                              id="timestamp_cadastro"
                              type="date"
                              name="timestamp_cadastro"
                              className="form-control"
                              placeholder="Informe a data do anúncio do carro *"
                              required
                              value={values.timestamp_cadastro}
                              onChange={onChange}
                            ></input>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="col-md-12 mt-5">
                        <div className="form-group">
                          <label htmlFor="imageUrl" className="p-2">
                            URL Carro
                          </label>
                          <input
                            id="imageUrl"
                            type="text"
                            name="imageUrl"
                            className="form-control"
                            placeholder="Informe a data do anúncio do carro *"
                            required
                            value={values.imageUrl}
                            onChange={onChange}
                          ></input>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center mt-4">
                      <button type="submit" className="btn btn-outline-success">
                        Salvar
                      </button>
                    </div>
                  </form>
                  <div className="d-flex justify-content-center mt-1">
                    <div>
                      <Link to={"/"}>
                        <button className="btn btn-outline-success px-5">
                          Voltar
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newcar;
