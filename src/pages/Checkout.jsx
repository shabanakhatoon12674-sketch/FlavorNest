import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleOrder = () => {
    setLoading(true);

    // 3 seconds delay
    setTimeout(() => {
      navigate("/success");
    }, 3000);
  };

  return (
    <div className="checkout-page">
      <h1>💳 Payment</h1>

      <form className="payment-form">
        <label>
          <input type="radio" name="payment" defaultChecked />
          Debit / Credit Card
        </label>

        <label>
          <input type="radio" name="payment" />
          UPI
        </label>

        <label>
          <input type="radio" name="payment" />
          Paytm Wallet
        </label>

        <label>
          <input type="radio" name="payment" />
          Cash On Delivery
        </label>

        <button
          type="button"
          className="checkout-btn"
          onClick={handleOrder}
          disabled={loading}
        >
          {loading ? "⏳ Processing Order..." : "Place Order"}
        </button>
      </form>
    </div>
  );
}

export default Checkout;