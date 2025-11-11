import React from "react";

type Props = {
  title: string;
  jobDescription: string;
};

export default function Cards({ title, jobDescription }: Props) {
  return (
    <div className="border p4 ">
      <h1 className="font-bold">{title}</h1>
      <p>{jobDescription}</p>
    </div>
  );
}
