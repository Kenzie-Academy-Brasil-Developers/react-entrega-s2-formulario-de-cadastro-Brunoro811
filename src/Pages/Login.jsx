import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import LoginForm from "../Components/LoginForm";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import axios from "axios";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
  },
}));
function Register() {
  const onSubmitFunction = (data) => {
    console.log(data);
    axios
      .post("https://kenziehub.me/users", data)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };
  const schema = yup.object().shape({
    name: yup.string().required("Nome Obrigátorio"),
    email: yup.string().required("Email Obrigátorio"),
    password: yup.string().required("Senha Obrigatório"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), "Senhas Diferentes"]),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const classe = useStyles();
  return (
    <Grid container className={classe.root}>
      <Grid item xs={4}>
        <LoginForm
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
          onSubmitFunction={onSubmitFunction}
        />
      </Grid>
    </Grid>
  );
}
export default Register;
