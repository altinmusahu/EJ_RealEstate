import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const propertiesSlice = createSlice({
  name: "properties",
  initialState: {
    properties: [],
    propertiesByID : null
  },
  reducers: {
    setProperties: (state, action) => {
      state.properties = action.payload; 
    },
    setPropertiesByID: (state, action) => {
      state.propertiesByID = action.payload; 
    },
  },
});

export const { setProperties,setPropertiesByID } = propertiesSlice.actions;

export const fetchProperties = () => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:4000/api/getproperties");
    if (!response.ok) {
      throw new Error("Failed to fetch properties");
    }
    const data = await response.json();
    dispatch(setProperties(data.properties)); 
  } catch (error) {
    console.error("Fetch properties error:", error);
  }
};
export const fetchPropertiesByID = (PropertyTypeId) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:4000/api/getpropertiesbytype/${PropertyTypeId}`);
    
    if (response.status !== 200) {
      throw new Error(
        `Failed to fetch the property details for propertyID: ${PropertyTypeId}`
      );
    }

    dispatch(setPropertiesByID(response.data)); // Send the array directly
    console.log(response.data); // Log the response

  } catch (error) {
    console.error("Fetch properties error:", error.message);
  }
};





export default propertiesSlice.reducer;
export const propertyActions = propertiesSlice.actions;
