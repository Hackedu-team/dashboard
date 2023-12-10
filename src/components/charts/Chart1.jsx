// import React from 'react';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Line } from 'react-chartjs-2';
// import { faker } from '@faker-js/faker'

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );
// const BarChart = () => {

//     const options = {
//         responsive: true,
//         interaction: {
//             mode: 'index',
//             intersect: false,
//         },
//         stacked: false,
//         plugins: {
//             title: {
//                 display: true,
//                 text: 'Line Chart - Multi Axis',
//             },
//         },
//         scales: {
//             y: {
//                 type: 'linear',
//                 display: true,
//                 position: 'left',
//             },
//             y1: {
//                 type: 'linear',
//                 display: true,
//                 position: 'right',
//                 grid: {
//                     drawOnChartArea: false,
//                 },
//             },
//         },
//     };

//     const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

//     const data = {
//         labels,
//         datasets: [
//             {
//                 label: 'Dataset 1',
//                 // data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//                 data: [12, 19, 3, 5, 2],
//                 borderColor: 'rgb(255, 99, 132)',
//                 backgroundColor: 'rgba(255, 99, 132, 0.5)',
//                 yAxisID: 'y',
//             },
//             {
//                 label: 'Dataset 2',
//                 // data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
//                 data: [1, 3, 3, 9, 50],
//                 borderColor: 'rgb(53, 162, 235)',
//                 backgroundColor: 'rgba(53, 162, 235, 0.5)',
//                 yAxisID: 'y1',
//             },
//         ],
//     };
//     return (
//         <div>
//             <Line data={data} options={options} />
//         </div>
//     );
// };
        
// export default BarChart;


























import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController
);

const BarChart = ({table, labels, title}) => {
    const data = {
        labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'],
            datasets: [
            {
                label: title,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                // data: [[12, 19, 3, 5, 2],[12, 3, 3, 9, 2]],  
                data: table
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                border: { dash: [6, 6], display: true },
                grid: {
                  display: true // Display grid lines for the y-axis
                },
                ticks: {
                  padding: 15
                }
              },
              x: {
                beginAtZero: true,
                border: { display: true },
                grid: {
                  display: false // No display of grid lines for the x-axis
                },
                ticks: {
                  padding: 7
                }
            }
        },
    }

    return (
        <div>
            <Bar data={data} options={options} />
        </div>
    );
};

export default BarChart;