import React, { useState } from "react";

export default function LightSwitch() {
  const [toggle, setToggle] = useState(false);

  return (
    <div
      className={`text-center w-70 p-6 ${
        toggle ? "bg-amber-300" : "bg-gray-500"
      }`}
    >
      <p className="text-2xl">{toggle}</p>
      <div>
        <button
          className="bg-black text-white hover:bg-gray-800"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? "Off" : "On"}
        </button>
      </div>
    </div>
  );
}
