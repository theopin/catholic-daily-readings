import { createSlice } from '@reduxjs/toolkit';

const regionSlice = createSlice({
  name: 'region',
  initialState: {
    value: localStorage.getItem('region') || 'asia.singapore',
  },
  reducers: {
    changeRegion: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.value = action.payload;
    },
  },
});

export const { changeRegion } = regionSlice.actions;

export default regionSlice.reducer;
