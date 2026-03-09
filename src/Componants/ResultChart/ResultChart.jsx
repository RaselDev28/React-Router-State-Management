import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData=[
  { "id": 1, "name": "Rahim", "physics": 85, "chemistry": 78, "math": 90 },
  { "id": 2, "name": "Karim", "physics": 72, "chemistry": 70, "math": 68 },
  { "id": 3, "name": "Sakib", "physics": 90, "chemistry": 88, "math": 95 },
  { "id": 4, "name": "Tamim", "physics": 67, "chemistry": 65, "math": 70 },
  { "id": 5, "name": "Nayeem", "physics": 78, "chemistry": 82, "math": 80 },
  { "id": 6, "name": "Hasan", "physics": 88, "chemistry": 85, "math": 84 },
  { "id": 7, "name": "Jamal", "physics": 59, "chemistry": 60, "math": 55 },
  { "id": 8, "name": "Rafi", "physics": 93, "chemistry": 91, "math": 94 },
  { "id": 9, "name": "Sohan", "physics": 74, "chemistry": 76, "math": 72 },
  { "id": 10, "name": "Imran", "physics": 81, "chemistry": 79, "math": 83 }
]


const ResultChart = () => {
    return (
        <div>
            <LineChart width={800} height={500} data={resultData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey="chemistry" stroke='blue'></Line>
            </LineChart>
        </div>
    );
};

export default ResultChart;