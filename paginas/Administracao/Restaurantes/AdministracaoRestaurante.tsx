import { useState } from "react";
import IRestaurante from "../../../interfaces/IRestaurante";
import { Table, TableContainer, TableHead, TableRow, TableCell, Paper, TableBody } from "@mui/material";

const AdministracaoRestaurantes = () => {
  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
          </TableRow>
        </TableHead>
        <TableBody></TableBody>
      </Table>
    </TableContainer>
  );
};

export default AdministracaoRestaurantes;
