import React, { useState } from "react";
import Liner from '../Liner'
import { IoMdSearch } from "react-icons/io";

function Headerscroll({ handleRatingFilter,setSearchText }) {
  const [searchtextLocal, setSearchTextLocal] = useState("");

  const handleSearch = () => {
    if (searchtextLocal.trim() === "") {
      setSearchText(""); // Reset search text
    }
  }

  return (
    <header className='fixed shadow-lg top-0 left-0 right-0 h-20 bg-white z-50 transform translate-z-0 transition-transform duration-300 ease-in contain-size contain-layout contain-style px-5'>
        <div className=' min-w-screen-lg relative mx-auto h-20 bg-white flex items-center mt-[-6px] ml-[-143px]'>
            <Liner handleRatingFilter={handleRatingFilter} />

            <div className='flex w-[280px] items-center ml-auto mr-[124px] mt-[11px]'>
                <div className='mt-auto mb-auto mr-[0px] ml-auto h-[56px] max-w-[496px] min-w-[360px] self-end relative flex items-center w-[100%] rounded-[12px] bg-[#f0f0f5]'>
                    <input className='w-[258px] h-full outline-none bg-transparent font-newl text-[18px] ml-[23px] whitespace-nowrap rounded-[12px]' placeholder="Search for Resturant and food" onChange={(e) => {setSearchText(e.target.value)}}/>
                    <button className='absolute top-[15px] right-[21px] width-[18px] height-[18px] text-[25px] text-slate-500' onClick={handleSearch}><IoMdSearch/></button>
                </div>
            </div>

        </div>
    </header>
  )
}

export default Headerscroll