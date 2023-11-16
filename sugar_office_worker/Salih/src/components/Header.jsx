import React, { useState } from "react";
import { Dropdown, Ripple, initTE } from "tw-elements";
import sugar from "../assets/sugar-logo.png";

initTE({ Dropdown, Ripple });

const Header = () => {
  const [toggleCategory, setToggleCategory] = useState(false);
  const [toggleCategory2, setToggleCategory2] = useState(false);

  const [language, setLanguage] = useState("English");
  return (
    <header className="relative">
      {/* Top MENU Start*/}
      <div className="top-menu flex justify-between items-center w-full md:w-3/4  mx-auto ">
        {/* Language */}
        <div className="language-menu relative  w-[150px] group  ">
          {/* select language visible part start */}
          <div className="flex justify-center items-center  ">
            <a className="text-sm " href="">
              {language}
            </a>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 group-hover:text-[#FF9BA7]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </div>
          {/* select language visible part end */}

          {/* select language options part start */}
          <ul className="dropdownLanguage absolute z-50 bg-[#FF9BA7] hidden group-hover:block text-sm text-center w-[150px] mx-auto group-hover:text-white">
            <li className="p-2" onClick={() => setLanguage("English")}>
              English
            </li>
            <li className="p-2" onClick={() => setLanguage("Turkish")}>
              Turkish
            </li>
            <li className="p-2" onClick={() => setLanguage("German")}>
              German
            </li>
          </ul>
          {/* select language options part end */}
        </div>
        {/* call  */}

        <div className="hidden md:block text-[14px] lg:text-[16px]">
          <h3>CALL NOW: 1800 555 90 90</h3>
        </div>

        {/* CURRENCY */}
        <div className="currency-menu relative  w-[150px] group  ">
          {/* select Currency visible part start */}
          <div className="flex justify-center items-center  ">
            <a className="text-sm " href="">
              Select Currency
            </a>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 group-hover:text-[#FF9BA7]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </div>
          {/* select Currency visible part end */}

          {/* select Currency options part start */}

          <ul className="dropdownCurrency absolute z-30 bg-[#FF9BA7] hidden group-hover:block text-sm text-center w-[150px] mx-auto group-hover:text-white">
            <li className="p-1"> &#36; US Dollar</li>
            <li className="p-1"> &#8364; Euro</li>
            <li className="p-1"> &#163; Sterlin</li>
          </ul>
          {/* select Currency options part end */}
        </div>
      </div>
      {/* Top MENU End*/}

      {/* Mid MENU Start*/}
      <div className="mid-menu flex flex-wrap justify-between lg:justify-between space-x-[10px]  items-center mt-5 w-3/4 mx-auto">
        <div className="search-box w-4/12 lg:w-[175px] ">
          <img className="w-[120px] lg:w-[175px] mr-7" src={sugar} alt="sugar-icon" />
        </div>

        {/* Searchbar Start */}
        <div className="searchBar-wrapper search-box flex w-screen  order-1 ">
          {/* All Dropdown Start  */}
          <div className="group relative w-[50px] ">
            <div className="flex justify-center items-center bg-[#FF9BA7] hover:bg-[#59B5FE] py-2 px-1  rounded-tl-lg  rounded-bl-lg ">
              <a className="text-sm text-white " href="">
                All
              </a>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-3 ms-1 text-white "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </div>
            <ul className="dropdownAll z-30 absolute  bg-[#FF9BA7] hidden group-hover:block text-sm text-center w-[150px] mx-auto group-hover:text-white">
              <li className="p-2">İtem 1</li>
              <li className="p-2">Item 2</li>
              <li className="p-2">Item 3</li>
            </ul>
          </div>
          {/* All Dropdown End  */}

          {/* Search Input Start  */}
          <div className="w-4/5">
            <input
              type="text"
              placeholder="Search here.."
              className="p-1 h-9 focus:outline-0 bg-[#eee] text-red block w-full"
            />
          </div>
          {/* Search Input End  */}

          {/* Magnifying icon Start  */}

          <div className="bg-[#FF9BA7] hover:bg-[#59B5FE]  rounded-tr-lg  rounded-br-lg w-[40px] flex justify-center items-center text-white">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          {/* Magnifying icon End  */}
        </div>
        {/* Searchbar End */}

        {/* icons wrapper start  */}
        <div className="search-box flex w-7/12 lg:w-4/12  justify-end space-x-4">
          {/* user Account start  */}

          <div className="flex  space-x-2 ">
            <div className="flex justify-center items-center text-[25px]">
              <i className="fa-regular fa-user"></i>
            </div>
            <div className=" hidden md:block whitespace-nowrap">
              <h3 className="text-[12px] my-0">Account</h3>
              <span className="text-[12px] my-0 white">Login / Register</span>
            </div>
          </div>

          {/* user Account end  */}

          {/* like wrapper start  */}
          <div className="flex space-x-5 ">
            {/* like Start  */}
            <div className="relative">
              <i className="fa-regular fa-heart text-[32px]"></i>
              <div className="bg-danger w-[16px] h-[16px] flex justify-center items-center absolute top-0 right-[-8px] p-[2px] text-white text-[12px] rounded-lg ">
                0
              </div>
            </div>
            {/* like end  */}

            {/* wishlist start  */} 
            <div className="hidden md:block whitespace-nowrap ">
              <h3 className="text-[12px] m-0">Wishlist</h3>
              <span className="text-[10px] my-0">Edit Your Wishlist</span>
            </div>
            {/* wishlist end  */}
          </div>
          {/* like wrapper end  */}

          {/* Compare Wrapper start  */}
          <div className="flex  space-x-2 ">
            {/* Compare Icon Start  */}
            <div className="relative">
              <div className="w-[32px] h-[32px] border border-black rounded-[100px] flex justify-center items-center">
                <i className="fa-solid fa-arrow-right-arrow-left text-[18px]"></i>
              </div>

              <div className="bg-danger w-[16px] h-[16px] flex justify-center items-center absolute top-0 right-[-8px] p-[2px] text-white text-[12px] rounded-lg ">
                0
              </div>
            </div>
            {/* Compare Icon end  */}

            {/* Compare Heading start  */}

            <div className="hidden md:block whitespace-nowrap">
              <h3 className="text-[12px] my-0">Compare</h3>
              <a className="text-[10px] my-0">Product Copmarison</a>
            </div>
            {/* Compare Heading end  */}
          </div>
          {/* Compare Wrapper end */}


            <div className="categoryxl lg:hidden"  onClick={() => setToggleCategory2(!toggleCategory2)}>
            <i className="fa-solid fa-bars hamburg"></i>
            </div>


        </div>
        {/* icons wrapper end  */}
      </div>
      {/* Mid MENU End*/}


            {/* Bottom MENU Start*/}
            <div className="bottom-menu-wrapper bg-[#FF9BA7] w-full mt-3 h-[44px] flex items-center  mx-space-2">
        {/* menu-links-container start */}
        <div className="menu-links-container  w-3/4 mx-auto flex items-center ">
          {/* Categories Start  */}
          <div className="relative  lg:w-1/4 ">
            <div
              className="cursor-pointer bg-[#59B5FE] text-white flex justify-between items-center  h-[44px] px-3 text-[18px] text-bold"
              onClick={() => setToggleCategory(!toggleCategory)}
            >
              <span>TÜM KATEGORİLER</span>
              <i className="fa-solid fa-bars"></i>
            </div>
            
            {toggleCategory && (
              <ul className="dropdownCategory  absolute z-50 bg-[#FFFFFF]  text-sm text-center w-full mx-auto group-hover:text-white">
                <li className="p-3 flex justify-between items-center">
                  <div>
                    <i className="fa-solid fa-bars mr-2"></i>
                    <span>Hoparlör</span>
                  </div>
                  <div>
                    <i className="fa-solid fa-greater-than font-thin text-[11px]"></i>
                  </div>
                </li>
                <li className="p-3 flex justify-between items-center">
                  <div>
                    <i className="fa-solid fa-bars mr-2"></i>
                    <span>Figür</span>
                  </div>
                  <div>
                    <i className="fa-solid fa-greater-than font-thin text-[11px]"></i>
                  </div>
                </li>
                <li className="p-3 flex justify-between items-center">
                  <div>
                    <i className="fa-solid fa-bars mr-2 "></i>
                    <span>Toka</span>
                  </div>
                  <div>
                    <i className="fa-solid fa-greater-than font-thin text-[11px]"></i>
                  </div>
                </li>
              </ul>
            )}
          </div>
          {/* Categories end  */}

          {/* Bottom Menu Links Start  */}
          <div className="menu ml-2 w-3/4">
            <ul className="  h-[44px] flex justify-around items-center  ">
              <li className="group relative py-[10px] ">
                <a className="text-white" href="#">
                  Oyuncak
                </a>
                <i className="fa-solid fa-plus ml-3 text-white"></i>
                <ul className="dropdownMenuLinks absolute top-11 z-30 bg-[#eee] hidden group-hover:block text-sm w-[150px]  mx-auto ">
                  <li className="p-1 list-disc list-inside"> Squishy</li>
                  <li className="p-1 list-disc list-inside"> Pelush</li>
                  <li className="p-1 list-disc list-inside">Slime</li>
                </ul>
              </li>
              <li className="group relative py-[10px]  ">
                <a className="text-white" href="#">
                  Bacl to School
                </a>
                <i className="fa-solid fa-plus  ml-3 text-white"></i>
                <ul className="dropdownMenuLinks absolute top-11 z-30 bg-[#eee] hidden group-hover:block text-sm w-[150px]  mx-auto ">
                  <li className="p-1 list-disc list-inside"> Squishy</li>
                  <li className="p-1 list-disc list-inside"> Pelush</li>
                  <li className="p-1 list-disc list-inside">Slime</li>
                </ul>
              </li>
              <li className="group relative py-[10px]  ">
                <a className="text-white" href="#">
                  Kırtasiye
                </a>
                <i className="fa-solid fa-plus  ml-3 text-white"></i>
                <ul className="dropdownMenuLinks absolute top-11 z-30 bg-[#eee] hidden group-hover:block text-sm w-[150px]  mx-auto ">
                  <li className="p-1 list-disc list-inside"> Squishy</li>
                  <li className="p-1 list-disc list-inside"> Pelush</li>
                  <li className="p-1 list-disc list-inside">Slime</li>
                </ul>
              </li>
              <li className="group relative py-[10px] ">
                <a className="text-white" href="#">
                  Aksesuar
                </a>
                <i className="fa-solid fa-plus  ml-3 text-white"></i>
                <ul className="dropdownMenuLinks absolute top-11 z-30 bg-[#eee] hidden group-hover:block text-sm w-[150px]  mx-auto ">
                  <li className="p-1 list-disc list-inside"> Squishy</li>
                  <li className="p-1 list-disc list-inside"> Pelush</li>
                  <li className="p-1 list-disc list-inside">Slime</li>
                </ul>
              </li>
              <li className="group relative py-[10px]  ">
                <a className="text-white" href="#">
                  İlginç Ürünler
                </a>
                <i className="fa-solid fa-plus  ml-3 text-white"></i>
                <ul className="dropdownMenuLinks absolute top-11 z-30 bg-[#eee] hidden group-hover:block text-sm w-[150px]  mx-auto ">
                  <li className="p-1 list-disc list-inside"> Squishy</li>
                  <li className="p-1 list-disc list-inside"> Pelush</li>
                  <li className="p-1 list-disc list-inside">Slime</li>
                </ul>
              </li>
            </ul>
          </div>
          {/* Bottom Menu Links End  */}
        </div>
        {/* menu-links-container end */}
      </div>
      {/* Bottom MENU End*/}
      {toggleCategory2 && (
        <div className={`absolute top-0 lg:hidden left-0 h-full w-60 bg-white shadow-lg transition-transform duration-300 transform ${toggleCategory2 ? 'translate-x-0' : '-translate-x-full'}`}>
              <ul className={`dropdownCategory bg-[#FFFFFF]   text-sm text-center w-[200px] text-danger `} >
              
                <li className="p-3 flex justify-between items-center">
                  <div>
                    <i className="fa-solid fa-bars mr-2"></i>
                    <span className="text-danger">Hoparlör</span>
                  </div>
                  <div>
                    <i className="fa-solid fa-greater-than font-thin text-[11px]"></i>
                  </div>
                </li>
                <li className="p-3 flex justify-between items-center">
                  <div>
                    <i className="fa-solid fa-bars mr-2"></i>
                    <span>Figür</span>
                  </div>
                  <div>
                    <i className="fa-solid fa-greater-than font-thin text-[11px]"></i>
                  </div>
                </li>
                <li className="p-3 flex justify-between items-center">
                  <div>
                    <i className="fa-solid fa-bars mr-2 "></i>
                    <span>Toka</span>
                  </div>
                  <div>
                    <i className="fa-solid fa-greater-than font-thin text-[11px]"></i>
                  </div>
                </li>
              </ul>
              </div>
            )}

    </header>
  );
};

export default Header;
