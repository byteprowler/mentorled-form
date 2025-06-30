import { useFormContext } from 'react-hook-form';
import { motion } from 'framer-motion';
import Button from './Button';

export default function StepThree({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
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
      <h2 className="text-2xl font-bold mb-4 text-violet-400">📝 Your Bio</h2>
      <p className="text-slate-300 mb-6 text-sm">
        Drop a short summary about yourself — dev energy, music taste, anime goals, anything.
      </p>

      <div>
        <label className="block text-slate-400 mb-2 text-sm">Bio</label>
        <motion.textarea
          whileFocus={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
          rows={5}
          placeholder="Tell us about your vibe, your dev style, your favorite anime arc, etc."
          {...register('bio', { required: 'Bio is required' })}
          className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white placeholder-gray-500 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500"
        />
        {errors.bio && (
          <p className="text-red-400 text-sm mt-2">{errors.bio.message as string}</p>
        )}
      </div>

      <div className="flex justify-between mt-8">
        <Button onClick={onBack}>Back</Button>
        <Button onClick={onNext}>Next</Button>
      </div>
    </motion.div>
  );
}
