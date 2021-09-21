import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Paper } from "@material-ui/core";
import { useParams, useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
  },
  paper: {
    width: "90%",
    maxWidth: "800px",
    padding: "20px",
    height: "300px",
    marginTop: "10px",
    boxSizing: "border-box",
  },
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  header: {
    height: "60px",
    width: "100%",
    padding: "5px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    flexWrap: "wrap",
  },
  title: {
    margin: "0",
    padding: "5px",
    textAlign: "end",
    fontSize: "1rem",
  },
  button: {
    width: "50px",
    height: "30px",
  },
}));
function Home() {
  const classe = useStyles();
  const params = useParams();
  const history = useHistory();
  const handleSair = () => {
    history.push("/");
  };
  return (
    <Grid container className={classe.root}>
      <Grid item xs={12} className={classe.container}>
        <Paper className={classe.paper} spacing={10}>
          <div className={classe.header}>
            <h3 className={classe.title}>Bem-vindo {params.name}</h3>
            <Button
              type="submit"
              className={classe.button}
              variant="contained"
              color="primary"
              onClick={handleSair}
            >
              Sair
            </Button>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
}
export default Home;
