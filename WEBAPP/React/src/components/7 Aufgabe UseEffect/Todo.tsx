import React from "react";

type Props = {
  title: string;
  completed: boolean;
};

export default function Todo({ title, completed }: Props) {
  return (
    <div>
      <div>{title}</div>
      <div>{completed}</div>
    </div>
  );
}
