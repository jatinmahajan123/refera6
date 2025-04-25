// EmailPhoneSetupPage.tsx
import React, { useState } from 'react';

interface EmailPhoneSettings {
  useSystemEmail: boolean;
  useCustomEmail: boolean;
  useSystemPhone: boolean;
  useCustomPhone: boolean;
}

const EmailPhoneSetupPage: React.FC = () => {
  const [settings, setSettings] = useState<EmailPhoneSettings>({
    useSystemEmail: true,
    useCustomEmail: false,
    useSystemPhone: true,
    useCustomPhone: false
  });
  
  const handleEmailOptionChange = (option: 'system' | 'custom') => {
    setSettings({
      ...settings,
      useSystemEmail: option === 'system',
      useCustomEmail: option === 'custom'
    });
  };
  
  const handlePhoneOptionChange = (option: 'system' | 'custom') => {
    setSettings({
      ...settings,
      useSystemPhone: option === 'system',
      useCustomPhone: option === 'custom'
    });
  };
  
  const handleConnectEmailDomain = () => {
    // Logic to connect email domain
    console.log("Connect email domain clicked");
  };
  
  const handleConnectPhoneNumber = () => {
    // Logic to connect phone number
    console.log("Connect phone number clicked");
  };
  
  return (
    <div className="max-w-3xl">
      {/* Email Settings */}
      <div className="mb-10">
        <h2 className="text-lg font-medium mb-2">Global Email Sending Address</h2>
        <p className="text-gray-500 text-sm mb-4">
          Choose how your outgoing emails (referral links, follow-ups, etc.) are sent from the platform.
        </p>
        
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="radio"
              className="form-radio h-5 w-5 text-blue-600"
              checked={settings.useSystemEmail}
              onChange={() => handleEmailOptionChange('system')}
            />
            <span className="ml-2 flex flex-col">
              <span className="text-gray-800 font-medium">Use System Email</span>
              <span className="text-gray-500 text-sm">
                Emails will be sent using ReferralHub's default system address (e.g., notify@referralhub.app).
              </span>
            </span>
          </label>
        </div>
        
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="radio"
              className="form-radio h-5 w-5 text-blue-600"
              checked={settings.useCustomEmail}
              onChange={() => handleEmailOptionChange('custom')}
            />
            <span className="ml-2 flex flex-col">
              <span className="text-gray-800 font-medium">Connect Your Custom Email Domain</span>
              <span className="text-gray-500 text-sm">
                Improve deliverability and brand recognition by sending from your own domain (e.g., you@yourcompany.com).
              </span>
            </span>
          </label>
        </div>
        
        {settings.useCustomEmail && (
          <div className="ml-7 mt-2">
            <button 
              onClick={handleConnectEmailDomain}
              className="border border-blue-500 text-blue-500 px-4 py-2 rounded text-sm"
            >
              Connect Email Domain
            </button>
          </div>
        )}
      </div>
      
      {/* Horizontal Divider */}
      <div className="border-b border-gray-200 mb-10"></div>
      
      {/* SMS Settings */}
      <div>
        <h2 className="text-lg font-medium mb-2">Global SMS Sending Number</h2>
        <p className="text-gray-500 text-sm mb-4">
          Choose how SMS messages (referral links, updates, rewards) are sent to your customers.
        </p>
        
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="radio"
              className="form-radio h-5 w-5 text-blue-600"
              checked={settings.useSystemPhone}
              onChange={() => handlePhoneOptionChange('system')}
            />
            <span className="ml-2 flex flex-col">
              <span className="text-gray-800 font-medium">Use System Phone Number</span>
              <span className="text-gray-500 text-sm">
                Messages will be sent from a standard number owned by ReferralHub.
              </span>
            </span>
          </label>
        </div>
        
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="radio"
              className="form-radio h-5 w-5 text-blue-600"
              checked={settings.useCustomPhone}
              onChange={() => handlePhoneOptionChange('custom')}
            />
            <span className="ml-2 flex flex-col">
              <span className="text-gray-800 font-medium">Connect Your Own Phone Number</span>
              <span className="text-gray-500 text-sm">
                Use a verified number for better brand trust and consistency.
              </span>
            </span>
          </label>
        </div>
        
        {settings.useCustomPhone && (
          <div className="ml-7 mt-2">
            <button 
              onClick={handleConnectPhoneNumber}
              className="border border-blue-500 text-blue-500 px-4 py-2 rounded text-sm"
            >
              Connect Phone Number
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailPhoneSetupPage;