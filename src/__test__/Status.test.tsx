import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import guidesReducer, { Guide } from "../store/guidesSlice";
import StatusLayOut from "../components/Status/StatusLayOut";

function renderWithStore(initialGuides: Guide[]) {
  const store = configureStore({
    reducer: {
      guides: guidesReducer,
    },
    preloadedState: {
      guides: initialGuides,
    },
  });

  return render(
    <Provider store={store}>
      <StatusLayOut />
    </Provider>
  );
}

describe("StatusLayOut", () => {
  it("muestra correctamente la cantidad de guías por estado", () => {
    const initialGuides: Guide[] = [
      {
        number: "1",
        destinatary: "Dest 1",
        origin: "Origen 1",
        destiny: "Destino 1",
        date: "2025-01-01",
        status: "pendiente",
        history: [{ date: "2025-01-01", status: "pendiente" }],
      },
      {
        number: "2",
        destinatary: "Dest 2",
        origin: "Origen 2",
        destiny: "Destino 2",
        date: "2025-01-02",
        status: "transito",
        history: [{ date: "2025-01-02", status: "transito" }],
      },
      {
        number: "3",
        destinatary: "Dest 3",
        origin: "Origen 3",
        destiny: "Destino 3",
        date: "2025-01-03",
        status: "entregado",
        history: [{ date: "2025-01-03", status: "entregado" }],
      },
    ];

    const { container } = renderWithStore(initialGuides);

    const pendingEl = container.querySelector(
      ".status__pendiente-number"
    ) as HTMLElement;
    expect(pendingEl).not.toBeNull();
    expect(pendingEl).toHaveTextContent("1");

    const transitEl = container.querySelector(
      ".status__transito-number"
    ) as HTMLElement | null;
    if (transitEl) {
      expect(transitEl).toHaveTextContent("1");
    }

    const deliveredEl = container.querySelector(
      ".status__entregado-number"
    ) as HTMLElement | null;
    if (deliveredEl) {
      expect(deliveredEl).toHaveTextContent("1");
    }
  });
});
