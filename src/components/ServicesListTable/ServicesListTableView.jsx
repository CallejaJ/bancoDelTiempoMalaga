/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/rules-of-hooks */
import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import {
    Box, Table, TableBody, TableCell, TableContainer,
    TableHead, TablePagination, TableRow, TableSortLabel, Toolbar, Typography, Paper, IconButton
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import { useAuthContext } from '../../context/AuthContext';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';


const headCells = [
    {
        id: 'id',
        numeric: true,
        disablePadding: true,
        label: 'Clave',
    },
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Nombre',
    },
    {
        id: 'register_date',
        numeric: false,
        disablePadding: false,
        label: 'Creada',
    },
    {
        id: 'update_date',
        numeric: false,
        disablePadding: false,
        label: 'Modificada',
    },
    {
        id: 'info',
        numeric: false,
        disablePadding: false,
        label: 'Acciones',
    },

];

function EnhancedTableHead(props) {
    props;
    const createSortHandler = (property) => (event) => {
        (event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell >

                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={'center'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                    >
                        <TableSortLabel
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                </Box>
                            ) : null}
                            {headCell.label}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar() {


    return (
        <Toolbar
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                bgcolor: (theme) =>
                    alpha(theme.palette.secondary.main, theme.palette.action.activatedOpacity),

            }}
        >
            <Typography
                sx={{ flex: '1 1 100%' }}
                variant="h6"
                id="tableTitle"
                component="div"
            >
                Servicios por categorías
            </Typography>


            <Typography sx={{ flex: '1 1 50 %', alignContent: 'left', color: "grey" }}
                variant="h6" color="text.primary"
                type='subtitle1'
                id="tableTitle"
                component="div">
            </Typography>

        </Toolbar>
    );
}

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};
export default function servicesListTableView({ servicesList }) {

    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const { deleteService } = useAuthContext();



    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = servicesList.map((n) => n.id);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };



    const isSelected = (id) => selected.indexOf(id) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - servicesList.length) : 0;

    const visibleRows = React.useMemo(
        () =>
            (servicesList).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage,
            ),
        [page, rowsPerPage, servicesList],
    );

    return (
        <>
            <Box
                alignItems={'center'}
                display={'flex'}
                justifyContent={'center'}
            >

                <Box
                    padding={2}
                    margin={2}
                    sx={{ width: '90%' }}>
                    <Paper sx={{ width: '100%', mb: 2 }}>
                        <EnhancedTableToolbar numSelected={selected.length} />
                        <TableContainer>
                            <Table
                                sx={{ minWidth: 750 }}
                                aria-labelledby="tableTitle"
                            >
                                <EnhancedTableHead
                                    numSelected={selected.length}
                                    onSelectAllClick={handleSelectAllClick}
                                    rowCount={servicesList.length}
                                />
                                <TableBody>
                                    {visibleRows.map((row, index) => {
                                        const isItemSelected = isSelected(row.id);
                                        const labelId = `enhanced-table-checkbox-${index}`;

                                        return (
                                            <TableRow
                                                hover
                                                onClick={(event) => handleClick(event, row.id)}
                                                role="checkbox"
                                                aria-checked={isItemSelected}
                                                tabIndex={-1}
                                                key={row.id}
                                                selected={isItemSelected}
                                                sx={{ cursor: 'pointer' }}
                                            >
                                                <TableCell
                                                    align="left">
                                                </TableCell>
                                                <TableCell
                                                    component="th"
                                                    id={labelId}
                                                    scope="row"
                                                    padding="none"
                                                    align="center"
                                                >
                                                    {row.id}
                                                </TableCell>
                                                <TableCell align="center">{row.name}</TableCell>
                                                <TableCell align="center">{row.register_date}</TableCell>
                                                <TableCell align="center">{row.update_date}</TableCell>
                                                <TableCell align="center">
                                                    <IconButton onClick={() => deleteService(row.id)} aria-label="delete" color="secondary">
                                                        <DeleteIcon />
                                                    </IconButton>
                                                    <Link to={`/adminpanel/servicedetails/${row.id}`}>
                                                        <IconButton
                                                            aria-label="edit"
                                                            color="secondary"
                                                            variant="contained"
                                                            type="submit"
                                                        >
                                                            <EditIcon />
                                                        </IconButton>
                                                    </Link>
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                    {emptyRows > 0 && (
                                        <TableRow
                                            style={{
                                                height: (53) * emptyRows,
                                            }}
                                        >
                                            <TableCell colSpan={6} />
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[5, 10]}
                            component="div"
                            count={servicesList.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            labelRowsPerPage={"Categorías por página"}
                        />
                    </Paper>
                </Box>
            </Box>
        </>
    );
}