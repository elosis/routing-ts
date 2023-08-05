import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const data = [
    {
      id: 0,
      name: "React",
      description: "React exp",
    },
    {
      id: 1,
      name: "Vue",
      description: "Vue exp",
    },
    {
      id: 2,
      name: "Angular",
      description: "Angular exp",
    },
  ];

  return (
    <div>
      {data.map((data, index) => (
        <div
          onClick={() => navigate("details")}
          key={index}
          style={{ cursor: "pointer", marginBottom: "20px" }}
        >
          <div>{data.name}</div>
          <div>{data.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Home;
