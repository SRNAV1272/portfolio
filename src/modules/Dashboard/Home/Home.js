import * as React from 'react';
import { Box, Button, Grid, Paper, Step, StepContent, StepLabel, Stepper, Typography } from '@mui/material';
import Chart from "react-apexcharts";
import Calendar from 'react-calendar';
import LoginIcon from '@mui/icons-material/Login';
import ContactsIcon from '@mui/icons-material/Contacts';
import 'react-calendar/dist/Calendar.css';
import { useSelector } from 'react-redux';
import BatchPredictionIcon from '@mui/icons-material/BatchPrediction';

export default function DashboardHome() {
    const [value, onChange] = React.useState(new Date());
    const { totaldays, attendance, projects, course, batch } = useSelector(state => state.LoginReducers)

    const [activeStep, setActiveStep] = React.useState(0);

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <>
            <Grid
                container
                justifyContent={'space-evenly'}
            >
                <Grid
                    item
                    xs={12}
                    lg={3}
                    display={'flex'}
                    justifyContent={'space-evenly'}
                    alignItems={'center'}
                    p={3}
                    mt={2}
                    component={Paper}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Typography className='kanit' variant='h6' >Batch</Typography>
                        <Typography className='kanit' variant='h5' color={'blueviolet'}>{batch}</Typography>
                    </Box>
                    <Box>
                        <BatchPredictionIcon sx={{ fontSize: '40px', color: '#7F6767' }} />
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    lg={3}
                    display={'flex'}
                    justifyContent={'space-evenly'}
                    alignItems={'center'}
                    p={3}
                    mt={2}
                    component={Paper}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Typography className='kanit' variant='h6' >Assignments</Typography>
                        <Typography className='kanit' variant='h4' color={'blueviolet'} >{projects}</Typography>
                    </Box>
                    <Box>
                        <LoginIcon sx={{ fontSize: '40px', color: '#7F6767' }} />
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    lg={3}
                    mt={2}
                    display={'flex'}
                    justifyContent={'space-evenly'}
                    alignItems={'center'}
                    p={3}
                    component={Paper}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Typography className='kanit' variant='h6' >Attendance</Typography>
                        <Typography className='kanit' variant='h4' color={'blueviolet'} >{attendance}/{totaldays}</Typography>
                    </Box>
                    <Box>
                        <ContactsIcon sx={{ fontSize: '40px', color: '#7F6767' }} />
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    lg={6}
                    p={2}
                    display={'flex'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Calendar className={'calender'} onChange={onChange} value={value} />
                </Grid>
                <Grid
                    item
                    xs={12}
                    lg={6}
                    display={'flex'}
                    justifyContent={'space-evenly'}
                    alignItems={'center'}
                    p={3}
                    mt={2}
                    sx={{
                        height: '400px',
                        overflow: 'scroll'
                    }}
                    component={Paper}
                >
                    <Box sx={{ maxWidth: 400 }}>
                        <Stepper activeStep={activeStep} orientation="vertical">
                            {course.map((step, index) => (
                                <Step key={step.label}>
                                    <StepLabel
                                        optional={
                                            index === 2 ? (
                                                <Typography variant="caption">Last step</Typography>
                                            ) : null
                                        }
                                    >
                                        {step.label}
                                    </StepLabel>
                                    <StepContent>
                                        <Typography>{step.description}</Typography>                                        
                                    </StepContent>
                                </Step>
                            ))}
                        </Stepper>
                        {activeStep === course.length && (
                            <Paper square elevation={0} sx={{ p: 3 }}>
                                <Typography>All steps completed - you&apos;re finished</Typography>
                                <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                                    Reset
                                </Button>
                            </Paper>
                        )}
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

// eslint-disable-next-line
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

// eslint-disable-next-line
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