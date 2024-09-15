import { configureStore } from '@reduxjs/toolkit';
import pickedDateReducer from '../components/readings/slices/PickedDateSlice';

export default configureStore({
  reducer: {
    pickedDate: pickedDateReducer,
  },
});
