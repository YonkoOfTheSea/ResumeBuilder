import React, { useContext } from "react";
import classes from "./Template.module.css";
import { ResumeContext } from "../../../contexts/ResumeContext";

function CustomP() {
  const { content, control, contentFake } = useContext(ResumeContext);

  //If the "control" is TRUE - use "Fake State" to show the example on the page
  let contentUse;
  if (control) {
    contentUse = contentFake;
  } else {
    contentUse = content;
  }

  //If there is no data, the Title of the section will not be displayed
  let title;
  if (Object.keys(contentUse.custom).length === 0) {
    title = "";
  } else {
    title = (
      <h3>
        <strong>Custom Information</strong>
      </h3>
    );
  }

  
  return (
    <div className={classes.professionalResume}>
      <div className="">
        {title}
        <p>
          {contentUse.custom.info}
        </p>
      </div>
    </div>
  );
}

export default CustomP;
