import React from "react";

function CurrentSchedule() {
    return (

        <div className="py-2">
            <table className="w-full bg-gray-100">
                <tr className="">
                    <td className="py-2 w-2/6 text-sm pl-3 font-medium">RoA Type</td>
                    <td className="w-3/6 text-sm ">
                        <div className="bg-white pl-3 py-2">Oral</div>
                    </td>
                </tr>
                <tr className="">
                    <td className=" py-2 w-2/6 text-sm pl-3 font-medium">Form</td>
                    <td className="w-3/6 text-sm  ">
                        <div className="bg-white  pl-3 my-1 py-2">Tablet</div>
                    </td>
                </tr>
                <tr className="">
                    <td className="py-2  w-2/6 text-sm pl-3 font-medium">Quantity</td>
                    <td className="w-3/6 text-sm  ">
                        <div className="bg-white  pl-3 py-2">1</div>
                    </td>
                </tr>
                <tr className="">
                    <td className="py-2  w-2/6 text-sm pl-3 font-medium">To be Taken</td>
                    <td className="w-3/6 text-sm  ">
                        <div className="bg-white  pl-3 my-1 py-2">After Food</div>
                    </td>
                </tr>
                <tr className="">
                    <td className="py-2  w-2/6 text-sm pl-3 font-medium">Frequency</td>
                    <td className="w-3/6 text-sm  ">
                        <div className="bg-white  pl-3 py-2">Morning & Evening</div>
                    </td>
                </tr>
                <tr className="">
                    <td className="py-2  w-2/6 text-sm pl-3 font-medium">Start Date</td>
                    <td className="w-3/6 text-sm  ">
                        <div className="bg-white  pl-3 my-1 py-2">03/09/2022</div>
                    </td>
                </tr>
                <tr className="">
                    <td className="py-2  w-2/6 text-sm pl-3 font-medium">End Date</td>
                    <td className="w-3/6 text-sm  ">
                        <div className="bg-white  pl-3 py-2">18/09/2022  </div>
                    </td>
                </tr>
                <tr className="">
                    <td className="py-2  w-2/6 text-sm pl-3 font-medium">Course</td>
                    <td className="w-3/6 text-sm  ">
                        <div className="bg-white  pl-3 my-1 py-2">15 Days</div>
                    </td>
                </tr>
                <tr className="">
                    <td className=" py-2 w-2/6 text-sm pl-3 font-medium">Instruction</td>
                    <td className="w-3/6 text-sm  ">
                        <div className="bg-white  pl-3 py-2">-</div>
                    </td>
                </tr>
                <tr className="">
                    <td className="py-2  w-2/6 text-sm pl-3 font-medium">Diagnosis</td>
                    <td className="w-3/6 text-sm  ">
                        <div className="bg-white  pl-3 mt-1 py-2">Alcoholic Fatty Liver | E17.7</div>
                    </td>
                </tr>
            </table>
            <div className="border my-3 px-2 pt-3 pb-5">
                <h3 className="text-base font-semibold">Medicine Intake</h3>
                <div className="flex pt-4 pb-5">
                    <div className="w-5/12 bg-emerald-600 h-2 rounded"></div>
                    <div className="w-4/12 bg-yellow-400 h-2 rounded mx-1"></div>
                    <div className="w-3/12 bg-red-500 h-2 rounded"></div>
                </div>
                <div className="flex ">
                    <div className="w-2/6">
                        <span className="inline-block">On Time</span>
                        <div className="flex items-center"><div className="w-4 h-4 rounded-full bg-emerald-600"></div> <span className="ml-3">46%</span></div>
                    </div>
                    <div className="w-2/6">
                        <span className="inline-block">Off Time</span>
                        <div className="flex items-center"><div className="w-4 h-4 rounded-full bg-yellow-400"></div> <span className="ml-3">46%</span></div>
                    </div>
                    <div className="w-2/6">
                        <span className="inline-block">Skipped</span>
                        <div className="flex items-center"><div className="w-4 h-4 rounded-full bg-red-500"></div> <span className="ml-3">46%</span></div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default CurrentSchedule;

