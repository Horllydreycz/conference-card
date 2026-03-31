import { useState } from "react";

function FileUpload() {
  const [isDragActive, setIsDragActive] = useState(false);
  const [file, setFile] = useState(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragActive(true);
    } else if (e.type === "dragleave") {
      setIsDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-white font-inconsolata font-bold text-lg mb-4">
        Upload Avatar
      </h2>
      <div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        className={`w-full px-4 py-8 mb-2 border-2 border-dashed rounded-2xl text-center cursor-pointer transition ${
          isDragActive ? "border-orange-500 bg-orange-500/10" : "border-white"
        }`}
      >
        <input
          type="file"
          onChange={handleChange}
          className="hidden"
          id="file-input"
        />
        <label htmlFor="file-input" className="cursor-pointer block">
          <img
            src="src/assets/images/icon-upload.svg"
            alt="upload"
            className="w-12 h-12 mx-auto mb-2"
          />
          <p className="text-gray-300 font-inconsolata text-sm">
            Drag and drop or click to upload
          </p>
          {file && (
            <p className="text-green-500 mt-2 font-inconsolata text-sm">
              {file.name}
            </p>
          )}
        </label>
      </div>
      <p className="text-gray-400 font-inconsolata text-xs flex items-center gap-2">
        <span>ℹ️</span>
        Upload your photo (JPG or PNG, max size: 500KB).
      </p>
    </div>
  );
}

export default FileUpload;
