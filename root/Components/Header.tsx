import React from "react";
import {BsList } from "react-icons/bs";
import Link from 'next/link'
 function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
    <div className="container mx-auto flex flex-wrap pt-6 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <img src={`/unnamed.png`} alt="" className=" pl-2 rounded-md md:w-14 md:h-12 w-11 h-10"  />
    
    <a href="https://mailer-daemon.vercel.app/">  

    <span className="ml-3 text-xl md:text-3xl text-gray-800 ">Mailer Daemon</span></a>
   
    </a>
    
    <nav className="md:ml-auto flex flex-wrap items-center  text-base justify-center">
      <a className="mr-5 text-sm md:text-xl hover:text-gray-900" href="https://placementor-iit-dhanbad.vercel.app/" target="_blank" >Placementor</a>
      <a className="mr-5 text-sm md:text-xl hover:text-gray-900"  href="https://www.iitism.ac.in/iitismnew/" target="_blank" >IIT(ISM)</a>
      {/* <a className="mr-5 text-sm md:text-xl hover:text-gray-900">ContactUs</a> */}
      
    </nav>
  

   


{/* 
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button> */}
  </div>
  
    </>
  );
}
  

    export default Header;
