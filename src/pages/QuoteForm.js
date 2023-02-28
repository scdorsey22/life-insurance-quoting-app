import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function QuoteForm() {
  const navigate = useNavigate()
  const [age, setAge] = useState("");


  function handleNextPage(event, navigate) {
    event.preventDefault();
    navigate("/page1");
  }

  return (
    <form onSubmit={(event) => handleNextPage(event, navigate)} className="max-w-lg mx-auto mt-16">
      <h1 className="text-2xl font-medium mb-4">Get a Life Insurance Quote</h1>
      <div className="mb-4">
        <label htmlFor="age" className="block text-gray-700 font-medium mb-2">
          Age
        </label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={(event) => setAge(event.target.value)}
          className="border-gray-400 border-2 p-2 w-full rounded"
        />
      </div>
      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Next
      </button>
    </form>
  );
}

