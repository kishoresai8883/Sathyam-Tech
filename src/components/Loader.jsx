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
                {/* Animated Logo */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                >
                    <img
                        src="/Favicon.webp"
                        alt="Loading..."
                        className="w-40 sm:w-48 relative z-10"
                    />

                    {/* Pulsing rings around logo */}
                    <motion.div
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.5, 0, 0.5]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute inset-0 rounded-full bg-orange-500/30 blur-xl"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.3, 0, 0.3]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5
                        }}
                        className="absolute inset-0 rounded-full bg-orange-400/20 blur-2xl"
                    />
                </motion.div>

                {/* Modern Spinner */}
                <div className="relative w-16 h-16">
                    {/* Rotating gradient ring */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 bg-clip-border"
                        style={{
                            background: 'conic-gradient(from 0deg, #f97316, #ea580c, #c2410c, transparent)',
                            WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 4px), white calc(100% - 3px))',
                            mask: 'radial-gradient(farthest-side, transparent calc(100% - 4px), white calc(100% - 3px))'
                        }}
                    />

                    {/* Center dot */}
                    <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute inset-0 m-auto w-3 h-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600"
                    />
                </div>

                {/* Loading text */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col items-center gap-2"
                >
                    <p className="text-gray-700 dark:text-gray-300 font-medium text-lg">
                        Loading
                        <motion.span
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            ...
                        </motion.span>
                    </p>

                    {/* Progress bar */}
                    <div className="w-48 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="h-full w-1/2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"
                        />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Loader
