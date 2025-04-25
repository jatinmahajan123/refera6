
// SubscriptionUsagePage.tsx
import React, { useState } from 'react';

interface PaymentMethod {
  id: string;
  type: 'card' | 'paypal';
  name: string;
  last4: string;
  expiry?: string;
  primary?: boolean;
  brand?: 'visa' | 'mastercard';
}

interface BillingHistoryItem {
  id: string;
  planName: string;
  amount: number;
  date: string;
  status: 'pending' | 'paid' | 'failed';
}

const SubscriptionUsagePage: React.FC = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<'card' | 'paypal'>('card');
  const [cardName, setCardName] = useState('John Doe');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCVV, setCardCVV] = useState('');
  const [cardNumber, setCardNumber] = useState('1234 5678 9012 3456');
  const [saveCard, setSaveCard] = useState(false);
  
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([
    { 
      id: '1', 
      type: 'card', 
      name: 'Tom McBride', 
      last4: '9856', 
      expiry: '12/29', 
      primary: true,
      brand: 'mastercard'
    },
    { 
      id: '2', 
      type: 'card', 
      name: 'Mildred Wagner', 
      last4: '3890', 
      expiry: '10/27',
      brand: 'visa'
    }
  ]);
  
  const [billingHistory, setBillingHistory] = useState<BillingHistoryItem[]>([
    { id: '1', planName: 'Standard Plan', amount: 25, date: '28/09/2024', status: 'pending' },
    { id: '2', planName: 'Standard Plan', amount: 25, date: '28/09/2024', status: 'failed' },
    { id: '3', planName: 'Standard Plan', amount: 25, date: '28/09/2024', status: 'paid' },
    { id: '4', planName: 'Standard Plan', amount: 25, date: '28/09/2024', status: 'paid' },
    { id: '5', planName: 'Standard Plan', amount: 25, date: '28/08/2024', status: 'paid' }
  ]);
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(billingHistory.length / itemsPerPage);
  
  const handleEditCard = (cardId: string) => {
    console.log("Edit card", cardId);
  };
  
  const handleDeleteCard = (cardId: string) => {
    console.log("Delete card", cardId);
    if (window.confirm("Are you sure you want to delete this payment method?")) {
      setPaymentMethods(prev => prev.filter(method => method.id !== cardId));
    }
  };
  
  const handleUpgradePlan = () => {
    console.log("Upgrade plan clicked");
  };
  
  const handleCancelSubscription = () => {
    console.log("Cancel subscription clicked");
    if (window.confirm("Are you sure you want to cancel your subscription?")) {
      // Cancel subscription logic
    }
  };
  
  const handleSaveChanges = () => {
    console.log("Save payment changes");
    // Save payment changes logic
  };
  
  const handleDownloadInvoice = (itemId: string) => {
    console.log("Download invoice for item", itemId);
    // Download logic
  };
  
  const paginatedBillingHistory = billingHistory.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  
  return (
    <div className="max-w-3xl">
      {/* Current Plan Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
        <h2 className="text-lg font-medium mb-2">Current Plan</h2>
        
        <div className="mb-4">
          <p className="text-sm text-gray-600">Your Current Plan is Basic</p>
          <p className="text-sm text-gray-600">A simple start for everyone</p>
        </div>
        
        <div className="flex mb-2">
          <div className="w-1/2">
            <p className="text-sm text-gray-600">Active until May 09, 2025</p>
            <p className="text-sm text-blue-600">12 days remaining until your plan requires update</p>
          </div>
          <div className="w-1/2">
            <div className="mb-1">
              <span className="text-sm text-gray-600">Days</span>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '40%' }}></div>
              </div>
            </div>
            <p className="text-sm text-gray-600">12 of 30 Days</p>
          </div>
        </div>
        
        <p className="mb-4">
          <span className="text-lg font-medium">$25 Per Month</span>
          <span className="ml-2 text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded">Popular</span>
        </p>
        
        <p className="text-sm text-gray-600 mb-4">Standard plan for small to medium businesses</p>
        
        <div className="flex space-x-4">
          <button 
            onClick={handleUpgradePlan} 
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Upgrade Plan
          </button>
          <button 
            onClick={handleCancelSubscription} 
            className="bg-red-100 text-red-500 px-4 py-2 rounded"
          >
            Cancel Subscription
          </button>
        </div>
      </div>
      
      {/* Payment Methods Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
        <h2 className="text-lg font-medium mb-4">Payment Methods</h2>
        
        <div className="mb-4">
          <div className="flex space-x-4 mb-6">
            <label className="flex items-center">
              <input
                type="radio"
                className="form-radio"
                checked={selectedPaymentMethod === 'card'}
                onChange={() => setSelectedPaymentMethod('card')}
              />
              <span className="ml-2">Credit/Debit/ATM Card</span>
            </label>
            
            <label className="flex items-center">
              <input
                type="radio"
                className="form-radio"
                checked={selectedPaymentMethod === 'paypal'}
                onChange={() => setSelectedPaymentMethod('paypal')}
              />
              <span className="ml-2">Paypal account</span>
            </label>
          </div>
          
          {selectedPaymentMethod === 'card' && (
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Card Number</label>
                <input
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  placeholder="1234 5678 9012 3456"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Name</label>
                  <input
                    type="text"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">CVV</label>
                    <input
                      type="text"
                      value={cardCVV}
                      onChange={(e) => setCardCVV(e.target.value)}
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      placeholder="123"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">MM/YY</label>
                    <input
                      type="text"
                      value={cardExpiry}
                      onChange={(e) => setCardExpiry(e.target.value)}
                      className="w-full border border-gray-300 rounded px-3 py-2"
                      placeholder="01/25"
                    />
                  </div>
                </div>
              </div>
              
              <div className="col-span-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={saveCard}
                    onChange={() => setSaveCard(!saveCard)}
                    className="form-checkbox"
                  />
                  <span className="ml-2 text-sm text-gray-600">Save card for future billing?</span>
                </label>
              </div>
              
              <div className="col-span-2 flex space-x-2">
                <button 
                  onClick={handleSaveChanges}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Save Changes
                </button>
                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
        
        <h3 className="text-md font-medium mb-2">My Cards</h3>
        
        <div className="space-y-4">
          {paymentMethods.map(method => (
            <div key={method.id} className="bg-gray-50 p-4 rounded-lg flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-12 h-8 bg-gray-200 flex items-center justify-center rounded mr-4">
                  {method.brand === 'visa' ? 'VISA' : 'MC'}
                </div>
                <div>
                  <p className="font-medium">{method.name}</p>
                  <p className="text-sm text-gray-600">**** **** **** {method.last4}</p>
                </div>
              </div>
              <div className="flex items-center">
                {method.primary && (
                  <span className="text-sm text-blue-600 mr-4">Primary</span>
                )}
                <span className="text-sm text-gray-600 mr-4">Card expires at {method.expiry}</span>
                <button 
                  onClick={() => handleEditCard(method.id)}
                  className="text-blue-500 bg-blue-100 text-sm px-2 py-1 rounded mr-2"
                >
                  Edit
                </button>
                <button 
                  onClick={() => handleDeleteCard(method.id)}
                  className="text-red-500 bg-red-100 text-sm px-2 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Billing History Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-lg font-medium mb-4">Billing History</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="text-left text-gray-600 text-sm">
                <th className="pb-3">Plan Name</th>
                <th className="pb-3">Amount</th>
                <th className="pb-3">Issued Date</th>
                <th className="pb-3">Status</th>
                <th className="pb-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedBillingHistory.map(item => (
                <tr key={item.id} className="border-t border-gray-100">
                  <td className="py-3">{item.planName}</td>
                  <td className="py-3">${item.amount}</td>
                  <td className="py-3">{item.date}</td>
                  <td className="py-3">
                    <span 
                      className={`px-2 py-1 rounded-full text-xs ${
                        item.status === 'paid' 
                          ? 'bg-green-100 text-green-600' 
                          : item.status === 'pending'
                            ? 'bg-red-100 text-red-600'
                            : 'bg-yellow-100 text-yellow-600'
                      }`}
                    >
                      {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                    </span>
                  </td>
                  <td className="py-3">
                    <button 
                      onClick={() => handleDownloadInvoice(item.id)}
                      className="text-gray-600"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <div className="text-sm text-gray-600">
            Showing 1 to 5 of {billingHistory.length} entries
          </div>
          
          <div className="flex space-x-1">
            <button 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`w-8 h-8 flex items-center justify-center rounded ${
                currentPage === 1 ? 'bg-gray-100 text-gray-400' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              &lt;
            </button>
            
            {[...Array(Math.min(totalPages, 5))].map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx + 1)}
                className={`w-8 h-8 flex items-center justify-center rounded ${
                  currentPage === idx + 1 ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {idx + 1}
              </button>
            ))}
            
            {totalPages > 5 && (
              <>
                <span className="w-8 h-8 flex items-center justify-center">...</span>
                <button
                  onClick={() => setCurrentPage(20)}
                  className="w-8 h-8 flex items-center justify-center rounded bg-gray-100 text-gray-600 hover:bg-gray-200"
                >
                  20
                </button>
              </>
            )}
            
            <button 
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`w-8 h-8 flex items-center justify-center rounded ${
                currentPage === totalPages ? 'bg-gray-100 text-gray-400' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionUsagePage;