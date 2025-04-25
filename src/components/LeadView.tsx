import { useNavigate } from "react-router-dom";
import { Bell, Eye, MessageSquare, User } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type LeadType = {
  id: number;
  name: string;
  email: string;
  contact: string;
  coupon: string;
  status: "Pending" | "Completed";
};

const initialLeads: LeadType[] = [
  {
    id: 1,
    name: "Emery Dokidis",
    email: "emerydokidis@gmail.com",
    contact: "+97997074715",
    coupon: "SAVE10NOW",
    status: "Pending",
  },
  {
    id: 2,
    name: "Kadin Lipshutz",
    email: "kadinlipshutz@gmail.com",
    contact: "+971501948279",
    coupon: "WELCOME15",
    status: "Pending",
  },
  {
    id: 3,
    name: "Randy Culhane",
    email: "randyculhane@gmail.com",
    contact: "+971501589878",
    coupon: "EXCLUSIVE20",
    status: "Pending",
  },
  {
    id: 4,
    name: "Jaxson Vaccaro",
    email: "jaxonvaccaro@gmail.com",
    contact: "+971522503635",
    coupon: "GETDEAL25",
    status: "Completed",
  },
  {
    id: 5,
    name: "Jocelyn Levin",
    email: "jocelynlevin@gmail.com",
    contact: "+971554315300",
    coupon: "FIRSTORDER10",
    status: "Pending",
  },
  {
    id: 6,
    name: "Maren Septimus",
    email: "marenseptimus@gmail.com",
    contact: "+97155260832",
    coupon: "SPECIALSAVE15",
    status: "Completed",
  },
  {
    id: 7,
    name: "Haylie Saris",
    email: "hayliesaris@gmail.com",
    contact: "+971503382828",
    coupon: "LIMITED20",
    status: "Completed",
  },
  {
    id: 8,
    name: "Randy Herwitz",
    email: "randyherwitz@gmail.com",
    contact: "+971554231522",
    coupon: "TRYUS10",
    status: "Pending",
  },
];

const LeadsView = () => {
  const navigate = useNavigate();
  const [leads, setLeads] = useState<LeadType[]>(initialLeads);

  useEffect(() => {
    const stored = localStorage.getItem("leads");
    if (stored) {
      setLeads(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("leads", JSON.stringify(leads));
  }, [leads]);

  const handleViewProfile = (leadId: number) => {
    navigate(`/leads/${leadId}`);
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 text-sm text-black-500 cursor-pointer">
          <h1 className="text-2xl font-bold mb-6">
            Manage and Monitor your Leads
          </h1>
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
      {/* Leads Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-xl border border-gray-200 shadow-sm"
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-medium">Leads</h2>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search"
              className="border rounded px-3 py-1.5 text-sm"
            />
            <button className="border rounded px-3 py-1.5 text-sm">
              Filter
            </button>
          </div>
        </div>

        <table className="w-full text-sm">
          <thead className="text-left bg-white text-gray-500">
            <tr className="border-b">
              <th className="px-4 py-3">
                <input type="checkbox" />
              </th>
              <th className="px-4 py-3">Lead Name</th>
              <th className="px-4 py-3">Email ID</th>
              <th className="px-4 py-3">Contact No.</th>
              <th className="px-4 py-3">Coupon Code</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence>
              {leads.map((lead) => (
                <motion.tr
                  key={lead.id}
                  layout
                  exit={{ opacity: 0 }}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-2">
                    <input type="checkbox" />
                  </td>
                  <td className="px-4 py-2">{lead.name}</td>
                  <td className="px-4 py-2">{lead.email}</td>
                  <td className="px-4 py-2">{lead.contact}</td>
                  <td className="px-4 py-2">{lead.coupon}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`text-xs px-3 py-1 rounded-full font-medium ${
                        lead.status === "Completed"
                          ? "bg-green-100 text-green-600"
                          : "bg-orange-100 text-orange-600"
                      }`}
                    >
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex gap-3 items-center text-gray-600">
                      <span
                        title="View Profile"
                        onClick={() => handleViewProfile(lead.id)}
                        className="hover:text-blue-600 transition cursor-pointer"
                      >
                        <Eye className="w-4 h-4" />
                      </span>
                      <span title="Send follow-up message">
                        <MessageSquare className="w-4 h-4 cursor-pointer" />
                      </span>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </motion.div>
    </div>
  );
};

export default LeadsView;
