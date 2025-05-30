import React from 'react';
import { Link} from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-14 xl:px-3 pt-8 w-full text-gray-500">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
        <div className="md:max-w-96">
           <Link to='/'> <h1 className="prata-regular text-2xl sm:py-3 lg:text-4xl">INSAF BD</h1></Link>
          <p className="mt-6 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="flex-1 flex items-start md:justify-end gap-20">
          <div>
            <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
            <ul className="text-sm space-y-2">
              <li><a href="#">Home</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Privacy policy</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-5 text-gray-800">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>+1-212-456-7890</p>
              <p>contact@example.com</p>
            </div>
          </div>
        </div>
      </div>
      <p className="pt-4 text-center text-xs md:text-sm pb-5">
        Copyright 2025 © Insaf.bd All Right Reserved. DESIGNED & DEVELOPED BY JANNATUL FERDOUS PAPRY
      </p>
    </footer>
  );
};

export default Footer;

