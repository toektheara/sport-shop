import React from "react";
import Itemselected from "./Itemselected";
const ShowItemSelectd = () => {
  
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid navbar-login">
          <div className="collapse navbar-collapse" id="navbarNav">
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
                  CAKE
                </a>
              </li>
              <li>
                <a href="/shop" id="list">
                  SHOP
                </a>
              </li>
              <li>
                <a href="/login" id="list">
                  LOGIN
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container item-selected">
          <Itemselected />
      </div>
    </>
  );
};
export default ShowItemSelectd;
