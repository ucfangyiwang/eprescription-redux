
import React, { useState } from 'react';
import collapsearrow from '../../assets/images/dropdown-down.svg'

const Subaccordian = ({ title, content }) => {
  const [openAccordian, setOpenAccordian] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title bg-blue-50 mt-2 mb-2 p-2 grid grid-cols-12 cursor-pointer" onClick={() => setOpenAccordian(!openAccordian)}>
        <div className="col-span-11 text-xs self-center">
                  1 Tablet | Morning | Before Food | 15 Days
        </div>
        <div className="col-span-1 justify-end self-center flex">
             <img src={collapsearrow}/>
        </div>
      </div>
      {openAccordian && <div className="accordion-content">
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
              </div>
         </div>}
    </div>
  );
};

export default Subaccordian;