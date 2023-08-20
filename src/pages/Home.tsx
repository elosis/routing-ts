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
      <div className="main">
        <div className="title">
          <h1>Ticketless</h1>
          <h2 className="subtitle">Gigs you don't want to miss!</h2>
        </div>
        <div className="gigs-container">
          {products?.map((data, i) => (
            <div
              className="product-container"
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
              <div
                onClick={() => navigate(`details/${data.id}`)}
                style={{ color: "blue" }}
              >
                Buy
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="footer">
        <p>
          <strong>Ticketless</strong>by{" "}
          <a href="https://serverlesslab.com">Serverlesslab</a>. A sample
          application for learning Serverless on AWS.
        </p>
        <p>
          The <a href="https://github.com/lucpod/ticketless">source code</a> is
          licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The
          website content is licensed{" "}
          <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
            CC BY NC SA 4.0
          </a>
          .
        </p>
        <p>
          <a href="http://bulma.io" target="_blank">
            <small>
              Made with <strong>bulma</strong>
            </small>
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Home;
