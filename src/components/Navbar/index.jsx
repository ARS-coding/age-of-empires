import { NavLink } from "react-router-dom";

import "./index.sass";

const Navbar = () => {
  return (
    <ul className="navbar d-flex justify-content-end p-0 mt-4 me-5">
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
