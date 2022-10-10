import React from "react";
import Accordian from "../../components/Accordian/Accordian";
import ETGGuidelines from "./ETGGuidelines";
import HospitalFormulary from "./HospitalFormulary";
import EmergencyDepartment from "./EmergencyDepartment";
import IARecommendations from "./IARecommendations";

const RecommentationPart = () => {
  const recommendationParts = [
    {
      title: "ETG Guidelines",
      color: "bg-emerald-600",
      component: <ETGGuidelines />,
    },
    {
      title: "Hospital Formulary",
      color: "bg-blue-600",
      component: <HospitalFormulary />,
    },
    {
      title: "Emergency Department",
      color: "bg-red-600",
      component: <EmergencyDepartment />,
    },
    {
      title: "IA Recommendations",
      color: "bg-yellow-600",
      component: <IARecommendations />,
    },
  ];
  return (
    <div className="p-2">
      <div className="rounded bg-gray-200 flex p-2">
        <div className="p-2  bg-emerald-600 rounded-md text-white w-1/2 text-center">
          Reccomendations
        </div>
        <div className="self-center text-center w-1/2 font-semibold">
          Active Medicines
        </div>
      </div>
      <div>
        {recommendationParts.map((recommendation) => (
          <Accordian
            title={recommendation.title}
            color={recommendation.color}
            type="1"
          >
            {recommendation.component}
          </Accordian>
        ))}
      </div>
    </div>
  );
};
export default RecommentationPart;
