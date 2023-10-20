import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../COmponents/Loader";
import { toast } from "react-hot-toast";
import useAuth from "../Hooks/useAuth";
import { Helmet } from "react-helmet";

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newCartData, setNewCartData] = useState([]);
  const { user } = useAuth();
  //car data by id
  useEffect(() => {
    fetch(`https://drivy-server.vercel.app/car/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCar(data);
        setLoading(false);
      });
  }, [id]);
  // all cart data

  const cartData = {
    email: user?.email,
    photo: car.ImageURL,
    name: car.Name,
    brand_name: car.brand_name,
    price: car.price,
  };
  const handleAddToCart = () => {
    //get filtered items with name
    fetch(`https://drivy-server.vercel.app/cart/${car.Name}`)
      .then((res) => res.json())
      .then((data) => {
        setNewCartData(data);
      });
    if (newCartData.length > 0) {
      toast.error("already added to cart");
      return;
    }
    fetch("https://drivy-server.vercel.app/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Added car successfully");
        }
      });
  };

  return (
    <div className="max-w-7xl mx-auto">
      {loading ? (
        <Loader />
      ) : (
        <div className="w-full my-10">
          <Helmet>
            <title>
              {car.brand_name} {car.Name}
            </title>
          </Helmet>
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
                Price: <span className="font-semibold">{car?.price}$</span>
              </h3>
              <h3>
                Rating: <span className="font-semibold">{car?.rating}</span>
              </h3>
              <h3> {car?.short_description} </h3>
            </div>

            <button
              onClick={() => handleAddToCart(car._id)}
              className="handleAddToCart mt-6 btn rounded-none text-white bg-primary hover:bg-white hover:text-primary border-primary"
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarDetails;
