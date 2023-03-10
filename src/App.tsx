import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import Header from "./components/header/Header";
import Login from "./pages/login/Login";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* // <Route path="/contact" element={< />} /> */}
        {/* // <Route path="/about" element={< />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
