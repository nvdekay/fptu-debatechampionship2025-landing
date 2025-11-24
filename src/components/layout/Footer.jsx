import React from "react";
import { Facebook, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-void-black border-t border-mithril/10 py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-t from-steel-blue/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif font-bold text-mithril mb-2">
              <span className="text-magma-red">FPTU</span> DEBATE CHAMPIONSHIP
            </h3>
            <p className="text-smoke text-sm max-w-md">
              Đấu trường rèn trí tuệ - Nơi bản lĩnh được tôi luyện qua từng lập
              luận sắc bén.
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="#"
              className="text-mithril/60 hover:text-arena-gold transition-colors transform hover:scale-110"
            >
              <Facebook size={24} />
            </a>
            <a
              href="#"
              className="text-mithril/60 hover:text-arena-gold transition-colors transform hover:scale-110"
            >
              <Instagram size={24} />
            </a>
            <a
              href="#"
              className="text-mithril/60 hover:text-arena-gold transition-colors transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-mithril/5 text-center text-xs text-mithril/40 font-mono">
          <p>
            &copy; {new Date().getFullYear()} FPTU Debate Championship. All
            rights reserved.
          </p>
          <p className="mt-2">
            Designed and developed by{" "}
            <a
              href="https://github.com/nvdekay"
              target="_blank"
              rel="noopener noreferrer"
              className="text-arena-gold hover:underline"
            >
              Nguyen Vu Dang Khanh
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
