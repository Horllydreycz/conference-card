import { useState } from "react";
import MyForm from "./Form";
import FileUpload from "./FileUpload";

function Ticket() {
  return (
    <div className="bg-[url('src/assets/images/background-desktop.png')] bg-cover bg-center relative h-full">
      <div className="flex justify-center text-white font-inconsolata font-extrabold pt-5 gap-4">
        <img
          src="src/assets/images/logo-mark.svg"
          alt="logo"
          className="w-8 h-8 "
        />
        <span className="text-3xl">Coding conf</span>
      </div>
      <div className="text-white flex flex-col justify-center items-center pt-20 font-inconsolata font-extrabold">
        <h1 className="text-4xl max-w-2xl text-center leading-tight">
          Your Journey to Coding Conf
          <br />
          2025 Starts Here!
        </h1>
        <p className="font-normal mt-4">
          Secure your spot at the next year's biggest coding conference.
        </p>
      </div>
      <div className="text-white flex justify-center pt-20">
        <div className="w-full max-w-xs px-1">
          <FileUpload />
        </div>
      </div>
      <div className="pt-5">
        <MyForm />
      </div>
    </div>
  );
}

export default Ticket;
