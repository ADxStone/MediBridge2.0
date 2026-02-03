import React from "react";
import Advicelist from "../Education/Advicelist";

const EducationPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-purple-700 text-white p-6 text-center">
        <h1 className="text-3xl font-bold">Chronic Illness Education</h1>
        <p className="mt-2">
          Learn how to manage chronic conditions effectively with daily tips and guidance
        </p>
      </header>

      <main className="p-4">
        <Advicelist />
      </main>
    </div>
  );
};

export default EducationPage;
