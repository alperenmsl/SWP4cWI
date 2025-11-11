import React, { useState } from "react";

type Props = {
  name: string;
  description: string;
};

export default function Cards({ name, description }: Props) {
  const [amountOfClicks, setAmountOfClicks] = useState(0);
  let hello = "Hello " + name + "!";
  let style = amountOfClicks > 5 ? "bg-green-400" : "";
  return (
    <div
      className={`border p-4 hover:cursor-pointer ${style}`}
      onClick={() => setAmountOfClicks(amountOfClicks + 1)}
    >
      <h1 className="font-extrabold text-2xl">{hello}</h1>
      <p>{description}</p>
      <div>Amount of Clicks: {amountOfClicks}</div>
    </div>
  );
}
