import React from 'react';
import { motion } from 'framer-motion';
import { Award, TrendingUp, Users, Network, Trophy, Sparkles } from 'lucide-react';

const BenefitCard = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-void-black/40 backdrop-blur-sm border border-mithril/10 rounded-2xl p-6 md:p-8 hover:border-arena-gold/50 transition-all duration-300 overflow-hidden"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-linear-to-br from-arena-gold/0 via-arena-gold/0 to-arena-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon */}
      <div className="relative mb-6 inline-flex p-4 rounded-xl bg-arena-gold/10 border border-arena-gold/20 group-hover:bg-arena-gold/20 transition-colors duration-300">
        <Icon className="w-8 h-8 text-arena-gold" strokeWidth={1.5} />
      </div>

      {/* Content */}
      <div className="relative">
        <h3 className="text-xl md:text-2xl font-serif font-bold text-mithril mb-4 group-hover:text-arena-gold transition-colors duration-300">
          {title}
        </h3>
        <p className="text-smoke text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>

      {/* Corner Accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-arena-gold/5 blur-2xl group-hover:bg-arena-gold/10 transition-colors duration-500" />
    </motion.div>
  );
};

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Trophy,
      title: "Giải thưởng hấp dẫn",
      description: "Giải thưởng hiện kim dành cho các đội thi đạt giải Quán Quân, Á Quân, Quý Quân, Khuyến Khích. Giải thưởng phụ cho đội thi được yêu thích nhất cùng với nhiều giải thưởng hiện vật hấp dẫn."
    },
    {
      icon: TrendingUp,
      title: "Phát triển năng lực tranh biện toàn diện",
      description: "Cải thiện tư duy logic, cách trình bày, phản biện và giải quyết vấn đề. Giúp xây dựng phong thái tự tin và chuyên nghiệp trong tranh biện thông qua lộ trình thi đấu chuyên nghiệp."
    },
    {
      icon: Sparkles,
      title: "Trải nghiệm sân chơi tranh biện đầu tiên",
      description: "Trở thành một trong những thế hệ thí sinh đầu tiên của giải tranh biện chính thức tại FPTU Hà Nội. Góp mặt trong cột mốc lịch sử, mở đường cho phong trào tranh biện chuyên nghiệp của trường."
    },
    {
      icon: Award,
      title: "Xây dựng thương hiệu cá nhân & hồ sơ học thuật",
      description: "Nhận chứng nhận tham gia/đạt giải từ sự kiện tranh biện lớn nhất FPTU. Là điểm cộng mạnh trong CV, hồ sơ học bổng, tuyển sinh hoặc việc làm. Cơ hội nổi bật trên các nền tảng truyền thông."
    },
    {
      icon: Network,
      title: "Mở rộng mạng lưới kết nối",
      description: "Kết nối với sinh viên cùng đam mê tranh biện. Trò chuyện, học hỏi từ chuyên gia, ban giám khảo, nhà tài trợ và cộng đồng debate rộng lớn. Tạo nền tảng để tham gia các giải tầm quốc gia và quốc tế."
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-void-black relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-arena-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-magma-red/5 rounded-full blur-3xl" />

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
            Why Join Us
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-mithril mb-6">
            Quyền Lợi Khi <span className="text-arena-gold">Tham Gia</span>
          </h2>
          <p className="text-smoke max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Tham gia FPTU Debate Championship không chỉ là cuộc thi - đây là hành trình rèn luyện bản thân,
            xây dựng thương hiệu và mở rộng cơ hội nghề nghiệp trong tương lai.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
