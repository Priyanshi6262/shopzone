import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div style={cardStyle}>
      <img src={product.thumbnail} alt={product.title} width="100%" />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <Link to={`/product/${product.id}`}>View Details</Link>
    </div>
  );
};

const cardStyle = {
  border: "1px solid #ddd",
  padding: "15px",
  borderRadius: "8px",
};

export default ProductCard;
