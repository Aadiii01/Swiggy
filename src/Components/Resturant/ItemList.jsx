import React from "react";
import { BiFoodTag } from "react-icons/bi";
import { dishURL } from "../../Utils/constants";
import { useDispatch } from "react-redux";
import { addItem} from "../../Utils/cartSlice";

function ItemsList({ dishtitle, price, ratings, people, imgid, description,isVeg,defaultPrice,data }) {
  const dispath = useDispatch()
  const handleaddItems = () => {
    dispath(addItem(data))
  }
  return (
    <>
      <div className="">
        <div>
          <div className="pt-[12px] pb-[4px] pl-[0px] pr-[0px]">
            <div className="flex justify-between">
              {/* Left side */}
              <div>
                <div className="flex items-center mb-[4px]  text-[22px] ml-[-1px]">
                  {isVeg  ? <BiFoodTag className="text-[green]"/> : <BiFoodTag className="text-[red]"/>}
                </div>
                <div className="font-newr text-[18px] font-bold tracking-[-0.1px] leading-4 text-[#02060cbf]">
                  {dishtitle}
                </div>
                {/* Rs 250 */}
                <div className="flex items-center mt-[8px] ml-[3px]">
                  <div className="flex items-center mr-[4px]">
                    <div className="font-newm text-[16px] font-medium tracking-[-0.1px] leading-4 text-[#02060ceb]">
                    {`₹${price ? price / 100 : defaultPrice / 100}`}
                    </div>
                  </div>
                </div>
                {/* Rating */}
                <div className="flex mt-[12px] ml-[2px]">
                  {/* Star */}
                  {ratings && (
                    <div className="w-[14px] h-[14px]">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        fillcolor="#1BA672"
                      >
                        <rect width="14" height="14" fill="white"></rect>
                        <path
                          d="M5.67163 3.99166C6.22068 2.34179 6.49521 1.51686 7 1.51686C7.50479 1.51686 7.77932 2.34179 8.32837 3.99166L8.65248 4.96556H9.60668C11.4122 4.96556 12.315 4.96556 12.4703 5.45302C12.6256 5.94049 11.8893 6.4628 10.4167 7.50744L9.67376 8.03444L9.97544 8.94095C10.5325 10.615 10.8111 11.452 10.4033 11.754C9.99553 12.056 9.27604 11.5457 7.83705 10.5249L7 9.93112L6.16295 10.5249C4.72396 11.5457 4.00447 12.056 3.5967 11.754C3.18893 11.452 3.46747 10.615 4.02456 8.94095L4.04557 8.87783C4.18081 8.47145 4.24843 8.26825 4.18684 8.08006C4.12525 7.89187 3.94958 7.76725 3.59824 7.51802C2.11566 6.46633 1.37437 5.94049 1.52971 5.45302C1.68504 4.96556 2.5878 4.96556 4.39332 4.96556H5.34752L5.67163 3.99166Z"
                          fill="#1BA672"
                        ></path>
                      </svg>
                    </div>
                  )}
                  {ratings && (
                    <div
                      className={`ml-[2px] font-newb text-[13px] font-bold tracking-[1px] leading-4 ${
                        parseFloat(ratings) < 3.0
                          ? "text-yellow-500"
                          : "text-[#1ba672]"
                      }`}
                    >
                      {ratings}
                    </div>
                  )}
                  {people && (
                    <div className="ml-[2px] font-newm text-[13px] font-medium tracking-[-0.3px] leading-4 text-[#02060c99]">
                      {`(${people})`}
                    </div>
                  )}
                </div>
                {description && (
                  <div className="flex items-end">
                    <div className="mt-[12px] font-newr text-[16px] font-medium tracking-[-0.3px] leading-4 text-[#02060c99]">
                      {description}
                    </div>
                  </div>
                )}
              </div>
              {/* Right Side */}
              <div className="ml-[120px] max-h-[174px] min-w-[156px]">
                {imgid ? (
                  <button className="w-[156px] h-[144px] rounded-[12px] cursor-pointer border-none bg-[#fbeed7]">
                    <img
                      src={dishURL + imgid}
                      className="w-[156px] h-[144px] rounded-[12px] object-cover"
                    />
                  </button>
                ) : null}
                <div
                  className={`relative left-[50%] bottom-[28px] z-1 translate-x-[-50%] ${
                    !imgid && "top-[20px]"
                  }`}
                >
                  <div className="relative">
                    <div className="flex flex-col items-center justify-center">
                      <div className="bg-[#ffffff] border-[1px] border-solid rounded-[8px] h-[40px] w-[120px] relative overflow-hidden inline-flex justify-between items-center custom-shadow">
                        <div className="absolute fd">
                          <button className="absolute w-[120px] fd translate-y-[0px] text-center flex items-center justify-center cursor-pointer border-none hover:bg-[#d7dcdb]" onClick={() => handleaddItems(dishtitle)}>
                            <div className="font-new text-[18px] font-extrabold tracking-[-0.1px] leading-6 text-[#1ba672]">
                              ADD
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[0.5px] mt-[8px] mb-[20px] ml-[0px] mr-[0px] border-solid bg-[#d3d3d3]"></div>
        </div>
      </div>
    </>
  );
}

export default ItemsList