import { useState } from "react";
import { vegItems, nonVegItems, drinksItems, breadItems, desertItems } from './menudata';
import MenuItemCard from './Menucard';
import CartSummary from './cartsummary';
import './menu.css';

function Menu({ searchQuery }) {
  const [selectedItems, setSelectedItems] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [cartVisible, setCartVisible] = useState(true);

  const addItemToCart = (item) => {
    setSelectedItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeItemFromCart = (itemId) => {
    setSelectedItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const randomNumber = Math.floor(Math.random() * 100) + 1;

  const handlePlaceOrder = () => {
    setOrderPlaced(true);    // Show the order placed message
    setCartVisible(false);   // Hide the cart
    setSelectedItems([]);    // Clear all cart items

    // Automatically hide the message after 2 seconds
    setTimeout(() => {
      setOrderPlaced(false);
    }, 5000);
  };

  const filterItems = (items) => {
    return items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  // Filtered items per category
  const filteredVeg = filterItems(vegItems);
  const filteredNonVeg = filterItems(nonVegItems);
  const filteredBreads = filterItems(breadItems);
  const filteredDrinks = filterItems(drinksItems);
  const filteredDeserts = filterItems(desertItems);

  // Check if no matches found
  const noMatchesFound = (
    filteredVeg.length === 0 &&
    filteredNonVeg.length === 0 &&
    filteredBreads.length === 0 &&
    filteredDrinks.length === 0 &&
    filteredDeserts.length === 0
  );

  return (
    <div className="menu-container">
      {/* Navbar */}
      <div className="category-navbar">
        <a href="#veg">Veg</a>
        <a href="#nonveg">Non-Veg</a>
        <a href="#breads">Breads</a>
        <a href="#drinks">Drinks</a>
        <a href="#desert">Desert</a>
      </div>

      {/* Veg Section */}
      {filteredVeg.length > 0 && (
        <div className="menu-grid" id="veg">
          <h2 className="Heading">Veg</h2>
          <div className="dishescontainer">
            {filteredVeg.map((item) => (
              <MenuItemCard key={item.id} {...item} addItemToCart={() => addItemToCart(item)} />
            ))}
          </div>
        </div>
      )}

      {/* Non-Veg Section */}
      {filteredNonVeg.length > 0 && (
        <div className="menu-grid" id="nonveg">
          <h2 className="Heading">Non-Veg</h2>
          <div className="dishescontainer">
            {filteredNonVeg.map((item) => (
              <MenuItemCard key={item.id} {...item} addItemToCart={() => addItemToCart(item)} />
            ))}
          </div>
        </div>
      )}

      {/* Breads Section */}
      {filteredBreads.length > 0 && (
        <div className="menu-grid" id="breads">
          <h2 className="Heading">Breads</h2>
          <div className="dishescontainer">
            {filteredBreads.map((item) => (
              <MenuItemCard key={item.id} {...item} addItemToCart={() => addItemToCart(item)} />
            ))}
          </div>
        </div>
      )}

      {/* Drinks Section */}
      {filteredDrinks.length > 0 && (
        <div className="menu-grid" id="drinks">
          <h2 className="Heading">Drinks</h2>
          <div className="dishescontainer">
            {filteredDrinks.map((item) => (
              <MenuItemCard key={item.id} {...item} addItemToCart={() => addItemToCart(item)} />
            ))}
          </div>
        </div>
      )}

      {/* Desert Section */}
      {filteredDeserts.length > 0 && (
        <div className="menu-grid" id="desert">
          <h2 className="Heading">Deserts</h2>
          <div className="dishescontainer">
            {filteredDeserts.map((item) => (
              <MenuItemCard key={item.id} {...item} addItemToCart={() => addItemToCart(item)} />
            ))}
          </div>
        </div>
      )}

      {/* If no matches found */}
      {noMatchesFound && (
        <p className="notfound">No matches found for "{searchQuery}"</p>
      )}

      {/* Cart Section */}
      {selectedItems.length > 0 && cartVisible && (
        <CartSummary
          selectedItems={selectedItems}
          onRemoveItem={removeItemFromCart}
          onPlaceOrder={handlePlaceOrder}
          orderPlaced={orderPlaced}
          cartVisible={cartVisible}
          toggleCartVisibility={() => setCartVisible(!cartVisible)}
        />
      )}

      {/* Order Placed Message */}
      {orderPlaced && (
        <div className="order-status">
          <p>Your order will be served within 10 minutes!   Your Order no: <span className="orderno" style={{color:"orange",fontWeight:"bold",fontSize:"1.2rem"}}>{randomNumber}</span></p>
        </div>
      )}

      {/* Cart Toggle */}
      {!cartVisible && (
        <div className="cart-toggle">
          <button onClick={() => setCartVisible(true)}>
            Show Cart
          </button>
        </div>
      )}
    </div>
  );
}

export default Menu;
