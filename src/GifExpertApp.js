import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
import 'bootstrap/dist/css/bootstrap.min.css';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Homero']);

  return (
    <>
      <h1 className="mb-5 text-center">GifExpertApp</h1>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
