import React from "react";

type Props = {
  desc: string;
};

export default function ShoppingList({ desc }: Props) {
  return (
    <div className="bg-teal-600 text-white p-3 my-3 shadow-md w-60 hover:bg-teal-400 transition-all cursor-pointer">
      <p>{desc}</p>
    </div>
  );
}
