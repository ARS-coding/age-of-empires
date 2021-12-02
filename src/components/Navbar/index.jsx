import { NavLink } from "react-router-dom";

import "./index.sass";

const Navbar = () => {
  return (
    <ul className="navbar d-flex justify-content-end mb-0 p-0 pt-4">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="ms-4">
        <NavLink to="/units">Units</NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
