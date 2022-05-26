import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const About = () => {
  return (
    <>
      <Container>
        <Grid container mt={3}>
          <Grid item xs={12} textAlign="center">
            <Typography>
              Las tiendas digitales de videojuegos actuales son afectadas por
              los impuestos a servicios digitales. Esta calculadora muestra el
              precio final del juego, en pesos con impuestos aplicados
              dependiendo su plataforma y su moneda.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default About;
