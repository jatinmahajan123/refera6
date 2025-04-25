// SettingsLayout.tsx
import React, { useState } from 'react';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';

interface NavItem {
  icon: string;
  label: string;
  path: string;
}

const SettingsLayout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // User info from context or state management
  const userInfo = {
    name: "Kadin Stanton",
    email: "kadinstanton@gmail.com"
  };
  
 

  const settingsTabs = [
    { id: "user-profile", label: "User Profile", path: "/settings/user-profile" },
    { id: "business-profile", label: "Business Profile", path: "/settings/business-profile" },
    { id: "ai-settings", label: "AI Settings", path: "/settings/ai-settings" },
    { id: "email-phone", label: "Email & Phone Setup", path: "/settings/email-phone" },
    { id: "subscription", label: "Subscription & Usage", path: "/settings/subscription" },
  ];
  
  const activeTab = location.pathname.split('/').pop() || "user-profile";
  
  return (
    <div className="flex h-screen bg-gray-100">
      
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="flex justify-between items-center px-6 py-4 bg-white border-b border-gray-200">
          <h1 className="text-xl font-medium">Settings</h1>
          <div className="flex items-center">
            <button className="mr-4 text-gray-400">
              🔔
            </button>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center mr-2">
                {userInfo.name.charAt(0)}
              </div>
              <div>
                <div className="text-sm font-medium">{userInfo.name}</div>
                <div className="text-xs text-gray-500">{userInfo.email}</div>
              </div>
            </div>
          </div>
        </header>
        
        {/* Tabs */}
        <div className="bg-white border-b border-gray-200">
          <div className="flex">
            {settingsTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => navigate(tab.path)}
                className={`px-4 py-3 text-sm font-medium ${
                  tab.id === activeTab
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Tab Content */}
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SettingsLayout;