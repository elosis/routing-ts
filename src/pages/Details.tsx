import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ShopContext, ShopLayer } from "../stores/context";

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
          console.log(res.data);
        })
        .catch((err) => {
          const error = err.response.status === 404 ? "error" : "no error";
          setError(error);
        });
    };
    getData();
  }, [id]);

  return (
    <div>
      <div>{singleProduct?.name}</div>
      <img
        src={singleProduct?.imageUrl}
        alt={singleProduct?.name}
        style={{ width: "250px" }}
      />
      <div>{singleProduct?.description}</div>
      <div>{singleProduct?.price}</div>
    </div>
  );
};

export default Details;
