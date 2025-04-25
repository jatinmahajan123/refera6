import React from "react";

const AllPayouts: React.FC = () => {
  const payouts = [
    ['#P-1048', 'Emery Dokidis', '500 pts', '28-4-2024', 'Spring Boost', 'Paid'],
    ['#P-1047', 'Kadin Lipshutz', '250 pts', '27-5-2024', 'Summer Referral Program', 'Paid'],
    ['#P-1046', 'Randy Culhane', '300 pts', '29-5-2024', 'Early Bird Special', 'Disputed'],
    ['#P-1045', 'Jaxson Vaccaro', '100 pts', '30-6-2024', 'Early Bird Special', 'Paid'],
    ['#P-1044', 'Jocelyn Levin', '200 pts', '01-7-2024', 'Summer Referral Program', 'Disputed'],
    ['#P-1043', 'Maren Septimus', '300 pts', '03-7-2024', 'Summer Referral Program', 'Paid'],
    ['#P-1042', 'Haylie Saris', '220 pts', '05-7-2024', 'Spring Boost', 'Paid'],
    ['#P-1041', 'Randy Herwitz', '400 pts', '10-7-2024', 'Spring Boost', 'Disputed'],
  ];

  return (
    <div className="bg-white shadow-sm border rounded-lg">
      <table className="min-w-full text-sm text-gray-700">
        <thead className="bg-gray-100 text-xs uppercase text-gray-500 border-b">
          <tr>
            {['Payout ID', 'Promoter Name', 'Points', 'Reward Date', 'Reward Earned For', 'Status', 'Actions'].map((h) => (
              <th key={h} className="px-6 py-4 text-left">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {payouts.map(([id, name, points, date, reason, status], idx) => (
            <tr key={idx} className="border-b hover:bg-gray-50">
              <td className="px-6 py-4">{id}</td>
              <td className="px-6 py-4">{name}</td>
              <td className="px-6 py-4">{points}</td>
              <td className="px-6 py-4">{date}</td>
              <td className="px-6 py-4">{reason}</td>
              <td className="px-6 py-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-600'}`}>
                  {status}
                </span>
              </td>
              <td className="px-6 py-4 text-blue-600 underline cursor-pointer">
                {status === 'Paid' ? 'Request Dispute' : 'Track Dispute'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllPayouts;
