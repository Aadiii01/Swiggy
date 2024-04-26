import React, { useContext } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import useOnlineStatus from '../../Utils/useOnlineStatus';
import { HiOutlineStatusOnline } from "react-icons/hi";
import UserContext from '../../Utils/UserContext';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {

  const onlineStatus = useOnlineStatus();
  const {loggedinuser} = useContext(UserContext)

  const cartItems = useSelector((state) => state.cart.items);

  return (
    <>
    <header className='fixed shadow-lg top-0 left-0 right-0 h-20 bg-white z-50 transform translate-z-0 transition-transform duration-300 ease-in contain-size contain-layout contain-style px-5'>

      <div className='max-w-[1200px] min-w-screen-lg relative mx-auto h-20 bg-white flex items-center'>

        <Link to="/home" className=' cursor-pointer hover:scale-110 block h-12 mr-4'>
          <svg viewBox="0 0 559 825" height="49" width="34" fill="#fc8019"><path fillRule="evenodd" clipRule="evenodd" d="M542.92 388.542C546.805 366.526 542.355 349.598 530.881 340.76C513.621 327.466 487.698 320.236 425.954 320.236C380.271 320.236 331.225 320.286 310.268 320.275C308.322 319.894 301.285 317.604 301.02 309.112L300.734 174.289C300.727 165.779 307.531 158.857 315.943 158.839C324.369 158.825 331.204 165.723 331.211 174.226C331.211 174.226 331.421 247.414 331.441 273.424C331.441 275.936 332.892 281.8 338.549 283.328C375.43 293.267 561.865 285.999 558.967 251.804C543.147 109.96 424.476 0 280.394 0C235.021 0 192.065 10.9162 154.026 30.2754C62.9934 77.5955 -1.65904 173.107 0.0324268 283.43C1.23215 361.622 52.2203 500.605 83.434 521.234C97.8202 530.749 116.765 527.228 201.484 527.228C239.903 527.228 275.679 527.355 293.26 527.436C295.087 527.782 304.671 530.001 304.671 538.907L304.894 641.393C304.915 649.907 298.104 656.826 289.678 656.829C281.266 656.843 274.434 649.953 274.42 641.446C274.42 641.446 275.17 600.322 275.17 584.985C275.17 581.435 275.424 575.339 265.178 570.727C231.432 555.553 121.849 564.712 115.701 581.457C113.347 587.899 125.599 612.801 144.459 644.731C170.102 685.624 211.889 747.245 245.601 792.625C261.047 813.417 268.77 823.813 280.467 824.101C292.165 824.389 300.514 814.236 317.213 793.928C383.012 713.909 516.552 537.663 542.92 388.542Z" fill="url(#paint0_linear_19447_66107)"></path><defs><linearGradient id="paint0_linear_19447_66107" x1="445.629" y1="63.8626" x2="160.773" y2="537.598" gradientUnits="userSpaceOnUse"><stop stopColor="#FF993A"></stop><stop offset="1" stopColor="#F15700"></stop></linearGradient></defs></svg>
        </Link>

        <div className='relative flex items-center ml-7 max-w-[300px] h-8 cursor-pointer mb-[1px] pr-4'>

          <span className='font-bold text-gray-700 float-left relative hover:text-[#FC8019] after:content-[" "] after:absolute 
          after:h-[1.125px] after:left-0 after:bottom-[-5px] after:w-full after:bg-[#FC8019] '>

            <span className='block min-w-[30px] overflow-hidden text-[13px] font-ariel font-bold tracking-news whitespace-nowrap overflow-ellipsis'>Sector 9</span>

          </span>

          <span className='block pl-1 ml-1 text-[#686B78] overflow-hidden text-[13px] font-ariel font-regular tracking-news whitespace-nowrap overflow-ellipsis hover:text-[#93959f]'> Gurugram, Haryana 122001, India</span>

          <span className='absolute right-[-10px] top-[54%] transform -translate-y-1/2 text-[1.2rem] font-bold text-orange-500'><IoIosArrowDown/></span>

        </div>

        <ul className='m-[-70px] p-0 list-none min-w-0 flex flex-1 flex-row-reverse h-full items-center'>

          <li className='text-[#0d1625] hover:text-[#FC8019] font-arielfont font-medium text-[14px] tracking-new'>
            {onlineStatus ? <HiOutlineStatusOnline className='text-[green] text-[28px]'/> : <HiOutlineStatusOnline className='text-[red] text-[28px]'/>}
          </li>

          <li className='mr-16 text-[#0d1625] hover:text-[#FC8019] font-arielfont font-medium text-[14px] tracking-new'>
            <Link to="">
            <div className='relative h-20 cursor-pointer flex items-center pl-7'>
              <span className='absolute  top-[49%] left-[-7px] text-[1.5rem] -translate-y-1/2 leading-none '>
                <VscAccount/>
              </span>
              <span>{loggedinuser ? loggedinuser : "Your Name"}</span>
            </div>
            </Link>
          </li>

          <li className='first:mr-16 mr-16 text-[#0d1625] hover:text-[#FC8019] font-arielfont font-medium text-[14px] tracking-new'>
            <div className='relative h-20 cursor-pointer flex items-center pl-7'>
              <Link className='flex items-center text-no-underline h-full ml-n7 text-current' to="/cart">
                <span className='absolute top-[48%] left-[-7px] text-[1.9rem] -translate-y-1/2  '>
                  <CiShoppingCart /> 
                  <span className='absolute top-[26%] left-[13px] text-[#FC8019] font-new text-[10px]'>{cartItems.length}</span>
                </span>
                <span>Cart</span>
              </Link>
            </div>
          </li>

          <li className='mr-16 text-[#0d1625] hover:text-[#FC8019] font-arielfont font-medium text-[14px] tracking-new'>
            <div className='relative h-20 cursor-pointer flex items-center pl-7'>
              <Link to="/help" className='flex items-center text-no-underline h-full ml-n7 text-current'>
                <span className='absolute top-[50%] left-[-7px] text-[1.6rem] -translate-y-1/2 leading-none'>
                  <IoHelpBuoyOutline/>
                </span>
                <span>Help</span>
              </Link>
            </div>
          </li>

          <li className='mr-16 text-[#0d1625] hover:text-[#FC8019] font-arielfont font-medium text-[14px] tracking-new'>
            <div className='relative h-20 cursor-pointer flex items-center pl-7'>
              <Link to="/about" className='flex items-center text-no-underline h-full ml-n7 text-current'>
                <span className='absolute top-[49%] left-[-7px] text-[1.6rem] -translate-y-1/2 leading-none'>
                  <IoLogoGithub/>
                </span>
                <span>About</span>
                <span className='text-[#ffa700] text-[8px] top-[24.5px] font-ariel font-black absolute right-[-15px] tracking-[0.9px] uppercase'>ME</span>
              </Link>
            </div>
          </li>

        </ul>

      </div>
    </header>
    </>
  )
}

export default Header

