import { useState } from "react";
import MyForm from "./Form";
import FileUpload from "./FileUpload";

function Ticket() {
  const [showGeneratedTicket, setShowGeneratedTicket] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    github: "",
  });

  const handleFileAccept = (file) => {
    setUploadedFile(file);
  };

  const handleFormSubmit = (data, file) => {
    setFormData(data);
    setUploadedFile(file);
    setShowGeneratedTicket(true);
  };

  const handleBackToForm = () => {
    setShowGeneratedTicket(false);
  };

  if (showGeneratedTicket) {
    return (
      <div className="bg-[url('src/assets/images/background-desktop.png')] bg-cover bg-center relative h-screen w-screen">
        <div className="flex justify-center text-white font-inconsolata font-extrabold pt-5 gap-4">
          <img
            src="src/assets/images/logo-mark.svg"
            alt="logo"
            className="w-8 h-8 "
          />
          <span className="text-3xl">Coding conf</span>
        </div>
        <div className="flex items-center justify-center h-screen/2 gap-8  flex-col pt-40">
          <div className="w-1/2 text-white font-inconsolata">
            <h2 className="text-5xl font-bold mb-4">
              Congrats, <span className="text-orange-500">{formData.name}</span>
              !
            </h2>
            <h2 className="text-5xl font-bold mb-6">Your ticket is ready.</h2>
            <p className="text-lg text-gray-300 mb-6">
              We've emailed your ticket to{" "}
              <span className="text-orange-500">{formData.email}</span> and will
              send updates in the run up to the event.
            </p>
          </div>

          <div className="w-1/2 flex justify-center">
            <div className="bg-gradient-to-b from-orange-500 to-transparent p-0.5 rounded-2xl w-full max-w-sm">
              <div className="bg-black rounded-2xl p-8">
                <div className="text-center mb-6">
                  {uploadedFile && (
                    <img
                      src={URL.createObjectURL(uploadedFile)}
                      alt="profile"
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    />
                  )}
                </div>
                <div className="text-white text-center font-inconsolata space-y-3">
                  <h3 className="text-sm text-gray-400 tracking-widest uppercase">
                    Full Name
                  </h3>
                  <h2 className="text-4xl font-bold">{formData.name}</h2>
                  <div className="pt-4 border-t border-gray-700">
                    <p className="text-gray-400">{formData.email}</p>
                    <p className="text-orange-500">@{formData.github}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-12">
          <button
            onClick={handleBackToForm}
            className="px-8 py-2 bg-orange-500 text-black font-bold rounded-2xl font-inconsolata hover:bg-orange-600"
          >
            Edit Info
          </button>
        </div>
      </div>
    );
  }

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
          <FileUpload onFileAccept={handleFileAccept} />
        </div>
      </div>
      <div className="pt-5">
        <MyForm file={uploadedFile} onSubmit={handleFormSubmit} />
      </div>
    </div>
  );
}

export default Ticket;
