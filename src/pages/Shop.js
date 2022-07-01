import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Navfooter from "../components/Navfooter";
import Item from "../Item";
import axios_instance from "../libs/axiosInstance";
const Shop = () => {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    axios_instance.get('/bakery-shops').then((res) => {
      setData(res.data)
      console.log(res)
    }).catch((err) => {
      console.error(err)
    })
  }, [])

  if (!data)
    return (
      <div>
        <div className=" container">
          <div className="row justify-content-center">
            Loading...
          </div>
        </div>
      </div>
    );

  return (
    <>
      {/* Navigation */}
      <Navbar />
      {/* appear screen */}
      <div>
        <div className=" container">
          <div className="row justify-content-center">
            {data.bakeryShopList.map((item, index) => {
              console.log(item)

              return (
                <ShopItem
                  img={item.thumbnail}
                  title={item.name}
                  desc={item.description}
                  key={item.id}
                  id={item.id}
                />
              );
            })}
          </div>
        </div>
      </div>
      {/* Footer */}
      <Navfooter />
    </>
  );
};

export default Shop;

const ShopItem = (props) => {
  console.log(props)

  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4" key={props.id}>
      <div className="card p-4 list-menu ">
        <img src={props.img} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <a href={`/cake?bakery_shop_id=${props.id}`}>
          <button
            className="btn btn-success"
          >
            View Cakes
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};