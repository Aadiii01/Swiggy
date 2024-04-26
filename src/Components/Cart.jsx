import React from "react";
import { Link } from "react-router-dom";
import "./cart.css";
import { useSelector } from "react-redux";
import CartTwo from "./CartTwo"

function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  return cartItems.length != 0 ? <CartTwo/> : (
    <>
      <div className="grow">
        <div className="w-full h-[550px] flex items-center flex-col justify-center text-center">
          <div className="w-[271px] h-[256px] css mt-[120px]"></div>
          <div className="mt-[20px] ml-[38px] font-newb font-bold text-[#535665] text-[18px]">
            Your cart is empty
          </div>
          <div className="mt-[12px] ml-[38px] font-newl font-medium text-[#535665] text-[14px] tracking-[0.5px]">
            You can go to home page to view more restaurants
          </div>
          <Link to="/home">
            <div className="mt-[46px] ml-[40px] pt-[11px] pb-[11px] pr-[20px] pl-[20px] bg-[#fc8019] cursor-pointer font-newb font-bold text-[18px] text-center text-[#ffffff] uppercase tracking-[0.3px]">
              See restaurants near you
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Cart;
