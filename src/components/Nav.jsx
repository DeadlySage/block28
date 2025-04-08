import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <header className="d-flex justify-content-center py-3 px-3">
      <ul className="nav nav-pills">
        <li className="nav-item px-3"><NavLink to="/" className="nav-link"><strong>Home</strong></NavLink></li>
        <li className="nav-item px-3"><NavLink to="/blue" className="nav-link"><strong>Blue</strong></NavLink></li>
        <li className="nav-item px-3"><NavLink to="/red" className="nav-link"><strong>Red</strong></NavLink></li>
      </ul>
    </header>
  );
}
