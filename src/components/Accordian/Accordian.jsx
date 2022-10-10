import React, { useState } from "react";
import collapsearrow  from "../../assets/images/dropdown-down.svg";

const Accordian = ({ title, color = "", type = "0", icon = "", children }) => {
  const [openAccordian, setOpenAccordian] = useState(false);
  console.debug("child", children);

  return (
    <div className="p-2 rounded-md shadow-md mt-0.5">
      <div
        className="bg-gray-50 rounded-t-md grid grid-cols-6 cursor-pointer p-2"
        onClick={() => setOpenAccordian(!openAccordian)}
      >
        <div className="col-span-5  self-center">
          <div className="font-semibold">
            <div className="rounded-t-md  pr-2">
              <div className="rounded-t-md grid grid-cols-6">
                <div className="col-span-5  self-center flex">
                  {type === "1" && (
                    <div className={`border-2 border-l- ${color} self-center`}>
                      &nbsp;
                    </div>
                  )}
                  {type === "2" && (
                    <span className="self-center mr-3">
                      <img src={icon} />
                    </span>
                  )}
                  <div className="w-full">
                    <h5 class="font-semibold text-md">{title}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 self-center justify-end grid cursor-pointer font-semibold text-3xl">
          {/* {type === "2" ? (
            openAccordian ? (
              "-"
            ) : (
              "+"
            )
          ) : ( */}
            <img src={collapsearrow } className={openAccordian ? "rotate-180" : ""} />
          {/* )} */}
        </div>
      </div>
      {openAccordian && <>{children}</>}
    </div>
  );
};

export default Accordian;
