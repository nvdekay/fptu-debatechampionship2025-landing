import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-mithril/10 last:border-none">
      <button
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
        onClick={onClick}
      >
        <span className={`text-lg md:text-xl font-serif font-medium transition-colors duration-300 ${isOpen ? 'text-arena-gold' : 'text-mithril group-hover:text-white'}`}>
          {question}
        </span>
        <span className={`ml-4 p-2 rounded-full border transition-all duration-300 ${isOpen ? 'border-arena-gold text-arena-gold rotate-180' : 'border-mithril/30 text-mithril/50 group-hover:border-mithril group-hover:text-mithril'}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-smoke leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const QnASection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Ai có thể tham gia FPTU Debate Championship?",
      answer: "Cuộc thi mở rộng cho tất cả sinh viên đang theo học tại Đại học FPT và các trường đại học trên địa bàn thành phố. Không giới hạn chuyên ngành hay năm học."
    },
    {
      question: "Lệ phí tham gia là bao nhiêu?",
      answer: "Lệ phí tham gia là 150.000 VNĐ/đội (đã bao gồm áo đồng phục và tài liệu training). Các đội sẽ đóng phí sau khi vượt qua vòng đơn."
    },
    {
      question: "Tôi chưa có kinh nghiệm tranh biện có tham gia được không?",
      answer: "Hoàn toàn được! BTC sẽ tổ chức các buổi workshop và training chuyên sâu từ cơ bản đến nâng cao với các chuyên gia hàng đầu để trang bị kỹ năng cho các bạn trước khi bước vào vòng đấu chính thức."
    },
    {
      question: "Làm sao để tìm đồng đội nếu tôi đăng ký cá nhân?",
      answer: "BTC sẽ hỗ trợ ghép đội cho các thí sinh đăng ký cá nhân (Free Agent) dựa trên kinh nghiệm và nguyện vọng của các bạn. Hãy tham gia group cộng đồng của giải đấu để tìm kiếm đồng đội phù hợp."
    }
  ];

  return (
    <section id="qna" className="py-24 bg-void-black relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute -right-20 top-1/4 w-96 h-96 bg-steel-blue/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -left-20 bottom-1/4 w-96 h-96 bg-magma-red/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-mithril mb-4">Hỏi Đáp <span className="text-magma-red">&</span> Thắc Mắc</h2>
          <p className="text-smoke">Giải đáp những câu hỏi thường gặp về giải đấu.</p>
        </motion.div>

        <div className="bg-void-black/50 backdrop-blur-md border border-mithril/10 rounded-2xl p-6 md:p-10 shadow-2xl">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QnASection;
