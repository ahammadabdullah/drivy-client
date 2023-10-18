import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch(
      "https://drivy-server-5l2dwm0tc-ahammad-abdullahs-projects.vercel.app/brands"
    )
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center my-12 ">
        <h3 className="text-4xl lg:text-6xl font-semibold pb-4 lg:pt-10">
          Brands{" "}
        </h3>
        <p className="font-medium lg:text-3xl ">
          <span className="font-bold px-2">-</span>
          The Autos We Deals In
          <span className="font-bold px-2">-</span>
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6  text-primary font-bold text-2xl text-center">
        {brands?.map((brand) => (
          <Link key={brand._id} to={`/brands/${brand?.brand_name}`}>
            <div
              className="w-[250px] mx-auto mb-6 dark:bg-gray-300  p-4"
              title="click to see details"
            >
              <div className="h-[250px] flex items-center">
                <img className="w-full " src={brand?.brand_photo} alt="" />
              </div>
              <h3>{brand?.brand_name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Brands;
