import { configureStore } from '@reduxjs/toolkit';
import pickedDateReducer from '../components/readings/slices/PickedDateSlice';
import regionReducer from '../components/readings/slices/RegionSlice';

export default configureStore({
  reducer: {
    pickedDate: pickedDateReducer,
    region: regionReducer,
  },
});
