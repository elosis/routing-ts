import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export interface ProductResponse {
  id: number;
  name: string;
  description: string;
}

const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Array<ProductResponse>>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
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
    };
    getData();
  }, []);

  console.log(products, "allData");

  return <div>home page</div>;
};

export default Home;
