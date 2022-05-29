import { Grid, Typography } from "@mui/material";

const Result = ({ gameData }) => {
  return (
    <>
      <Grid container mb={2} textAlign="center">
        <Grid item xs={12}>
          {gameData && (
            <Typography variant="body1" component="div">
              <strong>{gameData.name}</strong> costará en total con impuestos $
              <strong>{gameData.finalPrice}</strong>
            </Typography>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default Result;
