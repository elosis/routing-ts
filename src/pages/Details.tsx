import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ShopContext, ShopLayer } from "../stores/context";
import Title from "../components/Title";
import Footer from "../components/Footer";

export interface SingleProductResponse {
  id: number;
  price: number;
  name: string;
  description: string;
  imageUrl: string;
}

const Details = () => {
  const { setError } = useContext(ShopContext);
  const { id } = useParams();
  const [singleProduct, setSingleProduct] =
    useState<SingleProductResponse | null>();

  useEffect(() => {
    const getData = async () => {
      await axios
        .get<SingleProductResponse[]>(
          `https://dbqqpttscfcjwuygmztw.supabase.co/rest/v1/product?id=eq.${id}&select=*`,
          {
            headers: {
              apikey:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRicXFwdHRzY2Zjand1eWdtenR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEzNDY5NDQsImV4cCI6MjAwNjkyMjk0NH0.mDo2Q0Oc39rsFS1GVz1PKyBCWZt44AjRKhbdYkk7KXM",
            },
          }
        )
        .then((res) => {
          setSingleProduct(res.data[0]);
        })
        .catch((err) => {
          const error =
            err.response && err.response.status === 404 ? "error" : "no error";
          setError(error);
        });
    };
    getData();
  }, [id]);

  return (
    <div className="detail-container">
      <Title />
      <div className="product">
        <div className="product-card">
          <div>
            <img src={singleProduct?.imageUrl} alt={singleProduct?.name} />
            <p style={{ marginLeft: "16px" }}>%100 Polyester</p>
          </div>
          <div>
            <div className="panel-border panel-header">
              {singleProduct?.name}
            </div>
            <div className="panel-border">{singleProduct?.description}</div>
            <div className="panel-border">{singleProduct?.price}</div>
          </div>
        </div>
        <div className="ticket">
          <p style={{ fontWeight: "500", fontSize: "20px" }}>Buy a ticket</p>
          <div className="inner-ticket">
            <div>
              <p className="ticket-names">Name</p>
              <input
                type="text"
                placeholder="Ömer Elaldı"
                className="input-ticket"
              ></input>
            </div>
            <div>
              <p className="ticket-names">Email</p>
              <input
                type="text"
                placeholder="e.g. elaldiomer34@gmail.com"
                className="input-ticket"
              ></input>
            </div>
            <div>
              <p className="ticket-names">Credit Card Number</p>
              <input
                type="text"
                placeholder="e.g. 1234 5678 9012 3456"
                className="input-ticket"
              ></input>
            </div>
            <div className="ticket-expiry">
              <div className="select-date">
                <label className="label">Expiry Month</label>
                <div className="month">
                  <select>
                    <option>1 - Jan</option>
                    <option>2 - Feb</option>
                    <option>3 - Mar</option>
                    <option>4 - Apr</option>
                    <option>5 - May</option>
                    <option>6 - Jun</option>
                    <option>7 - Jul</option>
                    <option>8 - Aug</option>
                    <option>9 - Sep</option>
                    <option>10 - Oct</option>
                    <option>11 - Nov</option>
                    <option>12 - Dec</option>
                  </select>
                </div>
              </div>
              <div className="select-year">
                <label className="label">Expiry Year</label>
                <div className="year">
                  <select>
                    <option>2018</option>
                    <option>2019</option>
                    <option>2020</option>
                    <option>2021</option>
                    <option>2022</option>
                    <option>2023</option>
                    <option>2024</option>
                  </select>
                </div>
              </div>
              <div className="cvc-container">
                <label className="label">CVC</label>
                <div className="cvc">
                  <input
                    type="number"
                    placeholder="e.g. 123"
                    className="cvc-input"
                  ></input>
                </div>
              </div>
            </div>
            <div className="ticket-footer">
              <input type="checkbox" />
              <p>
                I understand this is a demo site and that{" "}
                <strong> I don't have to use a real credit card</strong> I own!
                No attempt to charge the card will be made anyway 😃
              </p>
            </div>
            <button>Purchase</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
