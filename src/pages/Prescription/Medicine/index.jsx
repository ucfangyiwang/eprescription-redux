import React, { useState } from "react";
// import Accordian from "../../../components/Accordian/Accordian";
import Modal from "../../../components/Modal/Modal";
import PrescriptionFormat from "../Medicine/PrescriptionPreview";
import ActiveMedicines from "./ActiveMedicines";
import AddedMedicines from "./AddedMedicines";
import Subaccordian from "../../../components/Accordian/Subaccordian";
import warningicon from "../../../assets/images/drug-interaction-icon.svg";
import searchicon from "../../../assets/images/search-normal.svg";
import removeicon from "../../../assets/images/remove-icon.svg";
import allergyicon from "../../../assets/images/drug-allergy-icon.svg";
import collapsearrow from '../../../assets/images/dropdown-down.svg'

const PrescriptionPart = ({showTab}) => {
  const [showModal, setShowModal] = useState(false);
  const prescriptionParts = [
    {
      title: "Active Medicines",
      component: <ActiveMedicines />,
    },
    {
      title: "Added Medicines",
      component: <AddedMedicines />,
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-2 bg-white p-2">
        <div className="col-span-1 font-bold text-2xl grid">
          Medicines
          <span className="text-xs font-normal">2 Diagnosis, 5 Medicines</span>
        </div>
        <div className="col-span-1">
          <div
            className="bg-emerald-600 p-2 rounded-md text-center text-white cursor-pointer"
            onClick={() => {
              setShowModal(true);
            }}
          >
            Generate Prescription
          </div>
        </div>
      </div>
      <div className="grid row-span-full pt-2">
        <div className="row-span-1">
          <div className="relative flex mt-2 mb-2 bg-white p-2 rounded-md">
            <img src={searchicon} className="pl-2 absolute" alt="search" />
            <input
              placeholder="Search and add new medicine"
              className="focus:outline-none pl-8 bg-white text-xs text-black self-center w-full"
            ></input>
          </div>
        </div>
        {/* Drug Allergy */}
        <div className="mb-2 p-2 bg-red-50 border border-red-300">
          <div className="flex mb-2">
            <div className="w-1/2 flex">
              <span>
                <img src={allergyicon}></img>
              </span>
              <span className="text-yellow-500 text-md font-semibold ml-2">
                Drug Allergy
              </span>
            </div>
            <div className="w-1/2 text-yellow-500 text-md font-semibold text-right">
              Moderate - Use with caution
            </div>
          </div>

          <div className="mb-2 pl-5">
            <ol class="list-none text-sm">
              <li className="mb-1">
                Patient is having a history of moderate allergic reactions
                developed like skin rash, itching and hives for the particular
                drug.
              </li>
            </ol>
          </div>
        </div>
        {/* END Drug Allergy */}
        {/* Drug Interaction */}
        <div className="p-2 mb-2 bg-red-50 border border-red-300">
          <div className="flex mb-2">
            <div className="w-1/2 flex">
              <span>
                <img src={warningicon}></img>
              </span>
              <span className="text-red-600 text-md font-semibold ml-2">
                Drug Interaction
              </span>
            </div>
            <div className="w-1/2 text-red-600 text-md font-semibold text-right">
              Serious - Use Alternative
            </div>
          </div>
          <div className="mb-2 text-gray-800 text-md font-semibold ">
            2 Interactions Found
          </div>
          <div className="mb-2 pl-5">
            <ol class="list-decimal text-sm">
              <li className="mb-1">
                Amiodarone will increase the level or effect of digoxin by
                P-glycoprotein (MDR1) efflux transporter. Avoid or Use Alternate
                Drug. Amiodarone increases PO digoxin serum concentrations by
                ~70% and IV digoxin by ~17%; measure digoxin levels before
                initiating amiodarone and reduce PO digoxin dose by 30-50%;
                decrease IV digoxin dose by 15-30%.
              </li>
              <li className="mb-1">
                Amiodarone will increase the level or effect of digoxin by basic
                (cationic) drug competition for renal tubular clearance. Avoid
                or Use Alternate Drug.Amiodarone increases PO digoxin serum
                concentrations by ~70% and IV digoxin by ~17%; measure digoxin
                levels before initiating amiodarone and reduce PO digoxin dose
                by 30-50%; decrease IV digoxin dose by 15-30%
              </li>
            </ol>
          </div>
        </div>
        {/* END Drug Interaction */}
        {/* Alcoholic Fatty Lever */}
        <div className="row-span-1 border-b">
          <div className="flex mt-2 bg-white p-2">
            <div className="w-1/2 font-semibold">Diabetes</div>
            <div className="w-1/2  font-semibold text-right">E11.9</div>
          </div>
        </div>
        {/* refilled medicine start*/}
        {showTab==="activeMedicines" && <div>
          <div className="row-span-1 bg-white">
            <div className="py-3 px-2 ">
              <div className="grid grid-cols-3">
                <div className="col-span-2 flex">
                  <span className="bg-blue-500 p-1 mr-2 text-white self-center font-bold text-xs rounded">
                    Refill
                  </span>
                  <div className=" font-semibold">Corticosteroids 30mg</div>
                </div>
                <div className="col-span-1 flex justify-end">
                  <span className="pr-1">
                    <img src={removeicon} />
                  </span>
                  <div className="text-gray-500 text-xs">Remove</div>
                </div>
              </div>
              <div className=" bg-gray-100 mt-2 mb-2 p-2 text-xs self-center">
                1 Tablet | Morning | Before Food | 15 Days
              </div>
              <div className="bg-blue-50 mt-3 mb-2 p-2 grid grid-cols-12 cursor-pointer">
                <div className="col-span-2 text-xs self-center text-emerald-500 font-medium">
                Refill For
                </div>
                <div className="col-span-8 text-xs font-semibold">15 Days</div>
                <div className="col-span-2 justify-end self-center flex">
                  <img src={collapsearrow} />
                </div>
              </div>
              <div className="flex justify-end font-medium my-3">
                  <div className="rounded mr-3 bg-gray-100 text-sm text-black px-3 py-1">Edit Dosage & Frequency</div>
                  <div className=" rounded bg-emerald-600 text-sm text-white px-3 py-1">Save</div>
              </div>
            </div>
          </div>
        </div>}
        {/* refilled medicine end*/}
        <div>
          <div className="row-span-1">
            <div className="flex mt-2 bg-white p-2">
              <div className="w-1/2 font-semibold">Alcoholic Fatty Liver</div>
              <div className="w-1/2  font-semibold text-right">K70.0</div>
            </div>
          </div>
          <div className="row-span-1 bg-white border-b">
            <div className="bg-gradient-to-b from-blue-50 p-2 border border-blue-100">
              <div className="grid grid-cols-3">
                <div className="col-span-2 flex">
                  <span className="bg-green-500 pl-1 pr-1 mr-2 text-white self-center font-bold text-sm rounded">
                    ETG
                  </span>
                  <div className=" font-semibold">Metadoxine 50mg</div>
                </div>
                <div className="col-span-1 flex justify-end">
                  <span className="pr-1">
                    <img src={removeicon} />
                  </span>
                  <div className="text-gray-500 text-xs">Remove</div>
                </div>
              </div>
              <div>
                <Subaccordian />
                {/* End Inside Medicine Accordian  */}
              </div>
            </div>
          </div>
          <div className="row-span-1 bg-white border-b">
            <div className="p-2 ">
              <div className="grid grid-cols-3">
                <div className="col-span-2 flex">
                  <span className="bg-green-500 pl-1 pr-1 mr-2 text-white self-center font-bold text-sm rounded">
                    ETG
                  </span>
                  <div className=" font-semibold">Corticosteroids 30mg</div>
                </div>
                <div className="col-span-1 flex justify-end">
                  <span className="pr-1">
                    <img src={removeicon} />
                  </span>
                  <div className="text-gray-500 text-xs">Remove</div>
                </div>
              </div>
              <Subaccordian />
            </div>
          </div>
          <div className="row-span-1 bg-white border-b">
            <div className="p-2 ">
              <div className="grid grid-cols-3">
                <div className="col-span-2 flex">
                  <span className="bg-violet-500 pl-1 pr-1 mr-2 text-white self-center font-bold text-sm rounded">
                    Formulary
                  </span>
                  <div className=" font-semibold">Choline 30mg</div>
                </div>
                <div className="col-span-1 flex justify-end">
                  <span className="pr-1">
                    <img src={removeicon} />
                  </span>
                  <div className="text-gray-500 text-xs">Remove</div>
                </div>
              </div>
              <Subaccordian />
            </div>
          </div>
        </div>
        {/* End Alcoholic Fatty Lever */}

        {/* Hypertension */}
        <div>
          <div className="row-span-1 border-b">
            <div className="flex mt-2 bg-white p-2">
              <div className="w-1/2 font-semibold">Hypertension</div>
              <div className="w-1/2  font-semibold text-right">K70.0</div>
            </div>
          </div>
          <div className="row-span-1 bg-white border-b">
            <div className="bg-gradient-to-b from-blue-50 p-2 border border-blue-100">
              <div className="grid grid-cols-3">
                <div className="col-span-2 flex">
                  <span className="bg-green-500 pl-1 pr-1 mr-2 text-white self-center font-bold text-sm rounded">
                    ETG
                  </span>
                  <div className=" font-semibold">Abisart 20mg</div>
                </div>
                <div className="col-span-1 flex justify-end">
                  <span className="pr-1">
                    <img src={removeicon} />
                  </span>
                  <div className="text-gray-500 text-xs">Remove</div>
                </div>
              </div>

              <Subaccordian />
            </div>
          </div>
          <div className="row-span-1 bg-white border-b">
            <div className="p-2 ">
              <div className="grid grid-cols-3">
                <div className="col-span-2 flex">
                  <span className="bg-yellow-500 pl-1 pr-1 mr-2 text-white self-center font-bold text-sm rounded">
                    IA
                  </span>
                  <div className=" font-semibold">Accupril 60mg</div>
                </div>
                <div className="col-span-1 flex justify-end">
                  <span className="pr-1">
                    <img src={removeicon} />
                  </span>
                  <div className="text-gray-500 text-xs">Remove</div>
                </div>
              </div>

              <Subaccordian />
            </div>
          </div>
          <div className="row-span-1 bg-white border-b">
            <div className="p-2 ">
              <div className="grid grid-cols-3">
                <div className="col-span-2 flex">
                  <span className="bg-violet-500 pl-1 pr-1 mr-2 text-white self-center font-bold text-sm rounded">
                    Formulary
                  </span>
                  <div className=" font-semibold">Choline 30mg</div>
                </div>
                <div className="col-span-1 flex justify-end">
                  <span className="pr-1">
                    <img src={removeicon} />
                  </span>
                  <div className="text-gray-500 text-xs">Remove</div>
                </div>
              </div>

              <Subaccordian />
            </div>
          </div>
        </div>
        {/* End Hypertension */}
      </div>
      {/* {prescriptionParts.map((prescription) => (
        <Accordian title={prescription.title}>
          {prescription.component}
        </Accordian>
      ))} */}
      {showModal && (
        <Modal setShowModal={setShowModal} showModal={showModal}>
          <PrescriptionFormat />
        </Modal>
      )}
    </div>
  );
};
export default PrescriptionPart;
