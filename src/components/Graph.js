import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

export default function Graph({ maxTempData, minTempData }) {
    const [labels, setLabels] = useState([]);
    useEffect(() => {
        const date = new Date().getDay();
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const label = [];
        for (let i = 0; i < 7; i++) {
            label.push(days[(date + i) % 7]);
        }
        setLabels(label);
    }, []);
    const options = {
        responsive: true,
    };

    const data = {
        options,
        labels,
        datasets: [
            {
                label: 'Maximum',
                data: maxTempData,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Minimum',
                data: minTempData,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };
    return (
        <div
            className="tab-pane fade"
            id="pills-graphDay"
            role="tabpanel"
            aria-labelledby="pills-graphDay-tab"
        >
            <p id="graph-title">Chart of next 7 days temperature</p>
            <div id="graph-day-content">
                <Line data={data} />
            </div>
        </div>
    );
}
