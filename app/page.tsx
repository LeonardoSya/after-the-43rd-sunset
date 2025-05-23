"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

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
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
};

const acknowledgementsVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.8, duration: 0.5 } },
};

// 更新的按钮进入动画
const buttonEntryVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.4 + i * 0.15,
      type: "spring",
      stiffness: 120,
      damping: 12,
    },
  }),
};

const buttonHoverGradient =
  "linear-gradient(82.3deg, rgba(150, 93, 233, 1) 10.8%, rgba(99, 88, 238, 1) 94.3%)";

export default function Home() {
  const router = useRouter();
  const [animatingButtonIndex, setAnimatingButtonIndex] = useState<
    number | null
  >(null);

  const handleButtonClick = (href: string, index: number) => {
    if (animatingButtonIndex !== null) return; // Prevent multiple clicks while one is animating

    setAnimatingButtonIndex(index); // Start animation for this button

    setTimeout(() => {
      router.push(href);
      // Optionally reset animation state after navigation or if component unmounts
      // For simplicity, we'll let it reset if the user navigates back.
      // If pages were within the same layout without full reload, explicit reset might be needed.
      setAnimatingButtonIndex(null);
    }, 475); // Wait for animation to finish
  };

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

      <motion.header
        className="w-full text-center py-8 z-10"
        variants={titleVariants}
      >
        <h1 className="text-3xl font-bold">在第43次日落以后</h1>
      </motion.header>

      <motion.main className="flex flex-col items-center gap-6 mt-8 mb-auto z-10">
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
            <motion.button
              className="group relative overflow-hidden h-12 px-8 rounded-full bg-[#3d3a4e] text-white border-none cursor-pointer w-64 text-lg font-bold focus:outline-none"
              whileTap={animatingButtonIndex === null ? { scale: 0.95 } : {}} // Only apply tap scale if not already animating
              onClick={() => handleButtonClick(button.href, index)}
              disabled={animatingButtonIndex !== null} // Disable button while an animation is in progress
            >
              <motion.div
                className="absolute top-0 left-0 w-full h-full rounded-full origin-left"
                style={{ background: buttonHoverGradient }}
                initial={{ scaleX: 0 }}
                animate={{
                  scaleX: animatingButtonIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.475, ease: "easeInOut" }}
              />
              <span className="relative z-10">{button.text}</span>
            </motion.button>
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
            whileHover={{
              y: -2,
              color: "#60A5FA",
              transition: { type: "spring", stiffness: 300 },
            }}
          >
            特别鸣谢
          </motion.span>
        </Link>
      </motion.footer>
    </motion.div>
  );
}
