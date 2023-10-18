import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import Loader from "../COmponents/Loader";

const Update = () => {
  const { id } = useParams();
  const [car, setCar] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      `https://drivy-server-5l2dwm0tc-ahammad-abdullahs-projects.vercel.app/car/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCar(data);
        setLoading(false);
      });
  }, [id]);
  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const Name = form.name.value;
    const ImageURL = form.photo.value;
    const type = form.type.value;
    const price = parseInt(form.price.value);
    const rating = parseFloat(form.rating.value).toFixed(1);
    const short_description = form.short_description.value;
    const newCar = {
      ImageURL,
      Name,
      type,
      price,
      rating,
      short_description,
    };
    fetch(
      `https://drivy-server-5l2dwm0tc-ahammad-abdullahs-projects.vercel.app/car/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCar),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.modifiedCount > 0) toast.success("Updated Successfully");
      });
  };
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="bg-base-300  ">
          <div className="max-w-7xl mx-auto pt-20">
            <div className="pb-20">
              <div className="md:w-2/4 w-[90%] bg-white text-center mx-auto ">
                <div className="w-3/4 mx-auto">
                  <h3 className="text-3xl font-bold pt-20 pb-10 text-primary">
                    Update Product
                  </h3>
                  <hr />
                  <form onSubmit={handleUpdateProduct} className="pt-10">
                    <label className="block text-left">Name</label>
                    <input
                      defaultValue={car.Name}
                      className="w-full bg-gray-100 py-5 pl-5 my-4 focus:outline-primary text-primary"
                      type="text"
                      name="name"
                      placeholder="Name"
                    />

                    <label className="block text-left">photo URL</label>
                    <input
                      defaultValue={car.ImageURL}
                      className="w-full bg-gray-100 py-5 pl-5 my-4 focus:outline-primary text-primary"
                      type="text"
                      name="photo"
                      placeholder="photo URL"
                    />
                    <label className="block text-left">Type</label>
                    <input
                      defaultValue={car.type}
                      className="w-full bg-gray-100 py-5 pl-5 my-4 focus:outline-primary text-primary"
                      type="text"
                      name="type"
                      placeholder="Type"
                    />
                    <label className="block text-left">Price</label>
                    <input
                      defaultValue={car.price}
                      className="w-full bg-gray-100 py-5 pl-5 my-4 focus:outline-primary text-primary"
                      type="number"
                      name="price"
                      placeholder="Price"
                    />
                    <label className="block text-left">Rating</label>
                    <input
                      defaultValue={car.rating}
                      className="w-full bg-gray-100 py-5 pl-5 my-4 focus:outline-primary text-primary"
                      type="number"
                      name="rating"
                      placeholder="Rating"
                    />
                    <label className="block text-left">Short Description</label>
                    <input
                      defaultValue={car.short_description}
                      className="w-full bg-gray-100 py-5 pl-5 my-4 focus:outline-primary text-primary"
                      type="text"
                      name="short_description"
                      placeholder="Short Description"
                    />
                    <input
                      className="w-full mb-10 bg-primary text-white py-4  my-4"
                      type="submit"
                      value="Update Product"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Update;
