import React from "react";
import { useCart } from "react-use-cart";
const Item = (props) => {
  const { addItem } = useCart();
  
  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div className="card p-4 list-menu ">
        <img src={props.img} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.price}$</p>
          <button
            className="btn btn-success"
            onClick={() =>
              addItem({
                id: props.id,
                img: props.img,
                title: props.name,
                desc: props.description,
                price: props.price,
              })
            }
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default Item;
