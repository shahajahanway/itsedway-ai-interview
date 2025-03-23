"use client";

import React from "react";

function Questions() {
  const mockQuestions = [
    {
      id: 1,
      question: "What is the time complexity of binary search?",
      answer: "The time complexity of binary search is O(log n).",
    },
    {
      id: 2,
      question: "Explain the difference between var, let, and const in JavaScript.",
      answer:
        "var is function-scoped, while let and const are block-scoped. const is used for values that should not be reassigned.",
    },
    {
      id: 3,
      question: "What is a RESTful API?",
      answer:
        "A RESTful API is an architectural style for designing APIs that use HTTP methods like GET, POST, PUT, DELETE to interact with resources.",
    },
  ];

  return (
    <div className="p-6 md:p-12">
      <h1 className="text-2xl md:text-4xl font-bold mb-6">Questions</h1>
      <div className="space-y-6">
        {mockQuestions.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="font-semibold text-lg">{item.question}</h2>
            <p className="text-gray-700 mt-2">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Questions;
