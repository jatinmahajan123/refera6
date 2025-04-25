import React from "react";
import { Line, Doughnut } from "react-chartjs-2";
import { motion } from "framer-motion";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import "./dashboard.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
);
import { useEffect, useState } from "react";
import { Bell, User } from "lucide-react";

const AnimatedRingCard: React.FC<{
  title: string;
  value: number;
  color: string;
}> = ({ title, value, color }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [deg, setDeg] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000;
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const step = value / totalSteps;
    const degStep = (value * 3.6) / totalSteps;

    const interval = setInterval(() => {
      start += step;
      setDisplayValue(Math.min(Math.round(start), value));
      setDeg((prev) => Math.min(prev + degStep, value * 3.6));
      if (start >= value) clearInterval(interval);
    }, stepTime);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <motion.div
      className="ring-metric-card"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: value / 100 }}
    >
      <div
        className="ring"
        style={{
          background: `conic-gradient(${color} ${deg}deg, #f0f0f0 0deg)`,
        }}
      >
        <span>{displayValue}%</span>
      </div>
      <p>{title}</p>
    </motion.div>
  );
};

const Dashboard: React.FC = () => {
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Promoter Performance",
        data: [30, 38, 35, 37, 40, 42],
        borderColor: "#5b68df",
        backgroundColor: "transparent",
        tension: 0.4,
        pointBackgroundColor: "#5b68df",
      },
    ],
  };

  const doughnutData = {
    labels: ["Referrals sent 57%", "Converted 42%"],
    datasets: [
      {
        data: [57, 43],
        backgroundColor: ["#d2dbfd", "#5b68df"],
        borderWidth: 0,
      },
    ],
  };

  const doughnutOptions = {
    cutout: "75%",
    plugins: {
      legend: {
        display: true,
        position: "right" as const,
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          color: "#888",
          boxWidth: 8,
          boxHeight: 8,
          padding: 20,
          font: {
            size: 14,
            family: "inherit",
          },
        },
      },
    },
  };

  return (
    <div className="dashboard-wrapper">
      {/* <div className="dashboard-header">
        <h2>Dashboard</h2>
      </div> */}
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 text-sm text-black-500 cursor-pointer">
      
          <h1 className="text-2xl font-bold mb-6">DashBoard</h1>
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

      {/* Top Stats */}
      <motion.div
        className="dashboard-stats"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {[
          {
            title: "Total Promoters",
            value: "1,234",
            change: "+12.1%",
            icon: "👥",
            changeColor: "green",
          },
          {
            title: "Conversion rate",
            value: "23.5%",
            change: "-2.4%",
            icon: "📈",
            changeColor: "red",
          },
          {
            title: "Revenue Generated",
            value: "$12,345",
            change: "+8.7%",
            icon: "💰",
            changeColor: "green",
          },
          { title: "Active Campaigns", value: "3", icon: "🗂️" },
        ].map((item, i) => (
          <motion.div
            className="dashboard-card"
            whileHover={{ scale: 1.02 }}
            key={i}
          >
            <div className="dashboard-card-top">
              <span className="icon">{item.icon}</span>
              <p>{item.title}</p>
            </div>
            <h3>{item.value}</h3>
            {item.change && (
              <span className={`stat-change ${item.changeColor}`}>
                {item.change} vs last month
              </span>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Ring Metrics */}
      {/* <div className="ring-metric-section">
        {[
          { title: 'Repeat Referral Rate', value: 42, color: '#57e19c' },
          { title: 'Referral Engagement Rate', value: 67, color: '#fc7878' },
          { title: 'Churn Rate of Leads', value: 28, color: '#81b9ff' },
          { title: 'Upsell Rate of Leads', value: 19, color: '#f2a8ff' },
        ].map((m, idx) => (
          <div className="ring-metric-card" key={idx}>
            <div className="ring" style={{ background: `conic-gradient(${m.color} ${m.value * 3.6}deg, #f0f0f0 0deg)` }}>
              <span>{m.value}%</span>
            </div>
            <p>{m.title}</p>
          </div>
        ))}
      </div> */}
      <div className="ring-metric-section">
        {[
          { title: "Repeat Referral Rate", value: 42, color: "#57e19c" },
          { title: "Referral Engagement Rate", value: 67, color: "#fc7878" },
          { title: "Churn Rate of Leads", value: 28, color: "#81b9ff" },
          { title: "Upsell Rate of Leads", value: 19, color: "#f2a8ff" },
        ].map((m, idx) => (
          <AnimatedRingCard key={idx} {...m} />
        ))}
      </div>

      {/* Charts Section */}
      <div className="charts-container">
        <div className="line-chart-card">
          <div className="chart-header">
            <h4>Promoter Performance Over Time</h4>
            <select>
              <option>Last 6 months</option>
              <option>Last 12 months</option>
            </select>
          </div>
          <Line data={lineData} />
        </div>

        <div className="doughnut-chart-card small-doughnut">
          <h4>Conversion Success Rate</h4>
          <div className="doughnut-chart-wrapper">
            <Doughnut data={doughnutData} options={doughnutOptions} />
          </div>
          <div className="top-channels">
            <h5>Top Performing Channel</h5>
            <div className="channel-performances">
              <div className="channel-card facebook">
                Facebook <strong>78%</strong>
              </div>
              <div className="channel-card twitter">
                Twitter <strong>45%</strong>
              </div>
              <div className="channel-card linkedin">
                LinkedIn <strong>23%</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl p-5 shadow-md mt-6">
        <h4 className="text-lg font-semibold mb-4">Recent Activities</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-sm text-left text-gray-600">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-4 py-2 font-medium">Activity</th>
                <th className="px-4 py-2 font-medium">Date</th>
                <th className="px-4 py-2 font-medium">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-2">Julian earned $10</td>
                <td className="px-4 py-2">28-04-2024</td>
                <td className="px-4 py-2">10:30 AM</td>
              </tr>
              <tr>
                <td className="px-4 py-2">
                  John Doe signed up from your referral link
                </td>
                <td className="px-4 py-2">29-04-2024</td>
                <td className="px-4 py-2">9:45 AM</td>
              </tr>
              <tr>
                <td className="px-4 py-2">
                  You reached 50 referrals milestone!
                </td>
                <td className="px-4 py-2">30-04-2024</td>
                <td className="px-4 py-2">8:20 AM</td>
              </tr>
              <tr>
                <td className="px-4 py-2">
                  You updated your referral campaign
                </td>
                <td className="px-4 py-2">31-04-2024</td>
                <td className="px-4 py-2">7:00 AM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Leaderboard */}
      <div className="leaderboard-section mt-5">
      <h4 className="text-lg font-semibold mb-4">Leaderboard Table View</h4>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Promoter Name</th>
              <th>Conversion Rate</th>
              <th>Referrals Sent</th>
              <th>Successful Conversions</th>
              <th>Revenue Generated</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["1", "Emery Dokkdis", "150", "80", "60%", "$1,200"],
              ["2", "Kadri Lipshutz", "132", "90", "65%", "$980"],
              ["3", "Randy Culhane", "110", "60", "60%", "$880"],
              ["4", "Jassan Vaccaro", "100", "85", "75%", "$500"],
              ["5", "Jocelyn Levin", "50", "30", "63%", "$800"],
              ["6", "Maren Septimus", "80", "35", "25%", "$200"],
              ["7", "Haylie Saris", "120", "55", "45%", "$150"],
              ["8", "Randy Horwitz", "110", "90", "65%", "$880"],
            ].map((row, idx) => (
              <tr key={idx}>
                {row.map((cell, i) => (
                  <td key={i}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
