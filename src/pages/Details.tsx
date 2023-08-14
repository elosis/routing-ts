import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { data } from "./Home";

const Details = () => {
  const { id } = useParams();
  const [getData, setGetData] = useState<any>("");

  useEffect(() => {
    if (id !== undefined) {
      const numberId = Number(id);
      // setGetData(data.find((item) => item.id === numberId));
    }
  }, [id]);

  return (
    <div>
      <div>{getData.name}</div>
      <div>{getData.description}</div>
    </div>
  );
};

export default Details;
