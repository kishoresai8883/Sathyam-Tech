import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Title from '../components/Title'
import assets from '../assets/assets'
import aboutImg from '../assets/hero_img1.webp'
import aboutImg1 from '../assets/about1.webp'
import aboutImg2 from '../assets/about3.webp'
import hero from '../assets/about_hero.webp'
import WhyChoose from '../assets/why_choose.webp'
import Approach from '../assets/approach.webp'
import TargetIcon from '@mui/icons-material/GpsFixed';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import DrawIcon from '@mui/icons-material/Draw';
import CodeIcon from '@mui/icons-material/Code';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SpeedIcon from '@mui/icons-material/Speed';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ProgressBar from '../components/Progressbar'

const approaches = [
  {
    icon: TargetIcon,
    title: "Our Mission",
    description: "To empower businesses of all sizes with modern, scalable, and efficient digital solutions that simplify operations, attract customers, and drive measurable growth. We aim to make technology accessible, impactful, and tailored to every client's unique vision."
  },
  {
    icon: VisibilityIcon,
    title: "Our Vision",
    description: "To be recognized as a trusted digital partner that transforms the way businesses connect with their audiences online — through creativity, technology, and innovation. We aspire to build long-term relationships by delivering exceptional results and continuous support.",
  },
];

const steps = [
  {
    number: "1",
    title: "Ideation",
    description: "We work with you from project planning, conducting research and uncovering user pain points all the way to producing a product concept that sacrifies market needs.",
    icon: LightbulbIcon,
  },
  {
    number: "2",
    title: "Wireframing",
    description: "It maps out the user journey and visualizes your end product. It's a vital preparatory blueprint that will define your website's structure, content and functionality.",
    icon: DrawIcon,
  },
  {
    number: "3",
    title: "Development",
    description: "Access your dashboard for a summary of your finances: balances, recent transactions, and insights.",
    icon: CodeIcon,
  },
  {
    number: "4",
    title: "Deploy & Maintain",
    description: "Discover a variety of investment opportunities tailored to your financial goals.",
    icon: RocketLaunchIcon,
  },
];

const team = [
  {
    id: 1,
    image: aboutImg,
    name: "Kishore",
    role: "Founder",
    socials: {
      linkedin: "https://www.linkedin.com/in/kishore-sai",
      instagram: "https://instagram.com/kishoresai_g",
      twitter: "https://twitter.com/Sai207Sai",
    }
  },
  {
    id: 2,
    image: aboutImg,
    name: "Sai",
    role: "Developer",
    socials: {
      linkedin: "https://www.linkedin.com/in/kishore-sai",
      instagram: "https://instagram.com/kishoresai_g",
      twitter: "https://twitter.com/Sai207Sai",
    }
  },
  {
    id: 3,
    image: aboutImg,
    name: "Kishore Sai",
    role: "Manager",
    socials: {
      linkedin: "https://www.linkedin.com/in/kishore-sai",
      instagram: "https://instagram.com/kishoresai_g",
      twitter: "https://twitter.com/Sai207Sai",
    }
  },
];

