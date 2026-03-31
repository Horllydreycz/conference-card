import { useState } from "react";
function MyForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    github: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Promise Odunola"
        className="w-full px-4 py-4 mb-4 border border-white rounded-2xl bg-transparent text-white focus:outline-none focus:border-orange-500 placeholder:gray-400"
      />

      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="example@email.com"
        className="w-full px-4 py-4 mb-4 border border-white rounded-2xl bg-transparent text-white focus:outline-none focus:border-orange-500 placeholder:gray-400"
      />

      <input
        type="text"
        name="github"
        value={formData.github}
        onChange={handleChange}
        placeholder="@yourusername"
        className="w-full px-4 py-4 mb-4 border border-white rounded-2xl bg-transparent text-white focus:outline-none focus:border-orange-500 placeholder:gray-400"
      />

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
