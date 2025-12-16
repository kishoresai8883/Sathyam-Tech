import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import Title from './Title'
import assets from '../assets/assets'
import aboutImg from '../assets/about.webp'
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CodeIcon from '@mui/icons-material/Code';
import CloudIcon from '@mui/icons-material/Cloud';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const About = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const features = [
        { icon: <LightbulbIcon />, text: "Expert IT consulting and strategic planning", color: "text-amber-500", bg: "bg-amber-100 dark:bg-amber-900/20" },
        { icon: <CodeIcon />, text: "Custom software development solutions", color: "text-blue-500", bg: "bg-blue-100 dark:bg-blue-900/20" },
        { icon: <CloudIcon />, text: "Custom Web and App development", color: "text-sky-500", bg: "bg-sky-100 dark:bg-sky-900/20" },
        { icon: <SupportAgentIcon />, text: "24/7 technical support and maintenance", color: "text-green-500", bg: "bg-green-100 dark:bg-green-900/20" },
    ];

    return (
        <section className='relative w-full py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden'>
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-orange-100/40 dark:bg-orange-900/10 rounded-full blur-[100px] opacity-60" />
            <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-blue-100/40 dark:bg-blue-900/10 rounded-full blur-[80px] opacity-60" />

            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className='mb-8 sm:mb-12 text-center'
                >
                    <Title title="About Us" desc='We are a team of passionate web developers and designers dedicated to crafting user-friendly, high-performance websites that help businesses grow' />
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className='grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-24 items-center'
                >
                    {/* Image Section */}
                    <motion.div variants={itemVariants} className='relative group order-2 lg:order-1'>
                        <div className='relative z-10 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-orange-500/20'>
                            <img
                                src={aboutImg}
                                alt="Our Team"
                                className='w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110'
                            />
                            {/* Glassmorphism Overlay */}
                            <div className="absolute inset-x-0 bottom-0 bg-white/10 backdrop-blur-md border-t border-white/20 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                <p className="text-white font-semibold text-lg">Building Digital Excellence</p>
                                <p className="text-white/80 text-sm">Since 2024</p>
                            </div>
                        </div>

                        {/* Geometric Accents */}
                        <div className='absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-tr from-[#e77504] to-[#f0a510] rounded-full -z-10 opacity-20 blur-2xl group-hover:opacity-30 transition-opacity' />
                        <div className='absolute -top-6 -right-6 w-24 h-24 border-2 border-[#e77504] rounded-2xl -z-10 rotate-12 group-hover:rotate-6 transition-transform duration-500' />
                    </motion.div>

                    {/* Content Section */}
                    <motion.div variants={itemVariants} className='flex flex-col order-1 lg:order-2'>
                        <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight text-center sm:text-left'>
                            Our dedicated Team committed to your <span className="bg-gradient-to-r from-[#e77504] to-[#f0a510] bg-clip-text text-transparent">success</span>
                        </h2>

                        <p className='text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-center sm:text-left px-4 sm:px-0'>
                            A passionate team bringing friendly web solutions to businesses—turning your ideas into vibrant online experiences. We blend creativity with technical expertise to deliver results.
                        </p>

                        <div className='grid gap-4 mb-10 px-4 sm:px-0'>
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ x: 5 }}
                                    className='flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm transition-all duration-300'
                                >
                                    <div className={`p-3 rounded-xl ${feature.bg} ${feature.color} flex-shrink-0`}>
                                        {feature.icon}
                                    </div>
                                    <span className='font-medium text-gray-700 dark:text-gray-200 text-sm sm:text-base'>{feature.text}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className='flex justify-center sm:justify-start px-4 sm:px-0'>
                            <Link to='/about' className='relative overflow-hidden group flex items-center gap-3 bg-gradient-to-r from-[#e77504] to-[#f0a510] text-white px-6 sm:px-8 py-3 rounded-md font-semibold shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-300'>
                                <span className='relative z-10'>Know More</span>
                                <motion.img
                                    src={assets.arrow_icon}
                                    alt="arrow"
                                    className='w-4 h-4 brightness-0 invert relative z-10 group-hover:translate-x-1 transition-transform'
                                />
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-md" />
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default About
