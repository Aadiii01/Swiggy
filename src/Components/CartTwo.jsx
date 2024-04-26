import { Trash } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { dishURL } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { clearCart, removeItem } from "../Utils/cartSlice";

function CartTwo() {
  const cartItems = useSelector((store) => store.cart.items);

  const [quantities, setQuantities] = useState({});
  const [totalAmount, setTotalAmount] = useState(0); // State to hold the total amount
  const [discount, setDiscount] = useState(0); // State to hold the discount amount

  // Function to calculate the total amount based on quantities
  const calculateTotalAmount = () => {
    let total = 0;
    cartItems.forEach((food) => {
      const quantity = quantities[food.id] || 1; // Get the quantity of each item
      const price = food.price ? food.price / 100 : food.defaultPrice / 100; // Get the price of each item
      total += quantity * price; // Calculate the total for each item
    });
    return total.toFixed(2);
  };

  // Update the total amount and discount whenever the cart items or quantities change
  useEffect(() => {
    const totalPrice = calculateTotalAmount();
    setTotalAmount(totalPrice);

    // Apply discount if total price is greater than 500
    if (totalPrice > 500) {
      setDiscount(50);
    } else {
      setDiscount(0);
    }
  }, [cartItems, quantities]);

  const handleQuantityChange = (id, value) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: value,
    }));
  };

  const handleAdd = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 0) + 1,
    }));
  };

  const handleMinus = (id) => {
    if (quantities[id] > 1) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [id]: prevQuantities[id] - 1,
      }));
    }
  };
  const dispatch = useDispatch();
  const handleclearcart = () => {
    dispatch(clearCart());
  };
  const handleremove = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="mx-auto max-w-7xl px-2 lg:px-0 mt-[80px]">
      <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
        <h1 className="text-3xl font-bold font-new tracking-tight text-gray-900 sm:text-4xl">
          Food Cart
        </h1>
        <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section
            aria-labelledby="cart-heading"
            className="rounded-lg bg-white lg:col-span-8"
          >
            <ul role="list" className="divide-y divide-gray-200">
              {cartItems.map((food) => (
                <div key={food.id} className="">
                  <li className="flex py-6 sm:py-6 ">
                    <div className="flex-shrink-0">
                      <img
                        src={
                          food.imgid
                            ? dishURL + food.imgid
                            : "Swiggy_logo_PNG1.png"
                        }
                        alt={food.name}
                        className="sm:h-38 sm:w-38 h-[144px] w-[156px] rounded-[12px] object-cover"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                      <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                        <div>
                          <div className="mt-[5px] flex justify-between">
                            <h3 className="text-sm">
                              <a className="font-newb font-medium text-[16.8px] tracking-minus text-[#535665]">
                                {food.dishtitle}
                              </a>
                            </h3>
                          </div>
                          <div className="mt-[12px] flex items-end">
                            <p className="text-sm font-newr font-medium text-gray-900">
                              {`₹ ${(
                                (food.price
                                  ? food.price / 100
                                  : food.defaultPrice / 100) *
                                (quantities[food.id] || 1)
                              ).toFixed(2)}`}
                            </p>
                          </div>
                          {food.description ? (
                            <div className="mt-[13px] w-[600px] font-newr text-[16px] font-medium tracking-[-0.3px] leading-4 text-[#02060c99]">
                              {food.description}
                            </div>
                          ) : (
                            <div className="mt-[13px] w-[600px] font-newr text-[16px] font-medium tracking-[-0.3px] leading-4 text-[#02060c99]">
                              Food is art, and food is love. And we should show
                              love and appreciation for those who cook it by
                              eating it with relish.
                            </div>
                          )}
                          <div className="flex mt-[14px] ml-[2px]">
                            {food.ratings && (
                              <div className="w-[14px] h-[14px]">
                                <svg
                                  width="14"
                                  height="14"
                                  viewBox="0 0 14 14"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  role="img"
                                  fillcolor="#1BA672"
                                >
                                  <rect
                                    width="14"
                                    height="14"
                                    fill="white"
                                  ></rect>
                                  <path
                                    d="M5.67163 3.99166C6.22068 2.34179 6.49521 1.51686 7 1.51686C7.50479 1.51686 7.77932 2.34179 8.32837 3.99166L8.65248 4.96556H9.60668C11.4122 4.96556 12.315 4.96556 12.4703 5.45302C12.6256 5.94049 11.8893 6.4628 10.4167 7.50744L9.67376 8.03444L9.97544 8.94095C10.5325 10.615 10.8111 11.452 10.4033 11.754C9.99553 12.056 9.27604 11.5457 7.83705 10.5249L7 9.93112L6.16295 10.5249C4.72396 11.5457 4.00447 12.056 3.5967 11.754C3.18893 11.452 3.46747 10.615 4.02456 8.94095L4.04557 8.87783C4.18081 8.47145 4.24843 8.26825 4.18684 8.08006C4.12525 7.89187 3.94958 7.76725 3.59824 7.51802C2.11566 6.46633 1.37437 5.94049 1.52971 5.45302C1.68504 4.96556 2.5878 4.96556 4.39332 4.96556H5.34752L5.67163 3.99166Z"
                                    fill="#1BA672"
                                  ></path>
                                </svg>
                              </div>
                            )}
                            {food.ratings && (
                              <div
                                className={`ml-[2px] font-newb text-[13px] font-bold tracking-[1px] leading-4 ${
                                  parseFloat(food.ratings) < 3.0
                                    ? "text-yellow-500"
                                    : "text-[#1ba672]"
                                }`}
                              >
                                {food.ratings}
                              </div>
                            )}
                            {food.people && (
                              <div className="ml-[2px] font-newm text-[13px] font-medium tracking-[-0.3px] leading-4 text-[#02060c99]">
                                {`(${food.people})`}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <div className="mb-2 flex">
                    <div className="min-w-24 flex">
                      <button
                        type="button"
                        className="h-7 w-7"
                        onClick={() => handleMinus(food.id)}
                      >
                        -
                      </button>
                      <input
                        className="mx-1 h-7 w-9 rounded-md border text-center"
                        value={quantities[food.id] || 1}
                        onChange={(e) =>
                          handleQuantityChange(
                            food.id,
                            parseInt(e.target.value)
                          )
                        }
                        readOnly
                      />

                      <button
                        type="button"
                        className="flex h-7 w-7 items-center justify-center"
                        onClick={() => handleAdd(food.id)}
                      >
                        +
                      </button>
                    </div>
                    <div className="ml-6 flex text-sm">
                      <button
                        type="button"
                        className="flex items-center space-x-1 px-2 py-1 pl-0"
                        onClick={() => handleremove(food.id)}
                      >
                        <Trash size={12} className="text-red-500" />
                        <span className="text-xs font-newb font-medium text-red-500">
                          Remove
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </ul>
          </section>
          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0"
          >
            <div className=" mt-[-50px] px-2 pb-4 font-newr text-[11.6px] font-medium text-[#02060c99]">
              If the Price of the items is above than ₹ 500 then the discount of ₹ 50 is available
            </div>
            <h2
              id="summary-heading"
              className=" border-b border-gray-200 px-4 py-3 text-lg font-new font-medium text-gray-900 sm:p-4"
            >
              Price Details
            </h2>
            <div>
              <dl className=" space-y-1 px-2 py-4">
                <div className="flex items-center justify-between">
                  <dt className="text-sm font-newm text-gray-800">
                    Price ({cartItems.length} item)
                  </dt>
                  <dd className="text-sm font-newr font-medium text-gray-900">
                    ₹ {totalAmount}
                  </dd>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <dt className="flex items-center font-newm text-sm text-gray-800">
                    <span>Discount</span>
                  </dt>
                  <dd className="text-sm font-newr font-medium text-green-700">
                    - ₹ {discount}
                  </dd>
                </div>
                <div className="flex items-center justify-between py-4">
                  <dt className="flex font-newm text-sm text-gray-800">
                    <span>Delivery Charges</span>
                  </dt>
                  <dd className="text-sm font-medium font-newr text-green-700">
                    Free
                  </dd>
                </div>
                <div className="flex items-center justify-between border-y border-dashed py-4 ">
                  <dt className="text-base  font-newb font-medium text-gray-900">
                    Total Amount
                  </dt>
                  <dd className="text-base font-newb font-medium text-gray-900">
                    ₹ {totalAmount - discount}
                  </dd>
                </div>
              </dl>
              <div className="px-2 pb-4 font-newr font-medium text-green-700">
                You will save ₹ {discount} on this order
              </div>
              <button
                className="ml-[270px] mt-[30px] w-[120px] h-[50px] text-center cursor-pointer border-none bg-black rounded-[12px] hover:bg-[#201f1f]"
                onClick={handleclearcart}
              >
                <div className="font-newr text-[18px] tracking-[-0.1px] leading-6 text-[#ffffff]">
                  Clear Cart
                </div>
              </button>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
}

export default CartTwo;
