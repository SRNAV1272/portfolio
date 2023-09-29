import * as React from 'react';
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
import { Outlet } from 'react-router-dom';
import { Button, Grid } from '@mui/material';
import Chart from "react-apexcharts";
// eslint-disable-next-line
import { createFileName, useScreenshot } from 'use-react-screenshot'
import jsPDF from 'jspdf'
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

export default function DashboardHome() {
    const ref = React.useRef()
    const [image, takeScreenshot] = useScreenshot({
        type: 'image/png',
        quality: 1.0
    })
    function download(image) {
        const pdf = new jsPDF('p', 'mm', 'a4')
        pdf.addImage(image, 'PNG', 0, 0, 208, 280)
        pdf.save("AnalysisReport.pdf")
    }
    // function downlaodImage( { name = 'AnalysisReport', ext = 'png' } = {}) {
    //     const a = document.createElement(('a'))
    //     a.href = image
    //     a.download = createFileName(ext, name)
    //     a.click()
    // }

    return (
        <>
            <Grid item xs={12} display={'flex'} justifyContent={'end'} py={1}>
                <Button
                    variant="outlined"
                    sx={{
                        cursor: 'pointer',
                        fontWeight: 'bold'
                    }}
                    onClick={() => takeScreenshot(ref.current).then(download)}
                    startIcon={<DownloadForOfflineIcon />}
                >
                    PDF
                </Button>&emsp;
                {/* <Button
                    variant="outlined"
                    sx={{
                        cursor: 'pointer',
                        fontWeight: 'bold'
                    }}
                    onClick={() => takeScreenshot(ref.current).then(downlaodImage)}
                    startIcon={<DownloadForOfflineIcon />}
                >
                    Image
                </Button> */}
            </Grid>
            <Grid container ref={ref}>
                <Grid
                    item
                    xs={12}
                    lg={6}
                >
                    <PChart />
                </Grid>
                <Grid
                    item
                    xs={12}
                    lg={6}
                >
                    <ApexChart />
                </Grid>
                <Outlet />
            </Grid>
        </>
    )
}


const ApexChart = () => {
    const options = {
        xaxis: {
            categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        chart: {
            toolbar: {
                show: false
            }
        }
    };
    const series = [
        {
            name: "series-1",
            data: [30, 40, 25, 50, 49, 21, 70, 51]
        },
        {
            name: "series-2",
            data: [23, 12, 54, 61, 32, 56, 81, 19]
        },
        {
            name: "series-3",
            data: [24, 20, 5, 75, 42, 79, 72, 35]
        }
    ];

    return <Chart options={options} series={series} type="area" />;
};


function PChart() {

    const state = {

        series: [25, 15, 44, 55, 41, 17],
        options: {
            chart: {
                width: '100%',
                type: 'pie',
            },
            labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            theme: {
                monochrome: {
                    enabled: true
                }
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        offset: -5
                    }
                }
            },
            title: {
                text: "Monochrome Pie"
            },
            dataLabels: {
                formatter(val, opts) {
                    const name = opts.w.globals.labels[opts.seriesIndex]
                    return [name, val.toFixed(1) + '%']
                }
            },
            legend: {
                show: false
            }
        },


    };


    return (
        <div id="chart">
            <Chart options={state.options} series={state.series} height={400} type="pie" />
        </div>
    )
}