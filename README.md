# Gaco Cosmetics – Website Mỹ Phẩm Thuần Chay 100% Nông Sản Việt

Website thương mại & thông tin chuẩn agency cho **Gaco Cosmetics** (Son dưỡng môi hữu cơ Gấc & Dầu dừa Bến Tre), phục vụ đồ án Marketing số theo khung **SOSTAC** và lấy cảm hứng ngôn ngữ thiết kế từ **Cocoon** (không sao chép trực tiếp).

---

## 🌟 Điểm Nổi Bật

- **Tech Stack Hiện Đại**: React 19, Vite, Tailwind CSS, Framer Motion, Lenis Smooth Scroll.
- **Hệ Thống Đăng Ký / Đăng Nhập (Auth)**: Tích hợp Gaco Member Club, phân nhóm khách hàng theo Persona (*Học sinh/Sinh viên* nhận voucher Combo 149k, *Mẹ bầu* nhận cẩm nang an toàn), lưu phiên LocalStorage.
- **Chuẩn SEO Top 1**: JSON-LD Schema (Organization, Product, Article, FAQ), OpenGraph, meta thẻ chuẩn, bài viết chuyên sâu review son gấc trị thâm.
- **Song Ngữ Tức Thì**: Tiếng Việt & English qua `i18next` không cần reload trang.
- **Dark / Light Mode**: Chuyển đổi mượt mà theo chuẩn hệ thống và lưu LocalStorage.
- **Art Direction**: Phong cách Organic Editorial mộc mạc (giấy kraft, vải linen, cam gấc `#E86A33`, xanh lá `#2E7D32`, nền kem `#FFF8F2`).
- **Sẵn Sàng Triển Khai**: Deploy 1-click lên Vercel và dễ dàng nhúng iframe vào Google Sites thuyết trình.

---

## 🚀 Cài Đặt & Chạy Thử

### 1. Cài đặt dependencies:
```bash
npm install --legacy-peer-deps
```

### 2. Chạy môi trường phát triển (Development):
```bash
npm run dev
```
Truy cập tại: `http://localhost:3000`

### 3. Build sản xuất (Production):
```bash
npm run build
```

### 4. Xem trước bản build:
```bash
npm run preview
```

---

## 📁 Cấu Trúc Thư Mục

```text
website/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/
│   │   └── placeholders/      # Ảnh SVG/Texture gấc, dừa, son, bao bì kraft
│   ├── components/
│   │   ├── auth/              # AuthModal, UserMenu
│   │   ├── cards/             # TrustCard, IngredientCard, TestimonialCard, BlogCard
│   │   ├── common/            # Button, Badge, Modal, ThemeToggle, LangToggle
│   │   ├── layout/            # Navbar, MobileDrawer, Footer
│   │   └── motion/            # SmoothScroll (Lenis)
│   ├── contexts/
│   │   ├── AuthContext.jsx    # Đăng nhập, Đăng ký, Persona, Voucher
│   │   └── ThemeContext.jsx   # Dark / Light Mode
│   ├── hooks/
│   │   ├── useAuth.js
│   │   └── useTheme.js
│   ├── layouts/
│   │   └── MainLayout.jsx
│   ├── locales/
│   │   ├── en/translation.json
│   │   └── vi/translation.json
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── ProductPage.jsx
│   │   ├── IngredientsPage.jsx
│   │   ├── BlogPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── AccountPage.jsx
│   │   └── NotFoundPage.jsx
│   ├── routes/
│   │   └── index.jsx
│   ├── styles/
│   │   └── index.css
│   └── utils/
│       ├── constants.js
│       └── seo.jsx
└── tailwind.config.js
```

---

## 📋 Hướng Dẫn Nhúng Google Sites

Sau khi deploy lên Vercel:
1. Mở trang Google Sites của đồ án.
2. Chọn **Chèn (Insert)** $\rightarrow$ **Nhúng (Embed)** $\rightarrow$ **Bằng URL (By URL)**.
3. Dán link Vercel của website (ví dụ: `https://gaco-cosmetics.vercel.app`).
4. Kéo giãn khung hình 100% chiều rộng để trang hiển thị trọn vẹn và tương tác mượt mà.
