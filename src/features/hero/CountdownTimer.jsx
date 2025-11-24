import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-08-12T00:00:00");
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimeUnit = ({ value, label }) => (
    <div className="flex flex-col items-center mx-2 md:mx-4">
      <div className="relative group">
        <div className="absolute inset-0 bg-magma-red blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-lg"></div>
        <div className="relative w-16 h-16 md:w-24 md:h-24 bg-void-black border border-steel-blue/30 rounded-lg flex items-center justify-center overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]">
          {/* Steel plate texture effect */}
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shine_3s_infinite]"></div>

          <motion.span
            key={value}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            className="text-2xl md:text-4xl font-bold font-mono text-mithril group-hover:text-arena-gold transition-colors duration-300"
          >
            {value < 10 ? `0${value}` : value}
          </motion.span>

          {/* Heating effect at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-magma-red to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300 box-shadow-[0_0_10px_#7F1D1D]"></div>
        </div>
      </div>
      <span className="mt-2 text-xs md:text-sm text-smoke font-serif tracking-widest uppercase">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex justify-center items-center mt-12">
      <TimeUnit value={timeLeft.days} label="Ngày" />
      <TimeUnit value={timeLeft.hours} label="Giờ" />
      <TimeUnit value={timeLeft.minutes} label="Phút" />
      <TimeUnit value={timeLeft.seconds} label="Giây" />
    </div>
  );
};

export default CountdownTimer;
