"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="w-full h-full pt-1">
      <div className="relative w-full h-1 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 h-full bg-orange-500 rounded-full"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 1.5,
            ease: "linear",
          }}
          style={{ width: "40%" }}
        />
      </div>
    </div>
  );
} 