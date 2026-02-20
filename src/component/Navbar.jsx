import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Navbar.css";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <nav className="navbar">
      <div className="logo">🛍️ ShopZone</div>

      <div className="nav-links">
        <NavLink to="/" className="nav-box">
          Home
        </NavLink>

        <NavLink to="/shop" className="nav-box">
          Shop
        </NavLink>

        <NavLink to="/contact" className="nav-box">
          Contact
        </NavLink>

        <NavLink to="/cart" className="nav-box cart-box">
          Cart
          <span className="cart-badge">{cartItems.length}</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
