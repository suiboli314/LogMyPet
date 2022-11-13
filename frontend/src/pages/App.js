import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./AuthPage";
import Homepage from "./Homepage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/login" element={<AuthPage />}></Route>
    </Routes>
  );
}

export default App;
