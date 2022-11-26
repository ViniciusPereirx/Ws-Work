import React from "react";

import "./Cardcar.scss";

//Função criada para o montagem do Card e exibir os dados da Api db.json, foi utilizado SASS e Bootstrap para estilização
const Cardcar = ({ stock }) => {
  return (
    <div className="row">
      <div className="card">
        <div className="card-body">
          <div className="row card-row">
            <div className="col-md-8">
              <h5 className="card-title">{stock.marca_nome}</h5>
              <div className="row p-3">
                <div className="col-6">
                  {" "}
                  <p className="card-text">Modelo: {stock.nome_modelo}</p>
                  <p className="card-text">Ano: {stock.ano}</p>
                  <p className="card-text">Combutível: {stock.combustivel}</p>
                </div>
                <div className="col-6">
                  {" "}
                  <p className="card-text">Portas: {stock.num_portas}</p>
                  <p className="card-text">R$: {stock.valor_fipe} mil</p>
                  <p className="card-text">Cor: {stock.cor}</p>
                </div>
              </div>
              <div className="btn-buy">
                <a href="/" className="btn btn-outline-success">
                  Comprar
                </a>
              </div>
            </div>
            <div className="col-md-4 img-cars">
              <img
                src={stock.imageUrl}
                className="card-img-top img"
                alt="cars"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardcar;
