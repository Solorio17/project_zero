import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createMenu(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createMenu('Iced Mocha', 159, 6.0, 24, 4.0),
    createMenu('Iced Matcha Latte', 237, 9.0, 37, 4.3),
    createMenu('Vanilla Machiatto', 262, 16.0, 24, 6.0),
    createMenu('Strawbearry Frappe', 305, 3.7, 67, 4.3),
    createMenu('Gingerbear Cookies', 356, 16.0, 49, 3.9),
];

function Menu() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow >
                        <TableCell style={{ fontWeight: 'bold' }}>Cup of Coffee (12oz serving)</TableCell>
                        <TableCell style={{ fontWeight: 'bold' }} align="right">Calories</TableCell>
                        <TableCell style={{ fontWeight: 'bold' }} align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell style={{ fontWeight: 'bold' }} align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell style={{ fontWeight: 'bold' }} align="right">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default Menu;