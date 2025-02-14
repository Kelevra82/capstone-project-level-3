import { createRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./Views/Home";

const root = createRoot(window.bodyTag);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      {/* <Route path="" element={<About />} />
      <Route path="" element={<Contact />} /> */}
    </Routes>
  </BrowserRouter>
);
