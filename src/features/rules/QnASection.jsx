import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Search, MoreHorizontal, Phone, Video, Send, Image as ImageIcon, Smile, Mic, ArrowLeft } from 'lucide-react';

const QnASection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showMobileChat, setShowMobileChat] = useState(false);

  const faqs = [
    {
      id: 1,
      question: "Ai có thể tham gia FPTU Debate Championship 2026?",
      answer: "Tất cả sinh viên trên địa bàn Hà Nội đều có thể đăng ký, không yêu cầu kinh nghiệm tranh biện trước đó. Chỉ cần tinh thần học hỏi và sẵn sàng thử thách.",
      time: "10:30 AM"
    },
    {
      id: 2,
      question: "Tôi chưa từng tranh biện, liệu có thể tham gia không?",
      answer: "Có. Cuộc thi được thiết kế theo hành trình \"Ignite → Forge → Sharpen → Clash\", giúp bạn phát triển kỹ năng từ cơ bản đến nâng cao. Người mới hoàn toàn vẫn có thể tham gia và tiến sâu nếu có tư duy logic và sự chuẩn bị tốt.",
      time: "09:15 AM"
    },
    {
      id: 3,
      question: "Hình thức thi là cá nhân hay theo đội?",
      answer: "Cuộc thi được thi theo đội (team). Các đội tự thành lập trước khi đăng ký.",
      time: "Yesterday"
    },
    {
      id: 4,
      question: "Có bắt buộc phải tham gia đầy đủ tất cả vòng thi không?",
      answer: "Có. Sau khi đăng ký, thí sinh cần cam kết tham gia đầy đủ các vòng thi để đảm bảo tính công bằng, tiến độ và chất lượng giải đấu.",
      time: "Yesterday"
    },
    {
      id: 5,
      question: "Có lệ phí tham gia không?",
      answer: "Lệ phí cam kết cho mỗi đội thi là 400.000 VNĐ, tương đương 100.000 VNĐ/người. Phí sẽ được hoàn trả sau khi đội thi hoàn thành cuộc thi và hoàn thành chương trình.",
      time: "Mon"
    },
    {
      id: 6,
      question: "Bao lâu thì có kết quả mỗi vòng?",
      answer: "Kết quả sẽ được công bố sau mỗi vòng thi, thông qua fanpage và email.",
      time: "Mon"
    },
    {
      id: 7,
      question: "Nếu đội bỏ thi giữa chừng có sao không?",
      answer: "Đội bỏ thi sẽ bị loại và không được hoàn lại phí cam kết. Ngoài ra, đội có thể bị hạn chế tham gia các mùa sau tùy quy định BTC.",
      time: "Sun"
    }
  ];

  return (
    <section id="qna" className="py-24 bg-void-black relative overflow-hidden min-h-screen">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(19,39,80,0.1),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(127,29,29,0.05),transparent_50%)] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-mithril mb-4">Hỏi Đáp <span className="text-magma-red">&</span> Thắc Mắc</h2>
          <p className="text-smoke">Giải đáp những câu hỏi thường gặp về giải đấu.</p>
        </motion.div>

        {/* Unified Chat Interface */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto bg-void-black/60 backdrop-blur-xl border border-mithril/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row h-[600px] md:h-[700px]"
        >
          {/* Left Sidebar - Chat List */}
          {/* Mobile: Hidden if chat open. Desktop: Always visible */}
          <div className={`w-full md:w-[350px] lg:w-[400px] bg-void-black/40 border-b md:border-b-0 md:border-r border-mithril/10 flex-col h-full md:h-full ${showMobileChat ? 'hidden md:flex' : 'flex'}`}>
            {/* Header */}
            <div className="p-4 border-b border-mithril/10 flex justify-between items-center bg-void-black/20">
              <h3 className="text-xl font-bold text-mithril">Chats</h3>
              <div className="flex gap-2">
                <div className="p-2 rounded-full hover:bg-mithril/10 cursor-pointer text-mithril"><MoreHorizontal size={20} /></div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="p-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-smoke/50" size={16} />
                <input
                  type="text"
                  placeholder="Search Messenger"
                  disabled
                  className="w-full bg-mithril/5 border border-mithril/10 rounded-full py-2 pl-9 pr-4 text-sm text-mithril focus:outline-none focus:border-mithril/30 cursor-not-allowed"
                />
              </div>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-1">
              {faqs.map((faq, index) => (
                <div
                  key={faq.id}
                  onClick={() => {
                    setActiveIndex(index);
                    setShowMobileChat(true);
                  }}
                  className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200 ${activeIndex === index ? 'bg-steel-blue/20' : 'hover:bg-mithril/5'}`}
                >
                  <div className="relative shrink-0">
                    <div className="w-12 h-12 rounded-full bg-linear-to-tr from-mithril/20 to-mithril/10 border border-mithril/20 flex items-center justify-center text-mithril">
                      <User size={24} />
                    </div>
                    <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-void-black rounded-full shadow-[0_0_8px_rgba(34,197,94,0.4)]"></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className={`text-sm font-semibold truncate ${activeIndex === index ? 'text-white' : 'text-mithril'}`}>User Data.0{index + 1}</h4>
                    <div className="flex items-center gap-2">
                      <p className={`text-xs truncate max-w-[140px] ${activeIndex === index ? 'text-blue-200' : 'text-smoke'}`}>{faq.question}</p>
                      <span className="text-[10px] text-smoke/50 whitespace-nowrap">· {faq.time}</span>
                    </div>
                  </div>
                  {activeIndex === index && (
                    <div className="w-2 h-2 rounded-full bg-steel-blue shrink-0"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Main - Active Chat */}
          {/* Mobile: Flex if chat open, hidden if not. Desktop: Always flex */}
          <div className={`flex-1 flex-col bg-void-black/20 h-full md:h-full ${showMobileChat ? 'flex' : 'hidden md:flex'}`}>
            {/* Chat Header */}
            <div className="p-4 border-b border-mithril/10 flex justify-between items-center bg-void-black/40 backdrop-blur-sm z-10 shadow-sm">
              <div className="flex items-center gap-3">
                {/* Back Button for Mobile */}
                <button
                  onClick={() => setShowMobileChat(false)}
                  className="md:hidden text-mithril hover:text-white mr-1"
                >
                  <ArrowLeft size={24} />
                </button>

                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-void-black border border-arena-gold/30 p-0.5">
                    <img src="/img/icon.webp" alt="Admin" className="w-full h-full object-contain rounded-full" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-void-black rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-bold text-mithril flex items-center gap-2 text-sm sm:text-base">
                    <span className="truncate max-w-[150px] sm:max-w-none">FPTU Debate Championship 2026</span>
                    <span className="bg-arena-gold text-void-black text-[10px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider shrink-0">Bot</span>
                  </h3>
                  <p className="text-xs text-arena-gold">Active now</p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-4 text-steel-blue">
                <Phone size={20} className="hover:text-arena-gold cursor-pointer" />
                <Video size={20} className="hover:text-arena-gold cursor-pointer" />
                <MoreHorizontal size={20} className="hover:text-arena-gold cursor-pointer" />
              </div>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-4 md:p-6 space-y-6 flex flex-col">
              <div className="flex-1"></div> {/* Spacer to push messages down if few */}

              <div className="text-center text-xs text-smoke/40 my-4 uppercase tracking-widest font-mono">Today {faqs[activeIndex].time}</div>

              {/* User Question */}
              <motion.div
                key={`q-${activeIndex}`}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="flex items-end justify-end gap-2 group"
              >
                <div className="order-1 max-w-[80%] md:max-w-[70%]">
                  <div className="bg-steel-blue text-white p-3 md:p-4 rounded-2xl rounded-tr-none text-sm md:text-base leading-relaxed shadow-md">
                    {faqs[activeIndex].question}
                  </div>
                </div>
              </motion.div>

              {/* Admin Answer */}
              <motion.div
                key={`a-${activeIndex}`}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="flex items-end justify-start gap-2"
              >
                <div className="w-8 h-8 shrink-0 mb-1">
                  <img src="/img/icon.webp" alt="Admin" className="w-full h-full object-contain rounded-full border border-arena-gold/30" />
                </div>
                <div className="max-w-[80%] md:max-w-[70%]">
                  <div className="bg-mithril/10 text-mithril border border-mithril/10 p-3 md:p-4 rounded-2xl rounded-tl-none text-sm md:text-base leading-relaxed shadow-sm">
                    {faqs[activeIndex].answer}
                  </div>
                  <span className="text-[10px] text-smoke/40 ml-2 mt-1 block">Seen just now</span>
                </div>
              </motion.div>
            </div>

            {/* Chat Footer */}
            <div className="p-3 md:p-4 border-t border-mithril/10 bg-void-black/20">
              <div className="flex items-center gap-3">
                <div className="flex gap-2 text-steel-blue">
                  <ImageIcon size={20} className="cursor-pointer hover:text-arena-gold" />
                  <Mic size={20} className="cursor-pointer hover:text-arena-gold" />
                </div>
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Reply to FPTU Debate Championship 2026..."
                    className="w-full bg-mithril/5 border border-mithril/10 rounded-full py-2.5 pl-4 pr-10 text-sm text-mithril focus:outline-none cursor-not-allowed"
                  />
                  <Smile className="absolute right-3 top-1/2 -translate-y-1/2 text-smoke/50" size={18} />
                </div>
                <div className="text-steel-blue cursor-pointer hover:text-arena-gold">
                  <Send size={24} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QnASection;
