import React from "react";

type Props = {
  title: string;
  jobDescription: string;
  imageURL: string;
};

export default function Cards({ title, jobDescription, imageURL }: Props) {
  return (
    <div className="bg-white shadow-md overflow-hidden w-64 flex flex-col ">
      <img src={imageURL} alt="" />
      <h1 className="font-bold">{title}</h1>
      <p>{jobDescription}</p>
    </div>
  );
}
