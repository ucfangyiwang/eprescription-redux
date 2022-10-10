import React,{ useState } from "react";
import Accordian from "../../components/Accordian/Accordian";
import Modal from "../../components/Modal/Modal";
import PrescriptionFormat from "../PrescriptionPart/PrescriptionFormat/index"
import ActiveMedicines from "./ActiveMedicines";
import AddedMedicines from "./AddedMedicines";
import Subaccordian from "../../components/Accordian/Subaccordian";
import warningicon from "../../assets/images/drug-interaction-icon.svg"

const PrescriptionPart = () => {
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
          <div className="bg-emerald-600 p-2 rounded-md text-center text-white cursor-pointer" onClick={() =>{ setShowModal(true);}}>
            Generate Prescription
          </div>
        </div>
      </div>
      <div className="grid row-span-full pt-2">
        <div className="row-span-1">
          <div className="flex mt-2 mb-2 bg-white p-2 rounded-md">
            <div className="w-1/12">
              <img src="/img/search-normal.svg" />
            </div>
            <div className="w-11/12 text-xs text-gray-400 self-center">
              Search and add new medicines
            </div>
          </div>
        </div>
         {/* Drug Interaction */}
        <div className="p-2 bg-red-50 border border-red-300">
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
        <div>
          <div className="row-span-1">
            <div className="flex mt-2 bg-white p-2">
              <div className="w-1/2 font-semibold">Alcoholic Fatty Liver</div>
              <div className="w-1/2  font-semibold text-right">K70.0</div>
            </div>
          </div>
          <div className="row-span-1 bg-white">
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
                    <img src="/img/remove-icon.svg" />
                  </span>
                  <div className="text-gray-500 text-xs">Remove</div>
                </div>
              </div>
              <div>
              {/* <div className="bg-blue-50 mt-2 mb-2 p-2 grid grid-cols-12">
                <div className="col-span-11 text-xs self-center">
                  1 Tablet | Morning | Before Food | 15 Days
                </div>
                <div className="col-span-1 justify-end self-center flex">
                  <img src="/img/dropdown-down.svg" />
                </div>
              </div> */}
              {/* Inside Medicine Accordian  */}
              {/* <div className="grid grid-flow-row">
                <div className="row-span-1 mb-2">
                  <div className="grid grid-cols-2">
                    <div className="col-span-1 mr-1 p-2 bg-gray-100 flex">
                      <div className="w-4/12 text-emerald-600 text-xs self-center">
                        RoA Type
                      </div>
                      <div className="w-8/12">
                        <select class="bg-gray-100 text-gray-900 text-xs w-full border-none">
                          <option selected="">Oral</option>
                          <option value="Injection">Injection</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-span-1 ml-1 p-2 bg-gray-100 flex">
                      <div className="w-4/12 text-emerald-600 text-xs self-center">
                        Form
                      </div>
                      <div className="w-8/12">
                        <select class="bg-gray-100 text-gray-900 text-xs w-full border-none">
                          <option selected="">Tablet</option>
                          <option value="Tablet">Tablet</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row-span-1 mb-2">
                  <div className="grid grid-cols-2">
                    <div className="col-span-1 mr-1 p-2 bg-gray-100 flex">
                      <div className="w-4/12 text-emerald-600 text-xs self-center">
                        Quantity
                      </div>
                      <div className="w-8/12 flex">
                        <div className="w-6/12 flex">
                          <div className="w-2/6 p-1 bg-emerald-100 rounded-full self-center grid text-center mr-0.5 text-sm">
                            -
                          </div>
                          <div className="w-2/6 self-center grid text-center mr-0.5 text-xs">
                            1
                          </div>
                          <div className="w-2/6 p-1 bg-emerald-100 rounded-full self-center grid text-center text-sm">
                            +
                          </div>
                        </div>
                        <div className="w-4/12"></div>
                      </div>
                    </div>
                    <div className="col-span-1 ml-1 p-2 bg-gray-100 flex">
                      <div className="w-4/12 text-emerald-600 text-xs self-center">
                        To be Taken
                      </div>
                      <div className="w-8/12">
                        <select class="bg-gray-100 text-gray-900 text-xs w-full border-none">
                          <option selected="">After Food</option>
                          <option value="Tablet">After Food</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row-span-1 mb-2">
                  <div className="p-2 bg-gray-100 flex">
                    <div className="w-2/12 text-emerald-600 text-xs self-center">
                      Frequency
                    </div>
                    <div className="w-10/12">
                      <select class="bg-gray-100 text-gray-900 text-xs w-full border-none">
                        <option selected="">Morning, Evening</option>
                        <option value="Injection">Morning, Evening</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div> */}
              <Subaccordian/>
              {/* End Inside Medicine Accordian  */}
              </div>
            </div>
          </div>
          <div className="row-span-1 bg-white">
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
                    <img src="/img/remove-icon.svg" />
                  </span>
                  <div className="text-gray-500 text-xs">Remove</div>
                </div>
              </div>
              {/* <div className="bg-gray-50 mt-2 mb-2 p-2 grid grid-cols-12">
                <div className="col-span-11 text-xs self-center">
                  1 Tablet | Morning | Before Food | 15 Days
                </div>
                <div className="col-span-1 justify-end self-center flex">
                  <img src="/img/dropdown-down.svg" />
                </div>
              </div> */}
              <Subaccordian/>
            </div>
          </div>
          <div className="row-span-1 bg-white">
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
                    <img src="/img/remove-icon.svg" />
                  </span>
                  <div className="text-gray-500 text-xs">Remove</div>
                </div>
              </div>
              {/* <div className="bg-gray-50 mt-2 mb-2 p-2 grid grid-cols-12">
                <div className="col-span-11 text-xs self-center">
                  1 Tablet | Morning | Before Food | 15 Days
                </div>
                <div className="col-span-1 justify-end self-center flex">
                  <img src="/img/dropdown-down.svg" />
                </div>
              </div> */}
              <Subaccordian/>
            </div>
          </div>
        </div>
        {/* End Alcoholic Fatty Lever */}

        {/* Hypertension */}
        <div>
          <div className="row-span-1">
            <div className="flex mt-2 bg-white p-2">
              <div className="w-1/2 font-semibold">Hypertension</div>
              <div className="w-1/2  font-semibold text-right">K70.0</div>
            </div>
          </div>
          <div className="row-span-1 bg-white">
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
                    <img src="/img/remove-icon.svg" />
                  </span>
                  <div className="text-gray-500 text-xs">Remove</div>
                </div>
              </div>
              {/* <div className="bg-blue-50 mt-2 mb-2 p-2 grid grid-cols-12">
                <div className="col-span-11 text-xs self-center">
                  1 Tablet | Morning | Before Food | 15 Days
                </div>
                <div className="col-span-1 justify-end self-center flex">
                  <img src="/img/dropdown-down.svg" />
                </div>
              </div> */}
              <Subaccordian/>
            </div>
          </div>
          <div className="row-span-1 bg-white">
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
                    <img src="/img/remove-icon.svg" />
                  </span>
                  <div className="text-gray-500 text-xs">Remove</div>
                </div>
              </div>
              {/* <div className="bg-gray-50 mt-2 mb-2 p-2 grid grid-cols-12">
                <div className="col-span-11 text-xs self-center">
                  1 Tablet | Morning | Before Food | 15 Days
                </div>
                <div className="col-span-1 justify-end self-center flex">
                  <img src="/img/dropdown-down.svg" />
                </div>
              </div> */}
              <Subaccordian/>
            </div>
          </div>
          <div className="row-span-1 bg-white">
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
                    <img src="/img/remove-icon.svg" />
                  </span>
                  <div className="text-gray-500 text-xs">Remove</div>
                </div>
              </div>
              {/* <div className="bg-gray-50 mt-2 mb-2 p-2 grid grid-cols-12">
                <div className="col-span-11 text-xs self-center">
                  1 Tablet | Morning | Before Food | 15 Days
                </div>
                <div className="col-span-1 justify-end self-center flex">
                  <img src="/img/dropdown-down.svg" />
                </div>
              </div> */}
              <Subaccordian/>
              {/* {window.scrollTo(0, document.body.scrollHeight)} */}
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
      {showModal && <Modal setShowModal={setShowModal} showModal={showModal}>
                <PrescriptionFormat />
            </Modal>}
    </div>
  );
};
export default PrescriptionPart;
