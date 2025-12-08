import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-mithril/10 last:border-none">
      <button
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group cursor-pointer"
        onClick={onClick}
      >
        <span className={`text-base sm:text-lg md:text-xl font-serif font-medium transition-colors duration-300 pr-4 ${isOpen ? 'text-arena-gold' : 'text-mithril group-hover:text-white'}`}>
          {question}
        </span>
        <span className={`shrink-0 p-2 rounded-full border transition-all duration-300 ${isOpen ? 'border-arena-gold text-arena-gold rotate-180' : 'border-mithril/30 text-mithril/50 group-hover:border-mithril group-hover:text-mithril'}`}>
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
            <div className="pb-6 text-smoke leading-relaxed text-sm sm:text-base">
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
      question: "Ai có thể tham gia FPTU Debate Championship 2026?",
      answer: "Tất cả sinh viên FPTU Hà Nội đều có thể đăng ký, không yêu cầu kinh nghiệm tranh biện trước đó. Chỉ cần tinh thần học hỏi và sẵn sàng thử thách."
    },
    {
      question: "Tôi chưa từng tranh biện, liệu có thể tham gia không?",
      answer: "Có. Cuộc thi được thiết kế theo hành trình \"Ignite → Forge → Sharpen → Clash\", giúp bạn phát triển kỹ năng từ cơ bản đến nâng cao. Người mới hoàn toàn vẫn có thể tham gia và tiến sâu nếu có tư duy logic và sự chuẩn bị tốt."
    },
    {
      question: "Hình thức thi là cá nhân hay theo đội?",
      answer: "Cuộc thi được thi theo đội (team). Các đội tự thành lập trước khi đăng ký."
    },
    {
      question: "Có bắt buộc phải tham gia đầy đủ tất cả vòng thi không?",
      answer: "Có. Sau khi đăng ký, thí sinh cần cam kết tham gia đầy đủ các vòng thi để đảm bảo tính công bằng, tiến độ và chất lượng giải đấu."
    },
    {
      question: "Có lệ phí tham gia không?",
      answer: "Lệ phí cam kết cho mỗi đội thi là 400.000 VNĐ, tương đương 100.000 VNĐ/người. Phí sẽ được hoàn trả sau khi đội thi hoàn thành cuộc thi và hoàn thành chương trình."
    },
    {
      question: "Bao lâu thì có kết quả mỗi vòng?",
      answer: "Kết quả sẽ được công bố sau mỗi vòng thi, thông qua fanpage và email."
    },
    {
      question: "Nếu đội bỏ thi giữa chừng có sao không?",
      answer: "Đội bỏ thi sẽ bị loại và không được hoàn lại phí cam kết. Ngoài ra, đội có thể bị hạn chế tham gia các mùa sau tùy quy định BTC."
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

        <div className="bg-void-black/50 backdrop-blur-md border border-mithril/10 rounded-2xl p-4 sm:p-6 md:p-10 shadow-2xl">
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
