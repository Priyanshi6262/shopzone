import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      
      {/* Hero Section */}
      <section style={heroStyle}>
        <div>
          <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
            Welcome to ShopZone 🛍️
          </h1>
          <p style={{ fontSize: "18px", marginBottom: "30px" }}>
            Discover the best products at unbeatable prices.
            Shop smart. Shop easy. Shop with confidence.
          </p>
          <Link to="/shop">
            <button style={buttonStyle}>Start Shopping</button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section style={sectionStyle}>
        <h2 style={sectionTitle}>Why Shop With Us?</h2>

        <div style={gridStyle}>
          <div style={cardStyle}>
            <h3>🚚 Fast Delivery</h3>
            <p>
              We deliver your products quickly and safely to your doorstep.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>💳 Secure Payments</h3>
            <p>
              100% secure and trusted payment methods for safe transactions.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>⭐ Quality Products</h3>
            <p>
              Carefully selected products with premium quality assurance.
            </p>
          </div>
        </div>
      </section>

      {/* Call To Action Section */}
      <section style={ctaStyle}>
        <h2>Ready to Explore Amazing Deals?</h2>
        <Link to="/shop">
          <button style={ctaButton}>Browse Products</button>
        </Link>
      </section>

      {/* Footer */}
      <footer style={footerStyle}>
        <p>© {new Date().getFullYear()} ShopZone. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;





/* ================== STYLES ================== */

const heroStyle = {
  background: "linear-gradient(to right, #4facfe, #00f2fe)",
  color: "white",
  textAlign: "center",
  padding: "100px 20px",
};

const buttonStyle = {
  padding: "12px 25px",
  fontSize: "16px",
  border: "none",
  borderRadius: "5px",
  background: "#222",
  color: "white",
  cursor: "pointer",
};

const sectionStyle = {
  padding: "60px 20px",
  textAlign: "center",
};

const sectionTitle = {
  fontSize: "32px",
  marginBottom: "40px",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "30px",
};

const cardStyle = {
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
};

const ctaStyle = {
  background: "#222",
  color: "white",
  padding: "60px 20px",
  textAlign: "center",
};

const ctaButton = {
  marginTop: "20px",
  padding: "12px 25px",
  fontSize: "16px",
  border: "none",
  borderRadius: "5px",
  background: "#4facfe",
  color: "white",
  cursor: "pointer",
};

const footerStyle = {
  background: "#111",
  color: "white",
  textAlign: "center",
  padding: "20px",
};
