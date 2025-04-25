// components/LeadsLandingPagePreview.tsx
const LeadsLandingPagePreview = () => {
  return (
    <div className="rounded-lg p-6 shadow border relative bg-gradient-to-br from-green-50 via-white to-pink-50 overflow-hidden">
      <div className="text-center max-w-md mx-auto">
        <h2 className="text-xl font-semibold mb-1">You’ve been invited by <strong>[Promoter Name]</strong>! 🎉</h2>
        <p className="text-gray-600 mb-3 text-sm">
          SnackNation delivers hand-picked, chef-curated snacks — from spicy masala nuts to sweet jaggery treats —
          delivered fresh to your door in under 45 minutes.
        </p>
        <button className="bg-gradient-to-r from-blue-500 to-purple-400 text-white px-4 py-2 rounded mb-4">
          Get 20% off on your first order
        </button>
        <div className="bg-white rounded shadow p-4">
          <input type="text" placeholder="Full Name" className="w-full border px-3 py-2 mb-2 rounded" />
          <input type="email" placeholder="Email Address" className="w-full border px-3 py-2 mb-4 rounded" />
          <button className="bg-blue-600 text-white w-full py-2 rounded">Claim Your Reward</button>
        </div>
        <ul className="text-left mt-4 text-sm text-gray-600 space-y-1">
          <li>✅ Fill in the details.</li>
          <li>✅ Just click the Claim Your Reward button above.</li>
          <li>✅ Once done, you’ll receive your reward automatically!</li>
        </ul>
      </div>
    </div>
  );
};

export default LeadsLandingPagePreview;
