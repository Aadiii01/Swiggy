import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import ItemsList from "./ItemList";

function Cardlist({ title, items }) {

  const [showItems, setShowItems] = useState(true);
  const handleClick = () => {
    setShowItems(!showItems);
  };
  return (
    <>
      <div className="relative">
        <div className="relative mt-[24px] mb-[16px] ml-[16px] mr-[16px] ">
          <button
            className="w-full flex justify-between pr-[16px] text-[1.15rem] border-none"
            onClick={handleClick}
          >
            <h3
              className={
                "font-newb font-extrabold tracking-minus leading-4 text-[18px]"
              }
            >
              {title} ({items.length})
            </h3>

            <div className="">
              {showItems ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
          </button>
          {showItems &&
            items.map((item, index) => (
              <ItemsList
                key={item.id}
                dishtitle={item.dishtitle}
                price={item.price}
                ratings={item.ratings}
                people={item.people}
                imgid={item.imgid}
                description={item.description}
                isVeg={item.isVeg}
                defaultPrice={item.defaultPrice}
                data={item}
              />
            ))}
        </div>
        <div className="h-[16px] border-solid border-[8px] border-[#02060c0d] mb-[5px]"></div>
      </div>
    </>
  );
}

export default Cardlist;
