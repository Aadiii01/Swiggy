import React,{useState ,useRef} from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { resturantLists } from "../../Utils/resturantData";
import useCarousel from "../../Utils/useCarousel";
import Card from "../Card";

function Rescarousel() {

  // const [listofResturant, setListofResturant] = useState(resturantLists);

  const {recar} = useCarousel();

  const carouselRef = useRef(null);
  const scrollerRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      left: -500, // Adjust the scroll distance as needed
      behavior: "smooth",
    });
    scrollerRef.current.style.left = "-500px";
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({
      left: 500, // Adjust the scroll distance as needed
      behavior: "smooth",
    });
    scrollerRef.current.style.left = "500px";
  };

  return (
    <div className="max-w-[1151px] ml-auto mr-auto mt-[85px] mb-[7rem]">
      <div className="relative">

        <div className="flex absolute mt-3 right-[-4px]">
          <button onClick={scrollLeft} className="bg-transparent border-none cursor-pointer inline m-0 p-0 opacity-50">
            <div className="mr-4 rounded-full h-34 p-[8px] bg-gray-300">
              <FaArrowLeft />
            </div>
          </button>
          <button onClick={scrollRight} className="bg-transparent border-none cursor-pointer inline mr-[11px] p-0">
            <div className="rounded-full h-34 p-[8px] bg-gray-300">
              <FaArrowRight />
            </div>
          </button>
        </div>

        <div className='bg-white p-[16px] overflow-hidden'>
          <div className='bg-white mb-[16px] flex justify-between items-baseline overflow-hidden'>
            <div className='block'>
              <h2 className='font-new text-2xl text-[#02060ceb] font-bold tracking-minus leading-7'>Top resturant chains in Gurgaon</h2>
            </div>
          </div>
        </div>

        <div className="mr-[-16px] mb-[16px]" >
          <div className="flex overflow-x-auto scrollbar-hide md:scrollbar-default" ref={carouselRef}>
            {/* {listofResturant.map((resturant) => (
                <Card key={resturant.info.id} resData={resturant} dynamicClass="ml-[23px] mr-[30px]" width="w-[270px]" height = "h-[180px]" />
            ))} */}
            {recar.map((c) => (<Link key={c.info.id} to={"/resturant/"+c.info.id}><Card  resData={c} dynamicClass="ml-[23px] mr-[30px]" width="w-[270px]" height = "h-[180px]"/></Link>))}
          </div>
        </div>

        {/* <div className='w-[48px] mt-[-19px] ml-auto mr-auto relative h-[4px] rounded-sm bg-[#f0f0f5] before:content-[""] before:bg-[#f15700] before:absolute before:top-[0px] before:left-[0px] before:bottom-[0px] before:w-[10px] before:translate-x-px' ref={scrollerRef} style={{ left: "0px" }}></div> */}

      </div>
    </div>
  );
}

export default Rescarousel;
