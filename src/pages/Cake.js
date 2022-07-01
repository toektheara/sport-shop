import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Navfooter from "../components/Navfooter";
import Cart from "../Cart";
import useMeContext from "../context/MeContext";

const Cake = () => {
  const [show, setShow] = useState(false);

  const [me] = useMeContext();

  return (
    <>
      {/* Navigation */}
      <Navbar />
      {/* right button*/}
      {me ? (
        <div className="cart-item" onClick={() => setShow(!show)}>
          <p>
            <i class="far fa-calendar-check"></i>: item
          </p>
          <h6>
            <a href="/view-item">View Items</a>
          </h6>
        </div>
      ) : (
        <div className="cart-item" onClick={() => window.alert('Login Needed!')}>
          <p style={{ marginTop: "20px" }}>
            Login Needed!
          </p>
        </div>
      )}
      {/* appear screen */}
      <Cart />
      {/* Footer */}
      <Navfooter />
    </>
  );
};

export default Cake;
