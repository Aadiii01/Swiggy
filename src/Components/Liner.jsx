import React from "react";
import { IoFilter } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";



export function LinearCarousel(props) {
    const {name,margin,icon: Icon,dfddd,size} = props;
  return (
      <div className="mr-[8px]">
        <div className="pt-[9px] pb-[9px] pl-[12px] pr-[10px] rounded-[18px] bg-[#ffffff] border-[1px] border-solid border-[#e2e2e7] inline-grid grid-flow-col gap-[8px] shadow-md text-opacity-4">
          <div className="font-newl text-[14px] leading-[18px] tracking-minus text-[#02060cbf] font-bold">{name}</div>
          <div className={`max-h-[16px] ${margin}`}>
            {Icon && (
                <div className={`max-h-[16px] mt-[1px] ${dfddd} ${size}`}>
                    <Icon /> {/* Render the icon component if it exists */}
                </div>
            )}
          </div>
        </div>
      </div>
  );
}


const Liner = (props) =>  {
  return (
    <div className="mr-[4px] ml-[207px] mt-[15px]">
      <div className="h-[44px] w-full">
        <div className="flex h-[44px] w-full items-center bg-[#ffffff] cursor-pointer">

          <LinearCarousel name = "Filter" icon={IoFilter} margin="mt-[1px]"/>
          <LinearCarousel name = "Sort By" icon={IoIosArrowDown} margin="ml-[-5px]"/>
          <LinearCarousel name = "Fast Delivery"/>
          <LinearCarousel name = "New on Swiggy"/>
          <button onClick={props.handleRatingFilter} >
          <LinearCarousel name = "Ratings 4.0+"/>
          </button>
          <LinearCarousel name = "Pure Veg"/>
          <LinearCarousel name = "Offers"/>
          <LinearCarousel name = "Rs. 300-Rs. 600"/>
          <LinearCarousel name = "Less than Rs. 300"/>

        </div>
      </div>
    </div>
  );
}

export default Liner;