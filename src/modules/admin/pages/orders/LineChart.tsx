import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const options: any = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: "top" as const,
    },
  },
  scales: {
    y: {
      ticks: {
        stepSize: 100,
        callback: (value: number) => value + "k",
        font: { size: 12, color: "#667085" },
      },
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
    },
    x: {
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
    },
  },
};

const labels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const data: any = {
  labels,
  datasets: [
    {
      fill: "start",
      backgroundColor: (context: any) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 90, 400);
        gradient.addColorStop(0, "#CF956F");
        gradient.addColorStop(0.5, "#FDECE0");
        gradient.addColorStop(1, "#fff");
        return gradient;
      },
      borderColor: "#CF956F",
      borderWidth: 0.8,
      label: "Dataset 2",
      data: [100, 300, 200, 300, 400, 500, 550],
      pointBorderWidth: 4,
      pointStyle: false,
      tension: 0.5,
    },
  ],
};

function LineCharts() {
  return (
    <main className=" w-full  pb-10">
      <Line options={options} data={data} className="w-[1074px]  h-[322px]" />
    </main>
  );
}

export default LineCharts;
