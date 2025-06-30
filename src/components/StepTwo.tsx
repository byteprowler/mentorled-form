import { useFormContext } from 'react-hook-form';
import Button from './Button';
import { motion } from 'framer-motion';

export default function StepTwo({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-[#0f0f0f] p-6 rounded-2xl shadow-[0_0_0_2px_#7c3aed] border border-indigo-500/20"
    >
      <h2 className="text-2xl font-bold mb-4 text-violet-400">⚙️ Account Setup</h2>
      <p className="text-slate-300 mb-6 text-sm">
        Let&apos;s get your credentials set — secure your spot in the multiverse.
      </p>

      <div className="mb-4">
        <label className="block text-slate-400 mb-1 text-sm">Email Address</label>
        <motion.input
          whileFocus={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
          {...register('email', { required: 'Email is required' })}
          placeholder="you@example.com"
          className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white placeholder-gray-500 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500"
        />
        {errors.email && (
          <p className="text-red-400 text-sm mt-1">{errors.email.message as string}</p>
        )}
      </div>

      <div className="mb-6">
        <label className="block text-slate-400 mb-1 text-sm">Create Password</label>
        <motion.input
          whileFocus={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
          {...register('password', { required: 'Password is required' })}
          placeholder="Choose something strong"
          type="password"
          className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white placeholder-gray-500 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500"
        />
        {errors.password && (
          <p className="text-red-400 text-sm mt-1">{errors.password.message as string}</p>
        )}
      </div>

      <div className="flex justify-between mt-4">
        <Button onClick={onBack}>Back</Button>
        <Button onClick={onNext}>Next</Button>
      </div>
    </motion.div>
  );
}
