import React from "react";
import { Link } from "react-scroll";
import { AiTwotonePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div className=" bg-[#222] rounded-t-3xl">
      <div className=" flex flex-col md:flex-row justify-between md:px-32 px-5 p-5">
        <div className=" w-full md:w-1/4">
          <Link to="/">
            <h1 className=" font-semibold text-2xl text-brightRed">VitalityVault</h1>
          </Link>
          <p className=" mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl mt-4">Address</h1>
          <p className=" mt-4">Place youre Address here</p>
        </div>
        <div>
          <h1 className=" font-medium text-xl mt-4">Contact</h1>
          <div className=" flex flex-row items-center gap-2 mt-4">
            <AiTwotonePhone size={20} />
            <p>Place youre TP here</p>
          </div>
          <div className=" flex flex-row items-center gap-2">
            <AiOutlineMail size={20} />
            <p>VitalityVault@gmail.com</p>
          </div>
        </div>
      </div>
      <div>
        <p className=" text-center mt-4">
          @copyright developed by{" "}
          <span className=" text-brightRed mt-5 mb-14"> KcW</span> | All
          rights reserved
        </p>
        <br />
      </div>
    </div>
  );
};

export default Footer;