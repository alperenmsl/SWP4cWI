import React, { useState } from "react";

export default function Counter() {
  const [numberOnClick, setNumberOnClick] = useState(0);

  return (
    <div className={`border p-4 text-center w-70`}>
      <p className="font-bold text-2xl">{numberOnClick}</p>
      <div className="flex justify-center">
        <button
          className="bg-green-400 text-white hover:cursor-pointer"
          onClick={() => setNumberOnClick(numberOnClick + 1)}
        >
          Increase
        </button>
        {}
      </div>
      <div>
        <button
          className="bg-red-500 text-white hover:cursor-pointer"
          onClick={() => setNumberOnClick(numberOnClick - 1)}
        >
          Descrease
        </button>
        {}
      </div>
    </div>
  );
}
