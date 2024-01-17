import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user-slice";
import propertiesSlice from "./properties-slice";
import propertiesByIDSlice from "./propertyID-slice";
import adminUsersSlice from "./admin-slice";

const store = configureStore({
  reducer: {
    user: userSlice,
    properties: propertiesSlice,
    propertyID: propertiesByIDSlice,
    adminUser: adminUsersSlice
  },
});

export default store;
