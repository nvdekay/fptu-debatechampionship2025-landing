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

        {/* Main Title Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative mb-8 md:mb-12"
        >
          <motion.img
            src="/img/typo.webp"
            alt="FPTU Debate Championship"
            className="w-full max-w-[90%] md:max-w-4xl mx-auto h-auto object-contain"
            animate={{
              y: [-8, 8, -8],
              filter: [
                "drop-shadow(0 0 20px rgba(217,175,44,0.15))",
                "drop-shadow(0 0 35px rgba(217,175,44,0.3))",
                "drop-shadow(0 0 20px rgba(217,175,44,0.15))"
              ]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

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
