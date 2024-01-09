import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import {
    setEmail,
    setToken,
  } from "../../store/user-slice";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../store/user-slice";
import { useNavigate } from "react-router-dom";



const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const [rememberMe, setRememberMe] = useState(false);
    const [password, setPassword] = useState("");
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [agreedToTerms, setAgreedToTerms] = useState(false);
    const [loading, setLoading] = useState(false);
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;

    const emailRegex = /^\S+@\S+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };
    
      const togglePasswordVisibility = (field) => {
        if (field === "password") {
          setShowPassword(!showPassword);
        } else if (field === "confirmPassword") {
          setShowConfirmPassword(!showConfirmPassword);
        }
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
      
        if (!name || !email || !password) {
          alert("Please fill in all fields");
          return;
        }
        if (!emailRegex.test(email)) {
          alert("Invalid email format");
          return;
        }
        if (!passwordRegex.test(password)) {
          alert(
            "Password must be at least 8 characters long and contain an uppercase"
          );
          return;
        }
      
        try {
          setLoading(true);
          const userData = { Username: name, Email: email, Password: password, Role: "user" };
          const response = await dispatch(register(userData));
      
          if (response.success) {
          } else {
            navigate("/signin");

          }
        } catch (error) {
          console.error("Signup error:", error); // Log the error for debugging
          alert("An unexpected error occurred during signup.");
        } finally {
          setLoading(false);
        }
      };
      
      
    return(
        <>
<section class=" ">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-full lg:py-0">

      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 border border-slate-600 mb-12 ">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                  Create and account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Username</label>
                      <input ref={nameRef} type="name" name="name" id="name" class=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""></input>
                  </div>
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Email</label>
                      <input ref={emailRef} type="email" name="email" id="email" placeholder="name@company.com"  class=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""></input>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Password</label>
                      <input ref={passwordRef} onChange={handlePasswordChange} type="password" name="password" id="password" placeholder="••••••••" class=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""></input>
                  </div>
                  <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""></input>
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="terms" class="font-light text-gray-800 dark:text-gray-600">I accept the <a class="font-medium text-primary-800 hover:underline dark:text-primary-800" href="#">Terms and Conditions</a></label>
                      </div>
                  </div>
                  <button type="submit" class="w-full text-slate-100 bg-blue-900 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={handleSubmit} disabled={loading}>Create an account</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
      </>
    ); 
}

export default SignUp;