import { configureStore } from "@reduxjs/toolkit";
import counterReduce12r from "../features/counter/counterSlice";

export default configureStore({
  reducer: {
    xxx: counterReduce12r,
  },
});
