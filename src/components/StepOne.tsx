import { useFormContext } from 'react-hook-form';
import { motion } from 'framer-motion';
import Button from './Button';

export default function StepOne({ onNext }: { onNext: () => void }) {
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
      <h2 className="text-2xl font-bold mb-4 text-violet-400">🎧 Vibe Check</h2>
      <p className="text-slate-300 mb-6 text-sm">Tell us your music & anime preferences — no skips allowed.</p>

      <div className="mb-4">
        <label className="block text-slate-400 mb-1 text-sm">Favorite Artist</label>
        <motion.input
          whileFocus={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
          {...register('artist', { required: 'Gotta drop your favorite artist 🎤' })}
          placeholder="Juice WRLD, Lil Tecca, Eminem, etc."
          className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white placeholder-gray-500 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500"
        />
        {errors.artist && (
          <p className="text-red-400 text-sm mt-1">{errors.artist.message as string}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-slate-400 mb-1 text-sm">Favorite Anime Character</label>
        <motion.input
          whileFocus={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
          {...register('animeCharacter', { required: 'Anime squad must be repped 🐉' })}
          placeholder="Goku, Itachi, Gojo, Luffy, etc."
          className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white placeholder-gray-500 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500"
        />
        {errors.animeCharacter && (
          <p className="text-red-400 text-sm mt-1">{errors.animeCharacter.message as string}</p>
        )}
      </div>

      <div className="mb-6">
        <label className="block text-slate-400 mb-1 text-sm">Anime You&apos;re Currently Watching</label>
        <motion.input
          whileFocus={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
          {...register('currentAnime', { required: "Don’t leave us hangin’ 👀" })}
          placeholder="Solo Leveling, Demon Slayer, etc."
          className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white placeholder-gray-500 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500"
        />
        {errors.currentAnime && (
          <p className="text-red-400 text-sm mt-1">{errors.currentAnime.message as string}</p>
        )}
      </div>

      <div className="flex justify-end">
        <Button onClick={onNext}>Next</Button>
      </div>
    </motion.div>
  );
}
