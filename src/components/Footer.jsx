import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-blue-950 p-8 space-y-4 text-white fixed bottom-0 w-full ">
      <div className="flex items-center justify-center">
        <div className="">
          <div className="w-[400px] h-[1px] bg-white"></div>
        </div>
        <div className="flex items-center justify-center mx-4 gap-4">
          <FaFacebook size={30} className="cursor-pointer hover:text-white" />
          <FaInstagram size={30} className="cursor-pointer hover:text-white" />
          <FaWhatsapp size={30} className="cursor-pointer hover:text-white" />
          <FaTiktok size={30} className="cursor-pointer hover:text-white" />
        </div>
        <div className="w-[400px] h-[1px] bg-white"></div>
      </div>
      <div className="max-w-sm mx-auto text-center space-y-3">
        <p>Kencho Wangdi:Aekaay</p>
        <p className="text-opacity-5">Copyright © 2023. All rights reserved.</p>
      </div>
      <div className="flex items-center justify-center text-white gap-2">
         <a href="">Contact us</a>
         <div className="w-[1px] h-6 bg-white"></div>
         <a href="">Privacy policy</a>
         <div className="w-[1px] h-6 bg-white"></div>
         <a href="">Terms of service  </a>
         <div className="w-[1px] h-6 bg-white"></div>
         <a href="">Sitemap</a>
      </div>
    </div>
  );
};

export default Footer;
