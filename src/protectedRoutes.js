// protectedRoutes.js

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRole }) => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    if (!token || !allowedRole.includes(token?.Role)) {
      navigate("/signin");
      console.log("Admini nuk ka qasje ");
    }
  }, [navigate, allowedRole, token]);

  const hasAccess = token && allowedRole.includes(token.Role);
  return hasAccess ? <>{children}</> : (
    <h1 className="text-xl p-8 text-blue-900 text-center bg-blue-200">
      You do not have access to this page. Redirecting to login...
    </h1>
  );
};

export default ProtectedRoute;
