import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import classes from "./Left.module.css";
import { useForm } from "react-hook-form";
import { ResumeContext } from "../../contexts/ResumeContext";

function Professional() {
  const { content, updateProfessionalData, removeFakeData } = useContext(
    ResumeContext
  );
  const [btnText, setBtnText] = useState("Save");

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    removeFakeData();
    updateProfessionalData(data);
    setBtnText("Update");
  };

  const [flag, setFlag] = useState(true);

  const handleClick = () => {
    setFlag(!flag);
  };

  return (
    <div className="">
      <h2>Professional Experience</h2>
      <form
        className={classes.formStyle}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h4>Company 1</h4>
        <TextField
          id="outlined-basic"
          label="Company"
          name="company1"
          variant="outlined"
          defaultValue={content.professional.company1}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="City, State, Country"
          name="local1"
          variant="outlined"
          defaultValue={content.professional.local1}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Position"
          name="position1"
          variant="outlined"
          defaultValue={content.professional.position1}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Start Date"
          name="start1"
          variant="outlined"
          defaultValue={content.professional.start1}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="End Date"
          name="end1"
          variant="outlined"
          defaultValue={content.professional.end1}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Description"
          name="desc1"
          variant="outlined"
          multiline
          rows={7}
          defaultValue={content.professional.desc1}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />
        
        <hr />

        <h4>Company 2</h4>

        <TextField
          id="outlined-basic"
          label="Company"
          name="company2"
          variant="outlined"
          defaultValue={content.professional.company2}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="City, State, Country"
          name="local2"
          variant="outlined"
          defaultValue={content.professional.local2}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Position"
          name="position2"
          variant="outlined"
          defaultValue={content.professional.position2}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Start Date"
          name="start2"
          variant="outlined"
          defaultValue={content.professional.start2}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="End Date"
          name="end2"
          variant="outlined"
          defaultValue={content.professional.end2}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label="Description"
          name="desc2"
          variant="outlined"
          multiline
          rows={7}
          defaultValue={content.professional.desc2}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />
       
        <Button
           onClick={handleClick}
           color={flag ? "primary" : "secondary"}
          variant="contained"
          type="submit"
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        >
          {btnText}
        </Button>
      </form>
    </div>
  );
}

export default Professional;
