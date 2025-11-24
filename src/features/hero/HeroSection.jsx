import React from 'react';
import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden">
      {/* Content Container */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        
        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
        >
          <span className="inline-block py-1 px-3 border border-arena-gold/30 rounded-full bg-arena-gold/5 text-arena-gold text-sm md:text-base font-serif tracking-[0.2em] uppercase backdrop-blur-sm">
            Đấu trường rèn trí tuệ
          </span>
        </motion.div>

        {/* Main Title with Glitch Effect */}
        <div className="relative mb-6 group">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-8xl font-serif font-black text-mithril tracking-tight relative z-10"
          >
            FPTU DEBATE <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-magma-red via-red-500 to-magma-red animate-pulse">
              CHAMPIONSHIP
            </span>
          </motion.h1>
          
          {/* Glitch Layers */}
          <motion.h1
            className="absolute top-0 left-0 w-full text-4xl md:text-6xl lg:text-8xl font-serif font-black text-magma-red opacity-0 group-hover:opacity-30 z-0 select-none pointer-events-none"
            animate={{ 
              x: [-2, 2, -1, 0],
              y: [1, -1, 0],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 0.2,
              repeatDelay: 5
            }}
          >
            FPTU DEBATE <br /> CHAMPIONSHIP
          </motion.h1>
          <motion.h1
            className="absolute top-0 left-0 w-full text-4xl md:text-6xl lg:text-8xl font-serif font-black text-steel-blue opacity-0 group-hover:opacity-30 z-0 select-none pointer-events-none"
            animate={{ 
              x: [2, -2, 1, 0],
              y: [-1, 1, 0],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 0.3,
              repeatDelay: 5
            }}
          >
            FPTU DEBATE <br /> CHAMPIONSHIP
          </motion.h1>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-smoke text-base md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          Nơi ngọn lửa đam mê được thắp sáng, nơi tư duy sắc bén được tôi luyện. 
          Hãy sẵn sàng cho hành trình lột xác tại MindForge.
        </motion.p>

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
          className="mt-16"
        >
          <button className="relative px-8 py-4 bg-transparent overflow-hidden group">
            <span className="absolute inset-0 w-full h-full bg-magma-red/20 group-hover:bg-magma-red/40 transition-colors duration-300 transform skew-x-12"></span>
            <span className="absolute inset-0 w-full h-full border border-magma-red/50 group-hover:border-magma-red transition-colors duration-300 transform skew-x-12"></span>
            <span className="relative text-mithril font-serif font-bold tracking-widest uppercase group-hover:text-white transition-colors">
              Đăng ký ngay
            </span>
          </button>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-void-black to-transparent z-10"></div>
    </section>
  );
};

export default HeroSection;
