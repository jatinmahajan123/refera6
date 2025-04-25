import NewPromoterModal from "./NewPromotersmodal";
import { useState } from "react";
import { Eye, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PromotersView = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const redirectToProfile = (promoterName) => {
    navigate(`/promoter-profile/${encodeURIComponent(promoterName)}`);
  };

  const promoters = [
    {
      name: "Emery Dokidis",
      contact: "+97997074715",
      leads: 12,
      conversionRate: "50%",
      lastFollowUp: "28-4-2024",
      revenue: "$50",
      status: "Active",
      checked: true,
    },
    {
      name: "Kadin Lipshutz",
      contact: "+971501948279",
      leads: 8,
      conversionRate: "30%",
      lastFollowUp: "27-5-2024",
      revenue: "$90",
      status: "Active",
      checked: true,
    },
    {
      name: "Randy Culhane",
      contact: "+971501589878",
      leads: 15,
      conversionRate: "60%",
      lastFollowUp: "29-5-2024",
      revenue: "$1000",
      status: "Inactive",
    },
    {
      name: "Jaxson Vaccaro",
      contact: "+971522063535",
      leads: 10,
      conversionRate: "45%",
      lastFollowUp: "2-6-2024",
      revenue: "$500",
      status: "Completed",
    },
    {
      name: "Jocelyn Levin",
      contact: "+971543153500",
      leads: 6,
      conversionRate: "28%",
      lastFollowUp: "4-6-2024",
      revenue: "$1,500",
      status: "Inactive",
    },
    {
      name: "Maren Septimus",
      contact: "+97155260832",
      leads: 18,
      conversionRate: "65%",
      lastFollowUp: "7-6-2024",
      revenue: "$2,000",
      status: "Completed",
    },
    {
      name: "Haylie Saris",
      contact: "+971503382828",
      leads: 13,
      conversionRate: "58%",
      lastFollowUp: "5-10-2024",
      revenue: "$300",
      status: "Active",
    },
    {
      name: "Randy Herwitz",
      contact: "+97154321522",
      leads: 12,
      conversionRate: "50%",
      lastFollowUp: "10-7-2024",
      revenue: "$800",
      status: "Inactive",
    },
  ];

  const statusClass = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-blue-100 text-blue-600";
      case "Inactive":
        return "bg-orange-100 text-orange-500";
      case "Completed":
        return "bg-green-100 text-green-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">
          Manage and monitor your promoter referral activities
        </h1>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => setIsModalOpen(true)}
        >
          + New Promoter
        </button>

        <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded">
          Ask Past Customers For Referrals
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-sm text-gray-500">Total Customers</p>
          <h2 className="text-xl font-semibold">8</h2>
          <p className="text-xs text-green-500">+12.5% vs last month</p>
        </div>
        <div className="bg-orange-50 rounded-lg p-4">
          <p className="text-sm text-gray-500">New Customers</p>
          <h2 className="text-xl font-semibold">94</h2>
          <p className="text-xs text-green-500">+8.5% vs last month</p>
        </div>
        <div className="bg-pink-50 rounded-lg p-4">
          <p className="text-sm text-gray-500">Average Conversion rate</p>
          <h2 className="text-xl font-semibold">64%</h2>
          <p className="text-xs text-red-500">-3.5% vs last month</p>
        </div>
        <div className="bg-blue-50 rounded-lg p-4">
          <p className="text-sm text-gray-500">Total Revenue Generated</p>
          <h2 className="text-xl font-semibold">$23,900</h2>
          <p className="text-xs text-green-500">+15.5% vs last month</p>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Promoters</h2>
          <div className="flex gap-2 items-center">
            <input
              type="text"
              placeholder="Search"
              className="border rounded px-3 py-1 text-sm"
            />
            <button className="border rounded px-3 py-1 text-sm">Filter</button>
          </div>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b">
              <th className="py-2">
                <input type="checkbox" />
              </th>
              <th>Promoter Name</th>
              <th>Contact No.</th>
              <th>Leads</th>
              <th>Conversion Rate</th>
              <th>Last Follow-Up</th>
              <th>Revenue Generated</th>
              <th>Referrer Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {promoters.map((promoter, idx) => (
              <tr key={idx} className="border-b">
                <td className="py-2">
                  <input type="checkbox" checked={promoter.checked || false} />
                </td>
                <td>{promoter.name}</td>
                <td>{promoter.contact}</td>
                <td>{promoter.leads}</td>
                <td>{promoter.conversionRate}</td>
                <td>{promoter.lastFollowUp}</td>
                <td>{promoter.revenue}</td>
                <td>
                  <span
                    className={`text-xs px-2 py-1 rounded ${statusClass(
                      promoter.status
                    )}`}
                  >
                    {promoter.status}
                  </span>
                </td>
                <td>
                  <div className="flex gap-3 items-center">
                    <span
                      title="View Profile"
                      onClick={() => redirectToProfile(promoter.name)}
                      className="hover:text-blue-600 transition-colors"
                    >
                      <Eye className="w-4 h-4 text-gray-600 cursor-pointer" />
                    </span>
                    <span title="Send follow-up message">
                      <MessageSquare className="w-4 h-4 text-gray-600 cursor-pointer" />
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for New Promoter */}
      <NewPromoterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default PromotersView;
