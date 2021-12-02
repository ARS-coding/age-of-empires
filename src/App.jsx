import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { UNITS_ENDPOINT_URL } from "./endpoints";
import { FETCH_UNITS_REQUESTED } from "./redux/actionTypes";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Units from "./components/Units";

import "./App.sass";

const App = () => {
  const dispatch = useDispatch();
  const unitsState = useSelector((unitsState) => unitsState);

  useEffect(() => {
    (() => dispatch({ type: FETCH_UNITS_REQUESTED, payload: { UNITS_ENDPOINT_URL } }))();
  }, []);

  return (
    <Container className="p-0">
      <Router>
        <Navbar />

        <hr className="mt-4" />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/units"
            element={
              <Units
                units={
                  unitsState !== undefined && unitsState.units.length !== 0 ? unitsState.units : []
                }
              />
            }
          />
        </Routes>
      </Router>
    </Container>
  );
};

export default App;
