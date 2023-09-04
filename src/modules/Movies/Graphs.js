import React from "react";

import Chart from "react-apexcharts";

const ApexChart = (props) => {
    const options = {
        xaxis: {
            categories: props.movies
        },
        zoom: {
            enabled: false
        }
    };
    const series = [
        {
            name: "Movies Rating",
            data: props.rating
        }
    ];
    console.log(props)

    return <Chart height={400} options={options} series={series} type="line" />;
};
export default ApexChart;