export const About = () => {
  return (
    <>
      <section
        className="relative h-[300px] md:h-[400px] w-full bg-cover bg-center mt-16 flex items-center"
        style={{ backgroundImage: `url(${hero})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a4d4d]/95 via-[#1a4d4d]/85 to-[#1a4d4d]/75"></div>

        {/* Content */}
        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-light mb-6 text-white">
            About <span className="text-[#e77504] font-light">us</span>
          </h1>

          <nav className="flex items-center gap-3 text-sm tracking-wider">
            <Link
              to="/"
              className="text-white hover:text-primary transition-colors font-semibold"
            >
              HOME
            </Link>
            <span className="text-white">/</span>
            <span className="text-[#e77504] font-semibold">ABOUT US</span>
          </nav>
        </div>
      </section>
      <section className="py-12 md:py-20 px-4 md:px-6 bg-secondary/30 dark:bg-gray-900/30 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - Images */}
            <div className="relative mb-10 lg:mb-0">
              <div className="relative md:ml-12">
                {/* Experience badge */}
                <div className="absolute -top-4 -left-2 md:-top-6 md:-left-6 z-20 bg-gradient-to-br from-[#e77504] to-[#f0a510] rounded-3xl p-4 md:p-6 shadow-xl scale-90 md:scale-100 origin-top-left">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full border-2 border-primary-foreground/50 flex items-center justify-center">
                      <EmojiEventsIcon className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-lg md:text-xl font-bold">12+ projects</p>
                  <p className="text-lg md:text-xl font-bold">completed</p>
                </div>

                {/* Main image */}
                <div className="relative">
                  <img
                    src={aboutImg1}
                    alt="Professional coaching consultation"
                    className="w-full h-full rounded-3xl shadow-2xl"
                  />
                </div>

                {/* Bottom right portrait */}
                <div className="absolute -bottom-6 -right-2 md:-bottom-8 md:-right-8 w-48 md:w-64 h-40 md:h-52 rounded-3xl overflow-hidden shadow-2xl border-4 border-background dark:border-gray-800">
                  <img
                    src={aboutImg2}
                    alt="Business professional"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="lg:pl-8 mt-8 lg:mt-0">
              <p className="text-[#e77504] text-sm font-semibold tracking-wider uppercase mb-4">
                // ABOUT US
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight md:leading-loose text-foreground dark:text-white">
                Empowering Businesses Through{" "}
                <span className="bg-gradient-to-r from-[#e77504] to-[#f0a510] bg-clip-text text-transparent">
                  Digital Solutions
                </span>
              </h1>

              <p className="text-muted-foreground dark:text-gray-300 text-base md:text-lg mb-8 leading-relaxed">
                At <span className="bg-gradient-to-r from-[#e77504] to-[#f0a510] bg-clip-text text-transparent">
                  Sathyam Tech Solutions,
                </span> we transform ideas into powerful digital experiences. We're a modern web development agency that helps local businesses, startups, and eCommerce brands grow through innovative web and mobile solutions.
                With a perfect blend of design, technology, and strategy, our team delivers user-friendly websites, high-performing web apps, and result-driven SEO campaigns that elevate your online presence and help you stand out in the digital crowd.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                    <TrackChangesIcon className="w-4 h-4 text-accent dark:text-white" />
                  </div>
                  <p className="text-foreground dark:text-white font-semibold text-base md:text-lg">
                    Goal Setting And Accountability
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                    <PsychologyIcon className="w-4 h-4 text-accent dark:text-white" />
                  </div>
                  <p className="text-foreground dark:text-white font-semibold text-base md:text-lg">
                    Mindset And Confidence Building
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <Link to="/contact" variant="teal" size="lg" className="inline-flex  items-center justify-center px-8 py-3 gap-2 bg-primary text-white hover:bg-primary-dark rounded-md font-semibold shadow-lg hover:shadow-xl cursor-pointer hover:scale-102 transition-all duration-300">
                  Get In Touch
                  <img src={assets.arrow_icon} className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20 px-4 md:px-6 bg-background dark:bg-black relative">
        <p className="text-[#e77504] text-sm text-center font-semibold tracking-wider uppercase mb-4">
            // OUR APPROACH
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-4 text-foreground dark:text-white">
          We Turn Ideas into Interactive{" "}
          <span className="bg-gradient-to-r from-[#e77504] to-[#f0a510] bg-clip-text text-transparent">
            Experiences.
          </span>
        </h2>
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mt-12">
            {/* Left side - Content */}
            <div className="order-2 lg:order-1">
              <div className="space-y-8">
                {approaches.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-start md:items-center gap-4">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#e77504] to-[#f0a510] text-primary-foreground flex items-center justify-center flex-shrink-0 shadow-lg">
                        <item.icon className="w-6 h-6 md:w-8 md:h-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground dark:text-white">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground dark:text-gray-300 text-sm md:text-base">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    {index < approaches.length - 1 && (
                      <div className="ml-7 md:ml-8 mt-6 mb-2 h-px bg-border dark:bg-gray-700"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Image */}
            <div className="relative order-1 lg:order-2 h-[300px] md:h-auto">
              <img
                src={Approach}
                alt="Team meeting and collaboration"
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20 px-4 md:px-6 bg-background dark:bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[#e77504] text-sm font-semibold tracking-wider uppercase mb-4">
              // HOW IT WORKS
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground dark:text-white">
              Driven by Code, Powered by{" "}
              <span className="bg-gradient-to-r from-[#e77504] to-[#f0a510] bg-clip-text text-transparent">
                Passion.
              </span>
            </h2>
            <p className="mt-4 text-muted-foreground dark:text-gray-300 text-base md:text-lg max-w-3xl mx-auto">
              From idea to execution, we deliver web solutions that inspire trust, boost visibility, and drive results.
            </p>
          </div>

          <div className="relative">
            {/* Curved wave line connecting circles */}
            <svg className="hidden lg:block absolute top-8 md:top-0 left-0 right-0 w-full h-20 z-0 pointer-events-none" viewBox="0 0 100 20" preserveAspectRatio="none">
              <path
                d="M 12.5 10 Q 25 2, 37.5 10 Q 50 18, 62.5 10 Q 75 2, 87.5 10"
                fill="none"
                stroke="#f0a510"
                strokeWidth="0.5"
                strokeDasharray="2 2"
                opacity="0.6"
              />
            </svg>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center bg-white dark:bg-transparent p-6 rounded-xl md:bg-transparent md:p-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-[#e77504] to-[#f0a510] text-primary-foreground flex items-center justify-center text-2xl font-bold mb-6 shadow-lg">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground dark:text-gray-300 text-sm">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20 px-4 md:px-6 bg-secondary/30 dark:bg-gray-900/30 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <p className="text-[#e77504] text-sm text-center font-semibold tracking-wider uppercase mb-4">
            // WHY CHOOSE US ?
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-6 text-foreground dark:text-white">
            Every line of code we write is focused on one goal that is your {" "}
            <span className="bg-gradient-to-r from-[#e77504] to-[#f0a510] bg-clip-text text-transparent">
              Online Success
            </span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-10">
            {/* Left side - Content */}
            <div>
              <div className="mb-8 space-y-6">
                <div className='flex items-start'>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#e77504] to-[#f0a510] text-primary-foreground flex items-center justify-center flex-shrink-0 shadow-lg mt-1">
                    <SpeedIcon className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <div className='ml-4'>
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground dark:text-white">
                      Modern Development Approach
                    </h3>
                    <p className="text-muted-foreground dark:text-gray-300 mb-2 text-sm md:text-base">
                      We build responsive, fast, and secure digital products using the latest technologies.
                    </p>
                  </div>
                </div>
                <div className='flex items-start'>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#e77504] to-[#f0a510] text-primary-foreground flex items-center justify-center flex-shrink-0 shadow-lg mt-1">
                    <TrendingUpIcon className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <div className='ml-4'>
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground dark:text-white">
                      Growth-Oriented Strategies
                    </h3>
                    <p className="text-muted-foreground dark:text-gray-300 mb-2 text-sm md:text-base">
                      Every solution we create is focused on your business growth and customer engagement.
                    </p>
                  </div>
                </div>
                <div className='flex items-start'>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#e77504] to-[#f0a510] text-primary-foreground flex items-center justify-center flex-shrink-0 shadow-lg mt-1">
                    <HandshakeIcon className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <div className='ml-4'>
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground dark:text-white">
                      Trusted Partnership
                    </h3>
                    <p className="text-muted-foreground dark:text-gray-300 mb-2 text-sm md:text-base">
                      We work closely with you to understand your goals and bring your vision to life with precision and passion.
                    </p>
                  </div>
                </div>
              </div>

              {/* Progress bars */}
              <div className="space-y-8">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-semibold text-foreground dark:text-white text-lg">Client Success Rattings</p>
                    <p className="font-bold text-foreground dark:text-white text-lg">90%</p>
                  </div>
                  <ProgressBar value={90} className="h-3" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-semibold text-foreground dark:text-white text-lg">Projects Completed Ratio</p>
                    <p className="font-bold text-foreground dark:text-white text-lg">76%</p>
                  </div>
                  <ProgressBar value={76} className="h-3" />
                </div>
              </div>
            </div>

            {/* Right side - Image with circular text */}
            <div className="relative mt-8 lg:mt-0">
              <img
                src={WhyChoose}
                alt="Team celebrating success"
                className="w-full rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      {/*
      <section className="py-12 md:py-20 px-4 md:px-6 bg-background dark:bg-black">
        <p className="text-[#e77504] text-sm text-center font-semibold tracking-wider uppercase mb-4">
          // OUR TEAM
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 text-foreground dark:text-white">
          Experienced coaches{" "}
          <span className="bg-gradient-to-r from-[#e77504] to-[#f0a510] bg-clip-text text-transparent">
            dedicated to you
          </span>
        </h2>
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                key={member.id}
                className="relative group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-3xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#e77504]/90 via-[#f0a510]/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="text-center transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-6 mx-auto border border-white/30">
                        <p className="text-white font-bold text-lg tracking-wider">View</p>
                      </div>
                      <div className="flex items-center justify-center gap-3">
                        <motion.a
                          href={member.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white transition-all duration-300 group/btn"
                        >
                          <img src={assets.linkedin_icon} alt="linkedin" className="w-5 h-5 group-hover/btn:invert transition-all duration-300" />
                        </motion.a>
                        <motion.a
                          href={member.socials.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white transition-all duration-300 group/btn"
                        >
                          <img src={assets.instagram_icon} alt="instagram" className="w-5 h-5 group-hover/btn:invert transition-all duration-300" />
                        </motion.a>
                        <motion.a
                          href={member.socials.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white transition-all duration-300 group/btn"
                        >
                          <img src={assets.twitter_icon} alt="twitter" className="w-5 h-5 group-hover/btn:invert transition-all duration-300" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <h3 className="text-xl font-bold text-foreground dark:text-white group-hover:text-[#e77504] transition-colors duration-300">{member.name}</h3>
                  <p className="text-muted-foreground dark:text-gray-400">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      */}
    </>

  );
};

export default About