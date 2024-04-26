import React, {useState, useRef, useEffect } from "react";
import "./stylesres.css"
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { BiFoodTag } from "react-icons/bi";
import { LinearCarousel } from "../../Components/Liner.jsx"
import Shimmer from "../Shimmer/Shimmer"
import useResturantMenu from "../../Utils/useResturantMenu"
import Cardlist from "./Cardlist";
import Offercard from "./Offercard";


function Resturantmenu() {

  const carouselRef = useRef(null);
  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  const {resID} = useParams();
  const resInfo = useResturantMenu(resID);

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    avgRatingString,
    totalRatingsString,
    costForTwoMessage,
    areaName,
    sla: { slaString },
    feeDetails: { message },
  } = resInfo?.cards[2]?.card?.card?.info;

  // Destructre the offers array from API
  const offers = resInfo?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers;
  const itemsheading = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  return (
    <>
      <div>
        {/* Main Page */}
        <div className="max-w-[800px] min-h-[800px] mt-[100px] mb-[0px] mr-auto ml-auto">
          {/* Home/ResturantName */}
          <div className="max-w-[700px] min-w-[700px] z-7 h-[30px] font-newr text-[9px] text-[#93959f] flex items-center relative mt-[0px] mb-[0px] mr-[0px] ml-[0px] ">
            <span>
              <Link
                to="/home"
                className="mt-[0px] mb-[0px] mr-[5px] ml-[5px] decoration-inherit cursor-pointer"
              >
                <span className="decoration-inherit">
                  Home {"\u00A0"}/{"\u00A0"}{" "}
                </span>
                <span className="text-[#535665] font-newm text-[9px]">
                  {name}
                </span>
              </Link>
            </span>
          </div>

          <div>
            {/* Hotel Name */}
            <div className="flex items-start flex-col justify-center ml-[26px] mb-[22px] mt-[30px]">
              <div>
                <h1 className="font-new font-extrabold text-[24px] leading-7 tracking-minus text-[#02060c]">
                  {name}
                </h1>
              </div>
            </div>

            {/* Gradiend Box */}
            <div className="bg-gradient pt-[0px] pb-[16px] pl-[16px] pr-[16px] rounded-bl-[36px] rounded-br-[36px]">
              {/* White Box */}
              <div className="rounded-[20px] border-solid border-[1px] shadow-md bg-white">
                <div className="mb-[20px]"></div>

                {/* Star and 2 Haeding */}
                <div className="flex items-center mt-[0px] mb-[0px] mr-[16px] ml-[16px]">
                  {/* Star */}
                  <div className="w-[20px] h-[20px] mr-[4px] mt-[0px] leading-0">
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
                  {/* Haeding 1 */}
                  <div className="font-newb font-bold text-[16px] leading-[19px] tracking-minus text-[#02060c]">
                    {`${avgRatingString} (${totalRatingsString})`}
                  </div>
                  {/* . */}
                  <div className="mt-[0px] mb-[0px] mr-[8px] ml-[8px] font-newb font-extralight  text-[16px] leading-[19px] tracking-minus text-[#02060c73]">
                    •
                  </div>
                  {/* Haeding 3 */}
                  <div className="font-newb font-extralight  text-[16px] leading-[19px] tracking-minus text-[#02060ceb]">
                    {costForTwoMessage}
                  </div>
                </div>

                {/* Indian , North Indian */}
                <div className="flex items-center mt-[8px] mb-[8px] mr-[20px] ml-[20px]">
                  <Link className="">
                    <div className="underline font-newb font-bold  text-[14px] leading-[17px] tracking-minus text-[#f15700]">
                      {cuisines.join(", ")}
                    </div>
                  </Link>
                </div>

                {/* Outlet Sector 8 */}
                <div className="flex items-center mt-[0px] mb-[0px] mr-[20px] ml-[20px] pt-[4px] pb-[4px] pl-[0px] pr-[0px]">
                  {/* Simple 2 dots and 1 line */}
                  <div className="flex items-start flex-col">
                    <div className="w-[7px] h-[7px] rounded-full bg-[#c4c4c4]"></div>
                    <div className="w-[2px] h-[23px] bg-[#c4c4c4] ml-[2.5px]"></div>
                    <div className="w-[7px] h-[7px] rounded-full bg-[#c4c4c4]"></div>
                  </div>
                  {/* Outlet and Sector 8 */}
                  <div className="flex flex-col justify-center ml-[12px] pr-[16px] w-full">
                    <div className="flex mb-[2px]">
                      <div className="font-newb font-bold  text-[14px] leading-[18px] tracking-minus text-[#02060ceb]">
                        Outlet
                      </div>
                      <div className="max-w-[70%] ml-[12px] text-center font-newr font-extralight  text-[14px] leading-[18px] tracking-minus text-[#02060c99]">
                        {areaName}
                      </div>
                    </div>
                    {/* 25-30 minutes */}
                    <div className="flex mt-[8px]">
                      <div className="font-newb font-bold  text-[14px] leading-[18px] tracking-minus text-[#02060ceb]">
                        {slaString}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Simple line */}
                <hr className="border-solid mt-[12px] mb-[12px] ml-[0] mr-[0] bg-[#f0f0f5]"></hr>

                {/* 0.8kms and cycle logo */}
                <ul className="m-0 p-0 list-none">
                  <li className="flex items-center ml-[16px] mr-[16px]">
                    <img
                      src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/v1648635511/Delivery_fee_new_cjxumu"
                      className="w-[20px] h-[20px] mr-[8px]"
                    />
                    <div
                      className="font-newr font-extralight  text-[14px] leading-[18px] tracking-minus text-[#02060c99]"
                      dangerouslySetInnerHTML={{ __html: message }}
                    ></div>
                  </li>
                </ul>

                <div className="mb-[16px]"></div>
              </div>
            </div>

            {/* Deals for you section */}
            {offers && (
              <div className="mt-[16px] mb-[16px] ml-[16px] mr-[16px] cursor-pointer relative">
                {/* Slider button */}
                <div className="flex absolute mt-3 right-[-15px]">
                  <button
                    onClick={scrollLeft}
                    className="bg-transparent border-none cursor-pointer inline m-0 p-0 opacity-50"
                  >
                    <div className="mr-4 rounded-full h-34 p-[8px] bg-gray-300">
                      <FaArrowLeft />
                    </div>
                  </button>
                  <button
                    onClick={scrollRight}
                    className="bg-transparent border-none cursor-pointer inline mr-[11px] p-0"
                  >
                    <div className="rounded-full h-34 p-[8px] bg-gray-300">
                      <FaArrowRight />
                    </div>
                  </button>
                </div>

                {/* Section start */}
                <div>
                  <div className="bg-white overflow-hidden">
                    {/* Main Line "Deals for you section" */}
                    <div className="flex mt-[16px] mb-[16px] ml-[0px] mr-[0px] bg-white overflow-hidden items-baseline justify-between">
                      <h2 className="font-new text-[20px] leading-6 tracking-minus font-extrabold text-[#02060ceb]">
                        Deals for you
                      </h2>
                    </div>

                    {/* Carousel Section */}
                    <div className="ml-[0px] mr-[0px]  overflow-y-hidden">
                      <div
                        className="flex overflow-x-scroll scrollbar-hide md:scrollbar-default"
                        ref={carouselRef}
                      >
                        {offers.map((offer, index) => (
                          <Offercard
                            key={index}
                            offername={offer?.info?.header}
                            coupencode={offer?.info?.couponCode}
                            img={offer?.info?.offerLogo}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Menu Icon */}
            <div className="flex flex-row justify-center items-center pt-[20px] pb-[16px] pl-[0px] pr-[0px] w-full h-full">
              <svg height="24" width="24" className="text-[#02060ceb] pt-[4px]">
                <MdOutlineRestaurantMenu />
              </svg>
              <div className="mt-[0px] mb-[0px] ml-[2px] mr-[4px] tracking-[4.6px] font-newm text-[13px] text-[#02060c99]  font-normal">
                MENU
              </div>
              <svg height="24" width="24" className="text-[#02060ceb] pt-[4px]">
                <MdOutlineRestaurantMenu />
              </svg>
            </div>

            {/* Search Section */}
            <div className="w-full relative pt-[0px] pb-[0px] pl-[16px] pr-[16px]">
              <div className="flex justify-center items-center w-full h-[48px] rounded-[12px] bg-[#f0f0f5]">
                <input
                  placeholder="Search for dishes"
                  className="pl-[28px] h-full outline-none bg-transparent font-newl text-[18px] whitespace-nowrap caret-[#fc8019]"
                />
                <button className="absolute top-[11px] right-[25px]  text-[25px] text-[#fc8019]">
                  <IoMdSearch />
                </button>
              </div>
            </div>

            {/* Filter Section */}
            <div className="flex m-[20px] items-center min-h-[36px]">
              <LinearCarousel
                name="Veg"
                icon={BiFoodTag}
                margin="mt-[1px]"
                dfddd="text-[green]"
                size="text-[18px]"
              />
              <LinearCarousel
                name="Non Veg"
                icon={BiFoodTag}
                margin="mt-[1px] "
                dfddd="text-[red]"
                size="text-[18px]"
              />
            </div>

            <hr className="border-solid mt-[26px] mb-[12px] ml-[14px] mr-[0] bg-[#f0f0f5] w-[48rem]"></hr>

            {/* Menu List */}
            {itemsheading.map((items, index) => {

              if (items?.card?.card?.itemCards) {
                const id = items?.card?.card?.itemCards.map((e) => e?.card?.info?.id);
                // If the item has itemCards, map over them to extract data

                const itemCardsData = items?.card?.card?.itemCards.map((item) => ({
                  id:item?.card?.info?.id,
                  dishtitle: item?.card?.info?.name,
                  price: item?.card?.info?.price, 
                  ratings: item?.card?.info?.ratings?.aggregatedRating?.rating,
                  people: item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2,
                  description: item?.card?.info?.description,
                  imgid: item?.card?.info?.imageId,
                  isVeg: item?.card?.info?.isVeg,
                  defaultPrice : item?.card?.info?.defaultPrice,
                }));
                // Render the Cardlist component for this category
                return (
                  <Cardlist
                    key={id}
                    title={items.card.card.title}
                    items={itemCardsData}
                  />
                );
              } else if (items?.card?.card?.categories) {
                const ids = items?.card?.card?.categories.flatMap((e) => (e?.itemCards.map((c) => c?.card?.info?.id)));
                // console.log(id)

                // If the item has categories, map over them to extract data
                const categoryItemsData = items?.card?.card?.categories.flatMap(
                  (category) =>
                    category?.itemCards.map((item) => ({
                      id:item?.card?.info?.id,
                      dishtitle: item?.card?.info?.name,
                      price:item?.card?.info?.price, 
                      ratings: item?.card?.info?.ratings?.aggregatedRating?.rating,
                      description: item?.card?.info?.description,
                      people:item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2,
                      imgid: item?.card?.info?.imageId, 
                      isVeg: item?.card?.info?.isVeg,
                      defaultPrice : item?.card?.info?.defaultPrice,
                    }))
                );
                // Render the Cardlist component for this category
                return (
                  <Cardlist
                    key={ids}
                    title={items.card.card.title}
                    items={categoryItemsData}
                  />
                );
              }
              // If neither itemCards nor categories exist, return null
              return null;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Resturantmenu;
