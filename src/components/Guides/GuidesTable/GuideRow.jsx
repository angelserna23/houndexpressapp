import React from "react";
import ArrowDownBlack from "../../../assets/icons/arrow_down_black.svg";
import "../../../assets/styles/List/GuideRow.scss";

const GuideRow = ({ guide, isExpanded, onToggle, onUpdate }) => {
  const lastHistory = guide.history[guide.history.length - 1];
  const lastStatus = lastHistory?.status || guide.status;
  const lastDate = lastHistory?.date || guide.date;

  return (
    <tr className="list__table-body-row">
      <td className="list__table-body-row-info">{guide.number}</td>
      <td className="list__table-body-row-info">{guide.destinatary}</td>
      <td className="list__table-body-row-info">{guide.origin}</td>
      <td className="list__table-body-row-info">{guide.date}</td>
      <td className="list__table-body-row-info">{lastDate}</td>
      <td className="list__table-body-row-info">{lastStatus}</td>
      <td className="list__table-body-row-info">
      <button className="list__table-body-row-info--button" aria-label="Actualizar estado" onClick={onUpdate}>Actualizar</button>
      </td>
      <td className="list__table-body-row-info">
        <span className="historial" aria-label="Despegar Historial" onClick={onToggle} style={{ cursor: "pointer" }}>
          {isExpanded ? "Ocultar" : "Desplegar"}
          <img
            className={`historial__img ${isExpanded ? "rotate" : ""}`}
            src={ArrowDownBlack}
            alt="Ver historial"
          />
        </span>
      </td>
    </tr>
  );
};

export default GuideRow;
