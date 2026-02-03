import React, { useState } from "react";
import { adviceData } from "./Advice/Data";
import Advicecard from "./Advicecard";

const Advicelist = () => {
  const [category, setCategory] = useState("All Topics");

  const categories = [
    "All Topics",
    ...new Set(adviceData.map((advice) => advice.category)),
  ];

  const filteredAdvice =
    category === "All Topics"
      ? adviceData
      : adviceData.filter((advice) => advice.category === category);

  return (
    <div className="p-4">
      <div className="flex gap-2 mb-4 justify-center flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded ${
              category === cat
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredAdvice.map((advice, index) => (
          <Advicecard
            key={index}
            title={advice.title}
            description={advice.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Advicelist;
