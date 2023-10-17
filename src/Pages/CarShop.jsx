import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CarShop = () => {
  const params = useParams();
  const { brand_name } = params;
  console.log(brand_name);
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/cars/${brand_name}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [brand_name]);
  return <div>brand shop :{brand_name}</div>;
};

export default CarShop;
