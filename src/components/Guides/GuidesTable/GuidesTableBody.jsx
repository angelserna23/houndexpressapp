import React from "react";
import GuideRow from "./GuideRow";
import GuideHistoryRow from "./GuideHistoryRow";
import "../../../assets/styles/List/GuidesTableBody.scss";

const GuidesTableBody = ({ guides, expanded, toggleHistory, onUpdateGuide }) => {
  if (!guides || guides.length === 0) {
    return (
      <tbody className="list__table-body">
        <tr className="list__table-body-row">
          <td className="list__table-body-row-info" colSpan="8">
            No hay guías registradas.
          </td>
        </tr>
      </tbody>
    );
  }

  return (
    <tbody className="list__table-body">
      {guides.map((guide) => {
        const isExpanded = expanded.includes(guide.number);
        return (
          <React.Fragment key={guide.number}>
            <GuideRow
              guide={guide}
              isExpanded={isExpanded}
              onToggle={() => toggleHistory(guide.number)}
              onUpdate={() => onUpdateGuide(guide.number)}
            />
            {isExpanded && <GuideHistoryRow history={guide.history} />}
          </React.Fragment>
        );
      })}
    </tbody>
  );
};

export default GuidesTableBody;
