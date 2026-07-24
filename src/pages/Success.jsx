import { Link } from "react-router-dom";

function Success() {
  return (
    <div className="success-page">
      <h1>✅ Order Placed Successfully</h1>

      <p>
        Thank you for your order.
      </p>

      <p>
        Your delicious food will arrive in approximately 30 minutes.
      </p>

      <Link to="/">
        <button className="checkout-btn">
          Back To Home
        </button>
      </Link>
    </div>
  );
}

export default Success;