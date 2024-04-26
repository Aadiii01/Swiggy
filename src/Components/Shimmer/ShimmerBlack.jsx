import React from 'react';

export function ShimmerContainer() {
  return (
    <div className="mt-[150px] animate-pulse w-64 h-[180px] mb-16 cursor-pointer bg-black hover:scale-95">
      <div className=" rounded-[16px] bg-gray-300"></div>
      <div className="ml-3 mt-3">
        <div className="flex mt-2">
          <div className="mt-[-4px] bg-gray-300 rounded-full h-7 w-7"></div>
          <div className="mt-[6px] ml-[20px] bg-gray-300  h-[10px] w-[180px]"></div>
        </div>
      </div>
    </div>
  );
}

function Shimmer() {
  return (
    <div className='flex justify-center gap-20 flex-wrap '>
      {/* Create an array of length 15 and map over it to render Shimmer component */}
      {Array.from({ length: 8 }, (_, index) => (
        <ShimmerContainer key={index} />
      ))}
    </div>
  );
}

export default Shimmer;
