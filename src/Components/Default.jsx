import React,{useContext} from 'react'
import { MdOutlineMyLocation } from "react-icons/md";
import Footer from './Footer.jsx';
import { LOGO_URL } from '../Utils/constants.js';
import { Link } from "react-router-dom";
import UserContext from '../Utils/UserContext.js';

const url1 = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf'
const url2 = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn';
const url3 = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy'

const name1 = 'No Minimum Order';
const name2 = 'Live Order Tracking';
const name3 = 'Lightning-Fast Delivery';

const desc1 = 'Order in for yourself or for the group, with no restrictions on order value';
const desc2 = 'Know where your order is at all times, from the restaurant to your doorstep';
const desc3 = "Experience Swiggy's superfast delivery for food delivered fresh & on time";

export function Card(props){
    const {name,desc,url,classs} = props;
    return(
        <div className='text-[#fff] relative text-center'>
            <div className='flex h-[250px] items-end justify-center'>
                <img src={url} className={`${classs} mb-[42px]`}/>
            </div>
            <div className='text-[20px] mt-[0px] font-newb'>{name}</div>
            <div className='text-[15px] w-[260px] mt-[10px] leading-5 text-[#e0cbc1] font-newl'>{desc}</div>
        </div>
    )
}

function Default() {
  const {loggedinuser,setUsername} = useContext(UserContext);
  const word = "What's Your Beautiful Name?"
  return (
    <>

    <div className='relative'>
    <div className='pt-[70px]'>
        <div className='max-w-[1200px] mt-[0px] mb-[0px] mr-auto ml-auto relative h-[540px]'>
            <div className='w-[680px] pr-[60px]'>
                <div className='pt-[40px]'>
                    <img className='w-[195px]' src='Swiggy_logo_PNG3.png'/>
                    <div className='flex mt-[-52px] float-right'>
                        <a className='font-newb cursor-pointer pt-[0px] pb-[0px] pr-[2rem] pl-[2rem] text-[14px] leading-10 w-auto '>Login</a>
                        <a className='font-newb cursor-pointer pt-[0px] pb-[0px] pr-[2rem] pl-[2rem] text-[14px] leading-10 w-auto bg-[#000000] text-[#ffffff] '>Sign up</a>
                    </div>
                </div>
                <h1 className='mt-[70px] mb-[0px] text-[40px] font-newb'>{loggedinuser ? loggedinuser : word}</h1>
                <h2 className='text-[24px] w-[600px] mt-[0px] mb-[0px] leading-[40px] text-[#686b78] text-newl tracking-minus'>Order food from favourite restaurants near you.</h2>

                <div className='flex relative mt-[35px]'>
                    <div className='flex-1 relative'>
                        <div className='pt-[0px] pb-[0px] pr-[5px] pl-[5px] border-[1px] border-solid border-[#bebfc5]'>
                            <input placeholder="Enter your Name Here" className='w-full outline-none h-[58px] leading-7 pt-[0px] pl-[15px] pr-[160px] text-[18px] font-newl caret-[#fc8019]' value={loggedinuser} onChange={(e) => {
                                const userInput = e.target.value;
                                const wordCount = userInput.trim().length;
                                if (wordCount <= 11) {
                                  setUsername(userInput);
                                }
                            }}/>
                        </div>
                        <button className='flex text-[#535665] absolute right-[26px] top-[10px] pt-[12px] pb-[12px] pr-[10px] pl-[10px] text-[14px] cursor-pointer tracking-minus font-newb'>
                            <span className='mr-[9px] mt-[3.6px]'><MdOutlineMyLocation/></span>
                            <span>Locate Me</span>
                        </button>
                    </div>
                    <Link to={loggedinuser ? "/home" : "#"}>
                    <button className={`h-[60px] w-[140px] bg-[#fc8019] ${loggedinuser ? '' : 'cursor-not-allowed'}`} disabled={!loggedinuser}>
                    <div className='text-center text-[#ffffff] bg-[#fc8019] h-[60px] right-[0px] leading-[60px] w-[140px] text-[16px] tracking-new p-[0px] font-newb'>FIND FOOD</div>
                    </button>
                    </Link>
                </div>

                <h3 className='text-[15px] font-newm tracking-minus text-[#a9abb2] mt-[30px] mb-[10px] mr-[0px] ml-[0px]'>POPULAR CITIES IN INDIA</h3>

                <ul className='w-[584px] m-0 p-0 list-none'>
                    <li className='inline-block p-0'>
                        <a href='' className='text-[16px] mr-[8px] leading-6 tracking-minus font-newb text-[#686b78]'>Ahmedabad</a>
                    </li>
                    <li className='inline-block p-0'>
                        <a href='' className='text-[16px] mr-[8px] leading-6 tracking-minus font-newb text-[#93959f]'>Bangalore</a>
                    </li>
                    <li className='inline-block p-0'>
                        <a href='' className='text-[16px] mr-[8px] leading-6 tracking-minus font-newb text-[#686b78]'>Chennai</a>
                    </li>
                    <li className='inline-block p-0'>
                        <a href='' className='text-[16px] mr-[8px] leading-6 tracking-minus font-newb text-[#93959f]'>Delhi</a>
                    </li>
                    <li className='inline-block p-0'>
                        <a href='' className='text-[16px] mr-[8px] leading-6 tracking-minus font-newb text-[#686b78]'>Gurgaon</a>
                    </li>
                    <li className='inline-block p-0'>
                        <a href='' className='text-[16px] mr-[8px] leading-6 tracking-minus font-newb text-[#93959f]'>Hyderabad</a>
                    </li>
                    <li className='inline-block p-0'>
                        <a href='' className='text-[16px] mr-[8px] leading-6 tracking-minus font-newb text-[#686b78]'>Kolkata</a>
                    </li>
                    <li className='inline-block p-0'>
                        <a href='' className='text-[16px] mr-[8px] leading-6 tracking-minus font-newb text-[#93959f]'>Mumbai</a>
                    </li>
                    <li className='inline-block p-0'>
                        <a href='' className='text-[16px] mr-[8px] leading-6 tracking-minus font-newb text-[#686b78]'>Pune</a>
                    </li>
                    <li className='inline-block p-0'>
                        <a href='' className='text-[16px] mr-[8px] leading-6 tracking-minus font-newb text-[#93959f]'>& more.</a>
                    </li>
                </ul>

            </div>
        </div>
    </div>
    <div className='absolute right-[0px] left-[875px] bg-no-repeat h-[100%] bg-cover bg-[100%] top-[10px]'>
        <img src={LOGO_URL}/>
    </div>
    </div>

    <div className='bg-[#2b1e16] pt-[0px] pb-[0bx] pr-[20px] pl-[20px]'>
        <div className='flex relative justify-between pb-[80px] max-w-[1200px] mt-[0px] mb-[0px] mr-[0px] ml-[147px]'>
            <Card name={name1} desc = {desc1} url = {url1} classs = 'w-[105px] h-[199px]'/>
            <Card name={name2} desc = {desc2} url = {url3} classs = 'w-[112px] h-[206px]'/>
            <Card name={name3} desc = {desc3} url = {url2} classs = 'w-[124px] h-[188px]'/>
        </div>
    </div>

    <div className='h-[570px]'>
        <div className='flex max-w-[1200px] relative mt-[0px] mb-[0px] mr-auto ml-auto flex-col justify-center h-[100%]'>
            <div className='text-[40px] w-[300px] tracking-minus leading-9 font-newb'>Restaurants in your pocket</div>
            <div className='text-[20px] w-[400px] text-[#7e808c] leading-6 font-newr pt-[30px] pb-[60px]'>Order from your favorite restaurants & track on the go, with the all-new Swiggy app.</div>

            <div className='flex'>
            <a
              href="https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader"
            >
              <img
                className="h-[54px] cursor-pointer mr-[20px]"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
                alt="Download Android App"
              />
            </a>
            <a
              href="https://itunes.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage"
            >
              <img
                className="h-[54px] cursor-pointer mr-[20px]"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"
                alt="Download iOS App"
              />
            </a>
            </div>

            <img className='w-[384px] h-[489px] absolute top-[0px] right-[300px]' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/pixel_wbdy4n'/>
            <img className='w-[384px] h-[489px] absolute bottom-[0px] right-[-45px]' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/iPhone_wgconp_j0d1fn'/>
        </div>
    </div>

    {/* <Footer margin='mt-[1px]'/> */}

    </>
  )
}

export default Default