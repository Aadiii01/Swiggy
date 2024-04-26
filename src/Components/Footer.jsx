import React from "react";
import { IoIosArrowDown } from "react-icons/io";

export function List(props){

    const {divclass,mainname,l1,l2,l3,l4,l5,l6,showButtonList } = props;
    return (
        <>
            <div className={divclass}>
            <ul>

              <li className="mt-[48px]">
                <div className="font-newb font-bold text-[18px] leading-[20px] tracking-minuss text-[#ffffffeb]">
                    {mainname}
                </div>
              </li>

              {l1 && <li className="mt-[16px] mb-[16px] ml-[0px] mr-[0px]">
                <a href=''>
                    <div className="font-newr font-light text-[16px] leading-[19px] tracking-minus text-[#ffffff99]">{l1}</div>
                </a>
              </li>}

              {l2 && <li className="mt-[16px] mb-[16px] ml-[0px] mr-[0px]">
                <a href=''>
                    <div className="font-newr font-light text-[16px] leading-[19px] tracking-minus text-[#ffffff99]">{l2}</div>
                </a>
              </li>}

              {l3 && <li className="mt-[16px] mb-[16px] ml-[0px] mr-[0px]">
                <a href=''>
                    <div className="font-newr font-light text-[16px] leading-[19px] tracking-minus text-[#ffffff99]">{l3}</div>
                </a>
              </li>}

              {l4 &&<li className="mt-[16px] mb-[16px] ml-[0px] mr-[0px]">
                <a href=''>
                    <div className="font-newr font-light text-[16px] leading-[19px] tracking-minus text-[#ffffff99]">{l4}</div>
                </a>
              </li>}

              {l5 && <li className="mt-[16px] mb-[16px] ml-[0px] mr-[0px]">
                <a href=''>
                    <div className="font-newr font-light text-[16px] leading-[19px] tracking-minus text-[#ffffff99]">{l5}</div>
                </a>
              </li>}

              {l6 && <li className="mt-[16px] mb-[16px] ml-[0px] mr-[0px]">
                <a href=''>
                    <div className="font-newr font-light text-[16px] leading-[19px] tracking-minus text-[#ffffff99]">{l6}</div>
                </a>
              </li>}

              {showButtonList && <li className="mt-[16px] mb-[16px] ml-[0px] mr-[0px]">
                <button className="border-[1px] border-solid border-[#ffffff26] visible h-[32px] cursor-pointer w-[100%] max-w-[120px] pt-[4px] pb-[4px] pr-[8px] pl-[8px] rounded-[8px]">
                    <div className="flex">
                        <div className="font-newr font-light text-[14px] leading-[18px] tracking-minus text-[#ffffff99]">{showButtonList}</div>
                        <div className="mt-[1px] mb-[0px] mr-[2px] ml-[24px] text-[#ffffff99]"><IoIosArrowDown/></div>
                    </div>
                </button>
              </li>}

            </ul>
          </div>
        </>
    )
}

