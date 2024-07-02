import React from "react";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

import { IconButton } from "@mui/material";

import { Link } from "react-router-dom";

import logoFooterImage from "/logo_footer.svg";

const Footer = () => {
  return (
    <main>
      <div className="wrapper-footer p-[120px] bg-[#EDF2F4]">
        <ul className="flex justify-between items-center">
          <li className="flex flex-col gap-2 items-center w-[15%]">
            <img src={logoFooterImage} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </li>
          <li className="flex flex-col gap-2">
            <p className="font-[500] mb-[20px]">Contact us</p>
            <p>E: info@example.com</p>
            <p>P: +94 7670000000</p>
            <p>A: 123 Hospital rd,</p>
            <p>Kalubowila, Dehiwela</p>
          </li>
          <li className="flex flex-col gap-2">
            <p className="font-[500] mb-[20px]">Useful links</p>
            <Link to="/shop-all">Shop All</Link>
            <Link to="/blog">Tempered Glass</Link>
            <Link to="/blog">Back-cover</Link>
            <Link to="/about-us">About us</Link>
          </li>
          <li className="flex flex-col gap-4">
            <div className="icon flex items-center gap-3 cursor-pointer">
              <IconButton sx={{ padding: "0", color: "#000" }}>
                <WhatsAppIcon fontSize="large" />
              </IconButton>
              <p>Whatsapp</p>
            </div>
            <div className="icon flex items-center gap-3 cursor-pointer">
              <IconButton sx={{ padding: "0", color: "#000" }}>
                <FacebookIcon fontSize="large" />
              </IconButton>
              <p>Facebook</p>
            </div>
            <div className="icon flex items-center gap-3 cursor-pointer">
              <IconButton sx={{ padding: "0", color: "#000" }}>
                <InstagramIcon fontSize="large" />
              </IconButton>
              <p>Instagram</p>
            </div>
            <div className="icon flex items-center gap-3 cursor-pointer">
              <IconButton sx={{ padding: "0", color: "#000" }}>
                <YouTubeIcon fontSize="large" />
              </IconButton>
              <p>YouTube</p>
            </div>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Footer;
