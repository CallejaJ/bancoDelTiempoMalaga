import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import {
    Box, Table, TableBody, TableCell, TableContainer,
    TableHead, TablePagination, TableRow, TableSortLabel,
    Toolbar, Typography, Paper, TextField, Button, Modal, Alert
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import EmailIcon from '@mui/icons-material/Email';
import { Watch } from 'react-loader-spinner';
import { LoadingButton } from '@mui/lab';
// import InfoIcon from '@mui/icons-material/Info';
// import SaveIcon from '@mui/icons-material/Save';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    border: '2px solid #1565c0',
};

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
    // {
    //     id: 'id',
    //     numeric: true,
    //     disablePadding: true,
    //     label: 'ID',
    // },
    {
        id: 'name',
        numeric: true,
        disablePadding: false,
        label: 'Usuario'
    },
    {
        id: 'message',
        numeric: false,
        disablePadding: true,
        label: 'Mensaje',
    },
    {
        id: 'register_date',
        numeric: false,
        disablePadding: false,
        label: 'Fecha de publicación',
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
                        // align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
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
                variant="h6"
                id="tableTitle"
                component="div"
            >
                Histórico de mensajes 
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
export default function OfferMessagesListView({ messagesList, formik, newMessage }) {

    const { values, touched, errors, handleChange, handleSubmit, handleBlur } = formik;

    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('Usuario');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = messagesList.map((n) => n.id);
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
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - messagesList.length) : 0;

    const visibleRows = React.useMemo(
        () =>
            stableSort(messagesList, getComparator(order, orderBy)).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage,
            ),
        [order, orderBy, page, rowsPerPage, messagesList],
    );

    return (
        <>
            <Box
                padding={2}
                margin={2}
                display={'flex'}
                justifyContent={'center'}>
                <Button
                    variant='contained'
                    sx={{ width: 300, marginTop: 2, marginBottom: 1 }}
                    onClick={handleOpen}
                >Enviar mensaje
                </Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>

                        <Box
                            component="form"
                            noValidate
                            onSubmit={handleSubmit}

                        >
                            <TextField
                                sx={{ mt: 1, mb: 2, width: "280px" }}
                                multiline
                                margin="normal"
                                required
                                fullWidth
                                id="message"
                                label="Responder al hilo de mensajes"
                                name="message"
                                autoComplete="message"
                                autoFocus
                                type="text"
                                text="Responder al hilo de mensajes"
                                value={values.message}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                error={touched.message && Boolean(errors.message)}
                                helperText={touched.message && errors.message}
                            />
                            {newMessage ? (
                                <Alert
                                    sx={{ mt: 0, mb: 2, height: "54px", width: "280px" }}
                                    variant="outlined" severity="info" >
                                    {newMessage}
                                </Alert>
                            ) : null}
                            <LoadingButton
                                color="secondary"
                                loadingPosition="start"
                                startIcon={<EmailIcon />}
                                variant="contained"
                                type="submit"
                                fullWidth
                                sx={{ height: "54px", width: "180px" }}
                            >
                                <span>Enviar</span>
                            </LoadingButton>
                        </Box>
                    </Box>
                </Modal>
            </Box>

            {messagesList.length > 0 ? (
                <Box
                    alignItems={'center'}
                    display={'flex'}
                    justifyContent={'center'}
                >

                    <Box
                        padding={2} margin={2}
                        sx={{ width: '90%' }}>
                        <Paper sx={{ width: '100%', mb: 1 }}>
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
                                        rowCount={messagesList.length}
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
                                                    {/* <TableCell
                                                        component="th"
                                                        id={labelId}
                                                        scope="row"
                                                        padding="none"
                                                    >
                                                        {row.id}
                                                    </TableCell> */}
                                                    <TableCell align="left" > {row.name}</TableCell>
                                                    <TableCell align="left">{row.message}</TableCell>
                                                    <TableCell align="left">{row.register_date}</TableCell>
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
                                count={messagesList.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                labelRowsPerPage={"Mensajes por página"}
                            />
                        </Paper>
                    </Box >
                </Box >) : (<Box
                    alignItems={'center'}
                    display={'flex'}
                    justifyContent={'center'}
                    marginTop={4}
                    marginBottom={6}
                >
                    <Watch
                        height="200"
                        width="200"
                        radius="48"
                        color="#1565c0"
                        ariaLabel="watch-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                    />
                </Box>
            )
            }

        </>
    );
}