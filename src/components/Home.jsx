import React from "react";
import { useNavigate } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link" to="/login">
              Login
            </NavLink>
            <NavLink className="nav-item nav-link" to="/signUp">
              SignUP
            </NavLink>
          </div>
        </div>
      </nav>

      <h2>Home Page</h2>
      <br />
      <br />
      <form>
        <label htmlFor="">Name</label>
        <input type="text" placeholder="Type your name" />
        <br />
        <br />
        <label htmlFor="">Email</label>
        <input type="text" placeholder="Type your Email" />
        <br />
        <br />
        <label htmlFor="">Password</label>
        <input type="text" placeholder="Type your password" />
        <br />
        <br />
        <label htmlFor="">Age</label>
        <input type="number" placeholder="Type your age" />
        <br />
        <br />
        {/* <button className="btn-primary"  >
          Login
        </button> */}
        <button className="btn-primary" onClick={() => navigate("/login")}>
          Login
        </button>
      </form>
      <br />
    </div>
  );
};

export default Home;
