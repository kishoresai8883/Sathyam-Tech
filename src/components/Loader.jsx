import { motion } from 'motion/react'

const Loader = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-white via-orange-50 to-orange-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800"
        >
            <div className="relative flex flex-col items-center gap-8">
                {/* Logo Container with Circulating Line */}
                <div className="relative flex items-center justify-center w-[140px] h-[140px] sm:w-[180px] sm:h-[180px]">
                    {/* Rotating Broken Line with 2 Segments */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute inset-0"
                    >
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                            <circle
                                cx="50"
                                cy="50"
                                r="48"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeDasharray="75 75"
                                className="text-orange-500 dark:text-orange-400"
                                strokeLinecap="round"
                            />
                        </svg>
                    </motion.div>


                    {/* Favicon */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative z-10 flex items-center justify-center"
                    >
                        <img
                            src="/Favicon.webp"
                            alt="Loading..."
                            className="w-16 sm:w-20 object-contain drop-shadow-lg"
                        />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default Loader
