import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';

const today = new Date();
const dayOfWeek = today.getDay();
const daysUntilSunday = 7 - dayOfWeek;
const nextSunday = new Date(today);
nextSunday.setDate(today.getDate() + daysUntilSunday);

const pickedDateSlice = createSlice({
  name: 'pickedDate',
  initialState: {
    value: moment(new Date()).format('YYYY-MM-DD'),
  },
  reducers: {
    changePickedDate: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.value = action.payload;
    },
  },
});

export const { changePickedDate } = pickedDateSlice.actions;

export default pickedDateSlice.reducer;
