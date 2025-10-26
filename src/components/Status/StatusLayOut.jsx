import React, { useEffect, useState } from "react";
import StatusPending from "./StatusCategory/StatusPending";
import StatusTranzit from "./StatusCategory/StatusTranzit";
import StatusDelivered from "./StatusCategory/StatusDelivered";
import "../../assets/styles/Status/StatusLayOut.scss";

const StatusLayOut = () => {

    const [stats, setStats] = useState({
        pendientes: 0,
        transito: 0,
        entregadas: 0,
    });
    useEffect(() => {
        const guides= JSON.parse(localStorage.getItem("guides")) || [];
        let pendientes = 0;
        let transito = 0;
        let entregadas = 0;

        guides.forEach((guide) => {
            const lastStatus = guide.history[guide.history.length - 1].status;

            if(lastStatus === "pendiente") {
                pendientes++;
            } else if (lastStatus === "transito") {
                transito++;
            } else if (lastStatus === "entregado") {
                entregadas++;
            }
        });

        setStats({
            pendientes,
            transito,
            entregadas,
        });
    }, []);


    return (
        <article className="status">
            <StatusPending count={stats.pendientes} />
            <StatusTranzit count={stats.transito}/>
            <StatusDelivered count={stats.entregadas}/>
        </article>
    )
}

export default StatusLayOut;
