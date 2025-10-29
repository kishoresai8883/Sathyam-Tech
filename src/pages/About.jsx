import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Title from '../components/Title'
import assets from '../assets/assets'
import aboutImg from '../assets/hero_img1.jpg'
import hero from '../assets/about_hero.png'
import StarIcon from '@mui/icons-material/Star';
import ProgressBar from '../components/Progressbar'

const approaches = [
  {
    icon: StarIcon,
    title: "Our Mission",
    description: "Our mission is to inspire and equip individuals and businesses",
  },
  {
    icon: StarIcon,
    title: "Our Vision",
    description: "Our vision is to drive innovation for a brighter, sustainable future.",
  },
  {
    icon: StarIcon,
    title: "Our Value",
    description: "Our values are rooted in integrity, empathy, and empowerment. We are committed to creating a supportive.",
  },
];

const steps = [
  {
    number: "1",
    title: "Sign Up",
    description: "Visit our website or download our app to sign up. Provide basic information to set up your secure account.",
    icon: StarIcon,
  },
  {
    number: "2",
    title: "Set Up Your Profile",
    description: "Add your personal or business details to tailor the platform to your specific needs.",
    icon: StarIcon,
  },
  {
    number: "3",
    title: "Explore Features",
    description: "Access your dashboard for a summary of your finances: balances, recent transactions, and insights.",
    icon: StarIcon,
  },
  {
    number: "4",
    title: "Invest and Grow",
    description: "Discover a variety of investment opportunities tailored to your financial goals.",
    icon: StarIcon,
  },
];

const team = [
  {
    id: 1,
    image: aboutImg,
    name: "Kishore",
    role: "Founder",
  },
  {
    id: 2,
    image: aboutImg,
    name: "Sai",
    role: "Developer",
  },
  {
    id: 3,
    image: aboutImg,
    name: "Kishore Sai",
    role: "Manager",
  },
];

