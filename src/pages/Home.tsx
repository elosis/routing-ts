import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ShopContext, ShopLayer } from "../stores/context";
import "../App.css";

export interface ProductResponse {
  id: number;
  price: number;
  name: string;
  description: string;
  imageUrl: string;
}

const Home = () => {
  const { loadingProducts, loading, products } = useContext(ShopContext);

  const navigate = useNavigate();

  loadingProducts();

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="container">
      {products?.map((data, i) => (
        <div
          onClick={() => navigate(`details/${data.id}`)}
          key={i}
          style={{ marginBottom: "50px", cursor: "pointer" }}
        >
          <div>{data?.name}</div>
          <img
            src={data?.imageUrl}
            alt={data?.name}
            style={{ width: "250px" }}
          />
          <div>{data?.description}</div>
          <div>{data?.price}</div>
        </div>
      ))}
    </div>
  );
};

export default Home;
