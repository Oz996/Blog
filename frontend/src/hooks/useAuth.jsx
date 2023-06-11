import React, { useEffect, useState } from "react";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token || false);
    const email = localStorage.getItem('email');
    setUserEmail(email);
  }, []);

  const handleLogin = (token, email) => {
    localStorage.setItem("token", token);
    setIsAuthenticated(true);

    localStorage.setItem("email", email);
    setUserEmail(email);
    console.log(email)
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);

    localStorage.removeItem("email");
    setUserEmail(null);
  };
  return { isAuthenticated, userEmail, handleLogin, handleLogout };
};

export default useAuth;
