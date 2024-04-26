import { useEffect, useState } from "react";

function useCarousel() {
  const [mind, setMind] = useState([]);
  const [recar,setRecar] = useState([])

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4554726&lng=77.0219019&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();
      setMind(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
      setRecar(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {mind,recar};
}

export default useCarousel;