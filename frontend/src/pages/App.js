import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import AuthPage from "./AuthPage";
import SignupPage from "./SignupPage";
import LogDetail from "./LogDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/login" element={<AuthPage />}></Route>
      <Route path="/signup" element={<SignupPage />}></Route>
      <Route path="/detail/:id" element={<LogDetail />}></Route>
      <Route path="/signup" element={<SignupPage />}></Route>
    </Routes>
  );
}

export default App;
