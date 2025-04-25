// components/OnboardingPopup.tsx
import { motion } from "framer-motion";

interface Props {
  step: number;
  next: () => void;
  skip: () => void;
}

const content = [
  {
    title: "AI Agent",
    text: "Hey there! I’m (Bot Name), your AI agent. This is where I live — your go-to space to ask anything, generate campaigns, or get help filling out forms. I’m always just a click away!",
  },
  {
    title: "Dashboard",
    text: "Here’s your dashboard — track performance, conversions, and monitor engagement metrics in real-time.",
  },
  {
    title: "Campaign",
    text: "Launch and manage referral campaigns with ease. This section lets you create powerful, data-driven campaigns.",
  },
  {
    title: "Promoters",
    text: "View, manage, and reward your promoters. This is the heartbeat of your referral engine.",
  },
  {
    title: "Leads",
    text: "Track potential customers referred by your promoters and monitor their progress.",
  },
];

const OnboardingPopup = ({ step, next, skip }: Props) => {
  if (step >= content.length) return null;

  const { title, text } = content[step];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="absolute top-20 left-64 bg-white border rounded-lg shadow-lg w-96 p-4 z-50"
    >
      <h3 className="text-sm font-semibold mb-2">{title}</h3>
      <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded p-3 text-sm mb-4">
        {text}
      </div>
      <div className="flex justify-between text-sm">
        <button onClick={skip} className="text-gray-500 hover:underline">
          Skip
        </button>
        <button
          onClick={next}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
        >
          Next ({step + 1}/{content.length})
        </button>
      </div>
    </motion.div>
  );
};

export default OnboardingPopup;
