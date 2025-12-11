import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { motion } from 'motion/react'

const WhatsAppBtn = () => {
    return (
        <motion.a
            href="https://wa.me/919502908883"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-green-500/30 hover:bg-[#20bd5a] transition-all flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Chat on WhatsApp"
        >
            <WhatsAppIcon sx={{ fontSize: { xs: 28, sm: 32 } }} />
        </motion.a>
    )
}

export default WhatsAppBtn
