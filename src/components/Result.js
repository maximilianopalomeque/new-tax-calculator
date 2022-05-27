import { Grid, Typography } from "@mui/material";

const Result = ({ gameData }) => {
  return (
    <>
      <Grid container mb={2} textAlign="center">
        <Grid item xs={12}>
          {gameData ? (
            <Typography>
              {gameData.name} costará en total con impuestos $
              {gameData.finalPrice}
            </Typography>
          ) : null}
        </Grid>
      </Grid>
    </>
  );
};

export default Result;
