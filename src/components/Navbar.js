import React from "react";
import useMeContext from "../context/MeContext";
function Navbar() {
  const [me] = useMeContext();

  return (
    <>
      <div className="container-fluid header">
        <div className="container menu">
          <div className="list-left">
            <p>
              <i className="fa fa-phone"></i>: CALL US: 088
            </p>
          </div>
          <div className="list-right">
            <ul>
              <li>
                <a href="/about" id="about">
                  ABOUT US
                </a>
              </li>
              <li>
                <i className="fa fa-globe"></i>:LOCATION
              </li>
              <li>
                <i className="fa fa-shopping-cart"></i>:CAREER
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container brand-shop">
        <div className="left">
          <ul>
            <li id="hello">
              <i class="far fa-edit"></i>
            </li>
            <li>
              <i className="fa fa-globe"></i>
            </li>
          </ul>
        </div>
        <div className="middle">
          <h1>Sport Shop</h1>
          <p>BEST BRAND PRODUCT IN CAMBODIA</p>
        </div>
        <div className="right">
          <ul>
            <li>
              <i className="fa fa-search"></i>
            </li>
            <li>
              <i className="fa fa-shopping-cart"></i>
            </li>
          </ul>
        </div>
      </div>
      <div className="container nav">
        <ul>
          <li>
            <a href="/" id="list">
              HOME
            </a>
          </li>
          <li>
            <a href="/about" id="list">
              ABOUT
            </a>
          </li>
          <li>
            <a href="/cake" id="list">
              T-SHIRT
            </a>
          </li>
          <li>
            <a href="/shop" id="list">
              SHOP{" "}
            </a>
          </li>
          {!me ? (
            <li>
              <a href="/login" id="list">
                LOGIN
              </a>
            </li>
          ) : (
            <li>
              <a href="#" id="list">
                {me.name}
              </a>
            </li>
          )}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
