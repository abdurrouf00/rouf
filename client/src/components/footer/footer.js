import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
   <footer className="bg-gray-700 text-gray-300 mt-20 overflow-x-hidden pt-16">
      <div className="max-w-7xl mx-auto px-2 grid grid-cols-1 md:grid-cols-4 gap-8 text-left md:text-left">

        {/* Column 1 - About */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">About</h3>
          <p className="text-lg leading-relaxed">
            Jomunar char Food is an online grocery shop. We provide Pure and Healthy Food Service in Bangladesh.
            Our mission is to make the food industry of Bangladesh free of adulteration and deliver organic food to every door.
          </p>
        </div>

        {/* Column 2 - Important Links */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Important Links</h3>
          <ul className="text-lg">
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/blog" className="hover:underline">Blog</a></li>
            <li><a href="/track-order" className="hover:underline">Track Order</a></li>
            <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/refund-policy" className="hover:underline">Refund and Returns Policy</a></li>
          </ul>
        </div>

        {/* Column 3 - Contact Us */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
          <div className=" text-lg text-white">
           <a
      href="https://wa.me/8801753142800"  // বাংলাদেশের কোড 880 + নম্বর
      target="_blank"
      rel="noreferrer"
      className="text-gray-300 hover:text-white underline"
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px'  }}>
  <FaWhatsapp />
  <span>01753142800</span>
</div>
    </a>
            <p>Mobile: 01753142800</p>
            <p>Email: <a href="mailto:rouf82244@gmail.com" className="text-blue-300 hover:underline">rouf82244@gmail.com</a></p>
            <p>Address: Kaizury, Shahjadpur, Sirajganj</p>
          </div>
        </div>

        {/* Column 4 - Connect With Us */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Connect With Us</h3>
          <div className="flex flex-col space-y-2 text-xl ">
            <a
              href="https://facebook.com"
              target="https://www.facebook.com/jomunarchar"
              rel="noreferrer"
              className="text-gray-300 hover:text-white underline"
            >
              Facebook
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-white underline"
            >
              Tiktok
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-white underline"
            >
              YouTube
            </a>
          </div>
        </div>
        
      </div>
      <div className="mt-3">
  <img
    src="/images/SSL-Commerz.png"
    alt="Binni Food Logo"
    className="w-100 h-auto block mx-auto"
  />
</div>

      {/* Bottom text */}
      <div className="mt-3 p-6 text-center text-lg text-white  bg-black">
        &copy; {new Date().getFullYear()} Jomunar char Food. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
