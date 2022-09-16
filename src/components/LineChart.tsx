import { Line } from 'react-chartjs-2';
import { useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

const LineChart = (props: { chartData: string[][] }) => {

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            }
        },
    };

    const [data, setData] = useState({
        labels: props.chartData.map(item => item[0].substring(0, 5)).reverse(),
        datasets: [{
            label: 'Динамика курса валюты',
            data: props.chartData.map(item => +item[1]).reverse()
        }],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        width: 600,
        height: 400
    })
    return <Line options={options} data={data} />
}

export default LineChart