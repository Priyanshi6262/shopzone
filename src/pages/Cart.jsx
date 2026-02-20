import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cartItems, totalPrice } = useContext(CartContext);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart 🛒</h2>

      {cartItems.length === 0 ? (
        <p>No items added.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={index} style={itemStyle}>
              <img src={item.thumbnail} width="80" />
              <div>
                <h4>{item.title}</h4>
                <p>${item.price}</p>
              </div>
            </div>
          ))}

          <h3>Total: ${totalPrice}</h3>
        </>
      )}
    </div>
  );
};

const itemStyle = {
  display: "flex",
  gap: "20px",
  marginBottom: "15px",
  alignItems: "center",
};

export default Cart;
