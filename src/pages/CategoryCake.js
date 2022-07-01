import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Navfooter from "../components/Navfooter";
import Cart from "../Cart";
import CategoryCart from "../CategoryCart";
function Category() {
  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* appear screen */}
      <CategoryCart />
      {/* Footer */}
      <Navfooter />
    </>
  );
}

export default Category;
