import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import Loader from "../COmponents/Loader";
import { toast } from "react-hot-toast";
import { Helmet } from "react-helmet";
import axios from "axios";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);
  const { user } = useAuth();

  useEffect(() => {
    const url = `https://drivy-server.vercel.app/carts/${user?.email}`;
    axios.get(url, { withCredentials: true }).then((res) => {
      setCart(res.data);
      setLoading(false);
    });
  }, [user?.email]);
  let tPrice = 0;

  useEffect(() => {
    cart?.map((item) => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      tPrice += item.price;
      setTotalPrice(tPrice);
    });
  }, [cart]);
  const handleDeleteOne = (_id) => {
    fetch(`https://drivy-server.vercel.app/carts/${_id}`, {
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
    fetch(`https://drivy-server.vercel.app/cart/${user?.email}`, {
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
      <Helmet>
        <title>Drivy | Cart</title>
      </Helmet>
      <div className="max-w-7xl mx-auto py-20">
        <h3 className="text-5xl font-bold  text-center pb-10">My Cart</h3>

        <table className="table md:text-xl font-medium">
          <thead className="w-full ">
            <tr className="w-full">
              <th className="w-1/2">Product Image</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>

          {loading ? (
            <Loader />
          ) : (
            <tbody>
              {cart?.map((item) => (
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
              ))}
              <tr>
                <th></th>
                <td>Total</td>
                <td>{totalPrice} $</td>
                <td></td>
              </tr>
            </tbody>
          )}
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
