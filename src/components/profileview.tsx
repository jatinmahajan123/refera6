// import { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import {
//   Eye,
//   MessageSquare,
//   Phone,
//   Mail,
// } from "lucide-react";
// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

// const promoterData = {
//   name: "Emery Dokidis",
//   status: "Active",
//   email: "emerydokidis@gmail.com",
//   phone: "+979970174715",
//   totalReferrals: 24,
//   conversionRate: "75%",
//   revenueGenerated: "$1250",
//   lastFollowUp: "28-4-2024",
//   location: "San Francisco, CA",
//   memberSince: "February 15, 2024",
//   timeZone: "Pacific Time (PT)",
// };

// const chartData = [
//   { name: "Jan", value: 30 },
//   { name: "Feb", value: 50 },
//   { name: "Mar", value: 40 },
//   { name: "Apr", value: 45 },
//   { name: "May", value: 48 },
//   { name: "Jun", value: 44 },
// ];

// export default function PromoterProfile() {
//   return (
//     <div className="p-6 space-y-6">
//       <Button variant="ghost" className="text-sm text-gray-500">&larr; Back</Button>
//       <div className="flex items-start justify-between gap-6">
//         <div className="flex items-center gap-4">
//           <div className="h-16 w-16 rounded-full bg-muted" />
//           <div>
//             <h2 className="text-xl font-semibold">{promoterData.name} <span className="text-green-600 text-sm">{promoterData.status}</span></h2>
//             <p className="text-sm text-gray-500">{promoterData.email}</p>
//             <p className="text-sm text-gray-500">{promoterData.phone}</p>
//           </div>
//         </div>
//         <div className="flex gap-4">
//           <Mail className="h-5 w-5 text-gray-600 cursor-pointer" />
//           <MessageSquare className="h-5 w-5 text-gray-600 cursor-pointer" />
//           <Phone className="h-5 w-5 text-gray-600 cursor-pointer" />
//         </div>
//       </div>

//       <div className="grid grid-cols-4 gap-4">
//         <Card><CardContent className="p-4"><p className="text-sm text-gray-500">Total Referrals</p><p className="text-lg font-semibold">{promoterData.totalReferrals}</p></CardContent></Card>
//         <Card><CardContent className="p-4"><p className="text-sm text-gray-500">Conversion Rate</p><p className="text-lg font-semibold">{promoterData.conversionRate}</p></CardContent></Card>
//         <Card><CardContent className="p-4"><p className="text-sm text-gray-500">Revenue Generated</p><p className="text-lg font-semibold">{promoterData.revenueGenerated}</p></CardContent></Card>
//         <Card><CardContent className="p-4"><p className="text-sm text-gray-500">Last follow-up</p><p className="text-lg font-semibold">{promoterData.lastFollowUp}</p></CardContent></Card>
//       </div>

//       <Tabs defaultValue="overview" className="space-y-4">
//         <TabsList className="grid grid-cols-5 w-full">
//           <TabsTrigger value="overview">Overview</TabsTrigger>
//           <TabsTrigger value="referrals">Referral History</TabsTrigger>
//           <TabsTrigger value="notes">Interactions & Notes</TabsTrigger>
//           <TabsTrigger value="rewards">Rewards & Incentives</TabsTrigger>
//           <TabsTrigger value="engagement">Engagement Strategies</TabsTrigger>
//         </TabsList>
//       </Tabs>

//       <div className="bg-white rounded-xl shadow p-6 grid grid-cols-2 gap-6">
//         <div>
//           <p className="text-sm font-medium mb-2">Referrals Over Time</p>
//           <div className="w-full h-64">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart data={chartData}>
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip formatter={(value: number) => `${value}%`} />
//                 <Line type="monotone" dataKey="value" stroke="#6366f1" strokeWidth={2} dot={false} />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//         <div className="space-y-2">
//           <p className="text-sm font-medium">Contact Information</p>
//           <p className="text-sm text-gray-500">Member since: {promoterData.memberSince}</p>
//           <p className="text-sm text-gray-500">Location: {promoterData.location}</p>
//           <p className="text-sm text-gray-500">Phone: {promoterData.phone}</p>
//           <p className="text-sm text-gray-500">Email: {promoterData.email}</p>
//           <p className="text-sm text-gray-500">Time zone: {promoterData.timeZone}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Eye,
  MessageSquare,
  Phone,
  Mail,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

