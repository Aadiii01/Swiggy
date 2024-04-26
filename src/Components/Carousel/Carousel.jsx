import React,{useRef,useState,useEffect} from 'react'
import { CARD_URL } from '../../Utils/constants';
// import { cardlist } from '../../Utils/carouselData';
import useCarousel from '../../Utils/useCarousel';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export function ImgCard({imageId}){

  return(
    <div className='pl-[16px] pr-[12px]'>
      <a className='cursor-pointer'>
        <div className='h-[180px] block w-[144px]'>
          <img className="w-[144px] h-[180px] object-cover border-none " src={CARD_URL+imageId} alt="restaurants curated for north indian"/>
        </div>
      </a>
    </div>
  )
};

function Carousel() {
  
  const {mind} = useCarousel()

  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      left: -300, // Adjust the scroll distance as needed
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({
      left: 300, // Adjust the scroll distance as needed
      behavior: "smooth",
    });
  };

  return (
    <div className='max-w-[1151px] mx-auto mt-[85px] mb-[7rem]'>
      <div className='relative'>

        <div className='flex absolute mt-3 right-[-4px]'>
          <button onClick={scrollLeft} className='bg-transparent border-none cursor-pointer inline m-0 p-0 opacity-50'>
            <div className='mr-4 rounded-full h-34 p-[8px] bg-gray-300'>
              <FaArrowLeft/>
            </div>
          </button>
          <button onClick={scrollRight} className='bg-transparent border-none cursor-pointer inline mr-[11px] p-0'>
            <div className='rounded-full h-34 p-[8px] bg-gray-300'>
              <FaArrowRight/>
            </div>
          </button>
        </div>

        <div className='bg-white p-[16px] overflow-hidden'>
          <div className='bg-white mb-[16px] flex justify-between items-baseline overflow-hidden'>
            <div className='block'>
              <h2 className='font-new text-2xl text-[#02060ceb] font-bold tracking-minus leading-7'>What's on your mind?</h2>
            </div>
          </div>
        </div>

        <div className='flex overflow-x-scroll scrollbar-hide md:scrollbar-default ' ref={carouselRef}>
          {mind.map((card) => (<ImgCard key={card.id} imageId={card.imageId}/>))}
        </div>

      </div>
    </div>
  )
}

export default Carousel;