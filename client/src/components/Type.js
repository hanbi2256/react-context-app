import React, { useEffect, useState } from "react";
import axios from "axios";
import Products from "./Products";

const Type = (orderType) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    loadItems(orderType);
  }, [orderType]);

  const loadItems = async () => {
    try {
      await axios.get(`http//locallhost:4000/${orderType}`);
      setItems(Response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const ItemComponent = orderType === "products" ? Products : null;

  const optionItems = itmes.map((item) => {
    <ItemComponent 
    key={item.name}
    name={item.name}
    imagePath={item.imagePath}
    />;
  });
  return (
    <div>
      <h2>주문 종류</h2>
      <p>하나의 가격</p>
      <p>총 가격:</p>
      <div
        style={{
          display: "flex",
          flexDirection: orderType === "options" ? "column" : "row",
        }}
      ></div>
    </div>
  );
};

export default Type;
