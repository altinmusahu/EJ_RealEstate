import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const adminUsersSlice = createSlice({
  name: "adminUser",
  initialState: {
    adminUsers: [], 
  },
  reducers: {
    setAdminUsers: (state, action) => {
      state.adminUsers = action.payload;
    },
  },
});


export const { setAdminUsers } = adminUsersSlice.actions;


  export const deleteUsers = (UserID) => async (dispatch) => {
    try {
      const response = await axios.delete(`http://localhost:4000/api/deleteUser/${UserID}`);
      if (response.status !== 200) {
        throw new Error("Failed to delete User");
      }
      const data = response.data;
      dispatch(setAdminUsers(data));
    } catch (error) {
      console.error("delete users error:", error);
    }
  };


export default adminUsersSlice.reducer;
export const adminUsersActions = adminUsersSlice.actions;


