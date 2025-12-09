import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, TrendingUp, Users, Network, Trophy, Sparkles, Hexagon } from 'lucide-react';

const BenefitCard = ({ icon: Icon, title, description, className, style }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={style}
      className={`group relative bg-void-black/80 backdrop-blur-md border border-mithril/10 hover:border-arena-gold/50 rounded-2xl p-6 w-full md:w-80 lg:w-96 transition-all duration-300 z-10 hover:shadow-[0_0_30px_rgba(217,175,44,0.1)] ${className}`}
    >
      <div className="absolute inset-0 bg-linear-to-br from-arena-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

      <div className="relative z-10 flex flex-col items-start text-left">
        <div className="mb-4 p-3 rounded-lg bg-arena-gold/10 text-arena-gold group-hover:scale-110 transition-transform duration-300 border border-arena-gold/20">
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-serif font-bold text-mithril mb-3 group-hover:text-arena-gold transition-colors">{title}</h3>
        <p className="text-smoke text-sm leading-relaxed">{description}</p>
      </div>

      {/* Decorative Corner */}
      <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-mithril/20 group-hover:bg-arena-gold transition-colors duration-300" />
    </motion.div>
  );
};

const BenefitsSection = () => {
  const benefits = [
    {
      id: 1,
      icon: Trophy,
      title: "Giải thưởng hấp dẫn",
      description: "Giải thưởng hiện kim dành cho các đội thi đạt giải Quán Quân, Á Quân, Quý Quân, Khuyến Khích. Giải thưởng phụ cho đội thi được yêu thích nhất cùng với nhiều giải thưởng hiện vật hấp dẫn.",
      // Top position
      desktopPos: { top: '0%', left: '50%', transform: 'translate(-50%, 0)' },
      lineEnd: { x: '50%', y: '16%' },
    },
    {
      id: 2,
      icon: TrendingUp,
      title: "Phát triển năng lực",
      description: "Cải thiện tư duy logic, cách trình bày, phản biện và giải quyết vấn đề. Giúp xây dựng phong thái tự tin và chuyên nghiệp trong tranh biện thông qua lộ trình thi đấu chuyên nghiệp.",
      // Top Right
      desktopPos: { top: '25%', left: '85%', transform: 'translate(-50%, 0)' },
      lineEnd: { x: '80%', y: '35%' },
    },
    {
      id: 3,
      icon: Network,
      title: "Mở rộng mạng lưới",
      description: "Kết nối với sinh viên cùng đam mê tranh biện. Trò chuyện, học hỏi từ chuyên gia, ban giám khảo, nhà tài trợ và cộng đồng debate rộng lớn. Tạo nền tảng để tham gia các giải tầm quốc gia và quốc tế.",
      // Bottom Right
      desktopPos: { bottom: '5%', left: '75%', transform: 'translate(-50%, 0)' },
      lineEnd: { x: '70%', y: '85%' },
    },
    {
      id: 4,
      icon: Sparkles,
      title: "Trải nghiệm đặc biệt",
      description: "Trở thành một trong những thế hệ thí sinh đầu tiên của giải tranh biện chính thức tại FPTU Hà Nội. Góp mặt trong cột mốc lịch sử, mở đường cho phong trào tranh biện chuyên nghiệp của trường.",
      // Bottom Left
      desktopPos: { bottom: '5%', left: '25%', transform: 'translate(-50%, 0)' },
      lineEnd: { x: '30%', y: '85%' },
    },
    {
      id: 5,
      icon: Award,
      title: "Xây dựng thương hiệu",
      description: "Nhận chứng nhận tham gia/đạt giải từ sự kiện tranh biện lớn nhất FPTU. Là điểm cộng mạnh trong CV, hồ sơ học bổng, tuyển sinh hoặc việc làm. Cơ hội nổi bật trên các nền tảng truyền thông.",
      // Top Left
      desktopPos: { top: '25%', left: '15%', transform: 'translate(-50%, 0)' },
      lineEnd: { x: '20%', y: '35%' },
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-void-black relative overflow-hidden min-h-screen flex items-center justify-center">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,175,44,0.03),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 w-full">
        <div className="text-center mb-12 md:mb-0 md:absolute md:top-12 md:left-0 md:w-full z-20 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pointer-events-auto inline-block"
          >
            <span className="text-arena-gold font-mono tracking-widest text-xs uppercase mb-2 block">Exclusive Perks</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-mithril">
              Đặc Quyền <span className="text-arena-gold">Chiến Binh</span>
            </h2>
          </motion.div>
        </div>

        {/* Mobile View: Stack */}
        <div className="flex flex-col gap-6 md:hidden">
          {benefits.map((b) => (
            <BenefitCard key={b.id} {...b} />
          ))}
        </div>

        {/* Desktop View: Pentagon Graph */}
        <div className="hidden md:block relative w-full max-w-6xl mx-auto h-[700px] lg:h-[800px] mt-32 md:mt-48">

          {/* SVG Connector Lines Layer */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            {benefits.map((b, i) => (
              <motion.line
                key={i}
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                x1="50%"
                y1="50%"
                x2={b.lineEnd.x}
                y2={b.lineEnd.y}
                stroke="#D9AF2C"
                strokeOpacity="0.4"
                strokeWidth="1.5"
                strokeDasharray="5 5"
              />
            ))}
            {/* Central Pulse Circles */}
            <circle cx="50%" cy="50%" r="50" fill="none" stroke="#D9AF2C" strokeOpacity="0.1" strokeWidth="1" className="animate-ping" />
            <circle cx="50%" cy="50%" r="100" fill="none" stroke="#D9AF2C" strokeOpacity="0.05" strokeWidth="1" />
          </svg>

          {/* Scale Container for responsiveness */}
          <div className="absolute inset-0">
            {/* Central Core */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="relative w-24 h-24 flex items-center justify-center">
                <div className="absolute inset-0 bg-arena-gold/20 blur-xl rounded-full animate-pulse" />
                <div className="relative z-10 w-20 h-20 bg-void-black border-2 border-arena-gold/50 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(217,175,44,0.4)]">
                  <Hexagon size={40} className="text-arena-gold animate-[spin_8s_linear_infinite]" />
                </div>
              </div>
            </div>

            {/* Nodes */}
            {benefits.map((b) => (
              <div key={b.id} className="absolute w-80 lg:w-96" style={b.desktopPos}>
                {/* Connection Dot at center of card area (approx) for visual anchor */}
                {/* We hide the dot, the line just goes to the card */}
                <BenefitCard
                  icon={b.icon}
                  title={b.title}
                  description={b.description}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default BenefitsSection;