export const About = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  return (
    <>
      <section 
        className="relative h-[400px] w-full bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${hero})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a4d4d]/95 via-[#1a4d4d]/85 to-[#1a4d4d]/75"></div>
        
        {/* Content */}
        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-light mb-6 text-white">
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
      <section className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Images */}
            <div className="relative">
              <div className="relative ml-12">
                {/* Experience badge */}
                <div className="absolute -top-6 -left-6 z-20 bg-gradient-to-br from-[#e77504] to-[#f0a510] rounded-3xl p-6 shadow-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full border-2 border-primary-foreground/50 flex items-center justify-center">
                      <StarIcon className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-xl font-bold">2+ years of</p>
                  <p className="text-xl font-bold">experience</p>
                </div>

                {/* Main image */}
                <div className="relative">
                  <img
                    src={aboutImg}
                    alt="Professional coaching consultation"
                    className="w-full h-full rounded-3xl shadow-2xl"
                  />
                </div>

                {/* Bottom right portrait */}
                <div className="absolute -bottom-8 -right-8 w-64 h-52 rounded-3xl overflow-hidden shadow-2xl border-4 border-background">
                  <img
                    src={aboutImg}
                    alt="Business professional"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="lg:pl-8">
              <p className="text-[#e77504] text-sm font-semibold tracking-wider uppercase mb-4">
                // ABOUT US
              </p>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Expert guidance and{" "}
                <span className="bg-gradient-to-r from-[#e77504] to-[#f0a510] bg-clip-text text-transparent">
                  personalized coaching.
                </span>
              </h1>

              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Receive tailored coaching that empowers you to navigate challenges and achieve your
                personal and professional goals. With expert guidance.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                    <StarIcon className="w-4 h-4 text-accent" />
                  </div>
                  <p className="text-foreground font-semibold text-lg">
                    Goal Setting And Accountability
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                    <StarIcon className="w-4 h-4 text-accent" />
                  </div>
                  <p className="text-foreground font-semibold text-lg">
                    Mindset And Confidence Building
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <button variant="teal" size="lg" className="inline-flex  items-center justify-center px-8 py-3 gap-2 bg-primary text-white hover:bg-primary-dark rounded-md font-semibold shadow-lg hover:shadow-xl cursor-pointer hover:scale-102 transition-all duration-300">
                  Get In Touch
                  <img src={assets.arrow_icon} className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg">
                    <StarIcon className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Creative Result</p>
                    <p className="text-sm text-muted-foreground">Award Wining</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-6 bg-background relative">
        <div className="container mx-auto max-w-7xl">
          {/* Contact Us button - top right */}
          <p className="text-[#e77504] text-sm font-semibold tracking-wider uppercase mb-4">
            // OUR APPROACH
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 max-w-4xl">
            Empowering growth through{" "}
            <span className="bg-gradient-to-r from-[#e77504] to-[#f0a510] bg-clip-text text-transparent">
              personalized guidance
            </span>
            <span className="text-accent text-6xl">.</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
            {/* Left side - Content */}
            <div>
              <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
                At the heart of our coaching philosophy is a commitment to empowering individuals
                and businesses to reach their fullest potential. We provide personalized, one-on-one
                guidance tailored to your unique goals and challenges.
              </p>

              <div className="space-y-8">
                {approaches.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#e77504] to-[#f0a510] text-primary-foreground flex items-center justify-center flex-shrink-0 shadow-lg">
                        <item.icon className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2 text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    {index < approaches.length - 1 && (
                      <div className="ml-8 mt-6 mb-2 h-px bg-border"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Image */}
            <div className="relative">
              <img
                src={aboutImg}
                alt="Team meeting and collaboration"
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-[#e77504] text-sm font-semibold tracking-wider uppercase mb-4">
              HOW IT WORKS
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              How It Works
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-3xl mx-auto">
              Our platform is designed to make managing your finances simple and
              efficient. Follow these easy steps to get started:
            </p>
          </div>

          <div className="relative">
            {/* Dashed line connecting circles */}
            <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 border-t-2 border-dashed border-[#f0a510] z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#e77504] to-[#f0a510] text-primary-foreground flex items-center justify-center text-2xl font-bold mb-6 shadow-lg">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-7xl">
          <p className="text-[#e77504] text-sm font-semibold tracking-wider uppercase mb-4">
            // WHY CHOOSE US ?
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Personalized coaching tailored to{" "}
                <span className="bg-gradient-to-r from-[#e77504] to-[#f0a510] bg-clip-text text-transparent">
                  your needs
                </span>
              </h2>

              <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
                We understand that no two clients are the same. That's why we create personalized
                coaching plans designed to address your specific challenges and goals. Whether
                you're focusing on personal growth or business development, our tailored approach
                ensures you get the exact guidance you need to succeed.
              </p>

              {/* Progress bars */}
              <div className="space-y-8">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-semibold text-foreground text-lg">Client Success Rattings</p>
                    <p className="font-bold text-foreground text-lg">90%</p>
                  </div>
                  <ProgressBar value={90} className="h-3" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-semibold text-foreground text-lg">Projects Completed Ratio</p>
                    <p className="font-bold text-foreground text-lg">65%</p>
                  </div>
                  <ProgressBar value={65} className="h-3" />
                </div>
              </div>
            </div>

            {/* Right side - Image with circular text */}
            <div className="relative">
              {/* Circular text overlay */}
              <div className="absolute -top-8 -right-8 w-48 h-48 z-10">
                <svg viewBox="0 0 200 200" className="animate-spin-slow">
                  <path
                    id="circlePath"
                    d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                    fill="none"
                  />
                </svg>
              </div>

              <img
                src={aboutImg}
                alt="Team celebrating success"
                className="w-full rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="text-[#e77504] text-sm font-semibold tracking-wider uppercase mb-4">
                // OUR TEAM
              </p>
              <h2 className="text-4xl md:text-5xl font-bold">
                Experienced coaches{" "}
                <span className="bg-gradient-to-r from-[#e77504] to-[#f0a510] bg-clip-text text-transparent">
                  dedicated to you
                </span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.id}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredCard(member.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative overflow-hidden rounded-3xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay on hover */}
                  {hoveredCard === member.id && (
                    <div className="absolute inset-0 bg-gradient-to-t from-[#a8f8cf] via-[#82e7f0] to-transparent flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#e77504] to-[#f0a510] backdrop-blur-sm flex items-center justify-center mb-6 mx-auto">
                          <p className="text-primary-foreground font-bold text-lg">View</p>
                        </div>
                        <div className="flex items-center justify-center gap-4">
                          <button className="w-12 h-12 rounded-full bg-gradient-to-r backdrop-blur-sm flex items-center justify-center hover:bg-black transition-all duration-300">
                            <img src={assets.linkedin_icon} alt="linkedin icon" className='bg-black hover:invert' />
                          </button>
                          <button className="w-12 h-12 rounded-full bg-gradient-to-r from-[#e77504] to-[#f0a510] backdrop-blur-sm flex items-center justify-center hover:bg-black transition-all duration-300">
                            <img src={assets.instagram_icon} alt="instagram icon" className='bg-black hover:invert' />
                          </button>
                          <button className="w-12 h-12 rounded-full bg-gradient-to-r from-[#e77504] to-[#f0a510] backdrop-blur-sm flex items-center justify-center hover:bg-primary-foreground/30 transition-colors">
                            <img src={assets.twitter_icon} className='bg-primary-foreground' alt="twitter icon" />
                          </button>
                          <button className="w-12 h-12 rounded-full bg-gradient-to-r from-[#e77504] to-[#f0a510] backdrop-blur-sm flex items-center justify-center hover:bg-primary-foreground/30 transition-colors">
                            <img src={assets.facebook_icon} className='bg-primary-foreground' alt="facebook icon" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
    
  );
};

export default About