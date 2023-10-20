import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Slider from "../COmponents/Slider";
import Loader from "../COmponents/Loader";
import { Helmet } from "react-helmet";

const CarShop = () => {
  const params = useParams();
  const { brand_name } = params;
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://drivy-server.vercel.app/cars/${brand_name}`)
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
        setLoading(false);
      });
  }, [brand_name]);

  return (
    <div className="max-w-7xl mx-auto ">
      <Helmet>
        <title>Drivy | {brand_name}</title>
      </Helmet>
      <Slider></Slider>
      {loading ? (
        <Loader />
      ) : cars.length > 0 ? (
        <>
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
                  <h3>Rating: {car?.rating} </h3>

                  <div className="card-actions">
                    <Link to={`/cars/${car._id}`}>
                      <button className="btn rounded-none text-white bg-primary hover:bg-white hover:text-primary border-primary">
                        Details
                      </button>
                    </Link>
                    <Link to={`/cars/update/${car._id}`}>
                      <button className="btn rounded-none text-white bg-primary hover:bg-white hover:text-primary border-primary">
                        Update
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="h-screen flex items-center text-4xl lg:text-6xl text-center font-bold">
          {" "}
          <h3 className="lg:w-1/2 mx-auto">
            Sorry No {brand_name} Car Available at the moment
          </h3>
        </div>
      )}
    </div>
  );
};

export default CarShop;
