import React from "react";

type Props = {
  title: string;
  completed: boolean;
};

export default function Todo({ title, completed }: Props) {
  return (
    <div className={`border p-4 ${completed ? "bg-green-400" : "bg-white"}`}>
      <div>{title}</div>
      <div>{completed}</div>
    </div>
  );
}
