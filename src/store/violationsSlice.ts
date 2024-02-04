import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { Violation } from 'types/Violation';

const initialState: { violations: Violation[] } = { violations: [] };

export const violationsSlice = createSlice({
  name: 'violationsSlice',
  initialState,
  reducers: {
    setViolations: (state, action: PayloadAction<Violation[]>) => {
      state.violations = action.payload;
    },
  },
});

export const { setViolations } = violationsSlice.actions;

export default violationsSlice.reducer;
