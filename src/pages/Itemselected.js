import React from "react";
import { useCart } from "react-use-cart";

const Itemselected = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    updateItemQuantity,
    removeItem,
  } = useCart();

  if (isEmpty) return <h2 className="txt-cart">Your cart is empty</h2>;

  return (
    <section className="py-4 container" style={{ backgroundColor: "white" }}>
      <div className="row justify-content-center">
        <div className="col-12">
          <h5>
            Cart({totalUniqueItems}) total item: ({totalItems}){" "}
          </h5>
          <table className="table table-light table-hover m-0">
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img
                        src={item.img}
                        style={{ height: "6rem", width: "90px" }}
                      />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.desc}</td>
                    <td>${item.price * item.quantity}</td>
                    <td>Quantity{item.quantity}</td>

                    <td>
                      <button
                        className="btn btn-info ms-2 btn-green"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-info ms-2 btn-green"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-info ms-2 btn-green "
                        onClick={() => removeItem(item.id)}
                      >
                        Remove item
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <button className="btn btn-info ms-2 btn-pay">Pay Now</button>
    </section>
  );
};

export default Itemselected;
