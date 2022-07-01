import React, { Component, useEffect, useState } from "react";
import Item from "./Item";
import axios_instance from "./libs/axiosInstance";
import queryString from 'query-string';

const Cart = () => {
  const [data, setData] = useState(undefined);

  useEffect(() => {

    let search = window.location.search;
    let params = queryString.parse(search);

    console.log(params["bakery_shop_id"])

    axios_instance
      .get("/cakes", {
        params: {
          bakery_shop_id: params["bakery_shop_id"]
        }
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (!data)
    return (
      <div>
        <div className=" container">
          <div className="row justify-content-center">Loading...</div>
        </div>
      </div>
    );

  return (
    <div>
      <div className=" container">
        <div className="row justify-content-center">
          {data.cakeList.map((item, index) => {
            return (
              <Item
                img={item.thumbnail}
                title={item.name}
                desc={item.description}
                price={item.price}
                id={item.id}
                key={item.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
