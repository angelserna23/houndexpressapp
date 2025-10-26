import React from "react";
import "../../../assets/styles/List/GuideHistoryRow.scss";

const GuideHistoryRow = ({ history }) => {
  return (
    <tr className="historial-row">
      <td className="list__table-body-row-info" colSpan="8">
        <ul 
          className="list__table-body-row-info-historial" 
          style={{ listStyle: "none", padding: 0 }}
        >
          {history.map((entry, idx) => (
            <li
              key={idx}
              className="list__table-body-row-info-content"
            >
              {entry.date} - {entry.status}
            </li>
          ))}
        </ul>
      </td>
    </tr>
  );
}

export default GuideHistoryRow;