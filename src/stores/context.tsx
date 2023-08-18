import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

export interface ProductResponse {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface ContextValue {
  products: ProductResponse[];
  setProducts: React.Dispatch<React.SetStateAction<ProductResponse[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  loadingProducts: () => void;
}

const ShopContext = createContext<ContextValue>({
  products: [],
  setProducts: () => {},
  loading: true,
  setLoading: () => {},
  error: "",
  setError: () => {},
  loadingProducts: () => {},
});

function ShopLayer(props: React.PropsWithChildren<{}>) {
  const [products, setProducts] = useState<Array<ProductResponse>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const loadingProducts = useEffect(() => {
    setLoading(true);
    const getData = async () => {
      await axios
        .get(
          "https://dbqqpttscfcjwuygmztw.supabase.co/rest/v1/product?select=*",
          {
            headers: {
              apikey:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRicXFwdHRzY2Zjand1eWdtenR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTEzNDY5NDQsImV4cCI6MjAwNjkyMjk0NH0.mDo2Q0Oc39rsFS1GVz1PKyBCWZt44AjRKhbdYkk7KXM",
            },
          }
        )
        .then((res) => setProducts(res.data))
        .catch((err) => {
          const error =
            err.response.status === 404
              ? "oh no ! there is an error"
              : "no error";

          setError(error);
        });
    };
    getData();
    setLoading(false);
  }, []);

  const data: ContextValue = {
    products,
    setProducts,
    loading,
    setLoading,
    error,
    setError,
    loadingProducts: () => {},
  };

  return (
    <ShopContext.Provider value={data}>{props.children} </ShopContext.Provider>
  );
}

export { useContext, ShopContext, ShopLayer };
