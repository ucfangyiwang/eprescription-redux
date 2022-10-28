import React from "react";
import ActiveMedicines from "./ActiveMedicines";
import Recommendation from "./Recommendation";


const RecommentationPart = ({showTab}) => {
 
  return (
    <div>
     {showTab==="activeMedicines" && <ActiveMedicines/>}
     {showTab==="reccomendations" && <Recommendation/>}
  </div>
    
  );
};
export default RecommentationPart;
