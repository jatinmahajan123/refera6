import { Pencil, Trash2 } from 'lucide-react';

const steps = [
  { type: 'SMS', delay: null },
  { type: 'Wait', delay: '5 days' },
  { type: 'Email', delay: null },
  { type: 'Wait', delay: '2 days' },
  { type: 'SMS', delay: null },
  { type: 'Wait', delay: '3 days' },
  { type: 'SMS', delay: null },
];

const LeadsSettings = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold mb-4">Leads Settings</h2>
      <div className="bg-[#f4f7ff] rounded-xl p-6 border border-[#e0e7ff]">
        <p className="font-semibold mb-6 text-sm text-gray-700">
          Follow-Up Strategy<span className="text-red-500">*</span>
        </p>
        <div className="flex flex-col items-center space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="relative flex items-center space-x-4">
              {/* Line Connector */}
              {index !== 0 && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 h-6 w-px bg-gray-300" />
              )}

              {/* Step Box */}
              <div className="flex items-center justify-between w-[280px] bg-white border border-gray-200 rounded-md px-4 py-2 shadow-sm">
                <div className="flex items-center space-x-2">
                  <div
                    className={`w-5 h-5 rounded flex items-center justify-center text-white text-xs font-semibold ${
                      step.type === 'Wait'
                        ? 'bg-blue-500'
                        : step.type === 'Email'
                        ? 'bg-yellow-500'
                        : 'bg-green-500'
                    }`}
                  >
                    {step.type === 'Wait' ? '⏱️' : step.type === 'Email' ? '✉️' : '📲'}
                  </div>
                  <span className="text-sm font-medium text-gray-800">
                    {step.type} {step.delay ? `- ${step.delay}` : ''}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="text-blue-600 hover:text-blue-800">
                    <Pencil size={16} />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeadsSettings;
