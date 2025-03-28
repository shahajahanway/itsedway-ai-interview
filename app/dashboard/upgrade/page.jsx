import React from "react";
import planData from "@/utils/planData";
import PlanItemCard from "./_components/PlanItemCard";

function Upgrade() {
  return (
    <div className="p-10">
      <h2 className="font-bold text-3xl text-center">Upgrade</h2>
      <h2 className="text-center text-gray-500">
        Upgrade to a monthly plan to access unlimited mock interviews
      </h2>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {planData.map((plan, index) => (
            <PlanItemCard plan={plan} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Upgrade;
