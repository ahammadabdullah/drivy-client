import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import Loader from "../COmponents/Loader";
import { toast } from "react-hot-toast";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:4000/carts/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCart(data);
        setLoading(false);
      });
  }, [user?.email]);
  let tPrice = 0;

  useEffect(() => {
    cart?.map((item) => {
      tPrice += item.price;
      setTotalPrice(tPrice);
    });
  }, [cart]);
  const handleDeleteOne = (_id) => {
    fetch(`http://localhost:4000/carts/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          const filteredCart = cart.filter((item) => item._id !== _id);
          setCart(filteredCart);
          toast.success("Product Removed successfully");
        }
      });
  };
  const handleClearCart = () => {
    fetch(`http://localhost:4000/cart/${user?.email}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Cart Cleared Successfully");
          setCart([]);
          setTotalPrice(0);
        }
      });
  };
  return (
    <div>
      <div className="max-w-7xl mx-auto py-20">
        <h3 className="text-5xl font-bold text-primary text-center pb-10">
          My Cart
        </h3>

        <table className="table md:text-xl font-medium">
          <thead className="w-full ">
            <tr className="w-full">
              <th className="w-1/2">Product Image</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <Loader />
            ) : (
              cart?.map((item) => (
                <tr key={item._id}>
                  <td>
                    <img className="w-3/4" src={item?.photo} alt="" />
                  </td>
                  <td>
                    {item?.brand_name} {item?.name}
                  </td>
                  <td> {item?.price}$</td>
                  <td className="p-2 text-red-600 ">
                    {" "}
                    <button
                      onClick={() => {
                        handleDeleteOne(item?._id);
                      }}
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))
            )}
            <tr>
              <th></th>
              <td>Total</td>
              <td>{totalPrice} $</td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-evenly py-10">
          <button
            onClick={handleClearCart}
            className="btn py-2 px-4 rounded-none"
          >
            Clear Cart
          </button>
          <button className="btn py-2 px-4 rounded-none">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
