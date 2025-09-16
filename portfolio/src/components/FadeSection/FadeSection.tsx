// src/components/FadeSection.tsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Props {
  children: React.ReactNode;
  id?: string;
}

export default function FadeSection({ children, id }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.5, // 50% terlihat
    margin: "0px",
    once: false,
  });

  return (
    <section id={id} ref={ref} className="relative min-h-screen flex items-center justify-center">
      <motion.div animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }} transition={{ duration: 0.8, ease: "easeInOut" }} className="w-full max-w-5xl px-6 text-center">
        {children}
      </motion.div>
    </section>
  );
}
