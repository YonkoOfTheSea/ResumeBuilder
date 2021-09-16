import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import classes from "./Left.module.css";
import { useForm } from "react-hook-form";
import { ResumeContext } from "../../contexts/ResumeContext";

function AdditionalSkills() {
  const { content, updateAdditionalData, removeFakeData } = useContext(
    ResumeContext
  );
  const [btnText, setBtnText] = useState("Save");

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    removeFakeData();
    updateAdditionalData(data);
    setBtnText("Update");
  };

  const [flag, setFlag] = useState(true);

  const handleClick = () => {
    setFlag(!flag);
  };


  return (
    <div className="">
      <h2>Additional Skills</h2>
      <form
        className={classes.formStyle}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          id="outlined-basic"
          label=""
          name="skill1"
          variant="outlined"
          defaultValue={content.additional[0]}
          inputRef={register({
            max: {
              value: 3,
              message: "error message", // <p>error message</p>
            },
          })}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label=""
          name="skill2"
          variant="outlined"
          defaultValue={content.additional[1]}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label=""
          name="skill3"
          variant="outlined"
          defaultValue={content.additional[2]}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label=""
          name="skill4"
          variant="outlined"
          defaultValue={content.additional[3]}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <TextField
          id="outlined-basic"
          label=""
          name="skill5"
          variant="outlined"
          defaultValue={content.additional[4]}
          inputRef={register}
          // onChange={handleSubmit(onSubmit)}
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        />

        <Button
          variant="contained"
          onClick={handleClick}
          color={flag ? "primary" : "secondary"}
          type="submit"
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        >
          {btnText}
        </Button>
      </form>
    </div>
  );
}

export default AdditionalSkills;
