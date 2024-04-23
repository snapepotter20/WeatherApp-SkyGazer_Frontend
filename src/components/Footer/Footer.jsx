import React from 'react'

const Footer = () => {
    return (
        <div className="bg-blue-600 w-full p-2 text-white text-center">
          <span>
          © 2024 SkyGazer . Created with{" "}
            <span className="cursor-pointer">
              <lord-icon
                src="https://cdn.lordicon.com/ulnswmkk.json"
                trigger="hover"
              ></lord-icon>
            </span>{" "}
            by Sahil Kumar
          </span>
        </div>
      );
}

export default Footer;
