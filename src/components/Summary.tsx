import { useFormContext } from 'react-hook-form';
import Button from './Button';
import { motion } from 'framer-motion';

export default function Summary({ onBack }: { onBack: () => void }) {
  const { getValues } = useFormContext();
  const values = getValues();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-[#0f0f0f] p-6 rounded-2xl shadow-[0_0_0_2px_#7c3aed] border border-indigo-500/20"
    >
      <h2 className="text-2xl font-bold mb-4 text-violet-400">🧾 Summary</h2>
      <p className="text-slate-300 mb-6 text-sm">Take a final peek. Everything lookin&apos; sharp?</p>

      <div className="space-y-3 text-white text-sm">
        <p><strong className="text-violet-400">Email:</strong> {values.email}</p>
        <p><strong className="text-violet-400">Favorite Artist:</strong> {values.artist}</p>
        <p><strong className="text-violet-400">Anime Character:</strong> {values.animeCharacter}</p>
        <p><strong className="text-violet-400">Current Anime:</strong> {values.currentAnime}</p>
        <p><strong className="text-violet-400">Bio:</strong> {values.bio}</p>
      </div>

      <div className="flex justify-between mt-8">
        <Button onClick={onBack}>Back</Button>
        <Button
          onClick={() => alert('Form submitted! 🎉')}
        >
          Submit
        </Button>
      </div>
    </motion.div>
  );
}
