// import React from "react";
import { FooterLogo } from "../image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
   return (
      <footer className="w-screen h-[80px] flex justify-center items-center md:h-[98px] bg-brightGray">
         <div className="container flex items-center justify-between px-5">
            <img src={FooterLogo} alt="" className="h-[20px] md:h-[27px]" />

            <div className="flex items-center gap-5 md:gap-9">
               <FontAwesomeIcon className="social-icons" icon={faFacebookF} />
               <FontAwesomeIcon className="social-icons" icon={faTwitter} />
               <FontAwesomeIcon className="social-icons" icon={faDiscord} />
               <FontAwesomeIcon className="social-icons" icon={faInstagram} />
            </div>
         </div>
      </footer>
   );
};

export default Footer;
