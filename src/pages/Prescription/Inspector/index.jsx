import React from "react";
import Accordian from "../../../components/Accordian/Accordian";
import MedicineInfo from "./MedicineInfo";
import DosageDirection from "./Dosagedirection";
import Precautions from "./Precautions";
import Contraindications from "./Contraindications";
import Interactions from "./Interactions";
import CurrentSchedule from "./Currentschedule";



const PrescriptionRight = ({showTab}) => {
    const PrescriptionRightparts = [
       
        {
            title: "Medicine Info",
            component: <MedicineInfo />
        
        },
        {
            title: "Dosage/Direction for Use",
            component: <DosageDirection />
           
        },
        {
            title: "Precautions",
            component: <Precautions/>
           
        },
        {
            title: "Contraindications",
            component: <Contraindications/>
            
        },
        {
            title: "Interactions",
            component: <Interactions/>
            
        }
    ];
    if (showTab==="activeMedicines"){
        PrescriptionRightparts.unshift( {
            title: "Current Schedule",
            component: <CurrentSchedule />
        
        })
    }
    return (
        <div>
            <div className=" font-bold text-2xl grid">
            Inspector
          <span className="text-xs font-normal">See info on currently selected page element</span>
        </div>
            {PrescriptionRightparts.map((prescription) => (
                <Accordian title={prescription.title} icon={prescription.icon} type="2">
                    {prescription.component}
                </Accordian>
            ))}
        </div>

    );
};
export default PrescriptionRight;