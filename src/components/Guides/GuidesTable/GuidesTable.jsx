import React, { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import GuidesTableHeader from "./GuidesTableHeader";
import GuidesTableBody from "./GuidesTableBody";
import { updateGuideStatus } from "../../../store/guidesSlice";
import "../../../assets/styles/List/GuidesTable.scss";

const GuidesTable = () => {
  const dispatch = useDispatch();

  const guides = useSelector((state) => state.guides);

  const [expanded, setExpanded] = useState([]);

  const toggleHistory = (guideNumber) => {
    setExpanded((prev) =>
      prev.includes(guideNumber)
        ? prev.filter((n) => n !== guideNumber)
        : [...prev, guideNumber]
    );
  };

  const getNextStatus = (current) => {
    const estados = ["pendiente", "transito", "entregado"];
    const idx = estados.indexOf(current);
    if (idx === -1) return "pendiente";
    return idx < estados.length - 1 ? estados[idx + 1] : estados[idx];
  };

  const handleUpdateGuide = (guideNumber) => {
    const guide = guides.find((g) => g.number === guideNumber);
    if (!guide || !guide.history?.length) return;

    const last = guide.history[guide.history.length - 1];
    const next = getNextStatus(last.status);
    if (next !== last.status) {
      dispatch(updateGuideStatus({ number: guideNumber, newStatus: next }));
    }
  };

  const memoGuides = useMemo(() => guides, [guides]);

  return (
    <div className="list__tb">
      <table className="list__table">
        <GuidesTableHeader />
        <GuidesTableBody
          guides={memoGuides}
          expanded={expanded}
          toggleHistory={toggleHistory}
          onUpdateGuide={handleUpdateGuide}
        />
      </table>
    </div>
  );
};

export default GuidesTable;
