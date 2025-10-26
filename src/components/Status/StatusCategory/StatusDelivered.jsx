import React from "react";
import HoundEstadoTres from "../../../assets/img/hound_estado_3.png";
import "../../../assets/styles/Status/StatusDelivered.scss";

const StatusDelivered = ({ count }) => {
    return (
        <section className="status__entregadas">
            <div className="status__logo">
                <img 
                    className="status__logo-img"
                    src={HoundEstadoTres}
                    alt="Hound__estado_3"
                />
            </div>
            <div className="status__entregadas-info">
                <h1 className="status__entregadas-title">Guias entregadas</h1>
                <p className="status__entregadas-number">{count}</p>
                <p className="status__entregadas-descripcion">Guias con entrega confirmada</p>
            </div>
        </section>
    )
}

export default StatusDelivered