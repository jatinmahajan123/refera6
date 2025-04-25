import { X } from 'lucide-react';

const SlideOver = ({ open, onClose, children }: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  return (
    <div className={`fixed inset-0 z-50 transition-all ${open ? "visible" : "invisible"}`}>
      <div
        className={`absolute top-0 right-0 h-full w-full max-w-4xl bg-white shadow-lg transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={onClose}>
            <X className="text-gray-600 hover:text-black" />
          </button>
        </div>
        <div className="px-6 pb-6 overflow-y-auto h-[calc(100vh-64px)]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SlideOver;
