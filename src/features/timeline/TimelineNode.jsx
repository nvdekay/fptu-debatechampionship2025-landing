import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const TimelineNode = ({ phase, title, date, description, index, isLast }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <div ref={ref} className={`relative flex items-start mb-24 flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:justify-between w-full max-w-5xl mx-auto group`}>

      {/* Center Line Node */}
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 flex flex-col items-center h-full">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`w-8 h-8 rounded-full border-2 z-20 flex items-center justify-center bg-void-black
            ${index === 0 ? 'border-magma-red shadow-[0_0_15px_#7F1D1D]' :
              index === 1 ? 'border-steel-blue shadow-[0_0_15px_#132750]' :
                index === 2 ? 'border-mithril shadow-[0_0_15px_#E5E7EB]' :
                  'border-arena-gold shadow-[0_0_15px_#D9AF2C]'}`}
        >
          <div className={`w-3 h-3 rounded-full 
            ${index === 0 ? 'bg-magma-red' :
              index === 1 ? 'bg-steel-blue' :
                index === 2 ? 'bg-mithril' :
                  'bg-arena-gold'}`}
          />
        </motion.div>

        {!isLast && (
          <div className="w-0.5 h-full bg-mithril/10 absolute top-8"></div>
        )}
      </div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, x: 0, y: 20 }}
        animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={`ml-16 md:ml-0 w-[calc(100%-4rem)] md:w-[45%] p-6 md:p-8 rounded-xl border border-mithril/10 bg-void-black/50 backdrop-blur-sm relative overflow-hidden hover:border-mithril/30 transition-colors duration-300
          ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
      >
        {/* Shimmer Effect */}
        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-linear-to-r from-transparent via-white/5 to-transparent z-0 pointer-events-none"></div>

        <div className="relative z-10">
          <span className={`text-sm font-mono tracking-widest uppercase mb-1 block
            ${index === 0 ? 'text-magma-red' :
              index === 1 ? 'text-steel-blue' :
                index === 2 ? 'text-mithril' :
                  'text-arena-gold'}`}
          >
            Phase 0{index + 1}: {phase}
          </span>

          <div className={`flex items-center gap-2 mb-3 text-smoke/80 font-mono text-xs md:text-sm ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
            {date}
          </div>

          <h3 className="text-2xl md:text-3xl font-serif font-bold text-mithril mb-4">{title}</h3>

          <p className="text-smoke leading-relaxed text-sm md:text-base">
            {description}
          </p>
        </div>
      </motion.div>

      {/* Empty div for layout balance on desktop */}
      <div className="hidden md:block w-[45%]" />
    </div>
  );
};

export default TimelineNode;
