import React from "react";
import { useSelector } from "react-redux";
import StatusPending from "./StatusCategory/StatusPending";
import StatusTranzit from "./StatusCategory/StatusTranzit";
import StatusDelivered from "./StatusCategory/StatusDelivered";
import "../../assets/styles/Status/StatusLayOut.scss";

const StatusLayOut = () => {
  const guides = useSelector((state) => state.guides);

  const { pendientes, transito, entregadas } = React.useMemo(() => {
    let p = 0, t = 0, e = 0;

    for (const g of guides || []) {
      const last = g.history?.[g.history.length - 1];
      const st = last?.status || g.status;

      if (st === "pendiente") p++;
      else if (st === "transito") t++;
      else if (st === "entregado") e++;
    }
    return { pendientes: p, transito: t, entregadas: e };
  }, [guides]);

  return (
    <article className="status">
      <StatusPending count={pendientes} />
      <StatusTranzit count={transito} />
      <StatusDelivered count={entregadas} />
    </article>
  );
};

export default StatusLayOut;
