import React from "react";
import "./cartsummary.css";

const CartSummary = ({
  selectedItems,
  onRemoveItem,
  onPlaceOrder,
  cartVisible,
  toggleCartVisibility,
  orderPlaced,
}) => {
  const getPriceValue = (price) => {
    if (typeof price === "string") {
      return parseInt(price.replace(/[^\d]/g, ""));
    } else if (typeof price === "number") {
      return price;
    } else {
      return 0;
    }
  };

  const totalAmount = selectedItems.reduce((total, item) => {
    const price = getPriceValue(item.price);
    return total + price * (item.quantity || 1);
  }, 0);

  const GST_RATE = 0.18; 
  const gstAmount = totalAmount * GST_RATE;
  const totalWithGST = totalAmount + gstAmount;

  if (!cartVisible) {
    // if cart is hidden, just show Show Cart button
    return (
      <div className="show-cart-button">
        <button onClick={toggleCartVisibility}>Show Cart</button>
      </div>
    );
  }

  return (
    <div className="cart-summary">
      <h2>🧾 Order Summary</h2>

      {selectedItems.length === 0 ? (
        <p>No items selected.</p>
      ) : (
        <div className="items-scroll-container">
          <ul>
            {selectedItems.map((item, index) => (
              <li key={index} >
                <span>{item.name} x{item.quantity}</span>
                <span className="price" style={{marginLeft:"0.5rem"}}>
                  ₹{(getPriceValue(item.price) * item.quantity).toFixed(2)}
                </span>
                <button id="minus" onClick={() => onRemoveItem(item.id)}>-</button >
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="separator" />

      <div className="totals">
        <p>Subtotal: ₹{totalAmount.toFixed(2)}</p>
        <p>GST (18%): ₹{gstAmount.toFixed(2)}</p>
        <h3>Total: ₹{totalWithGST.toFixed(2)}</h3>
        <input type="text" name="" id=""  placeholder="Enter order name"/>
        <input type="tel" placeholder="Enter mobile no" />
        <input type='number'  placeholder="Enter your table no:"/>
      </div>

      {/* Buttons */}
      <div className="cart-actions">
        {!orderPlaced && (
          <button className="place-order-btn" onClick={onPlaceOrder}>
            Place Order
          </button>
        )}
        <button className="toggle-cart-btn" onClick={toggleCartVisibility}>
          Hide Cart
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
