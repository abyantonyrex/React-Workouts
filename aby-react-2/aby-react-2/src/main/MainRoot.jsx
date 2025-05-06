import React from "react";
import {NavBar} from "../NavBar/NavBar";
import { Product } from "../Products/Television";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {HomePage} from "../HomePage/HomePage";
import { MensClothes } from "../Products/MensClothes";
import { Login } from "../NavPages/Login";
import { Register } from "../NavPages/Register";
import { Contact } from "../NavPages/Contact";
import { About } from "../NavPages/About";

export const MainRoot = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/television" element={<Product />} />
          <Route path="/mensclothes" element={<MensClothes />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
