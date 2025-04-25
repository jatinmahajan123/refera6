import { useRef, useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { X } from 'lucide-react';
import toast from 'react-hot-toast';

const generateReferralCode = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  return Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
};

const NewPromoterModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [activeTab, setActiveTab] = useState<'manual' | 'csv' | 'zapier'>('manual');
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(70);
  const [zapierConnected, setZapierConnected] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [referralCode, setReferralCode] = useState(generateReferralCode());
  const [tags, setTags] = useState("");
  const [isValid, setIsValid] = useState(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setProgress(70); // Simulate upload % (for UI)
    }
  };

  const resetFile = () => {
    setFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  useEffect(() => {
    const emailValid = /\S+@\S+\.\S+/.test(email);
    const phoneValid = /^[0-9]{7,15}$/.test(phone);
    setIsValid(fullName !== "" && emailValid && phoneValid && referralCode !== "");
  }, [fullName, email, phone, referralCode]);

  const handleManualSave = () => {
    if (!isValid) return;
    toast.success("Promoter saved successfully!");
    onClose();
  };

  const handleOtherSave = () => {
    toast.success("Promoter saved successfully!");
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <Dialog.Panel className="bg-white w-[500px] p-6 rounded-lg relative">
        <button onClick={onClose} className="absolute top-4 right-4">
          <X />
        </button>

        <h2 className="text-md font-medium mb-4">Choose How You Want to Add Customers</h2>

        {/* Tabs */}
        <div className="flex gap-3 mb-4 border-b">
          {['manual', 'csv', 'zapier'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`pb-2 px-2 ${
                activeTab === tab ? 'border-b-2 border-blue-500 font-medium text-blue-600' : 'text-gray-500'
              }`}
            >
              {tab === 'manual' && 'Add Manually'}
              {tab === 'csv' && 'Upload CSV File'}
              {tab === 'zapier' && 'Sync with Zapier'}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="min-h-[220px]">
          {activeTab === 'manual' && (
            <div className="space-y-4">
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  className="w-full border px-3 py-2 rounded"
                  placeholder="Enter Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className="w-full border px-3 py-2 rounded"
                  placeholder="Enter Email ID"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  className="w-full border px-3 py-2 rounded"
                  placeholder="Enter Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Referral Code <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2">
                  <input
                    className="w-full border px-3 py-2 rounded"
                    placeholder="Enter Unique Referral Code"
                    value={referralCode}
                    onChange={(e) => setReferralCode(e.target.value)}
                  />
                  <button
                    type="button"
                    className="px-3 py-2 bg-gray-100 border rounded text-sm"
                    onClick={() => setReferralCode(generateReferralCode())}
                  >
                    Regenerate
                  </button>
                </div>
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">Tags (Optional)</label>
                <input
                  className="w-full border px-3 py-2 rounded"
                  placeholder="Add tags separated by commas"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                />
              </div>

              <div className="flex justify-end gap-2 pt-4">
                <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition">
                  Cancel
                </button>
                <button
                  disabled={!isValid}
                  onClick={handleManualSave}
                  className={`px-4 py-2 rounded text-white transition ${
                    isValid
                      ? 'bg-gradient-to-r from-blue-500 to-blue-400 hover:opacity-90'
                      : 'bg-gray-300 cursor-not-allowed'
                  }`}
                >
                  Save
                </button>
              </div>
            </div>
          )}

          {activeTab === 'csv' && (
            <div>
              <label
                className="w-full border-2 border-dashed rounded-lg py-10 text-center cursor-pointer text-gray-600 block mb-3"
                onClick={() => fileInputRef.current?.click()}
              >
                <div>📤 Drag and drop files here</div>
                <div className="mt-2 text-blue-600 underline">or Browse Files</div>
                <input
                  type="file"
                  accept=".csv"
                  ref={fileInputRef}
                  className="hidden"
                  onChange={handleFileUpload}
                />
              </label>

              {file && (
                <div className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded mb-3">
                  <span>{file.name}</span>
                  <span className="text-sm text-blue-600">{progress}%</span>
                  <button onClick={resetFile} className="text-red-500 ml-2">❌</button>
                </div>
              )}

              <div className="flex justify-end gap-2">
                <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded">Cancel</button>
                <button onClick={handleOtherSave} className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded">Save</button>
              </div>
            </div>
          )}

          {activeTab === 'zapier' && (
            <div className="text-center border-2 border-dashed rounded-lg p-6 text-gray-600">
              {!zapierConnected ? (
                <>
                  <p>Automatically sync your customer data from your CRM using Zapier</p>
                  <button
                    onClick={() => setZapierConnected(true)}
                    className="mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded"
                  >
                    Connect with Zapier
                  </button>
                </>
              ) : (
                <>
                  <p className="text-green-600 font-medium">✅ Connected successfully!</p>
                  <button
                    onClick={() => setZapierConnected(false)}
                    className="mt-4 px-4 py-2 border border-red-500 text-red-500 rounded"
                  >
                    Disconnect
                  </button>
                </>
              )}
              <div className="flex justify-end gap-2 pt-4">
                <button onClick={onClose} className="px-4 py-2 bg-gray-200 rounded">Cancel</button>
                <button onClick={handleOtherSave} className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded">Save</button>
              </div>
            </div>
          )}
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

export default NewPromoterModal;
