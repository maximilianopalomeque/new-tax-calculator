import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";

import { useForm, Controller } from "react-hook-form";
import { calculate } from "../utils/calculate";

import Result from "./Result";

const InputSection = () => {
  const [platform, setPlatform] = useState(0);
  const [gameData, setGameData] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = async (data) => {
    const result = await calculate(data);
    const game = { ...data, finalPrice: result };
    setGameData(game);
  };

  return (
    <>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container mt={2} mb={3} spacing={2}>
            <Grid item xs={12} md={6}>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Plataforma
                  </InputLabel>
                  <Controller
                    name="platform"
                    control={control}
                    rules={{ required: "Seleccione plataforma" }}
                    render={({ field: { onChange, value } }) => (
                      <Select
                        value={value}
                        onChange={(e) => {
                          onChange(e);
                          setPlatform(e.target.value);
                        }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Plataforma"
                        error={errors.platform ? true : false}
                      >
                        <MenuItem value={10}>Nintendo</MenuItem>
                        <MenuItem value={20}>Xbox/Steam</MenuItem>
                        <MenuItem value={30}>PlayStation</MenuItem>
                      </Select>
                    )}
                    defaultValue=""
                  />
                  {errors.platform && (
                    <FormHelperText error>
                      {errors.platform.message}
                    </FormHelperText>
                  )}
                </FormControl>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Moneda</InputLabel>
                  <Controller
                    name="currency"
                    control={control}
                    rules={{ required: "Seleccione moneda" }}
                    render={({ field: { onChange, value } }) => (
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={value}
                        label="Moneda"
                        onChange={onChange}
                        error={errors.currency ? true : false}
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
                    )}
                    defaultValue=""
                  />
                  {errors.currency && (
                    <FormHelperText error>
                      {errors.currency.message}
                    </FormHelperText>
                  )}
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
                {...register("name", {
                  required: "Ingrese un nombre",
                  maxLength: {
                    value: 50,
                    message: "Nombre debe tener máximo 50 carácteres",
                  },
                })}
                error={errors.name ? true : false}
                helperText={errors.name ? errors.name.message : null}
              />
            </Grid>

            <Grid item xs={12} md={5}>
              <TextField
                id="outlined-basic"
                label="Precio"
                variant="outlined"
                type="text"
                fullWidth
                onChange={(event) => {
                  console.log(event.target.value);
                }}
                {...register("price", {
                  required: "Ingrese un precio",
                  maxLength: {
                    value: 5,
                    message: "Precio debe tener máximo cinco dígitos",
                  },
                  validate: {
                    positive: (v) =>
                      parseFloat(v) > 0 ||
                      "Precio debe ser positivo, mayor a cero y no debe contener letras",
                  },
                })}
                error={errors.price ? true : false}
                helperText={errors.price ? errors.price.message : null}
              />
            </Grid>

            <Grid item xs={12} md={2} textAlign="center">
              <Button variant="contained" type="submit">
                Calcular
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>

      <Result gameData={gameData} />
    </>
  );
};

export default InputSection;
