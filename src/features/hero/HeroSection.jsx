import React from 'react';
import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden">
      {/* Content Container */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex justify-center"
        >
          <img
            src="/img/logo kim loại.webp"
            alt="FPTU Debate Championship Logo"
            className="w-24 md:w-3/5 h-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          />
        </motion.div>

        {/* Main Title Image with Link */}
        <motion.a
          href="https://www.facebook.com/fptuchampionship"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative mb-12 block cursor-pointer group"
        >
          <motion.img
            src="/img/typo chính của tôi.webp"
            alt="FPTU Debate Championship"
            className="w-full max-w-[90%] md:max-w-5xl mx-auto h-auto object-contain drop-shadow-[0_0_15px_rgba(217,175,44,0.1)]"
            animate={{
              y: [-10, 10, -10],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{
              scale: 1.05,
              filter: "drop-shadow(0 0 30px rgba(217,175,44,0.4))"
            }}
          />
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-arena-gold text-sm font-serif tracking-widest uppercase">
            Visit our Fanpage
          </div>
        </motion.a>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <CountdownTimer />
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 cursor-pointer"
        >
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSftqbfvWtnNn8FDjkcPISTroE2yMbtl48cZyRd_Eqf-C0cnNw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block px-8 py-4 bg-transparent overflow-hidden group"
          >
            <span className="absolute inset-0 w-full h-full bg-magma-red/20 group-hover:bg-magma-red/40 transition-colors duration-300 transform skew-x-12"></span>
            <span className="absolute inset-0 w-full h-full border border-magma-red/50 group-hover:border-magma-red transition-colors duration-300 transform skew-x-12"></span>
            <span className="relative text-mithril font-serif font-bold tracking-widest uppercase group-hover:text-white transition-colors">
              Đăng ký ngay
            </span>
          </a>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-void-black to-transparent z-10"></div>
    </section>
  );
};

export default HeroSection;
