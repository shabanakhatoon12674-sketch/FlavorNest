import { Link } from "react-router-dom";
import heroImg from "../assets/images/hero.png";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Delicious Food For Every Mood</h1>

        <p>
          Welcome to FlavorNest, where every meal is prepared with fresh
          ingredients and served with love.
        </p>

        <div className="hero-buttons">
          <Link to="/menu">
            <button className="order-btn">Order Food</button>
          </Link>

          <a href="#contact">
            <button className="book-btn">Book Table</button>
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={heroImg} alt="Delicious Food" />
      </div>
    </section>
  );
}

export default Hero;