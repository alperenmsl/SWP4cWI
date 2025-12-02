import React from "react";
import Card from "../1 Aufgabe Struktur/card";
import Button from "../6 Aufgabe Passing Functions/Button";
import { Link } from "react-router";

export default function Page1() {
  return (
    <div className="min-h-screen bg-amber-200 flex flex-col items-center py-12">
      <h1 className="text-4xl font-bold mb-10 text-gray-800 text-center">
        This is Page 1
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 max-w-6xl">
        <Card title="Hello" description="I am a Card" />
        <Card title="Hello" description="I am a Card" />
        <Card title="Hello" description="I am a Card" />
      </div>

      <div className="mt-12">
        <Link
          className="bg-amber-300 hover:bg-amber-400 text-white px-6 py-3 rounded-lg shadow-lg transition"
          to={"/page2"}
        >
          Next Page
        </Link>
      </div>
    </div>
  );
}
