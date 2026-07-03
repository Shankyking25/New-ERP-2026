import {
  Line
} from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const data = {

  labels: [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ],

  datasets: [
    {
      label: "Attendance",

      data: [
        120,
        125,
        130,
        126,
        135,
        138,
      ],
    },
  ],
};

export default function AttendanceChart() {

  return (
    <Line
      data={data}
    />
  );

}