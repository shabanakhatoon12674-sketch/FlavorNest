import burger from "../assets/images/burger.jpg";
import pizza from "../assets/images/pizza.jpg";
import pasta from "../assets/images/pasta.jpg";
import fries from "../assets/images/fries.jpg";
import sandwich from "../assets/images/sandwich.jpg";
import drink from "../assets/images/drink.jpg";

const foodItems = [
  {
    id: 1,
    name: "Cheese Burger",
    image: burger,
    price: 249,
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 2,
    name: "Margherita Pizza",
    image: pizza,
    price: 399,
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 3,
    name: "White Sauce Pasta",
    image: pasta,
    price: 349,
    rating: "⭐⭐⭐⭐",
  },
  {
    id: 4,
    name: "French Fries",
    image: fries,
    price: 149,
    rating: "⭐⭐⭐⭐",
  },
  {
    id: 5,
    name: "Club Sandwich",
    image: sandwich,
    price: 199,
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 6,
    name: "Cold Drink",
    image: drink,
    price: 99,
    rating: "⭐⭐⭐⭐",
  },
];

function MenuPage() {
  return (
    <section className="menu-page">
      <h1>🍽 Our Menu</h1>

      <div className="menu-grid">
        {foodItems.map((item) => (
          <div className="food-card" key={item.id}>
            <img src={item.image} alt={item.name} />

            <h3>{item.name}</h3>

            <p>{item.rating}</p>

            <h2>₹{item.price}</h2>

            <button className="add-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MenuPage;