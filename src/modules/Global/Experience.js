import { Box, Grid, Paper, Typography } from "@mui/material";

export default function Experience() {

    const content = [
        {
            project: 'NHAI POC',
            tech: 'Reactjs',
            description: 'This project was an AI powered server that can analyse and serve the data about the Highway health, greenary and Vehicles count plus demographic details relayed by a drone inspecting the Highway.',
            point1: 'Graphical Representation Data and Data Sorting',
            point2: 'Data Sorting.'
        },
        {
            project: 'Pixofix',
            tech: 'Reactjs-Nodejs',
            description: 'This project was designed to provides Image Editing services using a highly vetted team of in-house graphic designers and world-class automation tools.',
            point1: 'Building a page that supports editing of image such as image annotation and saving the data points.',
            point2: 'Creating a aws lambda function for upload and download of the files.'
        },
        {
            project: 'CrowdAnalytics',
            tech: 'Reactjs',
            description: 'This project was designed with AI powered servers that can provide information about customers arriving and leaving the convenient store. Registered customers are displayed in notifications as loyal and new customers as new.',
            point1: 'Bugs Fixing.',
            point2: 'Routing of the pages.'
        },
    ]

    return (
        <>
            <Grid container>
                <Grid
                    item
                    component={Paper}
                    xs={12}
                    // lg={4}
                    p={2}
                >
                    <Box
                        sx={{
                            width: '100%'
                        }}
                        display='flex'
                        justifyContent='space-between'
                        alignItems='center'
                        borderBottom={'2px solid slateblue'}
                    >
                        <div>
                            <Typography className="kanit" fontSize='20px' color={'GrayText'}>Navajna Technology</Typography>&emsp;
                            <Typography sx={{ fontSize: '10px', fontWeight: 'bold' }}>2022 - Present</Typography>
                        </div>
                        <Typography className="kanit" fontSize='15px' fontWeight='bold' >Hyderabad</Typography>
                    </Box>
                    <Typography className="kanit" fontSize='22px' fontWeight='bold' paddingTop={3}>Projects & POCs</Typography>
                    {
                        content?.map((item, idx) => {
                            return (
                                <Box
                                    sx={{
                                        width: '100%',
                                        paddingY: 2
                                    }}
                                >
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <Typography className="kanit" fontSize='18px' fontWeight='bold' color={'slateblue'}>{idx+1}. {item?.project} :</Typography>
                                        <Typography className="kanit" fontSize='18px' fontWeight='bold' color={'GrayText'}>{item?.tech}</Typography>
                                    </div>
                                    <Typography className="kanit" fontSize='14px' fontWeight='bold'>
                                        {
                                            item?.description
                                        }
                                    </Typography>
                                    <div style={{ paddingTop: 5 }}>
                                        <Typography className="kanit" fontSize='18px' fontWeight='bold' color={'slateblue'}>Tasks :</Typography>
                                        <Typography className="kanit" fontSize='14px' fontWeight='bold' marginLeft={5}>
                                            {item?.point1}
                                        </Typography>
                                        <Typography className="kanit" fontSize='14px' fontWeight='bold' marginLeft={5}>
                                            {item?.point2}
                                        </Typography>
                                    </div>
                                </Box>
                            )
                        })
                    }
                </Grid>
            </Grid>
        </>
    )
}