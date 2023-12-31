import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { alpha } from '@mui/material/styles';
import {
    Box, Table, TableBody, TableCell, TableContainer,
    TableHead, TablePagination, TableRow, TableSortLabel, Toolbar, Typography, Paper, IconButton, Tooltip,
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useAuthContext } from '../../../context/AuthContext';
import EmailIcon from '@mui/icons-material/Email';



function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}


function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [

    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Título',
    },
    {
        id: 'description',
        numeric: false,
        disablePadding: false,
        label: 'Descripción',
    },
    {
        id: 'register_date',
        numeric: false,
        disablePadding: false,
        label: 'Fecha de publicación',
    },
    {
        id: 'update_date',
        numeric: false,
        disablePadding: false,
        label: 'Fecha de actualización'
    },
    {
        id: 'services_id',
        numeric: true,
        disablePadding: false,
        label: 'Categoría'
    },
    {
        id: 'credits',
        numeric: false,
        disablePadding: false,
        label: 'Créditos',
    },
    {
        id: 'info',
        numeric: false,
        disablePadding: false,
        label: 'Acciones',
    },
    {
        id: 'messages',
        numeric: false,
        disablePadding: false,
        label: 'Mensajes',
    },
];

function EnhancedTableHead(props) {
    const { order, orderBy, onRequestSort } =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
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
                        // padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
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
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
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
                Tus ofertas publicadas
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
export default function UserOffersTableView({ userOffersList }) {


    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('Título');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const { deleteOffer } = useAuthContext();


    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = userOffersList.map((n) => n.id);
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
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - userOffersList.length) : 0;

    const visibleRows = React.useMemo(
        () =>
            stableSort(userOffersList, getComparator(order, orderBy)).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage,
            ),
        [order, orderBy, page, rowsPerPage, userOffersList],
    );

    return (
        <>
            <Box
                alignItems={'center'}
                display={'flex'}
                justifyContent={'center'}
            >

                <Box

                    padding={2} margin={2}
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
                                    order={order}
                                    orderBy={orderBy}
                                    onSelectAllClick={handleSelectAllClick}
                                    onRequestSort={handleRequestSort}
                                    rowCount={userOffersList.length}
                                />
                                <TableBody>
                                    {visibleRows.map((row) => {
                                        const isItemSelected = isSelected(row.id);
                                        // const labelId = `enhanced-table-checkbox-${index}`;

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
                                                <TableCell align="left" sx={{ color: 'GrayText' }}
                                                >{row.name}</TableCell>
                                                <TableCell align="left" sx={{ color: 'GrayText' }}
                                                >{row.description}</TableCell>
                                                <TableCell align="left" sx={{ color: 'GrayText' }}
                                                >{row.register_date}</TableCell>
                                                <TableCell align="left" sx={{ color: 'GrayText' }}
                                                >{row.update_date}</TableCell>
                                                <TableCell align="left" sx={{ color: 'GrayText' }}
                                                >{row.services_id}</TableCell>
                                                <TableCell align="left" sx={{ color: 'GrayText' }}
                                                >{row.credits}</TableCell>
                                                <TableCell align="center">
                                                    <Link to={`/panel/offersdetails/${row.id}`}>
                                                        <Tooltip title="Editar">
                                                        <IconButton
                                                            aria-label="edit"
                                                            color="secondary"
                                                            variant="contained"
                                                            type="submit"
                                                        >
                                                            <EditIcon />
                                                        </IconButton>
                                                        </Tooltip>
                                                    </Link>
                                                    <Tooltip title="Eliminar">
                                                        <IconButton onClick={() => deleteOffer(row.id)} aria-label="delete" color="red">
                                                            <DeleteIcon />
                                                        </IconButton>
                                                    </Tooltip>
                                                </TableCell>
                                                <TableCell align="center">{row.messages}
                                                    <Link to={`/panel/offertracking/${row.id}`}>
                                                        <Tooltip title="Mensajes recibidos">
                                                            <IconButton
                                                                aria-label="edit"
                                                                color="secondary"
                                                                variant="contained"
                                                                type="submit"
                                                            >
                                                                <EmailIcon />
                                                            </IconButton>
                                                        </Tooltip>
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
                                            <TableCell colSpan={6}>
                                                <Typography>
                                                    No dispones de ofertas
                                                </Typography>
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[5, 10]} component="div"
                            count={userOffersList.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            labelRowsPerPage={"Ofertas por página"}
                        />
                    </Paper>
                </Box>
            </Box>
        </>
    );
}