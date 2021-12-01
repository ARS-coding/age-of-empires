import React from "react";
import { Container } from "react-bootstrap";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Container className="p-0">
      <Router>
        <Navbar />

        <hr className="my-4" />

        <Routes>
          <Route path="/" element={<p>home page</p>} />
          <Route path="/units" element={<p>units page</p>} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
