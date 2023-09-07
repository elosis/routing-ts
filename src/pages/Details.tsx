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
      <div className="product-card">
        <img src={singleProduct?.imageUrl} alt={singleProduct?.name} />
        <table>
          <tr>
            <th className="panel-border">{singleProduct?.name}</th>
          </tr>
          <tr>
            <td className="panel-border">{singleProduct?.description}</td>
          </tr>
          <tr>
            <td className="panel-border">{singleProduct?.price}</td>
          </tr>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