// Sample data for all promoters
const promotersData = {
  "Emery Dokidis": {
    name: "Emery Dokidis",
    status: "Active",
    email: "emerydokidis@gmail.com",
    phone: "+979970174715",
    totalReferrals: 24,
    conversionRate: "75%",
    revenueGenerated: "$1250",
    lastFollowUp: "28-4-2024",
    location: "San Francisco, CA",
    memberSince: "February 15, 2024",
    timeZone: "Pacific Time (PT)",
  },
  // Add data for other promoters as needed
};

const chartData = [
  { name: "Jan", value: 30 },
  { name: "Feb", value: 50 },
  { name: "Mar", value: 40 },
  { name: "Apr", value: 45 },
  { name: "May", value: 48 },
  { name: "Jun", value: 44 },
];

export default function PromoterProfile() {
  const { promoterName } = useParams(); // Get the promoter name from URL params
  const navigate = useNavigate();
  const [promoterData, setPromoterData] = useState(null);

  useEffect(() => {
    // If we have promoter name and data for that promoter
    if (promoterName && promotersData[decodeURIComponent(promoterName)]) {
      setPromoterData(promotersData[decodeURIComponent(promoterName)]);
    } else {
      // If no data found, could redirect to a 404 page or back to the list
      console.error("Promoter not found");
      // Optionally redirect: navigate("/promoters");
    }
  }, [promoterName]);

  // If data is still loading or not found
  if (!promoterData) {
    return <div className="p-6">Loading promoter data...</div>;
  }

  return (
    <div className="p-6 space-y-6">
      <Button 
        variant="ghost" 
        className="text-sm text-gray-500"
        onClick={() => navigate("/promoters")} // Go back to promoters list
      >
        &larr; Back
      </Button>
      <div className="flex items-start justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-full bg-muted" />
          <div>
            <h2 className="text-xl font-semibold">{promoterData.name} <span className="text-green-600 text-sm">{promoterData.status}</span></h2>
            <p className="text-sm text-gray-500">{promoterData.email}</p>
            <p className="text-sm text-gray-500">{promoterData.phone}</p>
          </div>
        </div>
        <div className="flex gap-4">
          <Mail className="h-5 w-5 text-gray-600 cursor-pointer" />
          <MessageSquare className="h-5 w-5 text-gray-600 cursor-pointer" />
          <Phone className="h-5 w-5 text-gray-600 cursor-pointer" />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <Card><CardContent className="p-4"><p className="text-sm text-gray-500">Total Referrals</p><p className="text-lg font-semibold">{promoterData.totalReferrals}</p></CardContent></Card>
        <Card><CardContent className="p-4"><p className="text-sm text-gray-500">Conversion Rate</p><p className="text-lg font-semibold">{promoterData.conversionRate}</p></CardContent></Card>
        <Card><CardContent className="p-4"><p className="text-sm text-gray-500">Revenue Generated</p><p className="text-lg font-semibold">{promoterData.revenueGenerated}</p></CardContent></Card>
        <Card><CardContent className="p-4"><p className="text-sm text-gray-500">Last follow-up</p><p className="text-lg font-semibold">{promoterData.lastFollowUp}</p></CardContent></Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid grid-cols-5 w-full">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="referrals">Referral History</TabsTrigger>
          <TabsTrigger value="notes">Interactions & Notes</TabsTrigger>
          <TabsTrigger value="rewards">Rewards & Incentives</TabsTrigger>
          <TabsTrigger value="engagement">Engagement Strategies</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="bg-white rounded-xl shadow p-6 grid grid-cols-2 gap-6">
        <div>
          <p className="text-sm font-medium mb-2">Referrals Over Time</p>
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value: number) => `${value}%`} />
                <Line type="monotone" dataKey="value" stroke="#6366f1" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-sm font-medium">Contact Information</p>
          <p className="text-sm text-gray-500">Member since: {promoterData.memberSince}</p>
          <p className="text-sm text-gray-500">Location: {promoterData.location}</p>
          <p className="text-sm text-gray-500">Phone: {promoterData.phone}</p>
          <p className="text-sm text-gray-500">Email: {promoterData.email}</p>
          <p className="text-sm text-gray-500">Time zone: {promoterData.timeZone}</p>
        </div>
      </div>
    </div>
  );
}