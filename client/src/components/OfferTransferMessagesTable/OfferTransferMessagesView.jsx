import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import {
    Box, Table, TableBody, TableCell, TableContainer,
    TableHead, TablePagination, TableRow, TableSortLabel, Toolbar, Typography, Paper, Tooltip, IconButton
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import ChatSharpIcon from '@mui/icons-material/ChatSharp';

const headCells = [
    {
        id: 'uownername',
        numeric: false,
        disablePadding: true,
        label: 'Solicitante',
    },
    {
        id: 'ofername',
        numeric: false,
        disablePadding: true,
        label: 'Servicio realizado',
    },
    {
        id: 'credits',
        numeric: true,
        disablePadding: true,
        label: 'Créditos',
    },
    {
        id: 'register_date',
        numeric: false,
        disablePadding: false,
        label: 'Fecha de solicitud',
    },
    {
        id: '',
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
                Solicitudes recibidas de otros usuarios
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
export default function OfferTransferMessagesView({ offerTransferMessagesList, deleteOfferTransferMessage, addCreditsTransfer }) {

    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);


    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = offerTransferMessagesList.map((n) => n.id);
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
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - offerTransferMessagesList.length) : 0;
    const visibleRows = React.useMemo(

        () =>
            (offerTransferMessagesList).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage,
            ),
        [page, rowsPerPage, offerTransferMessagesList],
    );

    return (
        <>
            {offerTransferMessagesList.length > 0 ? (
            <Box
                alignItems={'center'}
                display={'flex'}
                justifyContent={'center'}
                >
                <Box
                    padding={2}
                    margin={2}
                    sx={{ width: '100%' }}>
                    <Paper sx={{ width: '100%', mb: 2 }}>
                        <EnhancedTableToolbar numSelected={selected.length} />
                        <TableContainer>
                            <Table
                                sx={{ minWidth: 800 }}
                                aria-labelledby="tableTitle"
                            >
                                <EnhancedTableHead
                                    numSelected={selected.length}
                                    onSelectAllClick={handleSelectAllClick}
                                    rowCount={offerTransferMessagesList.length}
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
                                                <TableCell align="left" sx={{ color: 'GrayText' }}
                                                >{row.uownername}</TableCell>
                                                <TableCell align="left" sx={{ color: 'GrayText' }}
                                                >{row.offername}</TableCell>
                                                <TableCell align="left" sx={{ color: 'GrayText' }}
                                                >{row.credits}</TableCell>
                                                <TableCell align="left" sx={{ color: 'GrayText' }}
                                                >{row.register_date}</TableCell>
                                                <TableCell align="left" sx={{ color: 'GrayText' }}
                                                >
                                                    <Tooltip title="Transferir créditos">
                                                        <IconButton
                                                            onClick={() => addCreditsTransfer(row.id)}
                                                            aria-label="addcredittransfer" color="secondary">
                                                            <CheckCircleIcon />
                                                        </IconButton>
                                                    </Tooltip>
                                                    <Tooltip title="Eliminar">
                                                        <IconButton
                                                            onClick={() => deleteOfferTransferMessage(row.id)} 
                                                            aria-label="deleteoffertransfermessage" color="red">
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
                            count={offerTransferMessagesList.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                                labelRowsPerPage={"Solicitudes por página"}
                        />
                    </Paper>
                </Box>
            </Box>
            ) : (
                <Box
                        alignItems={'center'}
                        display={'flex'}
                        justifyContent={'center'}
                        marginTop={5}
                        marginBottom={5}
                    >
                        <ChatSharpIcon
                            color="grey"
                            sx={{ fontSize: 40, color: "GrayText" }}
                        />
                        <Typography
                            marginLeft={2}
                            sx={{ color: "GrayText" }}
                        >
                            No hay peticiones de transferencias de otros usuarios
                        </Typography>
                    </Box>
            )}
        </>
    );
}