import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { Bell, User, ArrowLeft } from "lucide-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const barData = {
  labels: [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ],
  datasets: [
    {
      label: "Link Clicks",
      data: [3000, 2500, 800, 1500, 2800, 600, 1900, 2300, 2900, 1000, 1600, 1800],
      backgroundColor: "#c7ecee",
      borderRadius: 6,
    },
  ],
};

const doughnutData = {
  labels: ["Referrals sent", "Converted"],
  datasets: [
    {
      data: [57, 42],
      backgroundColor: ["#4f46e5", "#c7d2fe"],
      borderWidth: 0,
      cutout: "70%",
    },
  ],
};

const lineData = {
  labels: [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ],
  datasets: [
    {
      label: "Revenue",
      data: [400, 420, 390, 410, 500, 550, 530, 590, 600, 620, 640, 660],
      borderColor: "#6366f1",
      backgroundColor: "transparent",
      tension: 0.4,
      yAxisID: "y",
    },
    {
      label: "Conversion",
      data: [300, 310, 290, 305, 340, 360, 355, 400, 410, 420, 430, 440],
      borderColor: "#fbbf24",
      backgroundColor: "transparent",
      tension: 0.4,
      yAxisID: "y1",
    },
  ],
};

const lineOptions = {
  responsive: true,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  stacked: false,
  scales: {
    y: {
      type: "linear" as const,
      position: "left" as "left",
      ticks: {
        color: "#4b5563",
      },
    },
    y1: {
      type: "linear" as const,
      position: "right" as "right",
      grid: {
        drawOnChartArea: false,
      },
      ticks: {
        color: "#4b5563",
      },
    },
  },
  plugins: {
    legend: {
      position: "top" as const,
      labels: {
        color: "#6b7280",
      },
    },
  },
};

const MetricCard = ({ title, value, change, positive }: any) => (
  <div className="flex flex-col items-start bg-white px-5 py-4 rounded-2xl shadow-md">
    <p className="text-sm text-gray-400 mb-1">{title}</p>
    <h2 className="text-2xl font-bold">{value}</h2>
    <span className={`text-sm mt-1 ${positive ? "text-green-500" : "text-red-500"}`}>
      {positive ? "▲" : "▼"} {change} vs last month
    </span>
  </div>
);

const SummerReferralDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Main Content */}
      <div className="flex-1 overflow-y-scroll p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 cursor-pointer">
            <ArrowLeft className="w-4 h-4" />
            Back
          </div>
          <div className="flex items-center gap-4">
            <Bell className="w-5 h-5 text-gray-400" />
            <div className="flex items-center gap-2">
              <User className="w-6 h-6 rounded-full bg-gray-200 p-1" />
              <div className="text-sm">
                <p className="font-semibold text-gray-700">Kadin Stanton</p>
                <p className="text-gray-400 text-xs">kadinstanton@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-2xl font-bold mb-6">Summer Referral Program</h1>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <MetricCard title="Total Promoters" value="1,234" change="12%" positive />
          <MetricCard title="Conversion rate" value="23.5%" change="2.4%" positive={false} />
          <MetricCard title="Revenue Generated" value="$12,345" change="18.7%" positive />
          <MetricCard title="New Leads" value="500" change="-" positive />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 items-stretch">
          <div className="col-span-2 bg-white rounded-2xl p-4 shadow-md h-full">
            <h2 className="text-lg font-semibold mb-2">Total Link Clicks</h2>
            <Bar data={barData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
          </div>

          <div className="flex flex-col justify-between h-full">
            <div className="bg-white rounded-2xl p-4 shadow-md h-1/2 mb-4">
              <h3 className="text-md font-semibold mb-2">Conversion Success Rate</h3>
              <div className="h-36 w-36 mx-auto">
                <Doughnut data={doughnutData} options={{ cutout: "70%", plugins: { legend: { display: false } } }} />
              </div>
              <div className="flex justify-center gap-4 mt-4 text-sm">
                <div className="flex items-center gap-1 text-indigo-600 font-medium">
                  <div className="w-3 h-3 rounded-full bg-indigo-600"></div>
                  Referrals sent
                </div>
                <div className="flex items-center gap-1 text-indigo-300 font-medium">
                  <div className="w-3 h-3 rounded-full bg-indigo-300"></div>
                  Converted
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-md h-1/2">
              <h3 className="text-md font-semibold mb-2">Top Performing Channel</h3>
              <div className="grid grid-cols-3 gap-2 text-center text-white text-sm font-semibold">
                <div className="bg-[#f97316] rounded-xl py-3">Facebook<br />78%</div>
                <div className="bg-[#f43f5e] rounded-xl py-3">Twitter<br />45%</div>
                <div className="bg-[#3b82f6] rounded-xl py-3">LinkedIn<br />23%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Line Chart */}
        <div className="bg-white rounded-2xl p-4 shadow-md">
          <div className="flex justify-between mb-2">
            <h2 className="text-lg font-semibold">Campaign Performance</h2>
            <div className="text-sm text-gray-500">Last 1 year</div>
          </div>
          <Line data={lineData} options={lineOptions} />
        </div>
      </div>
    </div>
  );
};

export default SummerReferralDashboard;
