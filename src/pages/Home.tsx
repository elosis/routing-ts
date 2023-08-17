import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export interface ProductResponse {
  id: number;
  price: number;
  name: string;
  description: string;
  imageUrl: string;
}

const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Array<ProductResponse>>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(loading);
    const getData = async () => {
      await axios
        .get<ProductResponse[]>(
          "https://dbqqpttscfcjwuygmztw.supabase.co/rest/v1/product?select=*",
          {
            headers: {
              apikey:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRicXFwdHRzY2Zjand1eWdtenR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEzNDY5NDQsImV4cCI6MjAwNjkyMjk0NH0.mDo2Q0Oc39rsFS1GVz1PKyBCWZt44AjRKhbdYkk7KXM",
            },
          }
        )
        .then((res) => setProducts(res.data))
        .catch((ex) => {
          const error = ex.response.status === 404 ? "error " : " no error";
          setError(error);
        });
      setLoading(false);
    };
    getData();
  }, []);

  console.log(products, "allData");

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div>
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
