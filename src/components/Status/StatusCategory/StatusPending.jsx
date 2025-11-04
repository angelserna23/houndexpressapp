import React from "react";
import HoundEstadoUno from "../../../assets/img/hound_estado_1.png";
import "../../../assets/styles/Status/StatusPending.scss";

const StatusPending = ({ count = 0 }) => {
  return (
    <section className="status__pendiente">
      <div className="status__logo">
        <img className="status__logo-img" src={HoundEstadoUno} alt="Hound__estado_1" />
      </div>
      <div className="status__pendiente-info">
        <h1 className="status__pendiente-title">Guias activas</h1>
        <p className="status__pendiente-number">{count}</p>
        <p className="status__pendiente-descripcion">Guias registradas actualmente en el sistema</p>
      </div>
    </section>
  );
};

export default StatusPending;
