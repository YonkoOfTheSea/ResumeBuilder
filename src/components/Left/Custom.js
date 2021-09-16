import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import classes from "./Left.module.css";
import { useForm } from "react-hook-form";
import { ResumeContext } from "../../contexts/ResumeContext";

function Custom() {
  const { content, updateCustomData, removeFakeData } = useContext(
    ResumeContext
  );
  const [btnText, setBtnText] = useState("Save");

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    removeFakeData();
    updateCustomData(data);
    setBtnText("Update");
  };

  const [flag, setFlag] = useState(true);

  const handleClick = () => {
    setFlag(!flag);
  };


  return (
    <div className="">
      <h2>Custom</h2>
      <form
        className={classes.formStyle}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          id="outlined-basic"
          label="Custom Info"
          name="info"
          variant="outlined"
          multiline
          rows={10}
          defaultValue={content.custom.info}
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

export default Custom;
