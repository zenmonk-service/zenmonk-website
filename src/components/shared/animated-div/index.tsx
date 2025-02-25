'use client';

import { motion } from "framer-motion";


const AnimatedDiv = ({ children, delay = 0.2, duration = 0.8 }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
            duration,
            ease: [0.33, 1, 0.68, 1], // Smooth cubic bezier for a premium feel
            delay,
        }}
        viewport={{ once: true , amount: 0.1}}
    >
        {children}
    </motion.div>
);


export default AnimatedDiv;
