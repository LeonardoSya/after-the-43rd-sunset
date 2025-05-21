'use client';
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// 动画变体定义
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 10 } },
};

const acknowledgementsVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.8, duration: 0.5 } },
};

// 更新的按钮进入动画
const buttonEntryVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: (i:number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: 0.4 + i * 0.15, type: "spring", stiffness: 120, damping: 12 },
  }),
};

const buttonHoverGradient = "linear-gradient(82.3deg, rgba(150, 93, 233, 1) 10.8%, rgba(99, 88, 238, 1) 94.3%)";

export default function Home() {
  return (
    <motion.div
      className="relative flex flex-col items-center justify-between min-h-screen p-8 font-sans text-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background Image */}
      <Image
        src="/images/homepage-bg-night.PNG"
        alt="Homepage background at night"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-[-1]"
      />

      <motion.header className="w-full text-center py-8 z-10" variants={titleVariants}>
        <h1 className="text-3xl font-bold">在第43次日落以后</h1>
      </motion.header>

      <motion.main
        className="flex flex-col items-center gap-6 mt-8 mb-auto z-10"
      >
        {[
          { href: "/page1", text: "开发中..." },
          { href: "/page2", text: "开发中..." },
          { href: "/page3", text: "开发中..." },
        ].map((button, index) => (
          <motion.div 
            key={button.href} 
            variants={buttonEntryVariants} 
            custom={index} 
            initial="hidden" 
            animate="visible"
          >
            <Link href={button.href} passHref>
              <motion.button
                className="group relative overflow-hidden h-12 px-8 rounded-full bg-[#3d3a4e] text-white border-none cursor-pointer w-64 text-lg font-bold focus:outline-none"
                whileTap={{ scale: 0.95 }}
              >
                <div
                  className="absolute top-0 left-0 w-full h-full rounded-full origin-left scale-x-0 group-active:scale-x-100 transition-transform duration-[475ms] ease-in-out"
                  style={{ background: buttonHoverGradient }}
                />
                <span className="relative z-10">{button.text}</span>
              </motion.button>
            </Link>
          </motion.div>
        ))}
      </motion.main>

      <motion.footer
        className="w-full text-center py-4 z-10"
        variants={acknowledgementsVariants}
      >
        <Link href="/acknowledgements" passHref>
          <motion.span
            className="text-sm text-gray-200 hover:underline cursor-pointer"
            whileHover={{ y: -2, color: "#60A5FA", transition: { type: "spring", stiffness: 300 } }}
          >
            特别鸣谢
          </motion.span>
        </Link>
      </motion.footer>
    </motion.div>
  );
}
