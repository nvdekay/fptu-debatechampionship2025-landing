import React from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Globe,
  Phone,
  MapPin,
  User,
  Star,
  Sparkles,
  Mail,
} from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: <Facebook size={20} />,
      label: "Facebook",
      href: "https://www.facebook.com/fptuchampionship/",
    },
    {
      icon: <Globe size={20} />,
      label: "Website",
      href: "https://fptu-debatechampionship2026.vercel.app/"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <footer
      className="w-full text-mithril border-t border-magma-red/40 py-12 
      bg-linear-to-b from-void-black via-magma-red/5 to-black relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-magma-red/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              color: i % 2 === 0 ? "rgba(239,68,68,0.25)" : "rgba(229,231,235,0.25)", // Using magme-like red and mithril-like gray
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.1, 0.4, 0.1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 12 + Math.random() * 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 4,
            }}
          >
            {i % 2 === 0 ? <Star size={16} /> : <Sparkles size={16} />}
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-[1630px] mx-auto px-6 relative z-10"
      >
        {/* ===== Top Content ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10 items-start">
          {/* Logo + Social */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center lg:items-start"
          >
            <motion.h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-magma-red via-mithril to-white mb-4 font-serif text-center lg:text-left">
              FPTU Debate Championship 2026
            </motion.h3>

            <motion.p
              className="text-smoke text-sm text-center lg:text-left italic mb-4"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              "Nơi định mệnh được khám phá qua nghệ thuật tranh biện"
            </motion.p>

            <div className="flex gap-4">
              {socialLinks.map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="w-10 h-10 rounded-full bg-linear-to-br from-magma-red to-void-black border border-magma-red/30 flex items-center justify-center text-mithril hover:text-white"
                  whileHover={{
                    scale: 1.15,
                    rotate: 360,
                    boxShadow: "0 0 15px rgba(239,68,68,0.6)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-4 lg:text-left"
          >
            <h4 className="text-xl font-bold text-magma-red mb-2 font-serif">
              Thông tin liên hệ
            </h4>

            <motion.div
              className="flex items-start gap-3 justify-center lg:justify-start"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <MapPin className="text-2xl text-magma-red flex-shrink-0" size={24} />
              <a
                href="https://goo.gl/maps/AYC7XBBsCnfwXKQj9"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-smoke hover:text-magma-red transition-colors"
              >
                Đại học FPT, Khu Công nghệ cao Hòa Lạc,
                <br />
                KM 29 Đại lộ Thăng Long, Hà Nội, Việt Nam
              </a>
            </motion.div>

            <motion.div
              className="flex items-center gap-3"
              whileHover={{ x: 5 }}
            >
              <Mail className="text-2xl text-magma-red" size={24} />
              <a
                href="mailto:debate.fpt@gmail.com"
                className="text-sm text-smoke hover:text-magma-red transition-colors"
              >
                fptu.debatechampionship@gmail.com
              </a>
            </motion.div>
          </motion.div>

          {/* 👤 Organizer */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-3 text-center lg:items-start lg:text-left"
          >
            <h4 className="text-xl font-bold text-mithril mb-2 font-serif">
              Ban Tổ Chức
            </h4>

            {/* Head of Organization */}
            <div className="flex flex-row gap-4 xl:gap-8 justify-center lg:justify-start flex-wrap lg:flex-nowrap">
              <div className="min-w-[140px]">
                <motion.div
                  className="flex items-start gap-3 justify-center lg:justify-start"
                  whileHover={{ x: 5 }}
                >
                  <User className="text-2xl text-magma-red shrink-0" size={20} />
                  <div className="text-xs sm:text-sm text-smoke text-left">
                    <p className="font-semibold text-mithril mb-0.5">
                      Head of Org
                    </p>
                    <p className="text-magma-red whitespace-nowrap">Nguyễn Văn Hiệp</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-3 justify-center lg:justify-start mt-1.5 pl-[2px]"
                  whileHover={{ x: 5 }}
                >
                  <Phone className="text-lg text-smoke shrink-0" size={16} />
                  <a
                    href="tel:0906165937"
                    className="text-xs sm:text-sm text-smoke hover:text-magma-red transition-colors whitespace-nowrap"
                  >
                    0906165937
                  </a>
                </motion.div>
              </div>

              {/* Human Resources 1 */}
              <div className="min-w-[140px]">
                <motion.div
                  className="flex items-start gap-3 justify-center lg:justify-start"
                  whileHover={{ x: 5 }}
                >
                  <User className="text-2xl text-magma-red shrink-0" size={20} />
                  <div className="text-xs sm:text-sm text-smoke text-left">
                    <p className="font-semibold text-mithril mb-0.5">
                      HR Manager
                    </p>
                    <p className="text-magma-red whitespace-nowrap">Vũ Kỳ Anh</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-3 justify-center lg:justify-start mt-1.5 pl-[2px]"
                  whileHover={{ x: 5 }}
                >
                  <Phone className="text-lg text-smoke shrink-0" size={16} />
                  <a
                    href="tel:0947031104"
                    className="text-xs sm:text-sm text-smoke hover:text-magma-red transition-colors whitespace-nowrap"
                  >
                    0947031104
                  </a>
                </motion.div>
              </div>

              {/* Human Resources 2 */}
              <div className="min-w-[140px]">
                <motion.div
                  className="flex items-start gap-3 justify-center lg:justify-start"
                  whileHover={{ x: 5 }}
                >
                  <User className="text-2xl text-magma-red shrink-0" size={20} />
                  <div className="text-xs sm:text-sm text-smoke text-left">
                    <p className="font-semibold text-mithril mb-0.5">
                      HR Manager
                    </p>
                    <p className="text-magma-red whitespace-nowrap">Phạm T. Anh Thư</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-3 justify-center lg:justify-start mt-1.5 pl-[2px]"
                  whileHover={{ x: 5 }}
                >
                  <Phone className="text-lg text-smoke shrink-0" size={16} />
                  <a
                    href="tel:0981703557"
                    className="text-xs sm:text-sm text-smoke hover:text-magma-red transition-colors whitespace-nowrap"
                  >
                    0981703557
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ===== Divider ===== */}
        <motion.div
          className="w-full h-px bg-linear-to-r from-transparent via-magma-red to-transparent mb-6"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        />

        {/* ===== Bottom Row ===== */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-smoke/60 font-mono"
        >
          <motion.p
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            © 2026 FPTU Debate Championship. All rights reserved.
          </motion.p>
          <motion.a
            href="https://khanhnvd.site/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            Designed and Developed by{" "}
            <span className="text-magma-red font-semibold">
              Nguyen Vu Dang Khanh
            </span>
          </motion.a>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
