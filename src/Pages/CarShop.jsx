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
      .then((data) => setCars(data));
  }, [brand_name]);
  return (
    <div className="max-w-7xl mx-auto my-10">
      <h3 className="text-4xl lg:text-6xl  font-semibold text-center py-10 ">
        {" "}
        {brand_name}
      </h3>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {cars?.map((car) => (
          <div
            key={car._id}
            className="card w-96 bg-base-100 shadow-xl mb-6 mx-auto md:shadow-none lg:shadow-lg"
          >
            <figure className="px-10 pt-10">
              <img
                src={car?.ImageURL}
                alt="cars"
                className="rounded-xl h-[170px] w-[302px]"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">
                {car?.brand_name} {car?.Name}{" "}
              </h2>
              <h3>Type: {car?.type}</h3>
              <h3>Price: {car?.price} $</h3>
              <h3>Rating: {car?.rating} $</h3>

              <div className="card-actions">
                <button className="btn text-white bg-primary-default hover:bg-white hover:text-primary-default border-primary-default">
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarShop;
