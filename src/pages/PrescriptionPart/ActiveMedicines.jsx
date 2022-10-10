import React from 'react';

function ActiveMedicines() {
    return (
      <div>
      <div className="bg-white p-2">
        <div className="text-xs mt-2 mb-2 flex">
          <div className="w-1/2">Vildagliptin 50 mg</div>
          <div className="w-1/2 text-right text-emerald-600 font-semibold underline cursor-pointer">
            + Refill
          </div>
        </div>
        <div className="text-xs bg-blue-50 p-2 mt-2 mb-2 flex">
          <div className="w-3/12 text-xs pr-2 border-r-2 border-gray-200">
            <span className=" self-center">Quantity</span>
            <span className="bg-blue-100  rounded-sm p-1 ml-2 font-semibold cursor-pointer">
              -
            </span>
            <span className=" p-1 ml-2 font-semibold">10</span>
            <span className="bg-blue-100 rounded-sm p-1 ml-2 font-semibold cursor-pointer">
              +
            </span>
          </div>
          <div className="w-3/12 text-xs pr-2 border-r-2 border-gray-200 ml-2">
            <span className=" self-center">Dosage</span>
            <span className="bg-blue-100  rounded-sm p-1 ml-2 font-semibold cursor-pointer">
              -
            </span>
            <span className=" p-1 ml-2 font-semibold">50</span>
            <span className="bg-blue-100 rounded-sm p-1 ml-2 font-semibold cursor-pointer">
              +
            </span>
          </div>
          <div className="w-3/12 flex ml-3">
            <span className="text-xs">
              <select>
                <option>Choose Frequency</option>
                <option>1</option>
                <option>2</option>
              </select>
            </span>
          </div>
          <div className="w-1/12 flex ml-3">
            <span className="text-xs">
              <select>
                <option>to be taken</option>
                <option>1</option>
                <option>2</option>
              </select>
            </span>
          </div>
        </div>
  
        <div className="text-xs mt-2 mb-2 flex">
          <div className="w-1/2">Colecalciferol 1 mg via IM inj</div>
          <div className="w-1/2 text-right text-emerald-600 font-semibold underline cursor-pointer">
            + Refill
          </div>
        </div>
        <div className="text-xs bg-blue-50 p-2 mt-2 mb-2 flex">
          <div className="w-3/12 text-xs pr-2 border-r-2 border-gray-200">
            <span className=" self-center">Quantity</span>
            <span className="bg-blue-100  rounded-sm p-1 ml-2 font-semibold cursor-pointer">
              -
            </span>
            <span className=" p-1 ml-2 font-semibold">10</span>
            <span className="bg-blue-100 rounded-sm p-1 ml-2 font-semibold cursor-pointer">
              +
            </span>
          </div>
          <div className="w-3/12 text-xs pr-2 border-r-2 border-gray-200 ml-2">
            <span className=" self-center">Dosage</span>
            <span className="bg-blue-100  rounded-sm p-1 ml-2 font-semibold cursor-pointer">
              -
            </span>
            <span className=" p-1 ml-2 font-semibold">50</span>
            <span className="bg-blue-100 rounded-sm p-1 ml-2 font-semibold cursor-pointer">
              +
            </span>
          </div>
          <div className="w-3/12 flex ml-3">
            <span className="text-xs">
              <select>
                <option>Choose Frequency</option>
                <option>1</option>
                <option>2</option>
              </select>
            </span>
          </div>
          <div className="w-1/12 flex ml-3">
            <span className="text-xs">
              <select>
                <option>to be taken</option>
                <option>1</option>
                <option>2</option>
              </select>
            </span>
          </div>
        </div>
      </div>
      </div>
    );
}

export default ActiveMedicines;