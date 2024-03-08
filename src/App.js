import React from "react";
import Soda from "./Soda";
import Cheetos from "./Cheetos";
import Candy from "./Candy";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import VendingMachine from "./VendingMachine";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/soda" element={<Soda />} />
          <Route path="/cheetos" element={<Cheetos />} />
          <Route path="/candy" element={<Candy />} />
        </Routes>
        <Link to="/soda">Soda</Link>
        <Link to="/cheetos">Cheetos</Link>
        <Link to="/candy">Candy</Link>
      </BrowserRouter>
    </div>
  );
}

export default App;
