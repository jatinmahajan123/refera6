import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { LeadType } from "./LeadView";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

const LeadDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [lead, setLead] = useState<LeadType | null>(null);

  useEffect(() => {
    const leads = JSON.parse(localStorage.getItem("leads") || "[]") as LeadType[];
    const found = leads.find((l) => l.id === Number(id));
    if (found) setLead(found);
  }, [id]);

  const handleStatusChange = (newStatus: LeadType["status"]) => {
    const leads = JSON.parse(localStorage.getItem("leads") || "[]") as LeadType[];
    const updated = leads.map((l) =>
      l.id === Number(id) ? { ...l, status: newStatus } : l
    );
    localStorage.setItem("leads", JSON.stringify(updated));
    setLead((prev) => (prev ? { ...prev, status: newStatus } : null));
  };

  if (!lead) return <p className="p-6">Loading...</p>;

  return (
    <motion.div
      className="p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <button className="text-sm text-blue-600 mb-4" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-full bg-gray-200" />
          <div>
            <p className="font-semibold text-lg">{lead.name}</p>
            <p className="text-sm text-gray-600">{lead.email}</p>
            <p className="text-sm text-gray-600">{lead.contact}</p>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1">Change Status</label>
          <select
            value={lead.status}
            onChange={(e) => handleStatusChange(e.target.value as LeadType["status"])}
            className="border px-3 py-2 rounded w-full"
          >
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div className="flex gap-4 mt-4 text-gray-600">
          <MessageSquare className="cursor-pointer" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16v16H4V4z" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

export default LeadDetail;
