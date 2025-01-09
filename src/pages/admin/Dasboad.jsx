import React, { useEffect } from "react";
import ChartAdmin from "../../components/admin/overview/Chart";

const Dashboard = () => {
    // Chart 1 options
    const options_1 = {
        series: [13, 43, 22],
        chart: {
            width: 380,
            type: "pie",
        },
        labels: ["Balance", "Expense", "Credit Loan"],
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200,
                    },
                    legend: {
                        position: "bottom",
                    },
                },
            },
        ],
    };

    // Chart 2 options
    const options_2 = {
        series: [
            {
                name: "Income",
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
            },
            {
                name: "Expense",
                data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
            },
            {
                name: "Transfer",
                data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
            },
        ],
        chart: {
            type: "bar",
            height: 350,
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "55%",
                endingShape: "rounded",
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 2,
            colors: ["transparent"],
        },
        xaxis: {
            categories: [
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
            ],
        },
        yaxis: {
            title: {
                text: "$ (thousands)",
            },
        },
        fill: {
            opacity: 1,
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "$ " + val + " thousands";
                },
            },
        },
    };

    return (
        <>
            <ChartAdmin options_1={options_1} options_2={options_2} />
        </>
    );
};

export default Dashboard;
