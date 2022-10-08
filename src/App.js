import React from "react";
import PrescriptionPart from "./pages/PrescriptionPart";
import RecommentationPart from "./pages/RecommendationPart/index";
import PrescriptionRight from "./pages/PrescriptionRight";
import PrescriptionFormat from "./pages/PrescriptionPart/PrescriptionFormat";


function App() {
  return (
    <div className="bg-white">
      <div className="mb-2 grid grid-cols-2 pl-4 pt-2 pr-4 pb-4 border border-b-gray-100">
        <div className="col-span-1 font-bold text-2xl">Prescription</div>
        <div className="col-span-1 font-bold text-right">X</div>
      </div>
      <div className="mx-2 bg-gray-100">
        <div className="grid grid-cols-9">
          <div className="col-span-3 bg-white">
            <RecommentationPart />
          </div>
          <div className="col-span-4 mx-3 py-2">
            <PrescriptionPart />
          </div>
          <div className="col-span-2 p-2 bg-white">
            <PrescriptionRight />
          </div>
        </div>

      </div>
    </div>

  );
}
export default App;
