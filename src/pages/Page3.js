import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Page3() {
  const navigate = useNavigate();
  const [coverage, setCoverage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // TODO: Submit form data and get a quote
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-16">
      <div className="mb-4">
        <label
          htmlFor="coverage"
          className="block text-gray-700 font-medium mb-2"
        >
          Coverage Amount
        </label>
        <input
          type="number"
          id="coverage"
          value={coverage}
          onChange={(event) => setCoverage(event.target.value)}
          className="border-gray-400 border-2 p-2 w-full rounded"
        />
      </div>
      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Get Quote
      </button>
    </form>
  );
}
