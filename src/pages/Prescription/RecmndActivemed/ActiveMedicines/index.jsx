import React from "react";


const ActiveMedicines = () => {
 
  return (  
      <div>
        <div className="bg-gray-100 p-3 flex justify-between font-medium text-base">
          <h3>Diabetes</h3>
          <div>E11.9</div>
        </div>
        <div>
          <div className="flex text-sm  py-4 px-2 mx-2 border-b">
            <div className="w-3/4">
              <span className="inline-block font-semibold">Aspirin 30mg</span>
              <br></br>
              <span className="inline-block pt-2 font-medium">1 Tablet | Morning, Evening | 15 Days</span>
            </div>
            <div className="w-1/4 bg-emerald-600 text-white p-1 text-xs rounded-md self-center text-center cursor-pointer">
              Refill
            </div>
          </div>
          {/* added medicine styled start*/}
          <div className="flex text-sm  py-4 px-2 mx-2 border-b border border-blue-200 bg-blue-50">
            <div className="w-3/4">
              <span className="inline-block font-semibold">Aspirin 30mg</span>
              <br></br>
              <span className="inline-block pt-2 font-medium">1 Tablet | Morning, Evening | 15 Days</span>
            </div>
            <div className="w-1/4 bg-gray-200 text-gray-500 p-1 text-xs rounded-md self-center text-center cursor-pointer font-semibold">
              Added
            </div>
          </div>
          {/* added medicine styled end*/}
          <div className="flex text-sm  py-4 px-2 mx-2 border-b">
            <div className="w-3/4">
              <span className="inline-block font-semibold">Aspirin 30mg</span>
              <br></br>
              <span className="inline-block pt-2 font-medium">1 Tablet | Morning, Evening | 15 Days</span>
            </div>
            <div className="w-1/4 bg-emerald-600 text-white p-1 text-xs rounded-md self-center text-center cursor-pointer">
              Refill
            </div>
          </div>
          <div className="flex text-sm  py-4 px-2 mx-2 border-b">
            <div className="w-3/4">
              <span className="inline-block font-semibold">Aspirin 30mg</span>
              <br></br>
              <span className="inline-block pt-2 font-medium">1 Tablet | Morning, Evening | 15 Days</span>
            </div>
            <div className="w-1/4 bg-emerald-600 text-white p-1 text-xs rounded-md self-center text-center cursor-pointer">
              Refill
            </div>
          </div>
        </div>
      </div>  
  );
};
export default ActiveMedicines;
