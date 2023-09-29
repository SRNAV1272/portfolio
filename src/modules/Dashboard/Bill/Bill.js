import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useMediaQuery, useTheme } from "@mui/material";
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import ReceiptIcon from '@mui/icons-material/Receipt';
import { useRef, useState } from "react";
// eslint-disable-next-line
import { createFileName, useScreenshot } from 'use-react-screenshot'
import jsPDF from "jspdf";

export default function Bill() {
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const ref = useRef()
    const [image, takeScreenshot] = useScreenshot({
        type: 'image/png',
        quality: 1.0
    })
    function download(image) {
        const pdf = new jsPDF('p', 'mm', 'a4')
        pdf.addImage(image, 'PNG', 0, 0, 208, 280)
        pdf.save("Reciept.pdf")
    }
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const TAX_RATE = 0.07;

    function ccyFormat(num) {
        return `${num.toFixed(2)}`;
    }

    function priceRow(qty, unit) {
        return qty * unit;
    }

    function createRow(desc, qty, unit) {
        const price = priceRow(qty, unit);
        return { desc, qty, unit, price };
    }

    function subtotal(items) {
        return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
    }

    const rows = [
        createRow('Paperclips (Box)', 100, 39.99)
    ];

    const invoiceSubtotal = subtotal(rows);
    const invoiceTaxes = TAX_RATE * invoiceSubtotal;


    return (
        <>
            <Grid
                container
                component={Paper}
                p={2}
                justifyContent={'space-between'}
                alignItems={'center'}
                elevation={3}
            >
                <Grid
                    xs={12}
                    lg={5}
                >
                    <Typography className="kanit" variant="h4">Billing</Typography>
                </Grid>
                <Grid
                    xs={12}
                    lg={7}
                    display={'flex'}
                    justifyContent={'end'}
                    alignItems={'center'}
                >
                    <Button variant="outlined" onClick={handleClickOpen} className='kanit' startIcon={<ReceiptIcon />}>
                        Receipt
                    </Button>
                </Grid>
            </Grid>
            <div>
                <Dialog
                    fullScreen={fullScreen}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <Grid
                        container
                        p={3}
                        ref={ref}
                    >
                        <Grid
                            xs={12}
                            display={'flex'}
                            justifyContent={'space-between'}
                            alignItems={'center'}
                        >
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                <title>xing2</title>
                                <path d="M4.862 6.319c-0.275 0-0.513 0.1-0.631 0.287-0.119 0.2-0.1 0.45 0.025 0.706l3.119 5.4c0.006 0.012 0.006 0.019 0 0.025l-4.9 8.662c-0.125 0.256-0.119 0.512 0 0.706 0.119 0.188 0.325 0.313 0.6 0.313h4.613c0.688 0 1.025-0.469 1.256-0.894 0 0 4.794-8.481 4.981-8.813-0.019-0.031-3.175-5.531-3.175-5.531-0.231-0.406-0.575-0.862-1.287-0.862h-4.6z"></path>
                                <path d="M24.25 0c-0.688 0-0.988 0.431-1.238 0.881 0 0-9.944 17.631-10.269 18.212 0.019 0.031 6.556 12.031 6.556 12.031 0.231 0.406 0.581 0.881 1.288 0.881h4.613c0.275 0 0.494-0.106 0.613-0.294 0.125-0.2 0.119-0.456-0.012-0.712l-6.5-11.894c-0.006-0.012-0.006-0.019 0-0.031l10.219-18.069c0.125-0.256 0.131-0.512 0.012-0.713-0.119-0.188-0.337-0.294-0.613-0.294h-4.669z"></path>
                            </svg>
                            <Typography className="kanit" variant="h4" color={'blue'}>
                                Reciept
                            </Typography>
                        </Grid>
                        <Grid
                            xs={12}
                        >
                            <Box
                                width={'100%'}
                            >
                                <Typography className="kanit">KSRTECH</Typography>
                            </Box>
                        </Grid>

                        <Grid
                            xs={12}
                        >
                            <Box
                                width={'100%'}
                                display={"flex"}
                                justifyContent={'space-between'}
                                alignItems={'center'}
                            >
                                <Typography className="kanit" color={'GrayText'}>K Sai Rajesh</Typography>
                                <Typography className="kanit" color={'GrayText'}>{(new Date()).getDate()}.{(new Date()).getMonth()}.{(new Date()).getFullYear()}</Typography>
                            </Box>
                        </Grid>
                        <Grid
                            xs={12}
                        >
                            <TableContainer component={Paper}>
                                <Table aria-label="spanning table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center" className="kanit" colSpan={2}>
                                                Details
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="kanit">Desc</TableCell>
                                            <TableCell className="kanit" align="right">Sum</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow key={row.desc}>
                                                <TableCell className="kanit">{row.desc}</TableCell>
                                                <TableCell className="kanit" align="right">{ccyFormat(row.price)}</TableCell>
                                            </TableRow>
                                        ))}
                                        <TableRow>
                                            {/* <TableCell rowSpan={2} /> */}
                                            <TableCell className="kanit" colSpan={1} align="right">Total</TableCell>
                                            <TableCell className="kanit" align="right">3999 /-</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>

                    <DialogActions>
                        <Button autoFocus onClick={handleClose}>
                            close
                        </Button>
                        <Button variant="outlined"
                            onClick={() => { takeScreenshot(ref.current).then(download); handleClose() }}
                            className='kanit' startIcon={<DownloadForOfflineIcon />}>
                            pdf
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </>
    )
}