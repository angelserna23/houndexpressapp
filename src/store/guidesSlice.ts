import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type GuideStatus = "pendiente" | "transito" | "entregado";

export interface HistoryEntry {
  date: string;
  status: GuideStatus;
}

export interface Guide {
  number: string;
  destinatary: string;
  origin: string;
  destiny: string;
  date: string;
  status: GuideStatus;
  history: HistoryEntry[];
}

const initialState: Guide[] = [];

type UpdateStatusPayload = {
  number: string;
  newStatus: GuideStatus;
};

const guidesSlice = createSlice({
  name: "guides",
  initialState,
  reducers: {
    addGuide: (state, action: PayloadAction<Guide>) => {
      const normalized: Guide = {
        ...action.payload,
        number: action.payload.number.trim(),
        destinatary: action.payload.destinatary.trim(),
        origin: action.payload.origin.trim(),
        destiny: action.payload.destiny.trim(),
      };

      const alreadyExists = state.some((g) => g.number === normalized.number);
      if (alreadyExists) return;

      state.push(normalized);
    },
    updateGuideStatus: (state, action: PayloadAction<UpdateStatusPayload>) => {
      const { number, newStatus } = action.payload;
      const guide = state.find((g) => g.number === number);
      if (!guide) return;

      const last = guide.history[guide.history.length - 1];
      if (!last || last.status !== newStatus) {
        guide.status = newStatus;
        guide.history.push({
          date: new Date().toLocaleString(),
          status: newStatus,
        });
      }
    },
  },
});

export const { addGuide, updateGuideStatus } = guidesSlice.actions;
export default guidesSlice.reducer;
