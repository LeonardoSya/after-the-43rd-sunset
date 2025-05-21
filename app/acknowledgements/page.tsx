'use client';
import { motion } from 'framer-motion';

const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
};

export default function Acknowledgements() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-black p-8"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      <p className="text-white text-2xl font-semibold">小蛙努力开发中...</p>
    </motion.div>
  );
} 