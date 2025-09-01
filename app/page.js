"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useAnimate,
} from "framer-motion";
import {
  SparklesIcon,
  CodeBracketIcon,
  PaintBrushIcon,
  CpuChipIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  GlobeAltIcon,
  ArrowRightIcon,
  PlayIcon,
  CheckIcon,
  StarIcon,
  BoltIcon,
  ShieldCheckIcon,
  HeartIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  DevicePhoneMobileIcon,
  CloudIcon,
} from "@heroicons/react/24/outline";

// Import your existing components
import Hero from "@/components/home/HomeHero";
import Plasma from "@/components/Plasma";

export default function Home() {
  const [scope, animate] = useAnimate();
  const [activeFeature, setActiveFeature] = useState(0);
  const [size, setSize] = useState({ columns: 0, rows: 0 });

  const homeRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: homeRef,
    offset: ["start start", "end end"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    generateGridCount();
    window.addEventListener("resize", generateGridCount);
    return () => window.removeEventListener("resize", generateGridCount);
  }, []);

  const generateGridCount = () => {
    const columns = Math.floor(document.body.clientWidth / 100);
    const rows = Math.floor(document.body.clientHeight / 100);
    setSize({ columns, rows });
  };

  const handleMouseLeave = (e) => {
    const id = `#${e.target.id}`;
    animate(
      id,
      {
        background: "rgba(99, 102, 241, 0)",
        boxShadow: "0 0 0px rgba(99, 102, 241, 0)",
      },
      { duration: 2 }
    );
  };

  const handleMouseEnter = (e) => {
    const id = `#${e.target.id}`;
    animate(
      id,
      {
        background: "rgba(99, 102, 241, 0.1)",
        boxShadow: "0 0 30px rgba(99, 102, 241, 0.4)",
      },
      { duration: 0.3 }
    );
  };

  // Core services data
  const services = [
    {
      icon: CpuChipIcon,
      title: "AI Solutions",
      description:
        "Cutting-edge artificial intelligence that transforms how businesses operate and engage with customers.",
      features: [
        "Machine Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
      ],
      color: "from-purple-500 to-pink-500",
      delay: 0.1,
    },
    {
      icon: PaintBrushIcon,
      title: "Creative Design",
      description:
        "Stunning visual experiences that captivate audiences and build memorable brand identities.",
      features: [
        "UI/UX Design",
        "Brand Identity",
        "Motion Graphics",
        "3D Visualization",
      ],
      color: "from-cyan-500 to-blue-500",
      delay: 0.2,
    },
    {
      icon: CodeBracketIcon,
      title: "Development",
      description:
        "Robust, scalable applications built with the latest technologies for web, mobile, and beyond.",
      features: [
        "Web Applications",
        "Mobile Apps",
        "API Development",
        "Cloud Solutions",
      ],
      color: "from-emerald-500 to-teal-500",
      delay: 0.3,
    },
    {
      icon: RocketLaunchIcon,
      title: "Digital Strategy",
      description:
        "Strategic consulting that aligns technology with business goals for maximum impact.",
      features: [
        "Digital Transformation",
        "Process Automation",
        "Growth Strategy",
        "Innovation Consulting",
      ],
      color: "from-orange-500 to-red-500",
      delay: 0.4,
    },
  ];

  // Interactive features
  const features = [
    {
      title: "AI-Powered Innovation",
      description:
        "Harness the power of artificial intelligence to automate processes, gain insights, and create intelligent user experiences.",
      icon: SparklesIcon,
      color: "from-purple-400 to-pink-600",
      stats: "95% Efficiency Boost",
    },
    {
      title: "Future-Ready Design",
      description:
        "Create stunning digital experiences that adapt to tomorrow's technologies and user expectations.",
      icon: PaintBrushIcon,
      color: "from-cyan-400 to-blue-600",
      stats: "99% User Satisfaction",
    },
    {
      title: "Scalable Architecture",
      description:
        "Build applications that grow with your business, handling millions of users with ease.",
      icon: CloudIcon,
      color: "from-emerald-400 to-green-600",
      stats: "10x Performance",
    },
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content:
        "Brotobros transformed our vision into reality. Their AI solutions increased our efficiency by 300%.",
      rating: 5,
      avatar: "SJ",
      company: "TechStart",
    },
    {
      name: "Michael Chen",
      role: "Product Manager, InnovateCorp",
      content:
        "The design quality is exceptional. They truly understand what it means to create for the future.",
      rating: 5,
      avatar: "MC",
      company: "InnovateCorp",
    },
    {
      name: "Emma Davis",
      role: "CTO, NextGen Solutions",
      content:
        "Outstanding development work. The team delivered beyond our expectations, on time and on budget.",
      rating: 5,
      avatar: "ED",
      company: "NextGen Solutions",
    },
  ];

  const stats = [
    { value: "50+", label: "Projects Delivered", icon: CheckIcon },
    { value: "25+", label: "Happy Clients", icon: HeartIcon },
    { value: "100%", label: "Success Rate", icon: StarIcon },
    { value: "24/7", label: "Support", icon: ShieldCheckIcon },
  ];

  return (
    <div ref={homeRef} className="relative bg-neutral-950 overflow-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Interactive Grid Background for following sections */}
      <motion.div
        ref={scope}
        className="fixed inset-0 grid grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] grid-rows-[repeat(auto-fit,_minmax(100px,_1fr))] opacity-5 pointer-events-none z-0"
        style={{ y: y1 }}
      >
        {[...Array(size.rows * size.columns)].map((_, i) => (
          <div
            key={i}
            id={`home-square-${i}`}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            className="h-full w-full border-[0.5px] border-indigo-800/30"
          />
        ))}
      </motion.div>

      {/* What We Do Section */}
      <section className="relative z-10 py-20 px-4 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                We Code The Future
              </span>
            </motion.h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              As a new company in the digital revolution, we're not just
              following trends — we're creating them. From AI-powered solutions
              to cutting-edge design, we build tomorrow's digital experiences
              today.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-3xl bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 hover:border-transparent transition-all duration-500 p-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: service.delay }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  boxShadow: "0 25px 50px rgba(99, 102, 241, 0.3)",
                }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.05, 0.15, 0.05],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                {/* Glowing border effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-sm`}
                />
                <div className="absolute inset-[1px] bg-neutral-900/90 rounded-3xl" />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center relative`}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-300`}
                      />
                    </div>
                  </motion.div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center text-sm text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                      >
                        <div
                          className={`w-1 h-1 bg-gradient-to-r ${service.color} rounded-full mr-3`}
                        />
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    className={`mt-6 px-6 py-3 bg-gradient-to-r ${service.color} text-white font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Features Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Why Choose Brotobros?
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We're not just another development company. We're digital pioneers
              shaping the future.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {/* Interactive feature cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  onHoverStart={() => setActiveFeature(index)}
                  whileHover={{ y: -10 }}
                >
                  <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 h-full hover:border-indigo-500/50 transition-all duration-300 relative overflow-hidden">
                    {/* Background glow */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
                      animate={
                        activeFeature === index
                          ? {
                              scale: [1, 1.02, 1],
                              opacity: [0.05, 0.15, 0.05],
                            }
                          : {}
                      }
                      transition={{ duration: 2, repeat: Infinity }}
                    />

                    <div className="relative z-10">
                      <motion.div
                        className="mb-6"
                        whileHover={{ scale: 1.1, rotate: 10 }}
                      >
                        <div
                          className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center`}
                        >
                          <feature.icon className="w-7 h-7 text-white" />
                        </div>
                      </motion.div>

                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors duration-300">
                        {feature.title}
                      </h3>

                      <p className="text-gray-400 mb-4 leading-relaxed">
                        {feature.description}
                      </p>

                      <div
                        className={`text-sm font-semibold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}
                      >
                        {feature.stats}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 py-20 px-4 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Client Success Stories
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              See how we've helped businesses transform their digital presence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-6 hover:border-indigo-500/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plasma Component */}
      <div
        className="relative z-10"
        style={{ width: "100%", height: "600px", position: "relative" }}
      >
        <Plasma
          color="#ff6b35"
          speed={0.6}
          direction="forward"
          scale={1.1}
          opacity={0.8}
          mouseInteractive={true}
        />
      </div>

      {/* Final CTA Section */}
      <section className="relative z-10 py-20 px-4">
        <motion.div
          className="container mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Ready To Build The Future?
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join us in creating tomorrow's digital experiences. Let's turn
              your vision into reality with cutting-edge technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center justify-center">
                  <RocketLaunchIcon className="w-5 h-5 mr-2" />
                  Start Your Project
                </span>
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-lg"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>

              <motion.button
                className="px-8 py-4 border-2 border-indigo-500 text-indigo-400 font-semibold rounded-lg hover:bg-indigo-500/10 transition-all duration-300 flex items-center justify-center"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(99, 102, 241, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <ChatBubbleLeftRightIcon className="w-5 h-5 mr-2" />
                Let's Talk
              </motion.button>
            </div>

            {/* Contact info */}
            <motion.div
              className="mt-8 text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="mb-2">Ready to discuss your project?</p>
              <div className="flex justify-center items-center space-x-6 text-sm">
                <span>hello@brotobros.com</span>
                <span>•</span>
                <span>+971 58136438</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
