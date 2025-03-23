"use client";

import React from "react";

function HowItWorks() {
  return (
    <div className="p-6 md:p-12">
      <h1 className="text-2xl md:text-4xl font-bold mb-6">How It Works</h1>
      <ol className="list-decimal list-inside space-y-4">
        <li>
          <span className="font-semibold">Sign Up or Log In:</span> Create an account or log in to access Itsedway AI Mock.
        </li>
        <li>
          <span className="font-semibold">Choose Your Plan:</span> Select a plan (Free, Monthly, or Yearly) to start practicing.
        </li>
        <li>
          <span className="font-semibold">Start Mock Interviews:</span> Create up to 3 free mock interviews and retake them as needed.
        </li>
        <li>
          <span className="font-semibold">Practice Questions:</span> Access practice questions to refine your skills.
        </li>
        <li>
          <span className="font-semibold">Get Digital Offers:</span> Unlock 90% off on digital products via <a href="https://digital.itsedway.com/" className="text-primary underline">www.digital.itsedway.com</a>.
        </li>
        <li>
          <span className="font-semibold">Track Progress:</span> Use the dashboard to monitor your progress and performance.
        </li>
      </ol>
    </div>
  );
}

export default HowItWorks;
