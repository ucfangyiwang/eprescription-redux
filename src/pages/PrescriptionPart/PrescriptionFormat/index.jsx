import React from 'react';
import PrescriptionImg from "../../../assets/images/pres-logo.png"
import Pximg from "../../../assets/images/px-img.png";
import barcode from "../../../assets/images/barcode.png";

const PrescriptionFormat = () => {
    return (
        <div className="flex">
        <div className="bg-white w-2/4 ">
          <div className="flex bg-emerald-600  items-center px-8 py-3">
            <div className="w-2/6"><img src={PrescriptionImg} alt="" /></div>
            <h2 className="text-white font-bold w-2/6 text-center">Medical Prescription</h2>
            <div className="w-2/6 justify-end flex"><img src={Pximg} alt="" /></div>
          </div>
          <div className="px-8">
            <div className="flex  w-full py-3">
              <div className="w-2/4 flex">
                <label className="text-base px-3 min-w-max md:w-1/6   text-gray-800 inline-block font-bold">Prescriber No:</label>
                <div className="w-5/6"><input className=" block  w-full border-0  focus:outline-none focus:border-0 sm:text-sm " type="text" name="search" /></div>
              </div>
              <div className="w-2/4 flex">
                <label className="font-bold text-base px-3 w-1/6 min-w-max  text-gray-800 inline-block">Date:</label>
                <div className="w-5/6 "><input className=" block w-full border-0  focus:outline-none focus:border-0 sm:text-sm" type="text" name="search" /></div>
              </div>
            </div>
            <div className="flex  w-full bg-gray-200">
              <div className="w-2/4 flex ">
                <label className="text-base px-3 min-w-max md:w-1/6   text-gray-800 inline-block font-bold">Patient's Name:</label>
                <div className="w-5/6"><input className="bg-gray-200 block  w-full border-0  focus:outline-none focus:border-0 sm:text-sm " type="text" name="search" /></div>
              </div>
              <div className="w-2/4 flex">
                <label className="font-bold text-base px-3 w-1/6 min-w-max  text-gray-800 inline-block">Patient's Medicare No:</label>
                <div className="w-5/6 "><input className="bg-gray-200 block w-full border-0  focus:outline-none focus:border-0 sm:text-sm" type="text" name="search" /></div>
              </div>
            </div>
            <div className="flex  w-full bg-gray-50 my-1">
              <div className=" flex">
                <label className="text-base px-3 min-w-max md:w-1/6   text-gray-800 inline-block font-bold">Pharmaceutical Benefits Entitlement Card No:</label>
                <div className="w-5/6"><input className="bg-gray-50 block  w-full border-0  focus:outline-none focus:border-0 sm:text-sm " type="text" name="search" /></div>
              </div>
            </div>
            <div className="flex  w-full bg-gray-200">
              <div className=" flex ">
                <label className="text-base px-3 min-w-max md:w-1/6   text-gray-800 inline-block font-bold">S/o|D/o|W/o:</label>
                <div className="w-5/6"><input className="bg-gray-200 block  w-full border-0  focus:outline-none focus:border-0 sm:text-sm " type="text" name="search" /></div>
              </div>
            </div>
            <div className="flex  w-full bg-gray-50 my-1">
              <div className="w-2/6 flex ">
                <label className="min-w-max text-base px-3 w-2/4   text-gray-800 inline-block font-bold">Date of Birth:</label>
                <div className="w-full"><input className=" block bg-gray-50 w-full border-0  focus:outline-none focus:border-0 sm:text-sm px-2" type="text" name="search" /></div>
              </div>
              <div className="w-2/6 flex">
                <label className="min-w-max font-bold text-base px-3 w-1/4  text-gray-800 inline-block">Age:</label>
                <div className="w-full "><input className=" block bg-gray-50 w-full border-0  focus:outline-none focus:border-0 sm:text-sm px-2" type="text" name="search" /></div>
              </div>
              <div className="w-2/6 flex">
                <label className="min-w-max font-bold text-base px-3 w-1/4 text-gray-800 inline-block">Sex:</label>
                <div className="w-full "><input className=" block bg-gray-50 w-full border-0  focus:outline-none focus:border-0 sm:text-sm px-2" type="text" name="search" /></div>
              </div>

            </div>
            <div className="flex  w-full bg-gray-200">
              <div className=" flex">
                <label className="text-base px-3 min-w-max md:w-1/6   text-gray-800 inline-block font-bold">Occupation:</label>
                <div className="w-5/6"><input className="bg-gray-200 block  w-full border-0  focus:outline-none focus:border-0 sm:text-sm " type="text" name="search" /></div>
              </div>
            </div>
            <div className="flex  w-full bg-gray-50 my-1">
              <div className="w-2/4 flex ">
                <label className="text-base px-3 min-w-max md:w-1/6   text-gray-800 inline-block font-bold">Patient's Address:</label>
                <div className="w-5/6"><input className="bg-gray-50 block  w-full border-0  focus:outline-none focus:border-0 sm:text-sm " type="text" name="search" /></div>
              </div>
              <div className="w-2/4 flex">
                <label className="font-bold text-base px-3 w-1/6 min-w-max  text-gray-800 inline-block">Cell No:</label>
                <div className="w-5/6 "><input className="bg-gray-50 block w-full border-0  focus:outline-none focus:border-0 sm:text-sm" type="text" name="search" /></div>
              </div>
            </div>
            <div className="flex  w-full bg-gray-200">
              <div className=" flex">
                <label className="text-base px-3 min-w-max md:w-1/6   text-gray-800 inline-block font-bold">Health Insurance No:</label>
                <div className="w-5/6"><input className="bg-gray-200 block  w-full border-0  focus:outline-none focus:border-0 sm:text-sm " type="text" name="search" /></div>
              </div>
            </div>
            <div className="flex  w-full bg-gray-50 my-1">
              <div className="w-2/4 flex ">
                <label className="text-base px-3 min-w-max md:w-1/6   text-gray-800 inline-block font-bold">Health Care Provider:</label>
                <div className="w-5/6"><input className="bg-gray-50 block  w-full border-0  focus:outline-none focus:border-0 sm:text-sm " type="text" name="search" /></div>
              </div>
              <div className="w-2/4 flex">
                <label className="font-bold text-base px-3 w-1/6 min-w-max  text-gray-800 inline-block">Health Card No:</label>
                <div className="w-5/6 "><input className="bg-gray-50 block w-full border-0  focus:outline-none focus:border-0 sm:text-sm" type="text" name="search" /></div>
              </div>
            </div>
            <div className="bg-gray-200">
              <label className=" min-w-max text-base px-3 w-1/6 text-black inline-block font-bold">Diagnosed with:</label>
              <div className="flex h-6 border-0 w-full ">
              </div>
            </div>
            <div className="flex  w-full bg-gray-50 my-1">
              <div className="w-2/6 flex ">
                <label className="min-w-max text-base px-3 w-2/4   text-gray-800 inline-block font-bold">Bood Pressure:</label>
                <div className="w-full"><input className=" block bg-gray-50 w-full border-0  focus:outline-none focus:border-0 sm:text-sm px-2" type="text" name="search" /></div>
              </div>
              <div className="w-2/6 flex">
                <label className="min-w-max font-bold text-base px-3 w-1/4  text-gray-800 inline-block">Pulse Rate:</label>
                <div className="w-full "><input className=" block bg-gray-50 w-full border-0  focus:outline-none focus:border-0 sm:text-sm px-2" type="text" name="search" /></div>
              </div>
              <div className="w-2/6 flex">
                <label className="min-w-max font-bold text-base px-3 w-1/4 text-gray-800 inline-block">Weight:</label>
                <div className="w-full "><input className=" block bg-gray-50 w-full border-0  focus:outline-none focus:border-0 sm:text-sm px-2" type="text" name="search" /></div>
              </div>
            </div>
            <div className="flex  w-full bg-gray-200">
              <div className="w-2/4 flex ">
                <label className="text-base px-3 min-w-max md:w-1/6   text-gray-800 inline-block font-bold">Allergies:</label>
                <div className="w-5/6"><input className="h-3 bg-gray-200 block  w-full border-0  focus:outline-none focus:border-0 sm:text-sm " type="text" name="search" /></div>
              </div>
              <div className="w-2/4 flex">
                <label className="font-bold text-base px-3 w-1/6 min-w-max  text-gray-800 inline-block">Disabilities if any:</label>
                <div className="w-5/6 "><input className="bg-gray-200 block w-full border-0  focus:outline-none focus:border-0 sm:text-sm" type="text" name="search" /></div>
              </div>
            </div>
            <div>
              <div className="flex bg-gray-300">
                <div className="w-36 "></div>
                <div className="w-2/6 text-center font-bold text-gray-800">Drugs:</div>
                <div className="w-2/6 text-center font-bold text-gray-800 ">Unit<br />(Tablet/Syrup):</div>
                <div className="w-2/6 text-center font-bold text-gray-800">Dosage<br />(Per Day)</div>
              </div>
              <div className="flex my-1">
                <div className="font-bold text-center w-36">1.</div>
                <div className="bg-gray-50 w-2/6"></div>
                <div className="bg-gray-50 w-2/6 "></div>
                <div className="bg-gray-50 w-2/6"></div>
              </div>
              <div className="flex">
                <div className="font-bold text-center w-36">2.</div>
                <div className="bg-gray-200 w-2/6"></div>
                <div className="bg-gray-200 w-2/6 "></div>
                <div className="bg-gray-200 w-2/6"></div>
              </div>
              <div className="flex my-1">
                <div className="font-bold text-center w-36">3.</div>
                <div className="bg-gray-50 w-2/6"></div>
                <div className="bg-gray-50 w-2/6 "></div>
                <div className="bg-gray-50 w-2/6"></div>
              </div>
              <div className="flex">
                <div className="font-bold text-center w-36">4.</div>
                <div className="bg-gray-200 w-2/6"></div>
                <div className="bg-gray-200 w-2/6 "></div>
                <div className="bg-gray-200 w-2/6"></div>
              </div>
              <div className="flex my-1">
                <div className="font-bold text-center w-36">5.</div>
                <div className="bg-gray-50 w-2/6"></div>
                <div className="bg-gray-50 w-2/6 "></div>
                <div className="bg-gray-50 w-2/6"></div>
              </div>
              <div className="flex">
                <div className="font-bold text-center w-36">6.</div>
                <div className="bg-gray-200 w-2/6"></div>
                <div className="bg-gray-200 w-2/6 "></div>
                <div className="bg-gray-200 w-2/6"></div>
              </div>
              <div className="flex my-1">
                <div className="font-bold text-center w-36">7.</div>
                <div className="bg-gray-50 w-2/6"></div>
                <div className="bg-gray-50 w-2/6 "></div>
                <div className="bg-gray-50 w-2/6"></div>
              </div>
              <div className="flex">
                <div className="font-bold text-center w-36">8.</div>
                <div className="bg-gray-200 w-2/6"></div>
                <div className="bg-gray-200 w-2/6 "></div>
                <div className="bg-gray-200 w-2/6"></div>
              </div>
            </div>
            <div className="flex  w-full bg-gray-50 mt-1">
              <div className=" flex">
                <label className="text-base px-3 min-w-max md:w-1/6   text-gray-800 inline-block font-bold">Diet To Follow:</label>
                <div className="w-5/6"><input className="bg-gray-50 block  w-full border-0  focus:outline-none focus:border-0 sm:text-sm " type="text" name="search" /></div>
              </div>
            </div>
            <div className="flex  w-full bg-gray-200 my-1">
              <div className=" flex">
                <label className="text-base px-3 min-w-max md:w-1/6   text-gray-800 inline-block font-bold">Brief History of Patient:</label>
                <div className="w-5/6"><input className="bg-gray-200 block  w-full border-0  focus:outline-none focus:border-0 sm:text-sm " type="text" name="search" /></div>
              </div>
            </div>
            <div className="flex  w-full bg-gray-50 border-b border-gray-300">
              <div className=" flex">
                <label className="text-base px-3 min-w-max md:w-1/6   text-gray-800 inline-block font-bold">Follow Up Physician:</label>
                <div className="w-5/6"><input className="bg-gray-50 block  w-full border-0  focus:outline-none focus:border-0 sm:text-sm " type="text" name="search" /></div>
              </div>
            </div>
          </div>
          <div className="mr-5 mb-5 mt-16">
            <div className="text-right font-bold "><span className="text-gray-800">Signature Of Physician</span><span className="ml-3 inline-block pt-1 w-2/6  bg-gray-100"></span></div>
          </div>
          <div className="bg-gray-300 text-gray-600 font-semibold px-8 py-2">
            <p>www.iamyhealth.com</p>
          </div>
        </div>
        <div className="bg-white w-2/4 p-3">
          <div className="rounded bg-gray-200 flex p-2 mx-3">
            <div className="p-2  bg-emerald-600 rounded-md text-white w-1/2 text-center">
              In-House Pharmacy
            </div>
            <div className="self-center text-center w-1/2 font-semibold">
              Patients Preferred Pharmacy
            </div>
          </div>
          <div className="border-b border-gray-300 w-full my-4"></div>
          <div className="font-semibold text-black bg-gray-100 p-2 text-base  ">Select Pharmacy</div>
          <div className="flex">
            <div className="w-11/12">
              <div className="bg-blue-50 mt-2 mb-2 p-2 grid grid-cols-12">
                <div className="col-span-11 text-base font-semibold pl-3">
                  SAC Pharma Photo Clinics and Lab
                </div>
                <div className="col-span-1 justify-end self-center flex">
                  <img src="/img/dropdown-down.svg" />
                </div>
              </div>
            </div>
            <div className="w-1/12 rounded text-white bg-emerald-600  m-2 flex justify-center  text-3xl">+</div>
          </div>
          <div className="bg-blue-50  pl-4 py-3">
            <div className=" text-base font-semibold text-emerald-500">Pharmacy Notes</div>
            <input className=" pt-2 bg-blue-50 block  w-full border-0  focus:outline-none focus:border-0 sm:text-sm " type="text" placeholder="Type in additional notes if any for the pharmacy" />
          </div>
          <div className="bg-blue-50 my-2 py-2 grid grid-cols-12 px-4">
            <div className="col-span-11 text-base font-semibold text-emerald-500">
              <div className="flex"><span className="inline-block w-1/4">Patient Cost</span> <span className="pl-7 text-black text-base font-bold inline-block w-3/4">$180</span></div>
            </div>
            <div className="col-span-1 justify-end self-center flex">
              <img src="/img/dropdown-down.svg" />
            </div>
          </div>
          <div className="bg-blue-50 my-2 py-2 grid grid-cols-12 px-4">
            <div className="col-span-11 text-base font-semibold text-emerald-500">
              <div className="flex"><span className="inline-block w-1/4">Patient Insurance</span> <span className="pl-7 text-black text-base font-bold inline-block w-3/4">AED19PNRXYZ</span></div>
            </div>
            <div className="col-span-1 justify-end self-center flex">
              <img src="/img/dropdown-down.svg" />
            </div>
          </div>
          <div class="flex items-center mb-4">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Generate E-Prescription Token</label>
          </div>
          <div>
            <img src={barcode} alt="" />
          </div>
          <div>Sent Via</div>
          <div className="flex">
            <div className="w-11/12">
              <div className="bg-blue-50 mt-2 mb-2 p-2 grid grid-cols-12">
                <div className="col-span-11 text-base font-semibold pl-3">
                   Patient Phone SMS
                </div>
                <div className="col-span-1 justify-end self-center flex">
                  <img src="/img/dropdown-down.svg" />
                </div>
              </div>
            </div>
            <div className="w-1/12 rounded text-white bg-emerald-600  m-2 flex justify-center items-center  text-base">Sent</div>
          </div>
          <div className="flex justify-end font-semibold">
            <div className="w-1/12 py-1 rounded text-white bg-emerald-600  m-2 flex justify-center items-center  text-base">Print</div>
            <div className="w-1/12 py-1 rounded text-black bg-gray-300  m-2 flex justify-center items-center  text-base">Save</div>
          </div>
        </div>
      </div>
    );
};

export default PrescriptionFormat;

