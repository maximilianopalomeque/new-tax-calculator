import { useEffect, useState } from "react";

import { Divider } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { getFromLocalStorage } from "../utils/localStorage";

const Recent = ({ recents }) => {
  return (
    <>
      <Divider variant="middle">Recientes</Divider>
      <Container>
        <Grid container mt={1}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Nombre</TableCell>
                  <TableCell align="center">Precio con impuestos</TableCell>
                  <TableCell align="center">Plataforma</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {recents?.map((recent) => (
                  <TableRow
                    // key={recent.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ textTransform: "capitalize" }}
                    >
                      {recent.name}
                    </TableCell>
                    <TableCell align="center">$ {recent.finalPrice}</TableCell>
                    <TableCell align="center">
                      {recent.platform === 10
                        ? "Nintendo"
                        : recent.platform === 20
                        ? "Xbox/Steam"
                        : "PlayStation"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Container>
    </>
  );
};

export default Recent;
