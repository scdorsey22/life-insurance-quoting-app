import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Page1() {
    const navigate = useNavigate();
    const [gender, setGender] = useState("");
  
    function handleNextPage(event) {
      event.preventDefault();
      navigate("/page2");
    }
  
    return (
      <form onSubmit={handleNextPage} className="max-w-lg mx-auto mt-16">
        <div className="mb-4">
      <label htmlFor="gender" className="block text-gray-700 font-medium mb-2">
        Gender
      </label>
      <select
        id="gender"
        value={gender}
        onChange={(event) => setGender(event.target.value)}
        className="border-gray-400 border-2 p-2 w-full rounded"
      >
        <option value="">-- Select Gender --</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
    <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Next
      </button>
      </form>
    );
  }