import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import Button from "@mui/material/Button";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";

const InputSection = () => {
  const [platform, setPlatform] = useState("");
  const [currency, setCurrency] = useState("");

  const calculate = () => {
    console.log(platform, currency);
  };

  return (
    <>
      <Container>
        <Grid container mt={2} spacing={2}>
          <Grid item xs={12} md={6}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Plataforma
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={platform}
                  label="Plataforma"
                  onChange={(event) => {
                    setPlatform(event.target.value);
                  }}
                >
                  <MenuItem value={10}>Nintendo</MenuItem>
                  <MenuItem value={20}>Xbox/Steam</MenuItem>
                  <MenuItem value={30}>PlayStation</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Moneda</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={currency}
                  label="Moneda"
                  onChange={(event) => {
                    setCurrency(event.target.value);
                  }}
                >
                  {platform === 30 ? (
                    <MenuItem value={20}>USD</MenuItem>
                  ) : (
                    [
                      <MenuItem value={10} key={10}>
                        Pesos argentinos
                      </MenuItem>,
                      <MenuItem value={20} key={20}>
                        USD
                      </MenuItem>,
                    ]
                  )}
                </Select>
              </FormControl>
            </Box>
          </Grid>

          <Grid item xs={12} md={5}>
            <TextField
              id="outlined-basic"
              label="Nombre del juego"
              variant="outlined"
              fullWidth
              inputProps={{ maxLength: 50 }}
              onChange={(event) => {
                console.log("name: ", event.target.value);
              }}
            />
          </Grid>

          <Grid item xs={12} md={5}>
            <TextField
              id="outlined-basic"
              label="Precio"
              variant="outlined"
              type="number"
              fullWidth
              onChange={(event) => {
                console.log(event.target.value);
              }}
            />
          </Grid>

          <Grid item xs={12} md={2} textAlign="center">
            <Button variant="contained" onClick={calculate}>
              Calcular
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default InputSection;
