import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Header() {
  const history = useNavigate();
  const handleNavigate = () => {
    history("/cart");
  };
  return (
    <div className="header">
      <div className="navbar">
        <div className="header_left">
          <Link to="/">
            <span className="vosco">Ecommerce</span>
          </Link>
        </div>
        <div className="header_right">
          <button className="cart_btn" onClick={handleNavigate}>
            Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
