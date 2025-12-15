# 🔥 FPTU Debate Championship 2026 - MindForge

[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1.15-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-latest-FF0080?logo=framer&logoColor=white)](https://www.framer.com/motion/)

> **Đấu trường rèn trí tuệ** - Landing page chính thức cho giải tranh biện lớn nhất FPTU Hà Nội 2026.

## 🎨 Giới thiệu

Website landing page cao cấp cho **FPTU Debate Championship 2026** với concept thiết kế "MindForge" - kết hợp phong cách **Magical, Mysterious, và Industrial**. Trang web mô phỏng hành trình rèn luyện trí tuệ qua 4 giai đoạn: Ignite, Forge, Sharpen, và Clash.

### ✨ Tính năng nổi bật

- 🌟 **Animations cao cấp** với Framer Motion (60 FPS)
- 🎭 **Particle system** với 40+ ember effects động
- 🔥 **Glitch effects** và screen shake interactions
- 📱 **Responsive hoàn toàn** (Mobile, Tablet, Desktop)
- ⚡ **Performance tối ưu** với lazy loading và code splitting
- 🎯 **Scroll-triggered animations** mượt mà
- 🌐 **Hỗ trợ tiếng Việt** hoàn hảo với font Playfair Display & Inter

## 🎬 Demo

Trải nghiệm live tại: [https://fptu-debatechampionship2026.vercel.app/](https://fptu-debate-championship.vercel.app) *(coming soon)*

## 🛠️ Tech Stack

### Core
- **React 19.1.1** - UI framework
- **Vite 7.1.7** - Build tool & dev server
- **TailwindCSS 4.1.15** - Utility-first CSS framework

### Animation & Interaction
- **Framer Motion** - Animations và gesture handling
- **Lucide React** - Icon library

### Styling & Fonts
- **Google Fonts** - Playfair Display (serif) + Inter (sans-serif)
- **Custom color palette** - Void Black, Magma Red, Arena Gold, Steel Blue, Mithril

## 📦 Cài đặt

### Yêu cầu hệ thống
- Node.js 18+ 
- npm 9+ hoặc yarn 1.22+

### Bước 1: Clone repository
```bash
git clone https://github.com/nvdekay/fptu-debatechampionship2025-landing.git
cd fptu-debatechampionship2025-landing
```

### Bước 2: Cài đặt dependencies
```bash
npm install
```

### Bước 3: Chạy development server
```bash
npm run dev
```

Mở trình duyệt tại `http://localhost:5173`

## 📜 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Khởi động dev server với hot reload |
| `npm run build` | Build production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Chạy ESLint để kiểm tra code quality |

## 🗂️ Cấu trúc thư mục

```
fptu-debatechampionship2026-landing/
├── public/                    # Static assets
│   └── img/                   # Images
├── src/
│   ├── components/
│   │   ├── layout/            # Layout components
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── ParticlesBackground.jsx
│   │   └── ui/                # Reusable UI components (future)
│   ├── features/              # Feature-based modules
│   │   ├── hero/              # Hero section với countdown
│   │   │   ├── HeroSection.jsx
│   │   │   └── CountdownTimer.jsx
│   │   ├── timeline/          # MindForge 4-phase timeline
│   │   │   ├── MindForgeTimeline.jsx
│   │   │   └── TimelineNode.jsx
│   │   ├── benefits/          # Quyền lợi khi tham gia
│   │   │   └── BenefitsSection.jsx
│   │   ├── prizes/            # Cơ cấu giải thưởng
│   │   │   └── PrizesSection.jsx
│   │   └── rules/             # Thể lệ và QnA
│   │       ├── RulesSection.jsx
│   │       └── QnASection.jsx
│   ├── styles/
│   │   └── index.css          # Global styles & custom utilities
│   ├── App.jsx                # Root component
│   └── main.jsx               # Entry point
├── tailwind.config.js         # Tailwind configuration
├── vite.config.js             # Vite configuration
└── package.json
```

## 🎨 Design System

### Color Palette
```javascript
{
  'void-black': '#050505',    // Background chính
  'magma-red': '#7F1D1D',     // Phase 1: Ignite
  'arena-gold': '#D9AF2C',    // Accents & highlights
  'steel-blue': '#132750',    // Phase 2: Forge
  'mithril': '#E5E7EB',       // Text chính
  'smoke': '#9CA3AF'          // Text phụ
}
```

### Typography
- **Headings**: Playfair Display (serif) - Bold, elegant
- **Body**: Inter (sans-serif) - Clean, readable
- **Monospace**: Default mono - Code & counters

### Breakpoints
```javascript
{
  'sm': '640px',
  'md': '768px',
  'lg': '1024px',
  'xl': '1280px',
  '2xl': '1536px'
}
```

## 🧩 Sections

### 1. Hero Section
- Countdown timer đến ngày thi đấu (12/08/2026)
- Particle effects với ember animations
- Glitch effect trên title
- CTA button với skew transform

### 2. MindForge Timeline
- 4 phases: Ignite → Forge → Sharpen → Clash
- Scroll-triggered animations
- Molten gold progress line
- Responsive alternating layout

### 3. Benefits Section
- 6 quyền lợi chính khi tham gia
- Glass card design với hover effects
- Icon-based visual hierarchy

### 4. Prizes Section
- Tổng giải thưởng: 29.000.000 VNĐ
- 5 hạng giải với color-coded cards
- Glow effects theo màu giải

### 5. Rules Section
- 4 thể lệ chính: Luật AP, Thời gian, Đội hình, Giải thưởng
- Industrial steel plate drop animations
- Hover reveal effects

### 6. QnA Section
- 7 câu hỏi thường gặp
- Accordion với smooth expand/collapse
- Icon indicators (Plus/Minus)

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Drag & drop folder dist/ lên Netlify
```

### Cloudflare Pages
```bash
npm run build
# Deploy folder dist/
```

## 🤝 Đóng góp

Dự án này được phát triển bởi **Nguyen Vu Dang Khanh** cho FPTU Debate Championship 2026.

## 📄 License

Copyright © 2026 FPTU Debate Championship. All rights reserved.

## 🔗 Liên hệ

- **GitHub**: [@nvdekay](https://github.com/nvdekay)
- **Email**: contact@fptu-debate.com
- **Facebook Page**: [FPTU Debate Championship](https://facebook.com/fptudebate)

---

<p align="center">Made with ❤️ and ☕ for FPTU Hà Nội</p>
