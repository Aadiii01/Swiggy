import { useEffect, useState} from "react";
import { MENU_URL } from "../Utils/constants";

function useResturantMenu(resID) {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(MENU_URL + resID);
      const json = await data.json();
      setResInfo(json.data);
    } catch (error) {
        console.log("Fetching Resturant Menu error is: " + error)
    }
  };
  return resInfo;
}

export default useResturantMenu;