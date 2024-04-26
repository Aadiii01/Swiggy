import React from "react";
import { OfferURL } from "../../Utils/constants";

function Offercard({ offername, coupencode, img }) {
  return (
    <>
      <div className="w-full pt-[0px] pb-[0px] pl-[0px] pr-[16px]">
        <div className="relative">
          <div className="flex pt-[12px] pb-[12px] pl-[12px] pr-[12px] w-[328px] rounded-[20px] border-[1px] border-solid bg-[white]">
            <div className="mr-auto  border-solid bg-[white]">
              <div className="flex items-center justify-start">
                <div className="w-[48px] h-[48px]">
                  <img src={OfferURL + img} className="border-none" />
                </div>
                <div className="flex ml-[12px] flex-col justify-center items-start gap-0.5">
                  <div className="font-new font-extrabold text-[18px] leading-5 tracking-minus text-[#02060ceb]">
                    {offername}
                  </div>
                  <div className="font-newb font-bold text-[14px] leading-4 tracking-minus text-[#02060c73]">
                    {coupencode}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Offercard;
