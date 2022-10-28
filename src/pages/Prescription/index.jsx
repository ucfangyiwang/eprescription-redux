import React, { useState } from "react";
import RecommentationPart from "./RecmndActivemed";
import PrescriptionPart from "./Medicine";
import PrescriptionRight from "./Inspector";

const Prescription = () => {
  const [showTab, setShowTab] = useState("reccomendations");
  return (
    <div className="flex">
      <div className="w-4/12 bg-white">
        <div className="p-2">
          <div className="rounded bg-gray-200 flex p-2">
            <div
              className={`${
                showTab === "reccomendations"
                  ? `p-2  bg-emerald-600 rounded-md text-white`
                  : `self-center font-semibold`
              }  w-1/2 text-center cursor-pointer`}
              onClick={() => setShowTab("reccomendations")}
            >
              Recomendations
            </div>
            <div
              className={`${
                showTab === "activeMedicines"
                  ? `p-2  bg-emerald-600 rounded-md text-white`
                  : `self-center font-semibold`
              }  w-1/2 text-center cursor-pointer`}
              onClick={() => setShowTab("activeMedicines")}
            >
              Active Medicines
            </div>
          </div>
        </div>
        <RecommentationPart showTab={showTab} />
      </div>
      <div className="w-5/12 mx-3 py-2">
        <PrescriptionPart showTab={showTab} />
      </div>
      <div className="w-4/12 p-2 bg-white">
        <PrescriptionRight showTab={showTab} />
      </div>
    </div>
  );
};
export default Prescription;
