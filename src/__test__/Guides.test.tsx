import guidesReducer, {
  addGuide,
  updateGuideStatus,
  Guide,
  GuideStatus,
} from "../store/guidesSlice";

// utilidades de prueba
function createGuide(overrides?: Partial<Guide>): Guide {
  return {
    number: "ABC123",
    destinatary: "Juan Pérez",
    origin: "Aguascalientes",
    destiny: "CDMX",
    date: "2025-01-01",
    status: "pendiente",
    history: [],
    ...overrides,
  };
}

describe("guidesSlice", () => {

  it("debe agregar una guía correctamente con addGuide", () => {
    const initialState: Guide[] = [];

    const guide = createGuide();

    const nextState = guidesReducer(initialState, addGuide(guide));

    expect(nextState).toHaveLength(1);
    expect(nextState[0]).toEqual({
      ...guide,
      number: "ABC123",
      destinatary: "Juan Pérez",
      origin: "Aguascalientes",
      destiny: "CDMX",
    });
  });

  it("no debe agregar una guía duplicada (mismo número)", () => {
    const initialState: Guide[] = [
      createGuide({ number: "ABC123" }),
    ];

    const duplicate = createGuide({ number: "ABC123" });

    const nextState = guidesReducer(initialState, addGuide(duplicate));

    expect(nextState).toHaveLength(1);

    expect(nextState[0].number).toBe("ABC123");
  });

  it("debe actualizar el estado y agregar entrada al historial con updateGuideStatus", () => {
    const initialState: Guide[] = [
      createGuide({
        number: "ABC123",
        status: "pendiente",
        history: [{ date: "old-date", status: "pendiente" }],
      }),
    ];

    const action = updateGuideStatus({
      number: "ABC123",
      newStatus: "transito",
    });

    const nextState = guidesReducer(initialState, action);

    const updated = nextState[0];

    expect(updated.status).toBe("transito");

    expect(updated.history.length).toBe(2);

    const lastEntry = updated.history[updated.history.length - 1];
    expect(lastEntry.status).toBe("transito");
    expect(typeof lastEntry.date).toBe("string");
  });

});
