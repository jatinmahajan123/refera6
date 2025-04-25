import { useState } from 'react';
import { Plus, Trash2, Pencil } from 'lucide-react';
import LandingPagePreview from './LandingPagePreview';
import LeadsLandingPagePreview from './LeadsLandingPagePreview';


const NewCampaignForm = () => {
  const [activeTab, setActiveTab] = useState<'promoter' | 'leads'>('promoter');

  const [campaignName, setCampaignName] = useState('');
  const [rewardType, setRewardType] = useState('Points');
  const [rewardValue, setRewardValue] = useState('200');
  const [message, setMessage] = useState(
    'Hey! Share this with your friends and get $20 for each successful signup!'
  );
  const [followUpSteps, setFollowUpSteps] = useState([
    { id: 1, type: 'SMS', delay: 'Wait 1 day' },
    { id: 2, type: 'Email', delay: '' },
    { id: 3, type: 'Wait', delay: '2 days' },
    { id: 4, type: 'Email', delay: '' },
    { id: 5, type: 'Wait', delay: '3 days' },
    { id: 6, type: 'SMS', delay: '' },
  ]);

  return (
    <div className="space-y-6">
      {/* Tab Header */}
      <div className="flex space-x-4 border-b pb-2">
        <button
          onClick={() => setActiveTab('promoter')}
          className={`text-sm px-3 py-1 border-b-2 ${
            activeTab === 'promoter'
              ? 'border-blue-600 text-blue-600 font-medium'
              : 'border-transparent text-gray-500'
          }`}
        >
          Promoter Settings
        </button>
        <button
          onClick={() => setActiveTab('leads')}
          className={`text-sm px-3 py-1 border-b-2 ${
            activeTab === 'leads'
              ? 'border-blue-600 text-blue-600 font-medium'
              : 'border-transparent text-gray-500'
          }`}
        >
          Leads Settings
        </button>
      </div>

      {/* Campaign Name */}
      <div>
        <label className="block font-medium mb-1">Campaign Name</label>
        <input
          type="text"
          value={campaignName}
          onChange={(e) => setCampaignName(e.target.value)}
          placeholder="Summer Referral Special"
          className="w-full border px-3 py-2 rounded text-sm"
        />
      </div>

      {/* Reward Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-medium mb-1">Reward Type</label>
          <select
            className="w-full border px-3 py-2 rounded text-sm"
            value={rewardType}
            onChange={(e) => setRewardType(e.target.value)}
          >
            <option value="Points">Points</option>
            <option value="Cash">$</option>
            <option value="Discount">Discount</option>
          </select>
          {activeTab === 'promoter' && (
            <p className="text-xs text-blue-500 mt-1">Bill is associated to this reward</p>
          )}
        </div>
        <div>
          <label className="block font-medium mb-1">Reward Value</label>
          <input
            type="text"
            value={rewardValue}
            onChange={(e) => setRewardValue(e.target.value)}
            className="w-full border px-3 py-2 rounded text-sm"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block font-medium mb-1">
          {activeTab === 'promoter' ? 'Promoter Message' : 'Referred Message'}
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          className="w-full border px-3 py-2 rounded text-sm"
        />
      </div>

      {/* Lead Form Fields (Only for Leads Tab) */}
      {activeTab === 'leads' && (
        <div>
          <label className="block font-medium mb-1">Form Fields</label>
          <div className="flex flex-wrap gap-4">
            {[
              'Full Name',
              'Email Address',
              'Phone Number',
              'Agree to Terms & Conditions & Opt-in',
            ].map((label, idx) => (
              <label key={idx} className="flex items-center text-sm space-x-2">
                <input type="checkbox" className="form-checkbox" defaultChecked />
                <span>{label}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Follow-up Strategy */}
      <div>
        <label className="block font-medium mb-2">Follow-up Strategy</label>
        <div className="space-y-3 bg-gray-50 p-4 rounded border">
          {followUpSteps.map((step) => (
            <div key={step.id} className="flex items-center gap-2">
              <input
                type="text"
                value={step.type}
                className="border px-2 py-1 rounded w-24 text-sm"
                disabled
              />
              {step.delay && (
                <input
                  type="text"
                  value={step.delay}
                  className="border px-2 py-1 rounded w-28 text-sm"
                  disabled
                />
              )}
              <button className="text-red-500 hover:text-red-700">
                <Trash2 size={16} />
              </button>
              <button className="text-blue-500 hover:text-blue-700">
                <Pencil size={16} />
              </button>
            </div>
          ))}
          <button className="text-sm text-blue-600 flex items-center gap-1 mt-2 hover:underline">
            <Plus size={16} />
            Add Step
          </button>
        </div>
      </div>

      {/* Landing Page Preview */}
      <div>
        <label className="block font-medium mb-2">Landing Page Preview</label>
        {activeTab === 'promoter' ? (
          <LandingPagePreview />
        ) : (
          <LeadsLandingPagePreview />
        )}
      </div>

      {/* Edit Button */}
      <div className="text-center">
        <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">Edit</button>
      </div>
    </div>
  );
};

export default NewCampaignForm;
