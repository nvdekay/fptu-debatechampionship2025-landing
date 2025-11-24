import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import TimelineNode from './TimelineNode';

const MindForgeTimeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const phases = [
    {
      phase: "Ignite (Khởi lửa)",
      title: "Đăng ký & Vòng loại",
      description: "Ngọn lửa đam mê bắt đầu nhen nhóm. Các đội thi đăng ký và trải qua vòng sơ loại gắt gao để chọn ra những chiến binh xứng đáng nhất bước vào lò luyện.",
    },
    {
      phase: "Forge (Rèn giũa)",
      title: "Training & Workshop",
      description: "Giai đoạn tôi luyện khắc nghiệt. Dưới áp lực và sức nóng của kiến thức chuyên sâu, các thí sinh được trang bị kỹ năng tranh biện, tư duy phản biện và chiến thuật thi đấu.",
    },
    {
      phase: "Sharpen (Mài sắc)",
      title: "Vòng Bảng & Tứ Kết",
      description: "Lưỡi kiếm trí tuệ được mài sắc qua từng trận đấu. Các đội thi đối đầu trực tiếp, vận dụng mọi kỹ năng đã học để vượt qua đối thủ và tiến sâu vào giải đấu.",
    },
    {
      phase: "Clash (Đối đầu)",
      title: "Bán Kết & Chung Kết",
      description: "Trận chiến cuối cùng. Nơi những bộ óc thiên tài va chạm, tạo nên những màn tranh biện bùng nổ. Chỉ có đội bản lĩnh nhất mới giành được chiếc cúp danh giá.",
    }
  ];

  return (
    <section id="timeline" className="py-24 relative min-h-screen bg-void-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(19,39,80,0.1),transparent_70%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10" ref={containerRef}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-mithril mb-4">Hành Trình <span className="text-arena-gold">MindForge</span></h2>
          <p className="text-smoke max-w-2xl mx-auto">Từ những viên quặng thô sơ đến những thanh gươm sắc bén, hãy cùng trải qua 4 giai đoạn của quá trình tôi luyện.</p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line Background */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-mithril/10 z-0"></div>
          
          {/* Molten Gold Progress Line */}
          <motion.div 
            style={{ height }}
            className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 w-0.5 bg-linear-to-b from-magma-red via-arena-gold to-steel-blue z-10 shadow-[0_0_10px_#D9AF2C]"
          ></motion.div>

          <div className="space-y-0">
            {phases.map((phase, index) => (
              <TimelineNode 
                key={index}
                index={index}
                phase={phase.phase}
                title={phase.title}
                description={phase.description}
                isLast={index === phases.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MindForgeTimeline;
