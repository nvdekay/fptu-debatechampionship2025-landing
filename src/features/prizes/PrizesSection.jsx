import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Award, Star, Heart } from 'lucide-react';

const PrizeCard = ({ icon: Icon, title, amount, description, index, color }) => {
  const colorMap = {
    gold: {
      border: 'border-arena-gold',
      bg: 'bg-arena-gold/10',
      glow: 'shadow-[0_0_30px_rgba(217,175,44,0.3)]',
      text: 'text-arena-gold',
      iconBg: 'bg-arena-gold/20'
    },
    silver: {
      border: 'border-mithril',
      bg: 'bg-mithril/10',
      glow: 'shadow-[0_0_30px_rgba(229,231,235,0.2)]',
      text: 'text-mithril',
      iconBg: 'bg-mithril/20'
    },
    bronze: {
      border: 'border-magma-red',
      bg: 'bg-magma-red/10',
      glow: 'shadow-[0_0_30px_rgba(127,29,29,0.2)]',
      text: 'text-magma-red',
      iconBg: 'bg-magma-red/20'
    },
    steel: {
      border: 'border-steel-blue',
      bg: 'bg-steel-blue/10',
      glow: 'shadow-[0_0_30px_rgba(19,39,80,0.2)]',
      text: 'text-steel-blue',
      iconBg: 'bg-steel-blue/20'
    },
    special: {
      border: 'border-red-500',
      bg: 'bg-red-500/10',
      glow: 'shadow-[0_0_30px_rgba(239,68,68,0.2)]',
      text: 'text-red-500',
      iconBg: 'bg-red-500/20'
    }
  };

  const colors = colorMap[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: index * 0.1
      }}
      viewport={{ once: true }}
      className={`relative bg-void-black/60 backdrop-blur-md border-2 ${colors.border} rounded-2xl p-6 md:p-8 ${colors.glow} hover:scale-105 transition-all duration-300 group overflow-hidden`}
    >
      {/* Background Glow */}
      <div className={`absolute inset-0 ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      {/* Icon */}
      <div className={`relative mb-6 inline-flex p-4 rounded-xl ${colors.iconBg} border ${colors.border}`}>
        <Icon className={`w-10 h-10 md:w-12 md:h-12 ${colors.text}`} strokeWidth={1.5} />
      </div>

      {/* Content */}
      <div className="relative">
        <h3 className={`text-2xl md:text-3xl font-serif font-bold ${colors.text} mb-2`}>
          {title}
        </h3>
        <div className="text-3xl md:text-4xl font-bold text-mithril mb-4 font-mono">
          {amount}
        </div>
        <p className="text-smoke text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>

      {/* Corner Decoration */}
      <div className={`absolute -top-10 -right-10 w-32 h-32 ${colors.bg} rounded-full blur-2xl opacity-50`} />
    </motion.div>
  );
};

const PrizesSection = () => {
  const prizes = [
    {
      icon: Trophy,
      title: "Giải Nhất",
      amount: "10.000.000 VNĐ",
      description: "Hiện kim cùng hiện vật và certificate",
      color: "gold"
    },
    {
      icon: Medal,
      title: "Giải Nhì",
      amount: "8.000.000 VNĐ",
      description: "Hiện kim cùng hiện vật và certificate",
      color: "silver"
    },
    {
      icon: Award,
      title: "Giải Ba",
      amount: "6.000.000 VNĐ",
      description: "Hiện kim cùng hiện vật và certificate",
      color: "bronze"
    },
    {
      icon: Star,
      title: "Giải Khuyến Khích",
      amount: "4.000.000 VNĐ",
      description: "Hiện kim cùng hiện vật và certificate",
      color: "steel"
    },
    {
      icon: Heart,
      title: "Đội Thi Được Yêu Thích Nhất",
      amount: "1.000.000 VNĐ",
      description: "Hiện kim và certificate",
      color: "special"
    }
  ];

  return (
    <section id="prizes" className="py-24 bg-void-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNEOUFGMkMiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNGgtMnYyaDJ2LTJ6bTAtOHYyaDJ2LTJoLTJ6bTItMmgydi0yaC0ydjJ6bS0yLTJoLTJ2Mmgydi0yem0tNC0yaDJ2LTJoLTJ2MnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs sm:text-sm font-mono tracking-widest uppercase bg-arena-gold/10 border border-arena-gold/30 rounded-full text-arena-gold">
            Prize Pool
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-mithril mb-6">
            Cơ Cấu <span className="text-arena-gold">Giải Thưởng</span>
          </h2>
          <p className="text-smoke max-w-2xl mx-auto text-base md:text-lg">
            Tổng giải thưởng lên đến <span className="text-arena-gold font-bold">29 triệu đồng</span> cùng nhiều phần quà giá trị
          </p>
        </motion.div>

        {/* Prizes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* First Prize - Full Width on Large Screens */}
          <div className="lg:col-span-3">
            <PrizeCard {...prizes[0]} index={0} />
          </div>

          {/* Second and Third Prize */}
          {prizes.slice(1, 3).map((prize, index) => (
            <div key={index + 1} className="lg:col-span-1">
              <PrizeCard {...prize} index={index + 1} />
            </div>
          ))}

          {/* Fourth Prize - Full Width on Mobile */}
          <div className="md:col-span-2 lg:col-span-1">
            <PrizeCard {...prizes[3]} index={3} />
          </div>

          {/* Special Prize */}
          <div className="md:col-span-2 lg:col-span-2">
            <PrizeCard {...prizes[4]} index={4} />
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-mithril/60 text-sm md:text-base mb-6">
            Đăng ký ngay để có cơ hội giành những phần thưởng giá trị này
          </p>
          <button className="relative px-8 py-4 bg-transparent overflow-hidden group">
            <span className="absolute inset-0 w-full h-full bg-arena-gold/20 group-hover:bg-arena-gold/40 transition-colors duration-300 transform skew-x-12"></span>
            <span className="absolute inset-0 w-full h-full border border-arena-gold/50 group-hover:border-arena-gold transition-colors duration-300 transform skew-x-12"></span>
            <span className="relative text-mithril font-serif font-bold tracking-widest uppercase group-hover:text-white transition-colors">
              Đăng ký tham gia
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PrizesSection;
