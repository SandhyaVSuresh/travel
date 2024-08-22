import React, { useState, useEffect } from "react";
import "./App.css";
import Places from "./components/screens/Places";
import Place from "./components/screens/Place";
import Login from "./components/screens/Login";
import Signup from "./components/screens/Signup";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute"; // Adjust the path as necessary

export const UserContext = React.createContext();
const HeadingRout = styled.h1`
    margin: 300px;
    font-size: 50px;
    font-weight: 600;
    text-align: center;
    color: blue;
  `;

function App() {
  
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  const updateUserData = (action) => {
    switch (action.type) {
      case "LOGOUT":
        setUserData(null);
        localStorage.clear();
        break;
      case "LOGIN":
        setUserData(action.payload);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user_data"));
    setLoading(false);
    if (data) {
      setUserData(data);
    }
  }, []);

  return loading ? (
    <HeadingRout>Loading</HeadingRout>
  ) : (
    <UserContext.Provider value={{ userData, updateUserData }}>
      <Router>
        <Routes>
          <Route path="/" element={<Places />} />
          <Route path="/auth/login/" element={<Login />} />
          <Route path="/auth/create/" element={<Signup />} />
          <Route
            path="/place/:id"
            element={
              <PrivateRoute element={Place} />
            }
          />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
