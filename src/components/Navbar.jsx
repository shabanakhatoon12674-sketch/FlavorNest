import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <header className="navbar">
      <div className="logo">
        <h2>🍽️ FlavorNest</h2>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><a href="/#about">About</a></li>
        <li><a href="/#gallery">Gallery</a></li>
        <li><a href="/#contact">Contact</a></li>
      </ul>

      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <Link
          to="/cart"
          style={{
            color: "#222",
            textDecoration: "none",
            position: "relative",
            fontSize: "28px",
          }}
        >
          <FaShoppingCart />

          <span
            style={{
              position: "absolute",
              top: "-10px",
              right: "-12px",
              background: "red",
              color: "white",
              width: "22px",
              height: "22px",
              borderRadius: "50%",
              fontSize: "12px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {cart.length}
          </span>
        </Link>

        <a href="/#contact">
          <button className="book-btn">Book Table</button>
        </a>
      </div>
    </header>
  );
}

export default Navbar;