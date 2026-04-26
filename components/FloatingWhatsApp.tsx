'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      href="https://wa.me/5532999513176"
      target="_blank"
      rel="noreferrer"
      aria-label="Abrir WhatsApp"
      className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-3 rounded-full bg-success-500 px-5 py-4 text-sm font-semibold text-white shadow-2xl shadow-success-500/30 transition hover:bg-emerald-600 sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="h-5 w-5" />
      Fale conosco
    </motion.a>
  );
}
