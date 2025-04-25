import React from "react";

const PayoutSettings: React.FC = () => {
  return (
    <div className="bg-white border shadow-sm rounded-lg p-6 space-y-6">
      {/* Toggle Row */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-400 text-sm">Preload Money</p>
          <p className="font-semibold text-base">Use Points to Reward Promoters Instantly</p>
        </div>
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" defaultChecked className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-checked:bg-blue-600 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
        </label>
      </div>

      {/* Points Info */}
      <div className="bg-gray-100 rounded-lg p-4">
        <p className="text-sm text-gray-400">Current Point Balance:</p>
        <p className="text-2xl font-bold text-blue-600">1,250 Points</p>
      </div>

      {/* Input */}
      <div>
        <label className="text-sm font-medium">Enter Amount</label>
        <input type="number" className="w-full mt-1 p-2 border rounded-md focus:outline-blue-500" placeholder="Enter amount..." />
        <p className="text-xs text-gray-500 mt-1">You'll receive 10 points per $1</p>
      </div>

      {/* Payment Methods */}
      <div>
        <p className="text-sm font-medium mb-2">Payment Methods</p>
        <div className="flex flex-wrap gap-4 text-sm text-gray-700">
          <label className="flex items-center gap-2">
            <input type="radio" name="payment" defaultChecked />
            Credit/Debit/ATM Card
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="payment" />
            Paypal account
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="payment" />
            Bank Transfer
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="payment" />
            UPI
          </label>
        </div>
      </div>

      <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm font-medium">
        Buy Points
      </button>
    </div>
  );
};

export default PayoutSettings;
