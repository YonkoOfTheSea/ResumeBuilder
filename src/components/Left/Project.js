import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import classes from "./Left.module.css";
import { useForm } from "react-hook-form";
import { ResumeContext } from "../../contexts/ResumeContext";

function Project() {
  const { content, updateProjectData, removeFakeData } = useContext(
    ResumeContext
  );
  const [btnText, setBtnText] = useState("Add");

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    removeFakeData();
    updateProjectData(data);
    setBtnText("Update");
  };
  return (
    <div className="">
      <h2>Project</h2>
      <form
        className={classes.formStyle}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h4>Project 1</h4>
        <TextField
          id="outlined-basic"
          label="Project"
          name="project1"
          variant="outlined"
          defaultValue={content.project.project1}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="link"
          name="link1"
          variant="outlined"
          defaultValue={content.project.link1}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Start MM/YYYY"
          name="start1"
          variant="outlined"
          defaultValue={content.project.start1}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="End MM/YYYY"
          name="end1"
          variant="outlined"
          defaultValue={content.project.end1}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Description"
          name="desc1[0]"
          variant="outlined"
          defaultValue={content.project.desc1[0]}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />
        <TextField
          id="outlined-basic"
          label="Description"
          name="desc1[1]"
          variant="outlined"
          defaultValue={content.project.desc1[1]}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />
        <TextField
          id="outlined-basic"
          label="Description"
          name="desc1[2]"
          variant="outlined"
          defaultValue={content.project.desc1[2]}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{
            marginTop: 12,
            marginLeft: 8,
            marginRight: 8,
            marginBottom: 15,
          }}
        />

        <hr />

        <h4>Project 2</h4>

        <TextField
          id="outlined-basic"
          label="Project"
          name="project2"
          variant="outlined"
          defaultValue={content.project.project2}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="link"
          name="link2"
          variant="outlined"
          defaultValue={content.project.link2}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />


        <TextField
          id="outlined-basic"
          label="Start MM/YYYY"
          name="start2"
          variant="outlined"
          defaultValue={content.project.start2}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="End MM/YYYY"
          name="end2"
          variant="outlined"
          defaultValue={content.project.end2}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Description"
          name="desc2[0]"
          variant="outlined"
          defaultValue={content.project.desc2[0]}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />
        <TextField
          id="outlined-basic"
          label="Description"
          name="desc2[1]"
          variant="outlined"
          defaultValue={content.project.desc2[1]}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />
        <TextField
          id="outlined-basic"
          label="Description"
          name="desc2[2]"
          variant="outlined"
          defaultValue={content.project.desc2[2]}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <Button
          variant="contained"
          color="secondary"
          type="submit"
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        >
          {btnText}
        </Button>
      </form>
    </div>
  );
}

export default Project;
