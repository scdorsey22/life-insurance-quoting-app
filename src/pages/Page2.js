import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Page2() {
  const navigate = useNavigate();
  const [smoker, setSmoker] = useState(false);

  function handleNextPage(event) {
    event.preventDefault();
    navigate("/page3");
  }

  return (
    <form onSubmit={handleNextPage} className="max-w-lg mx-auto mt-16">
      <div className="mb-4">
        <label
          htmlFor="smoker"
          className="block text-gray-700 font-medium mb-2"
        >
          Smoker?
        </label>
        <input
          type="checkbox"
          id="smoker"
          checked={smoker}
          onChange={(event) => setSmoker(event.target.checked)}
        />
      </div>
      <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
        Next
      </button>
    </form>
  );
}
