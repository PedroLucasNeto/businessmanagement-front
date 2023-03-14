import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import Clients from "./components/clients/Clients";
import Header from "./components/header/Header";
import SingleClient from "./components/single-client/SingleClient";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="client">
            <Route index element={<Clients />} />
            <Route path="userId" element={<SingleClient />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
