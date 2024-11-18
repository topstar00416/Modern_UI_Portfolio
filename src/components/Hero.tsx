import { motion } from 'framer-motion';
import { Code2, Sparkles, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-24 px-6 rounded-3xl shadow-2xl"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=2070')] opacity-10 bg-cover bg-center" />
      
      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <Sparkles className="w-8 h-8 text-purple-400" />
          <span className="px-4 py-1.5 bg-white/10 rounded-full text-sm font-medium backdrop-blur-sm">
            Senior Frontend Engineer
          </span>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-6xl font-bold text-center mb-6"
        >
          Hi, I'm
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> TopStar</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-center text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Building exceptional digital experiences with modern technologies and pixel-perfect attention to detail.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-white text-purple-900 rounded-lg font-medium hover:bg-purple-50 transition-colors flex items-center gap-2"
          >
            <Code2 className="w-5 h-5" />
            View Projects
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-purple-700/30 text-white rounded-lg font-medium hover:bg-purple-700/40 transition-colors backdrop-blur-sm flex items-center gap-2"
          >
            <Zap className="w-5 h-5" />
            Contact Me
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}