import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../stores/context";
import Footer from "../components/Footer";
import Title from "../components/Title";
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

  useEffect(() => {
    loadingProducts();
  }, []);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="container">
      <div className="main">
        <Title />
        <div className="gigs-container">
          {products?.map((data, i) => (
            <div
              className="product-container"
              key={i}
              style={{ marginBottom: "50px", cursor: "pointer" }}
            >
              <div>{data?.name}</div>
              <img src={data?.imageUrl} alt={data?.name} />
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
      <Footer />
    </div>
  );
};

export default Home;
