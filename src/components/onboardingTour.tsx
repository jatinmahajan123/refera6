import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type Props = {
  targetRef: HTMLElement | null;
  step: number;
  totalSteps: number;
  onNext: () => void;
  onSkip: () => void;
};

const messages = [
  "Hey there! I’m your AI agent. This is your go-to space for help and campaign generation!",
  "Welcome to your Dashboard. See performance insights here!",
  "Check your active campaigns and their results here.",
  "View and manage your promoters here.",
  "Explore all your leads and conversions here.",
];

const OnboardingTour = ({ targetRef, step, totalSteps, onNext, onSkip }: Props) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (targetRef) {
      const rect = targetRef.getBoundingClientRect();
      setPosition({
        top: rect.top + window.scrollY + 40,
        left: rect.left + rect.width + 10,
      });
    }
  }, [targetRef]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="absolute z-50 bg-white border shadow-lg rounded-md w-[300px] p-4"
      style={{ position: 'absolute', top: position.top, left: position.left }}
    >
      <div className="font-semibold text-sm mb-2">AI Agent</div>
      <div className="text-gray-700 text-sm bg-gradient-to-r from-blue-50 to-purple-50 p-3 rounded mb-3">
        {messages[step]}
      </div>
      <div className="flex justify-between text-sm">
        <button onClick={onSkip} className="text-gray-500 underline">Skip</button>
        <button
          onClick={onNext}
          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
        >
          Next ({step + 1}/{totalSteps})
        </button>
      </div>
    </motion.div>
  );
};

export default OnboardingTour;
