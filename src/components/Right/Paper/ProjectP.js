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

  let bulletProject1;
  if (!contentUse.project.desc3) {
    bulletProject1 = "";
  } else {
    bulletProject1 = (
      <ul>
        <li>{contentUse.project.desc3}</li>
      </ul>
    );
  }

  let bulletProject2;
  if (!contentUse.project.desc4) {
    bulletProject2 = "";
  } else {
    bulletProject2 = (
      <ul>
        <li>{contentUse.project.desc4}</li>
      </ul>
    );
  }

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
        {bulletProject2}
      </div>
    </div>
  );
}

export default ProjectP;
