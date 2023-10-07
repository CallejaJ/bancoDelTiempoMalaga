import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import {
    Box, Table, TableBody, TableCell, TableContainer,
    TableHead, TablePagination, TableRow, TableSortLabel, Toolbar, Typography, Paper, IconButton, Tooltip
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import { useAuthContext } from '../../context/AuthContext';
import DeleteIcon from '@mui/icons-material/Delete';


const headCells = [

    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Nombre',
    },
    {
        id: 'surname',
        numeric: false,
        disablePadding: false,
        label: 'Apellidos',
    },
    {
        id: 'district',
        numeric: true,
        disablePadding: false,
        label: 'Distrito',
    },
    {
        id: 'email',
        numeric: false,
        disablePadding: false,
        label: 'E-mail'
    },
    {
        id: 'address',
        numeric: false,
        disablePadding: false,
        label: 'Dirección',
    },
    {
        id: 'pobox',
        numeric: true,
        disablePadding: false,
        label: 'C.P.',
    },
    {
        id: 'role',
        numeric: true,
        disablePadding: false,
        label: 'Rol',
    },
    {
        id: 'register_date',
        numeric: true,
        disablePadding: false,
        label: 'Registrado',
    },
    {
        id: 'credits',
        numeric: true,
        disablePadding: false,
        label: 'Créditos',
    },
    {
        id: '',
        numeric: true,
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
                        align={'left'}
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
                marginLeft={4}
                variant="h6"
                id="tableTitle"
                component="div"
            >
                Usuarios registrados
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
export default function UsersListTableView({ usersList }) {

    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const { deleteUser } = useAuthContext();



    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = usersList.map((n) => n.id);
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
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - usersList.length) : 0;

    const visibleRows = React.useMemo(
        () =>
            (usersList).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage,
            ),
        [page, rowsPerPage, usersList],
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
                                    rowCount={usersList.length}
                                />
                                <TableBody>
                                    {visibleRows.map((row) => {
                                        const isItemSelected = isSelected(row.id);

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
                                                <TableCell>
                                                </TableCell>
                                                <TableCell align="left">{row.name}</TableCell>
                                                <TableCell align="left">{row.surname}</TableCell>
                                                <TableCell align="left">{row.district}</TableCell>
                                                <TableCell align="left">{row.email}</TableCell>
                                                <TableCell align="left">{row.address}</TableCell>
                                                <TableCell align="left">{row.pobox}</TableCell>
                                                <TableCell align="left">{row.role}</TableCell>
                                                <TableCell align="left">{row.register_date}</TableCell>
                                                <TableCell align="left">{row.credits}</TableCell>
                                                <TableCell align="center">
                                                    <Tooltip title="Eliminar">
                                                        <IconButton onClick={() => deleteUser(row.id)} aria-label="delete" color="red">
                                                            <DeleteIcon />
                                                        </IconButton>
                                                    </Tooltip>
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
                            count={usersList.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            labelRowsPerPage={"Usuarios por página"}
                        />
                    </Paper>
                </Box>
            </Box>
        </>
    );
}