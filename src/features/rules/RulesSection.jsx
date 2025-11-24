import React from 'react';
import { motion } from 'framer-motion';
import { Gavel, Clock, Users, Trophy } from 'lucide-react';

const RuleCard = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 120, 
        damping: 12, 
        delay: index * 0.1 
      }}
      viewport={{ once: true }}
      className="bg-void-black border border-steel-blue/30 p-8 rounded-lg relative group overflow-hidden hover:border-steel-blue/60 transition-colors duration-300"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-steel-blue transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
      
      <div className="mb-6 text-steel-blue group-hover:text-mithril transition-colors duration-300">
        <Icon size={40} strokeWidth={1.5} />
      </div>
      
      <h3 className="text-xl font-serif font-bold text-mithril mb-4 group-hover:text-arena-gold transition-colors duration-300">{title}</h3>
      <p className="text-smoke text-sm leading-relaxed">{description}</p>
      
      <div className="absolute bottom-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
        <Icon size={80} />
      </div>
    </motion.div>
  );
};

const RulesSection = () => {
  const rules = [
    {
      icon: Gavel,
      title: "Luật Asian Parliamentary",
      description: "Áp dụng luật Asian Parliamentary (AP) chuẩn quốc tế. Mỗi trận đấu gồm 2 đội: Chính phủ và Đối lập, mỗi đội 3 thành viên tranh biện về một kiến nghị cụ thể."
    },
    {
      icon: Clock,
      title: "Thời Gian Thi Đấu",
      description: "Mỗi lượt nói chính kéo dài 7 phút. Lượt phản hồi (Reply speech) kéo dài 4 phút. Có 15-30 phút chuẩn bị (prep time) tùy thuộc vào vòng thi đấu."
    },
    {
      icon: Users,
      title: "Đội Hình Thi Đấu",
      description: "Các đội thi đăng ký theo nhóm 3-4 thành viên. Thành viên dự bị có thể thay thế trong các trận đấu khác nhau nhưng không được thay đổi trong một trận đấu đang diễn ra."
    },
    {
      icon: Trophy,
      title: "Cơ Cấu Giải Thưởng",
      description: "Tổng giải thưởng lên đến 50 triệu đồng bao gồm hiện kim và hiện vật. Các giải thưởng phụ: Best Speaker, Đội được yêu thích nhất."
    }
  ];

  return (
    <section id="rules" className="py-24 bg-void-black relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-steel-blue font-mono tracking-widest uppercase text-xs sm:text-sm mb-2 block">Forge Your Strategy</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-mithril">Thể Lệ Thi Đấu</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {rules.map((rule, index) => (
            <RuleCard 
              key={index}
              index={index}
              icon={rule.icon}
              title={rule.title}
              description={rule.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RulesSection;
