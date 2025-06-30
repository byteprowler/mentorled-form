import { useState } from "react";
import ProgressBar from "@/components/ProgressBar";
import StepOne from "@/components/StepOne";
import StepTwo from "@/components/StepTwo";
import StepThree from "@/components/StepThree";
import Summary from "@/components/Summary";
import { FormProvider, useForm } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";


export default function Home() {
  const [step, setStep] = useState(1);
  const methods = useForm({ mode: "onBlur" });

  const next = async () => {
    const isValid = await methods.trigger();
    if (isValid) setStep(step + 1);
  };

  const back = () => setStep(step - 1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <StepOne onNext={next} />;
      case 2:
        return <StepTwo onNext={next} onBack={back} />;
      case 3:
        return <StepThree onNext={next} onBack={back} />;
      case 4:
        return <Summary onBack={back} />;
    }
  };

  return (
    <main className="min-h-screen bg-slate-100 p-4 flex items-center justify-center">
      <div className="w-full max-w-2xl rounded-2xl border-2 border-dashed border-black bg-white px-8 py-6 text-black shadow-[4px_4px_0px_black] transition-all duration-300">
        <ProgressBar currentStep={step} />
        <FormProvider {...methods}>
          <AnimatePresence mode="wait">
            <div key={step} className="mb-8">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              >
              {renderStep()}
            </motion.div>
            </div>
          </AnimatePresence>
        </FormProvider>
      </div>
    </main>
  );
}
