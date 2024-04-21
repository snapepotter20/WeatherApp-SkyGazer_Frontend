import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between p-3 px-6 bg-gray-100">
      <div className="flex items-center justify-between gap-20">
        <div>
          <h1 className="text-3xl font-semibold text-blue-500">SkyGazer</h1>
        </div>
        <div className="hidden md:flex items-center justify-center gap-8">
          <div className="cursor-pointer hover:border-b-2 font-semibold border-blue-500 py-2" onClick={()=>navigate('/')}>Home</div>
          <div className="text-gray-600 cursor-pointer hover:border-b-2 font-semibold border-blue-500 py-2">About this app</div>
          <div className="text-gray-600 cursor-pointer hover:border-b-2 font-semibold border-blue-500 py-2" onClick={()=>navigate('/usageguide')}>Usage guide</div>
        </div>
      </div>
      <div className="hidden md:flex items-center justify-between gap-4">
        <div className="p-3 rounded-lg text-sm bg-blue-500 text-white border border-blue-400 px-6 cursor-pointer hover:bg-blue-400">
          Login
        </div>
        <div className="p-3 rounded-lg text-sm bg-blue-500 text-white border border-blue-400 px-6 cursor-pointer hover:bg-blue-400">
          SignUp
        </div>
      </div>
    </div>
  );
};

export default Header;
