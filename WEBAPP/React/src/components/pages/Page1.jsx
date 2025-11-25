import React from "react";
import { Link } from "react-router-dom";
import Card from "../1 Aufgabe Struktur/card";
import Button from "../6 Aufgabe Passing Functions/Button";

export default function Page1() {
  return (
    <div className="w-screen bg-amber-200">
      <div className="grid grid-cols-3 w-screen gap-2">
        <h1>Page 1</h1>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Button />
      
      <Link to="/p2">Page 2</Link>
    </div>
  );
}
