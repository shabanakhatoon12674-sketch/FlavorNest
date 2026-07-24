import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

import burger from "../assets/images/burger.jpg";
import pizza from "../assets/images/pizza.jpg";
import pasta from "../assets/images/pasta.jpg";
import fries from "../assets/images/fries.jpg";
import drink from "../assets/images/drink.jpg";
import sandwich from "../assets/images/sandwich.jpg";
import biryani from "../assets/images/chicken-biryani.jpg";

function MenuPage() {
  const { addToCart } = useContext(CartContext);

  const [search, setSearch] = useState("");

  // Popup State
  const [showPopup, setShowPopup] = useState(false);
  const [foodName, setFoodName] = useState("");

  const foods = [
    { id: 1, name: "Cheese Burger", price: 199, image: burger },
    { id: 2, name: "Italian Pizza", price: 349, image: pizza },
    { id: 3, name: "Creamy Pasta", price: 249, image: pasta },
    { id: 4, name: "French Fries", price: 149, image: fries },
    { id: 5, name: "Cold Drink", price: 99, image: drink },
    { id: 6, name: "Veg Sandwich", price: 179, image: sandwich },
    { id: 7, name: "Chicken Biryani", price: 183, image: biryani },
  ];

  const filteredFoods = foods.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleAdd = (item) => {
    addToCart(item);

    setFoodName(item.name);
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  return (
    <div className="menu-page">
      <h1>🍽️ Our Menu</h1>

      <input
        type="text"
        placeholder="🔍 Search your favorite food..."
        className="search-bar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="menu-grid">
        {filteredFoods.length > 0 ? (
          filteredFoods.map((item) => (
            <div className="food-card" key={item.id}>
              <img src={item.image} alt={item.name} />

              <h3>{item.name}</h3>

              <h2>₹{item.price}</h2>

              <button
                className="add-btn"
                onClick={() => handleAdd(item)}
              >
                Add To Cart
              </button>
            </div>
          ))
        ) : (
          <h2
            style={{
              textAlign: "center",
              gridColumn: "1 / -1",
              color: "#666",
            }}
          >
            😔 No food found.
          </h2>
        )}
      </div>

      {/* Success Popup */}

      {showPopup && (
        <div className="success-popup">
          <div className="popup-content">
            <h2>✅ Added Successfully</h2>

            <p>
              <strong>{foodName}</strong>
              <br />
              has been added to your cart.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default MenuPage;