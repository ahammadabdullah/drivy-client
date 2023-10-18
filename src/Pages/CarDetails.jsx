import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:4000/car/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCar(data);
        setLoading(false);
      });
  }, [id]);
  return (
    <div className="max-w-7xl mx-auto">
      {loading ? (
        <div className="h-screen  flex items-center">
          {" "}
          <span className="mx-auto loading loading-bars loading-lg"></span>
        </div>
      ) : (
        <div className="w-full my-10">
          <img src={car?.ImageURL} alt="cars" className="rounded-md" />
          <div className="text-center">
            <h2 className="text-4xl lg:text-6xl  font-semibold  py-10">
              {car?.brand_name} {car?.Name}{" "}
            </h2>
            <div className="text-xl lg:text-2xl space-y-4 lg:w-1/2 w-3/4 mx-auto">
              <h3>
                Type: <span className="font-semibold">{car?.type}</span>
              </h3>
              <h3>
                Price: <span className="font-semibold">{car?.price}?</span>
              </h3>
              <h3>
                Price: <span className="font-semibold">{car?.rating}</span>
              </h3>
              <h3> {car?.short_description} </h3>
            </div>
            <Link to={`/cars/${car._id}`}>
              <button className="mt-6 btn rounded-none text-white bg-primary hover:bg-white hover:text-primary border-primary">
                Add to Cart
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarDetails;
