'use client';
import { motion } from 'framer-motion';

export const Reveal = ({ children, delay = 0, y = 30, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export const Stagger = ({ children, className = '', delay = 0.08 }) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: '-60px' }}
    variants={{ hidden: {}, show: { transition: { staggerChildren: delay } } }}
    className={className}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, className = '', y = 30 }) => (
  <motion.div
    variants={{ hidden: { opacity: 0, y }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] } } }}
    className={className}
  >
    {children}
  </motion.div>
);

export const FloatingRing = ({ className = '', duration = 40, size = 200, reverse = false }) => (
  <motion.div
    aria-hidden
    animate={{ rotate: reverse ? -360 : 360 }}
    transition={{ repeat: Infinity, duration, ease: 'linear' }}
    style={{ width: size, height: size }}
    className={`rounded-full border border-primary/20 pointer-events-none ${className}`}
  />
);

export const FloatingBadge = ({ children, className = '' }) => (
  <motion.div
    animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
    transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
    className={className}
  >
    {children}
  </motion.div>
);
