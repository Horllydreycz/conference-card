import { useState } from "react";

function MyForm({ file, onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    github: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.github) newErrors.github = "Github is required.";
    if (!file) newErrors.file = "Please upload a photo";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit(formData, file);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <label className="block text-white font-inconsolata font-bold text-sm mb-2">
        Full Name
      </label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Promise Odunola"
        className={`w-full px-4 py-4 mb-1 border rounded-2xl bg-transparent text-white focus:outline-none focus:border-orange-500 placeholder:gray-400 ${
          errors.name ? "border-red-500" : "border-white"
        }`}
      />
      {errors.name && (
        <p className="text-red-500 text-sm mb-3">{errors.name}</p>
      )}

      <label className="block text-white font-inconsolata font-bold text-sm mb-2 mt-4">
        Email Address
      </label>
      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="example@email.com"
        className={`w-full px-4 py-4 mb-1 border rounded-2xl bg-transparent text-white focus:outline-none focus:border-orange-500 placeholder:gray-400 ${
          errors.email ? "border-red-500" : "border-white"
        }`}
      />
      {errors.email && (
        <p className="text-red-500 text-sm mb-3">{errors.email}</p>
      )}

      <label className="block text-white font-inconsolata font-bold text-sm mb-2 mt-4">
        GitHub Username
      </label>
      <input
        type="text"
        name="github"
        value={formData.github}
        onChange={handleChange}
        placeholder="@yourusername"
        className={`w-full px-4 py-4 mb-1 border rounded-2xl bg-transparent text-white focus:outline-none focus:border-orange-500 placeholder:gray-400 ${
          errors.github ? "border-red-500" : "border-white"
        }`}
      />
      {errors.github && (
        <p className="text-red-500 text-sm mb-3">{errors.github}</p>
      )}

      {errors.file && (
        <p className="text-red-500 text-sm mb-3">{errors.file}</p>
      )}

      <button
        type="submit"
        className="w-full bg-blue text-black font-bold py-2 rounded-2xl border border-orange-500 bg-orange-500"
      >
        Generate My Tickets
      </button>
    </form>
  );
}

export default MyForm;
