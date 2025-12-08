import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Video, Users, Mic2, FileText, CheckCircle, Clock, Calendar, Trophy } from 'lucide-react';

const rounds = [
  {
    id: 'vong-don',
    label: 'Vòng Đơn',
    icon: FileText,
    content: {
      title: 'Vòng Đơn: Đăng Ký & Sơ Loại',
      sections: [
        {
          title: 'Hình thức đăng ký',
          icon: Users,
          items: [
            'Thí sinh đăng ký theo nhóm 4 thành viên.',
            'Mỗi nhóm chỉ được nộp 01 bài dự thi.',
            'Thí sinh điền thông tin nhóm và thành viên theo mẫu Google Form do BTC cung cấp.'
          ]
        },
        {
          title: 'Cách thức dự thi',
          icon: Video,
          items: [
            'BTC công bố "kiến nghị" (motion) dành cho tất cả các đội dự thi.',
            'Mỗi nhóm có quyền lựa chọn đồng ý hoặc không đồng ý với kiến nghị này.',
            'Nhóm thực hiện một video tranh biện để bảo vệ quan điểm của mình.'
          ]
        },
        {
          title: 'Yêu cầu đối với video dự thi',
          icon: CheckCircle,
          items: [
            'Nội dung: Cả 04 thành viên đều phải tham gia trình bày, mỗi thành viên trình bày luận điểm/kiến nghị riêng, kết nối logic.',
            'Hình ảnh: Các thành viên phải xuất hiện rõ ràng từ nửa người trở lên trong khung hình.',
            'Video cần thể hiện sự mạch lạc, sáng tạo, khả năng lập luận và phản biện logic.',
            'Thời lượng: Tối thiểu 03 phút, tối đa 05 phút.',
            'Hình thức: Không giới hạn edit/âm nhạc/đồ họa. Video phải rõ nét, nghe rõ tiếng.'
          ]
        },
        {
          title: 'Cách nộp bài & Kết quả',
          icon: Calendar,
          items: [
            'Cách nộp: Nhóm gửi đường link video (Drive/YouTube) kèm Google Form đăng ký.',
            'Hạn cuối nhận bài: 01/01/2026.',
            'Kết quả: BTC chọn ra 8 đội thi có điểm cao nhất để tiến vào vòng "Sơ khảo".'
          ]
        }
      ]
    }
  },
  {
    id: 'so-khao',
    label: 'Vòng Sơ Khảo',
    icon: Mic2,
    content: {
      title: 'Vòng Sơ Khảo: Tranh Biện Đối Kháng',
      sections: [
        {
          title: 'Hình thức thi đấu',
          icon: Users,
          items: [
            '08 đội chia ngẫu nhiên thành 4 bảng (A, B, C, D), mỗi bảng 2 đội.',
            'Hai đội trong cùng bảng thi đấu trực tiếp (face-to-face).',
            'Bốc thăm vai trò: Proposition (Ủng hộ) hoặc Opposition (Phản đối).'
          ]
        },
        {
          title: 'Cấu trúc buổi Debate',
          icon: Clock,
          items: [
            'Lượt 1 (3 phút): Trình bày luận điểm chính. Ủng hộ trước, Phản đối sau.',
            'Lượt 2 (3 phút): Phát triển luận điểm, mở rộng bằng chứng.',
            'Lượt 3 (4 phút): Phản biện & đặt câu hỏi (POI tối đa 2 câu/40s).',
            'Lượt 4 (2 phút): Tổng kết & khẳng định lại quan điểm.',
            '* Các đội được phép ghi chú và thảo luận nhanh, không ngắt lời đối phương.'
          ]
        },
        {
          title: 'Yêu cầu & Tính điểm',
          icon: Trophy,
          items: [
            'Lập luận rõ ràng, logic, có dẫn chứng và phản biện trực tiếp.',
            'Thể hiện tinh thần teamwork, thái độ văn minh, tôn trọng.',
            'BGK chấm điểm sau từng lượt và đánh giá tổng quan.',
            'BTC chọn ra 4 đội có điểm số cao nhất bước tiếp vào vòng Bán Kết.'
          ]
        }
      ]
    }
  },
  {
    id: 'ban-ket',
    label: 'Bán Kết',
    icon: Trophy,
    content: {
      title: 'Vòng Bán Kết: Trận Chiến Quyết Định',
      sections: [
        {
          title: 'Hình thức thi đấu',
          icon: Users,
          items: [
            '04 đội chia thành 2 bảng (A, B).',
            'Biết trước đề bài (motion) 01 ngày.',
            'Tranh biện đối kháng trực tiếp (face-to-face).'
          ]
        },
        {
          title: 'Cấu trúc Debate',
          icon: Clock,
          items: [
            'Lượt 1 (3 phút): Giới thiệu, đưa ra định nghĩa, 2-3 luận điểm chủ đạo.',
            'Lượt 2 (3 phút): Làm rõ lập luận, mở rộng bằng chứng.',
            'Lượt 3 (4 phút): Phân tích, phản biện lại các luận điểm đối phương (có POI).',
            'Lượt 4 (2 phút): Tóm tắt lập luận, kết luận.',
            'Đội Ủng hộ trình bày trước ở tất cả các lượt.'
          ]
        },
        {
          title: 'Kết quả chung cuộc',
          icon: Trophy,
          items: [
            'BGK chấm điểm sau từng lượt và nhận xét tổng quan.',
            'BTC công bố tổng điểm cuối cùng sau 04 lượt.',
            'Quyết định 2 đội tranh Nhất - Nhì và 2 đội tranh Ba - Tư.'
          ]
        }
      ]
    }
  }
];

const RulesSection = () => {
  const [activeTab, setActiveTab] = useState('vong-don');

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
          <span className="text-steel-blue font-mono tracking-widest uppercase text-xs sm:text-sm mb-2 block">Competition Format</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-mithril">Thể Lệ Cuộc Thi</h2>
        </motion.div>

        {/* Custom Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {rounds.map((round) => {
            const Icon = round.icon;
            const isActive = activeTab === round.id;
            return (
              <button
                key={round.id}
                onClick={() => setActiveTab(round.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 border ${isActive
                    ? 'bg-steel-blue/20 border-steel-blue text-steel-blue shadow-[0_0_15px_rgba(70,130,180,0.3)]'
                    : 'bg-void-black border-mithril/20 text-mithril/60 hover:text-mithril hover:border-mithril/40'
                  }`}
              >
                <Icon size={18} />
                {round.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {rounds.filter(r => r.id === activeTab).map((round) => (
              <motion.div
                key={round.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-5xl mx-auto"
              >
                <div className="bg-void-black/50 backdrop-blur-md border border-mithril/10 rounded-2xl p-6 md:p-10">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-arena-gold mb-8 text-center">
                    {round.content.title}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {round.content.sections.map((section, idx) => {
                      const SectionIcon = section.icon;
                      return (
                        <div key={idx} className="space-y-4">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 rounded-lg bg-steel-blue/10 text-steel-blue">
                              <SectionIcon size={24} />
                            </div>
                            <h4 className="text-xl font-bold text-mithril">{section.title}</h4>
                          </div>
                          <ul className="space-y-3 pl-2">
                            {section.items.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-smoke text-sm md:text-base leading-relaxed">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-steel-blue/50 shrink-0" />
                                <span className="flex-1">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default RulesSection;
