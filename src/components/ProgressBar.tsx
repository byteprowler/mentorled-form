import React from "react";
import { motion } from "framer-motion";
import { FaUser, FaCircleInfo, FaBiohazard } from "react-icons/fa6";
import { GiSummits } from "react-icons/gi";

interface Props {
  currentStep: number;
}

const steps = ["Info", "Account", "Details", "Summary"];
const icons = [<FaCircleInfo key="Info" />, <FaUser key="Account" />, <FaBiohazard key="Details" />, <GiSummits key="Summary" />]

export default function ProgressBar({ currentStep }: Props) {
  return (
    <div className="relative flex justify-between items-center mb-8">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`relative z-10 flex flex-col items-center text-sm font-medium mb-2 ${
            currentStep === index + 1 ? "text-indigo-600" : "text-slate-400"
          }`}
          style={{ width: `${100 / steps.length}%` }}
        >
          <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
            {icons[index]}
          </div>
          <span>{step}</span>
        </div>
      ))}
      <motion.div
        className="absolute bottom-0 h-1 bg-gradient-to-r from-violet-600 mt-1 to-indigo-600 rounded-full"
        layout
        initial={false}
        animate={{
          left: `${(currentStep - 1) * (100 / steps.length)}%`,
          width: `${100 / steps.length}%`,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
    </div>
  );
}
