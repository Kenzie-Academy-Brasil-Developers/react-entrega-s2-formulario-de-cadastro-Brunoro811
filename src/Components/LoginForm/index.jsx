import { makeStyles } from "@material-ui/core/styles";
import { Paper, TextField, Button } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  row: {
    marginBottom: "10px",
  },
  paper: {
    width: "100vw",
    maxWidth: "300px",
    height: "400px",
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    boxShadow:
      "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 50%), 0px 1px 3px 0px rgb(0 0 0 / 50%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: "20px",
  },
  title: {
    padding: "5px",
    margin: "0",
    color: "black",
  },
  span: {
    display: "block",
    fontSize: "0.8rem",
    color: "red",
  },
}));
function LoginForm({ register, handleSubmit, errors, onSubmitFunction }) {
  const classe = useStyles();
  return (
    <Paper className={classe.paper}>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <h3 className={classe.title}>Cadastro</h3>
        <div className={classe.row}>
          <TextField
            {...register("name")}
            id="outlined"
            label="Primeiro e Segundo Nome"
            autoComplete="current-username"
          />
          {errors.name && (
            <span className={classe.span}>{errors.name.message}</span>
          )}
        </div>
        <div className={classe.row}>
          <TextField
            {...register("email")}
            id="outlined-required"
            label="Email"
            autoComplete="current-email"
          />
          {errors.email && (
            <span className={classe.span}>{errors.email.message}</span>
          )}
        </div>
        <div className={classe.row}>
          <TextField
            {...register("password")}
            id="outlined-password-input"
            label="Senha"
            type="password"
            autoComplete="current-password"
          />
          {errors.password && (
            <span className={classe.span}>{errors.password.message}</span>
          )}
        </div>
        <div className={classe.row}>
          <TextField
            {...register("confirmPassword")}
            id="outlined-passwordConfirm-input"
            label="Confirme Senha"
            type="password"
            autoComplete="current-passwordConfirm"
          />
          {errors.confirmPassword && (
            <span className={classe.span}>
              {errors.confirmPassword.message}
            </span>
          )}
        </div>
        <div className={classe.row}>
          <Button
            type="submit"
            className={classe.button}
            variant="contained"
            color="primary"
          >
            Cadastrar
          </Button>
        </div>
      </form>
    </Paper>
  );
}
export default LoginForm;
