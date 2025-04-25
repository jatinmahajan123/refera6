// components/PayoutLayout.tsx
import { Bell, User } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

export default function PayoutLayout() {
  return (
    <>
      {" "}
      <div className="flex items-center justify-between mb-6 mt-6">
        <div className="flex items-center gap-2 text-sm text-black-500 cursor-pointer ">
          <h1 className="text-2xl font-bold mb-6 mt-2">
            Manage and Monitor your Payouts
          </h1>
        </div>
        <div className="flex items-center gap-4 mr-8">
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
      <div className="payouts-layout">
        <div className="tabs bg-white px-6 pt-4">
          <div className="flex space-x-4 border-b border-gray-200">
            <NavLink
              to="/payouts/all"
              className={({ isActive }) =>
                `pb-2 text-sm font-medium ${
                  isActive
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500"
                }`
              }
            >
              All Payouts
            </NavLink>
            <NavLink
              to="/payouts/disputes"
              className={({ isActive }) =>
                `pb-2 text-sm font-medium ${
                  isActive
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500"
                }`
              }
            >
              Disputes
            </NavLink>
            <NavLink
              to="/payouts/settings"
              className={({ isActive }) =>
                `pb-2 text-sm font-medium ${
                  isActive
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500"
                }`
              }
            >
              Payout Settings
            </NavLink>
          </div>
        </div>

        <div className="outlet-container p-6">
          <Outlet />
        </div>
      </div>
    </>
  );
}
