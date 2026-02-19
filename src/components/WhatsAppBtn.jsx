import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { motion } from 'motion/react'

const WhatsAppBtn = () => {
    return (
        <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center">

            {/* Animated pulse rings */}
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-30 animate-ping" />
            <span className="absolute inline-flex h-[120%] w-[120%] rounded-full bg-[#25D366] opacity-20 animate-ping"
                style={{ animationDelay: '0.4s' }} />

            {/* Main button */}
            <motion.a
                href="https://wa.me/919502908883"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                    scale: 1,
                    opacity: 1,
                    y: [0, -6, 0],
                }}
                transition={{
                    scale: { type: 'spring', stiffness: 260, damping: 20 },
                    opacity: { duration: 0.3 },
                    y: {
                        delay: 1,
                        duration: 1.8,
                        repeat: Infinity,
                        repeatType: 'loop',
                        ease: 'easeInOut',
                    },
                }}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className="relative bg-[#25D366] text-white p-3 sm:p-4 rounded-full shadow-xl shadow-green-500/40 hover:shadow-green-500/60 hover:bg-[#20bd5a] transition-colors flex items-center justify-center"
                aria-label="Chat on WhatsApp"
            >
                <WhatsAppIcon sx={{ fontSize: { xs: 28, sm: 32 } }} />
            </motion.a>
        </div>
    )
}

export default WhatsAppBtn
