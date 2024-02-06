import React, { useState, useEffect } from "react";
import Data from "@/pages/api/data/allUsers";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    Data
    fetch("/pages/api/data/allUsers")
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.error("Error fetching user data: ", error);
      });
  }, []); 

  const handleLogin = () => {
    
    const user = userData.find(
      (Data) => Data.username === username && Data.password === password
    );

    if (user) {
      // Successful login,
    } else {
      
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
