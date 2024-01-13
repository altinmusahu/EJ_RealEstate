import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const initialToken = cookies.get("token") || null;
const initialEmail = cookies.get("email") || null;
const initialUserId = cookies.get("UserId") || null;
const initialRole = cookies.get("Role") || null;

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: initialToken,
    UserId: initialUserId,
    Email: initialEmail,
    Role: initialRole

  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      state.tokenExpiration = action.payload.expiration; // Assuming the API returns token and expiration

      cookies.set("token", action.payload, { path: "/", maxAge: 3600 });
      cookies.set("tokenExpiration", action.payload.expiration, { path: "/" });

    },
    clearToken: (state) => {
        state.token = null;
        state.tokenExpiration = null;
        cookies.remove("token", { path: "/" });
        cookies.remove("tokenExpiration", { path: "/" });
      },
    setEmail: (state, action) => {
      state.Email = action.payload;
      cookies.set("Email", action.payload, { path: "/", maxAge: 3600 });
    },
    setUserId: (state, action) => {
      state.UserId = action.payload;
      cookies.set("UserId", action.payload, { path: "/", maxAge: 3600 });
    },
    setRole: (state, action) => {
      state.Role = action.payload;
      cookies.set("Role", action.payload, { path: "/", maxAge: 3600 });
    },
  },
});

export const {
  setToken,
  setEmail,
  setUserId,
  clearToken,
  setRole
} = userSlice.actions;

export const login = (userData) => async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/login",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const token = response.data;
      const Role = response.data.Role;
      console.log("Role:", Role);

      console.log(token);
      dispatch(setToken(token));
      dispatch(setRole(Role));

    } catch (error) {
      console.error("Login error:", error);
      toast.error(`${error.response?.data?.message || 'An error occurred'}`);
      return null; // Return null in case of error

    }
  };

export const register = (userData) => async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/insertuser",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const message = response.data.message;
      console.log(message);
  
      if (response.status === 201) {
        console.log("User registered successfully");
  
        return "User registered successfully";
      } else {
        console.log("Registration error:", response.data.message);
      }
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

export const logout = () => (dispatch) => {
  dispatch(clearToken());
};

export default userSlice.reducer;
export const userActions = userSlice.actions;
