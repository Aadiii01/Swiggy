import React, { useEffect, useState,useRef } from "react";
import { Link } from "react-router-dom";
import Header from "./Header/Header";
import Card from "./Card";
import Carousel from "./Carousel/Carousel";
import Rescarousel from "./Carousel/Rescarousel";
import Liner from "./Liner";
import Headerscroll from "./Header/Headerscroll";
import Shimmer from "./Shimmer/Shimmer";

function Body() {
  const [listofResturant, setListofResturant] = useState([]);  
  const headerscrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Initially all resturant are show that is why we set false
  const [showHighRatedRestaurants, setShowHighRatedRestaurants] = useState(false);

  // This is toogles simply
  const handleRatingFilter = () => {
    setShowHighRatedRestaurants(!showHighRatedRestaurants);
  };

  const [searchText, setSearchText] = useState("");
  const [filteredResturant, setFilteredResturant] = useState([]);

  useEffect(() => {
    setFilteredResturant(
      listofResturant.filter((res) =>
        res.info.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }, [listofResturant, searchText]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4554726&lng=77.0219019&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

      const json = await data.json();
      // console.log(json)
      // console.log(json.data)


      setListofResturant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredResturant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return filteredResturant.length === 0 ? <div className="mt-[150px] mb-[50px]"><Shimmer/></div> : (
    <>
      {scrollPosition >= 927 ? (
        <Headerscroll ref={headerscrollRef} handleRatingFilter={handleRatingFilter} setSearchText={setSearchText} />
      ) : (
        <Header />
      )}
      <Carousel/>
      <hr className="border-[1px] border-solid mt-[-70px] mb-[-55px] ml-[12rem] mr-[12rem]"></hr>
      <Rescarousel/>
      <hr className="border-[1px] border-solid mt-[-67px] mb-[-39px] ml-[12rem] mr-[12rem]"></hr>
      <div className="ml-[199px] mr-[52px] mt-[68px]">
        <div>
          <h2 className="m-[8px] font-new tracking-minus leading-[28px] font-bold text-[#02060ceb] text-2xl">Restaurants with online food delivery in Gurgaon</h2>
        </div>
      </div>
      <Liner handleRatingFilter={handleRatingFilter}/>
      <div className="grid grid-cols-4 m-[32px] mr-72 ml-16">
        {filteredResturant.filter((resturant) => showHighRatedRestaurants ? resturant.info.avgRating >= 4.0 : true).map((resturant) => (
          <Link  key={resturant.info.id} to={"/resturant/"+resturant.info.id}><Card resData={resturant} dynamicClass="ml-36 mr-[-7rem]" width="w-60" height="h-40" /></Link>
        ))}
      </div>
      {/* <Footer margin='mt-[34px]' /> */}

    </>
  );
}

export default Body;
