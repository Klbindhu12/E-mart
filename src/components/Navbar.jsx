import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navSection">
        <div className="title">
          <h2>E-mart</h2>
        </div>
        <div className="search">
          <input type="text" placeholder="search..." />
        </div>
        <div className="user">
          <div className="user-details">SignIn/SignUp</div>
          <div className="cart">Cart</div>
        </div>
      </div>
      <div className="subMenu">
        <ul>
          <li>
            <Link to={"/mobile"}>Mobiles</Link>
          </li>
          <li>
            <Link to={"/computer"}>Computers</Link>
          </li>
          <li>
            <Link to={"/watch"}>Watches</Link>
          </li>
          <li>Men's Fashion</li>
          <li>Women Fashion</li>
          <li>Home & Kitchen</li>
          <li>Telivisions</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
