import axios from "axios";
import React, { useEffect, useState } from "react";
import Navigation from "../Navbar/Navbar";

import "./Home.scss";

//Função criada para buscar os dados da Api db.json através do axios.
async function HomeCars() {
  const { data } = await axios.get("http://localhost:5000/stocks");

  //Convertendo da propriedade "timestamp_cadastro" em dias
  data.map((item) => {
    return (item.timestamp_cadastro = new Date(
      item.timestamp_cadastro
    ).getDay());
  });

  //Exibir os 5 carros mais novos
  const newCars = data
    .sort((x, y) => x.timestamp_cadastro - y.timestamp_cadastro)
    .reverse()
    .slice(0, 5);

  //Exibir os carros antigos que o ano está abaixo de 2005
  const oldCars = data.filter((car) => car.ano < 2005);

  //Exibir os 3 carros mais baratos
  const promotion = data
    .sort((x, y) => x.valor_fipe - y.valor_fipe)
    .slice(0, 3);

  //Retornando os valores das variáveis "newCars", "oldCars" e "promotion"
  let retorno = { newCars: newCars, oldCars: oldCars, promotion: promotion };
  return retorno;
}

const Home = () => {
  const [cars, setList] = useState({ newCars: [], oldCars: [], promotion: [] });

  //Buscando dados da funcão homeCarros()
  useEffect(() => {
    HomeCars().then((data) => {
      setList(data);
    });
  }, []);

  return (
    <>
      {/* Importando o componente Navigation (Navbar) */}
      <Navigation />

      <div className="container">
        {/* Adicionando dados da Api através do método map */}
        <div className="row pt-2">
          <span className="title-home">Anunciados recentemente</span>
          <div className="col-sm-12 mt-4">
            {cars.newCars.map((stock, key) => {
              return (
                <div key={key} className="row mt-2">
                  <div className="card">
                    <div className="card-body">
                      <div className="row card-row">
                        <div className="col-md-8">
                          <h5 className="card-title">{stock.marca_nome}</h5>
                          <div className="row p-3">
                            <div className="col-6">
                              {" "}
                              <p className="card-text">
                                Modelo: {stock.nome_modelo}
                              </p>
                              <p className="card-text">Ano: {stock.ano}</p>
                              <p className="card-text">
                                Combutível: {stock.combustivel}
                              </p>
                            </div>
                            <div className="col-6">
                              {" "}
                              <p className="card-text">
                                Portas: {stock.num_portas}
                              </p>
                              <p className="card-text">
                                R$: {stock.valor_fipe} mil
                              </p>
                              <p className="card-text">Cor: {stock.cor}</p>
                            </div>
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
            })}
          </div>
        </div>

        {/* Adicionando dados da Api através do método map */}
        <div className="row pt-4">
          <span className="title-home">Carros Antigos</span>
          <div className="col-sm-12 mt-2">
            {cars.oldCars.map((stock, key) => {
              return (
                <div key={key} className="row mt-2">
                  <div className="card">
                    <div className="card-body">
                      <div className="row card-row">
                        <div className="col-md-8">
                          <h5 className="card-title">{stock.marca_nome}</h5>
                          <div className="row p-3">
                            <div className="col-6">
                              {" "}
                              <p className="card-text">
                                Modelo: {stock.nome_modelo}
                              </p>
                              <p className="card-text">Ano: {stock.ano}</p>
                              <p className="card-text">
                                Combutível: {stock.combustivel}
                              </p>
                            </div>
                            <div className="col-6">
                              {" "}
                              <p className="card-text">
                                Portas: {stock.num_portas}
                              </p>
                              <p className="card-text">
                                R$: {stock.valor_fipe} mil
                              </p>
                              <p className="card-text">Cor: {stock.cor}</p>
                            </div>
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
            })}
          </div>
        </div>

        {/* Adicionando dados da Api através do método map */}
        <div className="row pt-4">
          <span className="title-home">Carros em Promoção</span>
          <div className="col-sm-12 mt-2 mb-4">
            {cars.promotion.map((stock, key) => {
              return (
                <div key={key} className="row mt-2">
                  <div className="card">
                    <div className="card-body">
                      <div className="row card-row">
                        <div className="col-md-8">
                          <h5 className="card-title">{stock.marca_nome}</h5>
                          <div className="row p-3">
                            <div className="col-6">
                              {" "}
                              <p className="card-text">
                                Modelo: {stock.nome_modelo}
                              </p>
                              <p className="card-text">Ano: {stock.ano}</p>
                              <p className="card-text">
                                Combutível: {stock.combustivel}
                              </p>
                            </div>
                            <div className="col-6">
                              {" "}
                              <p className="card-text">
                                Portas: {stock.num_portas}
                              </p>
                              <p className="card-text">
                                R$: {stock.valor_fipe} mil
                              </p>
                              <p className="card-text">Cor: {stock.cor}</p>
                            </div>
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
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
