import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <div className="logo">
          <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/food-app-icon-food-explorer-design-template-8ae900e41ccbc0a2e1b48a85d239e389_screen.jpg?ts=1585237320" />
        </div>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>

          <li>About Us</li>

          <li>Contact</li>

          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
