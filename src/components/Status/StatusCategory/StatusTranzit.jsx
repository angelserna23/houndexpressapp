import React from "react";
import HoundEstadoDos from "../../../assets/img/hound_estado_2.png";
import "../../../assets/styles/Status/StatusTranzit.scss";

const StatusTranzit = ({ count }) => {
    return (
        <section className="status__transito">
            <div className="status__logo">
                <img 
                    className="status__logo-img"
                    src={HoundEstadoDos}
                    alt="Hound__estado_2"
                />
            </div>
            <div className="status__transito-info">
                <h1 className="status__transito-title">Guias en transito</h1>
                <p className="status__transito-number">{count}</p>
                <p className="status__transito-descripcion">Paquetes que estan en proceso de entrega</p>
            </div>
        </section>
    )
}

export default StatusTranzit