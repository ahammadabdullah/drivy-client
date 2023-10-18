import { Helmet } from "react-helmet";
import { toast } from "react-hot-toast";

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const Name = form.name.value;
    const brand_name = form.brand_name.value;
    const ImageURL = form.photo.value;
    const type = form.type.value;
    const price = parseInt(form.price.value);
    const rating = parseFloat(form.rating.value).toFixed(1);
    const short_description = form.short_description.value;
    const newCar = {
      ImageURL,
      brand_name,
      Name,
      type,
      price,
      rating,
      short_description,
    };
    fetch(
      "https://drivy-server-5l2dwm0tc-ahammad-abdullahs-projects.vercel.app/cars",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCar),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) toast.success("Product Added successfully");
      });
  };
  return (
    <div>
      <Helmet>
        <title> Add Product</title>
      </Helmet>
      <div className="bg-base-300  ">
        <div className="max-w-7xl mx-auto pt-20">
          <div className="pb-20">
            <div className="md:w-2/4 w-[90%] bg-white text-center mx-auto ">
              <div className="w-3/4 mx-auto">
                <h3 className="text-3xl font-bold pt-20 pb-10 text-primary">
                  Add Product
                </h3>
                <hr />
                <form onSubmit={handleAddProduct} className="pt-10">
                  <label className="block text-left">Name</label>
                  <input
                    className="w-full bg-gray-100 py-5 pl-5 my-4 focus:outline-primary text-primary"
                    type="text"
                    name="name"
                    placeholder="Name"
                  />
                  <label htmlFor="brand_name" className="block text-left">
                    Brand Name
                  </label>
                  <select
                    title="Brand Name"
                    name="brand_name"
                    className="w-full bg-gray-100 py-5 pl-5 my-4 focus:outline-primary text-primary"
                  >
                    <option value="Toyota">Toyota</option>
                    <option value="Ford">Ford</option>
                    <option value="BMW">BMW</option>
                    <option value="Mercedes-Benz">Mercedes-Benz</option>
                    <option value="Tesla">Tesla</option>
                    <option value="Honda">Honda</option>
                  </select>
                  <label className="block text-left">photo URL</label>
                  <input
                    className="w-full bg-gray-100 py-5 pl-5 my-4 focus:outline-primary text-primary"
                    type="text"
                    name="photo"
                    placeholder="photo URL"
                  />
                  <label className="block text-left">Type</label>
                  <input
                    className="w-full bg-gray-100 py-5 pl-5 my-4 focus:outline-primary text-primary"
                    type="text"
                    name="type"
                    placeholder="Type"
                  />
                  <label className="block text-left">Price</label>
                  <input
                    className="w-full bg-gray-100 py-5 pl-5 my-4 focus:outline-primary text-primary"
                    type="number"
                    name="price"
                    placeholder="Price"
                  />
                  <label className="block text-left">Rating</label>
                  <input
                    className="w-full bg-gray-100 py-5 pl-5 my-4 focus:outline-primary text-primary"
                    type="number"
                    name="rating"
                    placeholder="Rating"
                  />
                  <label className="block text-left">Short Description</label>
                  <input
                    className="w-full bg-gray-100 py-5 pl-5 my-4 focus:outline-primary text-primary"
                    type="text"
                    name="short_description"
                    placeholder="Short Description"
                  />
                  <input
                    className="w-full mb-10 bg-primary text-white py-4  my-4"
                    type="submit"
                    value="Add Product"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
