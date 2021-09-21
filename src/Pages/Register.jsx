import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import LoginForm from "../Components/LoginForm";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useHistory, useParams } from "react-router-dom";
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
  const history = useHistory();
  // let { params } = useParams();
  const onSubmitFunction = (data) => {
    // console.log(data.name);
    history.push(`/Home/${data.name}`);
  };
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Nome Obrigátorio")
      .matches(
        /^([A-Za-z])+([A-Za-z])\s([A-Za-z])+$/g,
        "Primeiro e segundo nome"
      ),
    email: yup.string().required("Email Obrigátorio").email("Email inválido"),
    password: yup
      .string()
      .required("Senha Obrigatório")
      .matches(
        /^(?=.{8,})+(([A-Za-z])+([0-9])+([!@.]))/g,
        "*Mínimo 8 caracteres dentre : letras,números e esses especiais !.@"
      ),
    confirmPassword: yup
      .string()
      .required("Confirmar senha Obrigátorio")
      .oneOf([yup.ref("password"), null], "As senhas não correspondem!"),
    bio: yup.string(),
    contact: yup.string(),
    course_module: yup.string(),
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