function Footer({margin}) {
  return (
    <>
      <div>
        <div className={`${margin} flex flex-row items-center min-h-[104px] bg-[#f0f0f5]`}>

          <div className="block w-[408px] max-h-[64px] mt-auto mb-auto mr-[96px] ml-[302px] ">
            <div className="font-new font-bold text-[28px] leading-[32px] tracking-minuss text-[#02060cbf]">
              For better experience,download the Swiggy app now
            </div>
          </div>

          <div className="mt-auto mb-auto mr-[8px] ml-[8px] h-64px flex flex-row justify-center">
            <a
              href="https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader"
              className="h-[64px] mt-auto mb-auto mr-[12px] ml-[12px]"
            >
              <img
                className="h-[64px] max-w-[208px]"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
                alt="Download Android App"
              />
            </a>
            <a
              href="https://itunes.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage"
              className="h-[64px] mt-auto mb-auto mr-[12px] ml-[12px]"
            >
              <img
                className="h-[64px] max-w-[208px]"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"
                alt="Download iOS App"
              />
            </a>
          </div>

        </div>
      </div>

      <div>
        <div className="bg-[#02060c] grid pt-[0px] pr-[17.5%] pl-[17.5%] pb-[2rem] grid-cols-4 gap-x-[5%]">

          <div className="grid-cols-5 grid-rows-5 mt-[48px]">
            <div className="flex mb-[8px]">
              <span className="mt-[-4px] mr-[8px]">
                <svg
                  width="21"
                  height="32"
                  viewBox="0 0 21 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_b_674_19294)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.3819 14.7977C20.5245 13.9563 20.3574 13.3121 19.9261 12.9756C19.2787 12.4711 18.3021 12.1959 15.9859 12.204C14.2724 12.2082 12.4327 12.2167 11.6469 12.2205C11.5739 12.2082 11.3093 12.1181 11.297 11.7938L11.2683 6.64781C11.2683 6.3236 11.5207 6.05694 11.8385 6.05694C12.1559 6.05694 12.412 6.31936 12.412 6.64358C12.412 6.64358 12.4285 9.43839 12.4327 10.4314C12.4327 10.5257 12.4897 10.7513 12.7011 10.8089C14.085 11.1822 21.0778 10.883 20.9639 9.57764C20.3536 4.16496 15.8884 -0.0164585 10.4829 4.87055e-05C8.78164 0.00385807 7.16965 0.426698 5.745 1.16952C2.33815 2.98744 -0.0755529 6.63977 0.00180748 10.8542C0.0546894 13.8374 1.98811 19.1396 3.16037 19.923C3.70173 20.2845 4.40996 20.1491 7.58886 20.1368C9.0298 20.1325 10.3732 20.1325 11.0324 20.1325C11.1016 20.1448 11.4599 20.2312 11.4637 20.5677L11.484 24.4782C11.484 24.8024 11.232 25.0691 10.9142 25.0691C10.5968 25.0691 10.3402 24.8109 10.3402 24.4824C10.3402 24.4824 10.3647 22.9108 10.3609 22.328C10.3609 22.1926 10.3689 21.9585 9.98235 21.7862C8.71622 21.2119 4.60532 21.5729 4.37737 22.2129C4.29191 22.4592 4.75185 23.4073 5.46418 24.6259C7.83331 28.4425 10.1571 31.4176 10.5318 31.8937C10.5563 31.9141 10.5766 31.9348 10.5968 31.9471C10.9104 31.5611 19.1078 22.2747 20.3819 14.7977Z"
                      fill="white"
                    ></path>
                  </g>
                  <defs>
                    <filter
                      id="filter0_b_674_19294"
                      x="-9.26002"
                      y="-9.26002"
                      width="39.4853"
                      height="50.4673"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood
                        floodOpacity="0"
                        result="BackgroundImageFix"
                      ></feFlood>
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation="4.63001"
                      ></feGaussianBlur>
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_674_19294"
                      ></feComposite>
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_674_19294"
                        result="shape"
                      ></feBlend>
                    </filter>
                  </defs>
                </svg>
              </span>
              <div className="font-new font-bold text-[24px] leading-[28px] tracking-minuss text-[#ffffffeb]">
                Swiggy
              </div>
            </div>
            <div className="font-newr font-light text-[16px] leading-[19px] tracking-minus text-[#ffffff99]">
              © 2023 Bundl Technologies Pvt. Ltd
            </div>
          </div>

          <List divclass='' mainname = 'Company' l1='About' l2='Carrers' l3='Team' l4='Swiggy One' l5='Swiggy Instamart' l6='Swiggy Genie'/>
          <List divclass='' mainname = 'Contact us' l1='Help & Support' l2='Partner with us' l3='Ride with us'/>
          <List divclass='col-start-3 mt-[-156px]' mainname = 'Legal' l1='Terms & Conditions' l2='Cookie Policy' l3='Privacy Policy'/>
          <List divclass='col-start-4 row-start-1 mt-[0px]' mainname = 'We deliver to:' l1='Banglores' l2='Gurgaon' l3='Hyderabad' l4='Delhi' l5='Mumbai' l6='Pune' showButtonList='589 cities'/>

        </div>
      </div>
    </>
  );
}

export default Footer;
