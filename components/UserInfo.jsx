"use client";

import { useSession } from "next-auth/react";
import { motion } from "framer-motion";

export default function UserInfo() {
  const { data: session } = useSession();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      className="text-white font-medium">
      Te damos la bienvenida a StockMovil <span className="font-bold">{session?.user?.email}</span>
    </motion.div>
  );
}
