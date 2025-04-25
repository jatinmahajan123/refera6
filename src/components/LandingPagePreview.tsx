import React from 'react';

const LandingPagePreview: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border p-6">
      <h3 className="text-md font-semibold mb-4">Landing Page Preview</h3>

      {/* Tabs */}
      <div className="flex space-x-6 border-b text-sm font-medium text-gray-500 mb-4">
        <button className="pb-2 border-b-2 border-black text-black">Chat with AI</button>
        <button className="pb-2 hover:text-black">My Leads</button>
        <button className="pb-2 hover:text-black">My Rewards</button>
      </div>

      {/* Main Preview Box */}
      <div className="relative overflow-hidden rounded-xl p-10 text-center bg-gradient-to-r from-[#edf8f4] to-[#fef4f3]">
        {/* Dotted wave background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg
            className="absolute bottom-0 left-0 w-full"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="none"
              stroke="rgba(0,0,0,0.05)"
              strokeDasharray="4"
              strokeWidth="1"
              d="M0,64 C480,192 960,0 1440,128 L1440,320 L0,320 Z"
            />
          </svg>
        </div>

        {/* Avatar left */}
        <img
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="avatar-left"
          className="absolute z-10 w-12 h-12 rounded-full top-1/3 left-4 border-4 border-white shadow-md"
        />

        {/* Avatar right */}
        <img
          src="https://randomuser.me/api/portraits/men/76.jpg"
          alt="avatar-right"
          className="absolute z-10 w-12 h-12 rounded-full top-1/3 right-4 border-4 border-white shadow-md"
        />

        {/* Main Content */}
        <div className="relative z-10">
          <h2 className="text-xl font-semibold mb-2">
            Welcome back! You're promoting: <br />
            <span className="text-gray-900 font-bold">SnackNation Express</span>
          </h2>
          <p className="text-sm text-gray-600 max-w-xl mx-auto mb-6">
            SnackNation delivers hand-picked, chef-curated snacks — from spicy masala nuts to sweet jaggery treats — delivered fresh to your door in under 45 minutes.
          </p>

          {/* Referral banner */}
          <div className="bg-white border border-blue-200 text-blue-700 text-sm py-2 px-4 rounded-lg inline-block font-medium shadow-sm mb-4">
            Every successful referral earns you 200 points
          </div>

          {/* CTA Button */}
          <div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
              Start Promoting & Earning
            </button>
          </div>
        </div>
      </div>

      {/* Edit Button */}
      {/* <div className="mt-6 flex justify-center">
        <button className="bg-blue-100 text-blue-600 px-6 py-2 rounded-md font-medium hover:bg-blue-200 transition">
          Edit
        </button>
      </div> */}
    </div>
  );
};

export default LandingPagePreview;
