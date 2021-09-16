import React, { useContext } from "react";
import classes from "./Template.module.css";
import { ResumeContext } from "../../../contexts/ResumeContext";

function ProjectP() {
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
  if (Object.keys(contentUse.project).length < 3) {
    title = "";
  } else {
    title = (
      <h3>
        <strong>Projects</strong>
      </h3>
    );
  }

  let bulletProject1 = contentUse.project.desc1.map((el, index) => {
    if (el === "") {
      return "";
    } else {
      return <li key={index}>{el}</li>;
    }
  });

  let bulletProject2 = contentUse.project.desc2.map((el, index) => {
    if (el === "") {
      return "";
    } else {
      return <li key={index}>{el}</li>;
    }
  });

  return (
    <div className={classes.professionalResume}>
      <div className="">
        {title}
        <p>
          <strong>{contentUse.project.project1}</strong>
          {contentUse.project.link1}
        </p>
        <p>
        {contentUse.project.start1}{" "}
          {contentUse.project.end1}
        </p>
        <ul>{bulletProject1}</ul>
        <p>
          <strong>{contentUse.project.project2}</strong>{" "}
          {contentUse.project.link2}
        </p>
        <p>
          {contentUse.project.start2}{" "}
          {contentUse.project.end2}
        </p>
        <ul>{bulletProject2}</ul>
      </div>
    </div>
  );
}

export default ProjectP;
