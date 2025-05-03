import "./menu.css";

function MenuItemCard({ name, image, price,addItemToCart }) {
  return (
    <div className="menu-card">
      <img src={image} alt={name} className="menu-img" />
      <h4 className="dishname">{name}</h4>
      <p className="price">₹{price}</p>
      <button onClick={addItemToCart}>Add to Cart +1</button>
    </div>
  );
}

export default MenuItemCard;
