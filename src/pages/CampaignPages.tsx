

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, User, X } from 'lucide-react';
import LeadsSettings from '@/components/LeadsSettings';
import NewCampaignForm from '@/components/NewCampaignForm';

interface Campaign {
  campaign_name: string;
  campaign_description: string;
  campaign_start_date: string;
  campaign_end_date?: string;
  promoter_reward_points?: string;
  lead_reward_discount?: string;
  target_promoter_type?: string;
  status?: string;
}

const CampaignPage = () => {
  const [activeTab, setActiveTab] = useState<'past' | 'new' | 'leads'>('past');
  const [showModal, setShowModal] = useState(false);
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [formData, setFormData] = useState<Campaign>({
    campaign_name: '',
    campaign_description: '',
    campaign_start_date: '',
    campaign_end_date: '',
    promoter_reward_points: '',
    lead_reward_discount: '',
    target_promoter_type: '',
  });

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.campaign_name || !formData.campaign_description || !formData.campaign_start_date) {
      alert('Please fill in all required fields');
      return;
    }

    // Simulate API call
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const data = await response.json();
      setCampaigns((prev) => [
        ...prev,
        {
          ...formData,
          status: 'Active',
        },
      ]);
      setFormData({
        campaign_name: '',
        campaign_description: '',
        campaign_start_date: '',
        campaign_end_date: '',
        promoter_reward_points: '',
        lead_reward_discount: '',
        target_promoter_type: '',
      });
      setShowModal(false);
    }
  };

  const renderCard = (campaign: Campaign, index: number) => (
    <div
      key={index}
      className="border p-4 rounded-lg bg-white shadow-sm cursor-pointer hover:shadow-md transition"
    >
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-semibold">{campaign.campaign_name}</h2>
        <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded">
          {campaign.status || 'Active'}
        </span>
      </div>
      <p className="text-sm text-gray-500 mb-2">
        {campaign.campaign_start_date}
        {campaign.campaign_end_date && ` - ${campaign.campaign_end_date}`}
      </p>
      <div className="flex justify-between text-sm font-medium mb-2">
        <p>Referrals: --</p>
        <p>Conversion: --</p>
        <p>ROI: -- </p>
      </div>
      <div className="bg-blue-50 text-blue-700 p-2 rounded text-sm">
        {campaign.campaign_description}
      </div>
    </div>
  );

  return (
    <div className="p-6 w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold mb-6">Create & Manage Referral Campaigns</h1>
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

      {/* Tabs */}
      <div className="mb-4 flex items-center gap-4">
        {['past', 'new', 'leads'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`px-4 py-2 rounded font-medium ${
              activeTab === tab ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {tab === 'past' ? 'Past Promoters' : tab === 'new' ? 'New Promoters' : 'New Leads'}
          </button>
        ))}
      </div>

      {/* Create Campaign Button */}
      {activeTab === 'past' && (
        <div className="mb-6">
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            + Create New Campaign
          </button>
        </div>
      )}

      {/* Campaign Cards */}
      {activeTab === 'past' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6"
        onClick={() => navigate('/campaign/summer-referral')}>
          
          {renderCard(
            {
              campaign_name: 'Summer Referral Program',
              campaign_description:
                '📢 Increase reward by 10% to boost conversion rates during peak season',
              campaign_start_date: '5/31/2024',
              campaign_end_date: '8/30/2024',
              status: 'Active',
            },
            -1
          )}
          
          
          {renderCard(
            {
              campaign_name: 'Early Bird Special',
              campaign_description:
                '🕒 Extend your campaign! Strong engagement suggests higher conversions with more time.',
              campaign_start_date: '8/20/2024',
              campaign_end_date: '9/19/2024',
              status: 'Inactive',
            },
            -2
          )}
          {campaigns.map(renderCard)}
        </div>
      )}
      {activeTab === 'new' && <NewCampaignForm />}
      {activeTab === 'leads' && <LeadsSettings />}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-[500px] relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              <X />
            </button>
            <h2 className="text-lg font-semibold mb-4">Create New Campaign</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Campaign Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.campaign_name}
                  onChange={(e) => setFormData({ ...formData, campaign_name: e.target.value })}
                  required
                  className="w-full mt-1 px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Campaign Description<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.campaign_description}
                  onChange={(e) => setFormData({ ...formData, campaign_description: e.target.value })}
                  required
                  className="w-full mt-1 px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Campaign Start Date<span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  value={formData.campaign_start_date}
                  onChange={(e) => setFormData({ ...formData, campaign_start_date: e.target.value })}
                  required
                  className="w-full mt-1 px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Campaign End Date
                </label>
                <input
                  type="date"
                  value={formData.campaign_end_date}
                  onChange={(e) => setFormData({ ...formData, campaign_end_date: e.target.value })}
                  className="w-full mt-1 px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Promoter Reward Points
                </label>
                <input
                  type="number"
                  value={formData.promoter_reward_points}
                  onChange={(e) =>
                    setFormData({ ...formData, promoter_reward_points: e.target.value })
                  }
                  className="w-full mt-1 px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Lead Reward Discount
                </label>
                <input
                  type="text"
                  value={formData.lead_reward_discount}
                  onChange={(e) =>
                    setFormData({ ...formData, lead_reward_discount: e.target.value })
                  }
                  className="w-full mt-1 px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Target Promoter Type
                </label>
                <input
                  type="text"
                  value={formData.target_promoter_type}
                  onChange={(e) =>
                    setFormData({ ...formData, target_promoter_type: e.target.value })
                  }
                  className="w-full mt-1 px-3 py-2 border rounded"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded mt-4 float-right"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CampaignPage;
