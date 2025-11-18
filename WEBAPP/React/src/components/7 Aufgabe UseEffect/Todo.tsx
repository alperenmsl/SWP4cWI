import React from "react";

type Props = {
  title: string;
  completed: boolean;
};

export default function Todo({ title, completed }: Props) {
  return (
    <div
      className={`border p-4 rounded-xl hover:cursor-pointer ${
        completed
          ? "bg-green-400 hover:bg-green-600"
          : "bg-white hover:bg-red-500"
      }`}
    >
      <div>{title}</div>
      <div>{completed}</div>
    </div>
  );
}
