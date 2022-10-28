import React, { useState,useEffect } from "react";
import Accordian from "../../../components/Accordian/Accordian";
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
import {useDispatch, useSelector} from 'react-redux';
import { removedrug} from "../../../store/drugListSlice.jsx"
import { reloadDrugDuplication,reloadDrugInteraction } from '../../../store/drugListSlice.jsx'
import ReactHtmlParser from 'html-react-parser';
const PrescriptionPart = ({showTab}) => {
  const {lists} = useSelector((store)=>store.druglist)
  const [showModal, setShowModal] = useState(false);
  const [isShow, setIsShow] = useState(-1);
  const {DrugDuplication} = useSelector((store)=>store.druglist)
  const {DrugInteraction} = useSelector((store)=>store.druglist)


const dispatch=useDispatch()


useEffect(()=>{
  if(lists.length>1){
  dispatch(reloadDrugDuplication());
  dispatch(reloadDrugInteraction());}
},[dispatch,lists.length])

  const handleClick = (val) => {
    if (isShow === val) {
      setIsShow(-1);
    } else {
      setIsShow(val);
    }
  };
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
        {DrugDuplication&& DrugDuplication.length>=1 ? 
            
            <div className="p-2 mb-2 bg-red-50 border border-red-300">
              <div className="flex mb-2">
                <div className="w-1/2 flex">
                  <span>
                    <img src={warningicon}></img>
                  </span>
                  <span className="text-red-600 text-md font-semibold ml-2">
                    Drug Duplication
                  </span>
                </div>
                
              </div>
              <div className="mb-2 text-gray-800 text-md font-semibold ">
                { DrugDuplication.length } Duplication{ DrugDuplication.length >1 ? "s" : '' } Found
              </div>
              <div className="mb-2 pl-5">
                <ul class="text-sm">

              {  DrugDuplication.map((drugduplication) => {
                return(
                    <li className="mb-1">
                     
                    <span className="flex justify-between text-yellow-600 text-md font-semibold">
                      <span >Warning Level : 
                      {   ( ' ' +drugduplication.warningLevel) } 
                      </span>
                      <span className="pr-5">
                      {ReactHtmlParser(drugduplication.duplicateType)}
                      </span>
                    </span>
                    <br/>
                      {ReactHtmlParser(drugduplication.summaryStatement)}
                     
                    </li>
                  )
                })}
        
                </ul>
              </div>
            </div>
          : <></>
          }
        {/* END Drug Allergy */}

        {/* Drug Interaction */}

        {DrugInteraction&&DrugInteraction.length>=1 ? 
            
            <div className="p-2 mb-2 bg-red-50 border border-red-300">
              <div className="flex mb-2">
                <div className="w-1/2 flex">
                  <span>
                    <img src={warningicon}></img>
                  </span>
                  <span className="text-red-600 text-md font-semibold ml-2">
                    Drug Interactions
                  </span>
                </div>
                
              </div>
              <div className="mb-2 text-gray-800 text-md font-semibold ">
                { DrugInteraction.length } Interaction{ DrugInteraction.length >1 ? "s" : '' } Found
              </div>
              <div className="mb-2 pl-5">
                <ul class="text-sm">

              {  DrugInteraction.map((drugInteraction) => {
                return(
                    <li className="mb-1">
                     
                    <span className="flex justify-between text-red-600 text-md font-semibold">
                      <span >
                      {ReactHtmlParser(drugInteraction.precaution)  }
                      </span>
                      <span className="pr-5">
                      {ReactHtmlParser(drugInteraction.severity)}
                      </span>
                    </span>
                    <br/>
                      {ReactHtmlParser(drugInteraction.description)}
                      {/* {setInteractionNumber(InteractionNumber+1)} */}
                    </li>
                  )
                })}
        
                </ul>
              </div>
            </div>
          : <></>
          }

        {/* end Interaction */}
        {lists.map((list)=>{ 
          return(
            
          console.log("this is the list((((((((())))))))))",list),
         list?
         
         <div className="row-span-1 bg-white border-b">
          <div className="bg-gradient-to-b from-blue-50 p-2 border border-blue-100">
            <div className="grid grid-cols-3">
              <div className="col-span-2 flex">
                <span className="bg-green-500 pl-1 pr-1 mr-2 text-white self-center font-bold text-sm rounded">
                  ETG
                </span>

                <div className=" font-semibold">
                  {list.name}{" "}
                </div>
              </div>
              <div
                className="col-span-1 flex justify-end"
                onClick={()=>
                  dispatch( removedrug({name:list.name,id:list.id}))
                }
              >
                <span className="pr-1">
                  <img src={removeicon} />
                </span>
                <div className="text-gray-500 text-xs">Remove</div>
              </div>
            </div>                     
            {/* hide and show element */}
              <div>
                <div
                  className=" bg-blue-50 mt-2 mb-2 p-2 grid grid-cols-12 cursor-pointer"
                  onClick={() => handleClick(0)}
                >
                  <div className="col-span-11 text-xs self-center">
                    1 Tablet | Morning | Before Food | 15 Days
                  </div>
                  <div className="col-span-1 justify-end self-center flex">
                    <img src={collapsearrow} />
                  </div>
                </div>

                <div className={isShow === 0 ? "block" : "hidden"}>
                  <div className="grid grid-flow-row">
                    <div className="row-span-1 mb-2">
                      <div className="grid grid-cols-2">
                        <div className="col-span-1 mr-1 p-2 bg-gray-100 flex">
                          <div className="w-4/12 text-emerald-600 text-xs self-center">
                            RoA Type
                          </div>
                          <div className="w-8/12">
                            <select class="bg-gray-100 text-gray-900 text-xs w-full border-none">
                              <option selected="">Oral</option>
                              <option value="Injection">
                                Injection
                              </option>
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
                              <option value="Tablet">
                                After Food
                              </option>
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
                            <option selected="">
                              Morning, Evening
                            </option>
                            <option value="Injection">
                              Morning, Evening
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row-span-1 mb-2">
                      <div className="grid grid-cols-2">
                        <div className="col-span-1 mr-1 p-2 bg-gray-100 flex">
                          <div className="w-4/12 text-emerald-600 text-xs self-center">
                            Start Date
                          </div>
                          <div className="w-8/12 flex datepicker">
                            <input
                              type="text"
                              class="bg-gray-100 text-gray-900 text-xs w-full border-none"
                            />
                          </div>
                        </div>
                        <div className="col-span-1 ml-1 p-2 bg-gray-100 flex">
                          <div className="w-4/12 text-emerald-600 text-xs self-center">
                            End Date
                          </div>
                          <div className="w-8/12">
                            <div className="w-8/12 flex datepicker">
                              <div className="w-8/12 flex datepicker">
                                <input
                                  type="text"
                                  class="bg-gray-100 text-gray-900 text-xs w-full border-none"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row-span-1 mb-2">
                      <div className="p-2 bg-gray-100 flex">
                        <div className="w-2/12 text-emerald-600 text-xs self-center">
                          Course
                        </div>
                        <div className="w-10/12">
                          <select class="bg-gray-100 text-gray-900 text-xs w-full border-none">
                            <option selected="">15 Days</option>
                            <option value="Injection">30 Days</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row-span-1 mb-2">
                      <div className="p-2 bg-gray-100">
                        <div className="w-full mb-2 text-emerald-600 text-xs self-center">
                          Instruction
                        </div>
                        <div className="w-full">
                          <textarea
                            class="bg-gray-100 text-gray-900 text-xs w-full border-none"
                            placeholder="Type in your special notes on this medicine"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row-span-1 mb-2">
                      <div className="p-2 bg-gray-100 flex">
                        <div className="w-2/12 text-emerald-600 text-xs self-center">
                          Diagnosis
                        </div>
                        <div className="w-10/12">
                          <select class="bg-gray-100 text-gray-900 text-xs w-full border-none">
                            <option selected="">
                              Alcoholic Fatty Lever | E17.7
                            </option>
                            <option value="Injection">
                              {" "}
                              Alcoholic Fatty Lever | E17.7
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row-span-1 mb-2 flex">
                      <div className="w-1/2 flex">
                        <span className="self-center">
                          <img
                            src="/img/medicine-tick.svg"
                            className="w-3 h-3"
                          ></img>
                        </span>
                        <div className="pl-2 text-green-600 text-xs self-center">
                          Save
                        </div>
                      </div>
                      <div className="w-1/2 flex justify-end">
                        <span>
                          <div class=" mr-2 bg-gray-100 text-gray-500 p-1 text-sm rounded-md self-center text-center cursor-pointer">
                            Dismiss
                          </div>
                        </span>
                        <span>
                          <div class=" bg-emerald-600 text-white p-1 text-sm rounded-md self-center text-center cursor-pointer">
                            Save
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            {/* hide and show element */}
          </div>
        </div>

          :<></>
       
         ) })
   
        }
        
        </div>




      {showModal && (
        <Modal setShowModal={setShowModal} showModal={showModal}>
          <PrescriptionFormat />
        </Modal>
      )}
    </div>
  );
};
export default PrescriptionPart;
