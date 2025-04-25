import React from "react";
import { Bell, User } from "lucide-react";

const DashboardHeader = () => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-2 text-sm text-black-500 cursor-pointer">
        <h1 className="text-2xl font-bold mb-6">
          Create & Manage Referral Campaigns
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
  );
};

export default DashboardHeader;

