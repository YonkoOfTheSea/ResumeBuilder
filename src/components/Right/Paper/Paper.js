import React from "react";
import HeaderP from "./HeaderP";
import ProfessionalP from "./ProfessionalP";
import EducationP from "./EducationP";
import AdditionalSkillsP from "./AdditionalSkillsP";
import ProjectP from "./ProjectP";

function Paper() {
  return (
    <div className="">
      <div size="A4" className="page">
        <HeaderP />
        <ProfessionalP />
        <EducationP />
        <AdditionalSkillsP />
        <ProjectP />
      </div>
    </div>
  );
}

export default Paper;
