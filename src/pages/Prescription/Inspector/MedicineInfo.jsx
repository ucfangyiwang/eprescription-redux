import React from "react";

function MedicineInfo() {
  return (

    <div className="p-2">
      <div className="font-semibold text-sm pl-3">Metadoxine</div>
      <table className="w-full mt-3 border border-gray-100">
        <thead className="bg-gray-50 text-left">
          <tr>
            <th className="pl-5 pt-2 pr-2 pb-2 text-sm font-normal">
              Composition
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="pl-5 pt-2 pr-2 pb-2 text-sm font-normal border border-b-gray-100">
              Quinapril (HCl)
            </td>
          </tr>
          <tr>
            <td className="pl-5 pt-2 pr-2 pb-2 text-sm font-normal border border-b-gray-100">
              Gluten Free
            </td>
          </tr>
          <tr>
            <td className="pl-5 pt-2 pr-2 pb-2 text-sm font-normal border border-b-gray-100">
              lactose monohydrate, gelatin, reddish brown scored f-c
            </td>
          </tr>
        </tbody>
      </table>

      <table className="w-full mt-3 border border-gray-100">
        <thead className="bg-gray-50 text-left">
          <tr>
            <th className="pl-5 pt-2 pr-2 pb-2 text-sm font-normal">Dose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="pl-5 pt-2 pr-2 pb-2 text-sm font-normal border border-b-gray-100">
              Admin as single or 2 equally divided doses, pref before food
              Hypertension (disc diuretic if poss 2-3 days prior to initiation).
              Without diuretic
            </td>
          </tr>
          <tr>
            <td className="pl-5 pt-2 pr-2 pb-2 text-sm font-normal border border-b-gray-100">
              initially 5-10 mg day
            </td>
          </tr>
          <tr>
            <td className="pl-5 pt-2 pr-2 pb-2 text-sm font-normal border border-b-gray-100">
              may incur at & age
            </td>
          </tr>
          <tr>
            <td className="pl-5 pt-2 pr-2 pb-2 text-sm font-normal border border-b-gray-100">
              4 wk intervals
            </td>
          </tr>
          <tr>
            <td className="pl-5 pt-2 pr-2 pb-2 text-sm font-normal border border-b-gray-100">
              range 10-40 mg day
            </td>
          </tr>
          <tr>
            <td className="pl-5 pt-2 pr-2 pb-2 text-sm font-normal border border-b-gray-100">
              may add diuretic if inadequate response at 20 mg day in With
              diuretic
            </td>
          </tr>
        </tbody>
      </table>
    
    </div>

  );
}

export default MedicineInfo;
