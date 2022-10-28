import React from "react";
import searchicon from "../../../../assets/images/search-normal.svg";
import DrugsResult from "../../../../components/drugs/DurgsResult";
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
              <img src={searchicon} />
            </div>
            <div className="w-11/12 text-xs text-gray-400 self-center">
              Search medicines
            </div>
          </div>
          <DrugsResult/>
        </div>
       
       
      </div>
    </div>
  );
};
export default ETGGuidelines;
