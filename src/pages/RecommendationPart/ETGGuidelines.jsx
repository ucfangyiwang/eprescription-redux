import React from "react";

const ETGGuidelines = () => {
  return (
    <div className="mt-1">
      <div className="grid row-span-full pt-2">
        {/* ICD-10-CW-E11.65 */}
        <div className="row-span-1 bg-gray-50 flex">
          <div className="w-3/4 p-2 font-semibold">Alcoholic Fatty Lever</div>
          <div className="w-1/4 p-2 font-semibold text-right">K70.0</div>
        </div>
        <div className="row-span-1">
          <div className="flex mt-2 mb-2 bg-gray-200 p-2 rounded-md">
            <div className="w-1/12">
              <img src="/img/search-normal.svg" />
            </div>
            <div className="w-11/12 text-xs text-gray-400 self-center">
              <input
                type="text"
                className="bg-gray-200 w-full"
                placeholder=" Search Medicines"
              ></input>
            </div>
          </div>
        </div>
        <div className="row-span-1 border border-white border-b-gray-100">
          <div className="bg-white flex m-2">
            <div className="w-3/4 text-xs self-center">Metadoxine 50mg</div>
            <div className="w-1/4 bg-gray-100 p-1 text-xs rounded-md self-center text-center cursor-pointer">
              Added
            </div>
          </div>
        </div>
        <div className="row-span-1 border border-white border-b-gray-100">
          <div className="bg-white flex m-2">
            <div className="w-3/4 text-xs self-center">Metadoxine 100mg</div>
            <div className="w-1/4 bg-emerald-600 text-white p-1 text-xs rounded-md self-center text-center cursor-pointer">
              Add
            </div>
          </div>
        </div>
        <div className="row-span-1 border border-white border-b-gray-100">
          <div className="bg-white flex m-2">
            <div className="w-3/4 text-xs self-center">Metadoxine 50mg</div>
            <div className="w-1/4 bg-gray-100 p-1 text-xs rounded-md self-center text-center cursor-pointer">
              Added
            </div>
          </div>
        </div>
        <div className="row-span-1 border border-white border-b-gray-100">
          <div className="bg-white flex m-2">
            <div className="w-3/4 text-xs self-center">Metadoxine 100mg</div>
            <div className="w-1/4 bg-emerald-600 text-white p-1 text-xs rounded-md self-center text-center cursor-pointer">
              Add
            </div>
          </div>
        </div>
        <div className="row-span-1 border border-white border-b-gray-100">
          <div className="bg-white flex m-2">
            <div className="w-3/4 text-xs self-center">Metadoxine 100mg</div>
            <div className="w-1/4 bg-emerald-600 text-white p-1 text-xs rounded-md self-center text-center cursor-pointer">
              Add
            </div>
          </div>
        </div>

        <div className="row-span-1 border border-white border-b-gray-100">
          <div className="bg-white flex m-2">
            <div className="w-3/4 text-xs self-center">Metadoxine 100mg</div>
            <div className="w-1/4 bg-emerald-600 text-white p-1 text-xs rounded-md self-center text-center cursor-pointer">
              Add
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ETGGuidelines;
