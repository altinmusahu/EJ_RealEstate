import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const propertiesSlice = createSlice({
  name: "properties",
  initialState: {
    properties: [],
  },
  reducers: {
    setProperties: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setProperties } = propertiesSlice.actions;


export const fetchProperties = () => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:4000/api/getProperties");
    if (!response.ok) {
      throw new Error("Failed to fetch properties");
    }
    const data = await response.json();
    dispatch(setProperties(data));
  } catch (error) {
    console.error("Fetch properties error:", error);
  }
};


export default propertiesSlice.reducer;
export const productActions = propertiesSlice.actions;
