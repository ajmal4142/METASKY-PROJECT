import React, { useEffect, useState } from "react";
import "./App.css";
import LogIn from "./components/LogIn";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "./utils/auth";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";
import PersonalDetails from "./components/PersonalDetails";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [checkLogin, setCheckLogin] = useState<boolean>(false);
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const storedUsername = localStorage.getItem("username");
    setCheckLogin(isLoggedIn && storedUsername !== null);
    if (isLoggedIn && storedUsername) {
      dispatch(loginSuccess(storedUsername));
    } else {
      navigate("/login");
    }
  }, [dispatch, navigate]);

  return (
    <div className="App">
      <Header />
      <Routes>
        {!checkLogin && <Route path="/login" element={<LogIn />} />}
        <Route path="/" element={<MainSection />} />
        <Route
          path="/personaldetails/:username"
          element={<PersonalDetails />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
