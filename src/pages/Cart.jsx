import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const {
    cart,
    total,
    increaseQty,
    decreaseQty,
    removeItem,
  } = useContext(CartContext);

  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Open Remove Modal
  const handleRemove = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  // Confirm Remove
  const confirmRemove = () => {
    removeItem(selectedItem.id);
    setShowModal(false);
    setSelectedItem(null);
  };

  // Cancel Remove
  const cancelRemove = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  return (
    <div className="cart-page">
      <h1>🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <h2>Your Cart is Empty</h2>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div style={{ flex: 1 }}>
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                    marginTop: "10px",
                  }}
                >
                  <button
                    className="add-btn"
                    onClick={() => decreaseQty(item.id)}
                  >
                    -
                  </button>

                  <h3>{item.quantity}</h3>

                  <button
                    className="add-btn"
                    onClick={() => increaseQty(item.id)}
                  >
                    +
                  </button>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => handleRemove(item)}
                  style={{ marginTop: "15px" }}
                >
                  🗑 Remove
                </button>
              </div>
            </div>
          ))}

          <h2>Total : ₹{total}</h2>

          <Link to="/checkout">
            <button className="checkout-btn">
              Proceed To Checkout
            </button>
          </Link>

          {/* Remove Confirmation Modal */}

          {showModal && (
            <div className="modal-overlay">
              <div className="modal-box">
                <h2>⚠ Remove Item</h2>

                <p>
                  Are you sure you want to remove
                  <br />
                  <strong>"{selectedItem?.name}"</strong>
                  <br />
                  from your cart?
                </p>

                <div className="modal-buttons">
                  <button
                    className="cancel-btn"
                    onClick={cancelRemove}
                  >
                    Cancel
                  </button>

                  <button
                    className="remove-btn"
                    onClick={confirmRemove}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Cart;