import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

//custom hook
import useForm from '../hooks/useForm';

import Button from "../theme/Button";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  }
}));

const initialValue = {
  username: '',
  email: ''
}

export default function SignupForm() {
  const classes = useStyles();
  const [values, clearForm, handleChanges, handleSubmit] = useForm(initialValue, callback);

  //will run here as a function, however with hoisting it can be run like: const callback = () => ... if run above the destructured values from useForm
  function callback() {
    alert(`Username ${values.username} and email ${values.email} have been successfully submitted!`);
  }

  
  //const [formValues, setFormValues] = useState(initialValue);
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");


  // const handleChanges = e => {
  //   e.preventDefault();
  //   setFormValues({...formValues, [e.target.name]: e.target.value});
  // };

  // const handleEmailChange = e => {
  //   setEmail(e.target.value)
  // }

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   alert(`Username ${values.username} and email ${values.email} have been successfully submitted!`);

  
  // };

  // const clearForm = e => {
  //   e.preventDefault();
  //   setFormValues(initialValue);
  // };

  return (
    <div p={2} className="form">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Add New Client</legend>
          <TextField
            id="outlined-name"
            label="Username"
            className={classes.textField}
            name="username"
            value={values.username}
            onChange={handleChanges}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="email"
            label="Email"
            className={classes.textField}
            name="email"
            value={values.email}
            onChange={handleChanges}
            margin="normal"
            variant="outlined"
          />
          <div className="flexer">
            <Button color="red" onClick={clearForm}>
              Clear
            </Button>
            <Button color="blue" type="submit">
              Submit
            </Button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}