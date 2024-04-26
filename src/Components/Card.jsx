import React from "react";
import { CDN_URL } from "../Utils/constants";
import { useRef } from "react";


function Card(props) {
  // Prop Driling
  const { resData ,dynamicClass, width, height } = props;

  const {
    cloudinaryImageId, 
    name,
    avgRating,
    cuisines,
    areaName,
    sla: { slaString },
    aggregatedDiscountInfoV3,
  } = resData?.info;

  // Check if aggregatedDiscountInfoV3 object is present and if header and subHeader properties exist
  const header = aggregatedDiscountInfoV3?.header ?? "";
  const subHeader = aggregatedDiscountInfoV3?.subHeader ?? "";


  const elementRef = useRef(null);

  const handleMouseMove = (e) => {
    const element = elementRef.current;
    const { clientX, clientY } = e;
    const { left, top, width, height } = element.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const angleX = -(clientY - centerY) / height * 10;
    const angleY = (clientX - centerX) / width * 10;

    element.style.transition = 'transform 0.2s ease';
    element.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
  };

  const handleMouseLeave = () => {
    const element = elementRef.current;
    element.style.transition = 'transform 0.2s ease';
    element.style.transform = 'rotateX(0deg) rotateY(0deg)';
  };

  return (
    <div className={dynamicClass}>
      <div className="w-64 h-60 mb-16 cursor-pointer" ref={elementRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ transformStyle: 'preserve-3d' }}>
        <div className={`${width} ${height} rounded-[16px] overflow-hidden filter drop-shadow-md`} >
          <img
            className="w-full h-full object-cover"
            src={CDN_URL + cloudinaryImageId}
            alt="Pizza Hut"
          />
          <div className="absolute bottom-0 right-0 left-0 grid align-content-end text-left pl-3 pt-[56px] h-20 bg-gradient-to-t from-gray-900 ">
            <div className="font-head uppercase font-semibold text-[1.25rem] tracking-tighter leading-4 text-white opacity-92 truncate">
              {" "}
              {header && subHeader ? `${header} ${subHeader}` : ""}
            </div>
          </div>
        </div>
        <div className="ml-3 mt-3">
          <div className="font-bold text-lg font-newb tracking-new truncate">
            {name}
          </div>
          <div className="grid items-center mt-2 gap-1 grid-flow-col justify-start">
            <div className="mt-[-4px]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                role="img"
                aria-hidden="true"
              >
                <circle
                  cx="10"
                  cy="10"
                  r="9"
                  fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
                ></circle>
                <path
                  d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
                  fill="white"
                ></path>
                <defs>
                  <linearGradient
                    id="StoreRating20_svg__paint0_linear_32982_71567"
                    x1="10"
                    y1="1"
                    x2="10"
                    y2="19"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#21973B"></stop>
                    <stop offset="1" stopColor="#128540"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className=" mt-[-4px] font-newb font-bold text-base leading-4">
              <span>{avgRating} • </span>
              {slaString}
            </div>
          </div>
          <div className="grid items-center mt-2 gap-2">
            <div className="font-newr font-thin text-base text-[#677F8F] leading-4 tracking-news truncate">
              {cuisines.join(", ")}
            </div>
            <div className="font-newr font-thin text-base text-[#677F8F] leading-3 tracking-news">
              {areaName}
            </div>
          </div>
        </div>
      </div>
     </div>
  );
}

export default Card;
