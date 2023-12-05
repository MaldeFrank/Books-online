import { NavLink, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function MainLayout() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="navbar-brand" to="/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="navbar-brand" to="/booklist">
                  Booklist
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="navbar-brand" to="/bookForm">
                  Add
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default MainLayout;
