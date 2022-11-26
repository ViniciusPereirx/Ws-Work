import React from "react";
import Cardcar from "../Cardcar/Cardcar";
import "./Listcar.scss";

//Função criada para listar os carros através do método map
const Listcar = ({ stocks }) => {
  return (
    <div className="container list-cars pt-4">
      <div className="row">
        {stocks.map((stock, key) => (
          <div key={key} className="col-sm-6  pb-3 px-3">
            <Cardcar stock={stock} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listcar;
