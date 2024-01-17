import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const propertiesByIDSlice = createSlice({
  name: "propertyID",
  initialState: {
    property : {}
  },
  reducers: {
    setPropertyByID: (state, action) => {
      state.property = action.payload; 
    },
  },
});

export const { setPropertyByID } = propertiesByIDSlice.actions;

export const fetchPropertyByID = (PropertyID) => async (dispatch) => {
  try {
    const response = await fetch(
      `http://localhost:4000/api/getPropertie/${PropertyID}`
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch the product details for PropertyID: ${PropertyID}`
      );
    }

    const data = await response.json();
    console.log("Fetched propertie data: ", data);
    dispatch(setPropertyByID(data));
  } catch (error) {
    console.error("Fetch propertie error:", error);
    
  }
};


export default propertiesByIDSlice.reducer;
export const propertyActions = propertiesByIDSlice.actions;
