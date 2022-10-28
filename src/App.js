import React from "react";



import Prescription from "./pages/Prescription";

function App() {
  return (
    <div className="bg-white">

      <div className="mb-2 grid grid-cols-2 pl-4 pt-2 pr-4 pb-4 border border-b-gray-100">
        <div className="col-span-1 font-bold text-2xl">Prescription</div>
        <div className="col-span-1 font-bold text-right">X</div>
      </div>

      <Prescription />
    </div>

  );
}
export default App;
