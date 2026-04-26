# 🎓 Codigma Academy Website

Codigma Academy üçün tam responsiv akademik veb platforması. HTML5, CSS3 və vanilla JavaScript ilə qurulmuşdur.

## 📋 Xüsusiyyətlər

### ✨ Responsiv Dizayn
- **3 Breakpoint**: Tablet (1024px), Mobile (767px), Extra Small (479px)
- **Mobile-First Approach**: Mobil cihazlardan başlayaraq dizayn edilmiş
- **Hamburger Menü**: Mobil cihazlarda navigation menüsü hamburger buton ilə açılır
- **Adaptive Grids**: Kurs kartları, blog məqalələri və digər elementlər cihazın ölçüsünə uyğunlaşır

### 🎯 Səhifələr
- **Ana Səhifə** (`index.html`) - Kurs və xidmətlərin showcase
- **Haqqımızda** (`about.html`) - Şirkət haqqında məlumat
- **Kurslar** (`courses/index.html`) - Bütün IT kurslarının siyahısı və filter bar
- **Blog** (`blog.html`) - Məqalələrin siyahısı və axtarış
- **Blog Məqalə** (`blog-post.html`) - Fərdi blog məqaləsi
- **İcma** (`reviews.html`) - Tələbə rəyləri və dəyərləndirilmə
- **Karyera** (`careers.html`) - İş mövcudiyyətləri
- **Əlaqə** (`contact.html`) - Əlaqə forması
- **Admin Panel** (`admin/`) - Məzun paneli (admin.css)

### 🛠️ Texnoloji Yığın
- **HTML5** - Semantik markup
- **CSS3** - Media queries, flexbox, grid
- **JavaScript (Vanilla)** - Event listeners, DOM manipulation
- **Responsive Design** - Mobile-first approach

### 📱 Responsiv Komponentlər

#### Navigation
- Desktop: Horizontal menü + CTA button
- Mobile: Hamburger menü toggle
- Animation: Smooth max-height transition

#### Grids
- **Desktop (1024px+)**: 4 sütun
- **Tablet (768-1024px)**: 2 sütun
- **Mobile (480-767px)**: 1 sütun
- **Extra Small (<480px)**: 1 sütun (minimal padding)

#### Filter Bar
- Desktop: Hamısı göstərilən
- Mobile: Horizontal scroll qabiliyyəti
- Buttons: White-space nowrap, flex-shrink 0

#### Modal Forms
- Desktop: Standart width
- Mobile: 90vw, full-width minus margins
- Extra Small: 95vw, minimal padding

### 📊 Kurslar
- Full-Stack Web Development
- Python & Data Science
- Cloud & DevOps
- Mobil Tətbiq (React Native)
- Kibertəhlükəsizlik
- Backend & Verilənlər Bazası

## 🎨 Dizayn Sistemi

### Rəng Palette
- **Primary**: #2563eb (Blue)
- **Dark**: #0f172a (Slate)
- **Light**: #f8fafc (Light Gray)
- **Accent**: #60a5fa (Light Blue)

### Typography
- **Headings**: 800 weight (bold)
- **Body**: 400-500 weight
- **Font Size Scale**: 11px (mobile) → 16px (desktop)

### Spacing
- Desktop padding: 48px
- Tablet padding: 32px
- Mobile padding: 20px
- Extra Small padding: 16px

## 📁 Fayllar Strukturu

```
codigma/
├── index.html              # Ana səhifə
├── about.html              # Haqqımızda
├── blog.html               # Blog siyahısı
├── blog-post.html          # Blog məqalə
├── contact.html            # Əlaqə forması
├── careers.html            # Karyera səhifəsi
├── reviews.html            # Rəyləri
├── styles.css              # Əsas stilləri (public pages)
├── admin.css               # Admin panel stil
├── admin/
│   └── index.html          # Admin paneli
├── courses/
│   └── index.html          # Kurslar səhifəsi
├── about/
│   └── index.html          # Haqqımızda alt səhifə (isteğe bağlı)
├── contact/
│   └── index.html          # Əlaqə alt səhifə (isteğe bağlı)
├── careers/
│   └── index.html          # Karyera alt səhifə (isteğe bağlı)
├── reviews/
│   └── index.html          # İcma alt səhifə (isteğe bağlı)
├── images/                 # Şəkillər və ikonalar
└── README.md               # Bu faylı
```

## 🚀 Başlanğıc

### Lokal Serverde Çalıştırma
1. Layihəni klonlayın:
```bash
git clone https://github.com/RafaelMmdv/academy-website.git
cd academy-website
```

2. Lokal serveri başladın (Python):
```bash
python -m http.server 8000
```

3. Brauzerda açın:
```
http://localhost:8000
```

### Deploy Etmə
- GitHub Pages, Vercel, Netlify və ya hər hansı statik hosting istifadə edin
- `main` branşa push edərək deploy edilər

## 📱 Responsiv Test

### Desktop (1024px+)
- ✅ Full navigation bar
- ✅ Multi-column grids
- ✅ Horizontal layouts

### Tablet (768-1024px)
- ✅ Adjusted spacing
- ✅ 2-column grids
- ✅ Optimized navigation

### Mobile (480-767px)
- ✅ Hamburger menu
- ✅ Single-column layouts
- ✅ Horizontal scroll (filter bar)
- ✅ Full-width modals

### Extra Small (<480px)
- ✅ Minimal padding
- ✅ Tiny fonts
- ✅ Compact buttons
- ✅ Optimized for thumbs

## 🔧 CSS Media Queries

```css
/* Tablet */
@media (max-width: 1024px) { ... }

/* Mobile */
@media (max-width: 767px) { ... }

/* Extra Small */
@media (max-width: 479px) { ... }
```

## ✅ Tamamlanan Responsiv Komponentlər

- ✅ Navigation (hamburger menu)
- ✅ Footer (responsive grid)
- ✅ Hero sections (scaled typography)
- ✅ Course cards (adaptive grid)
- ✅ Blog section (responsive layout)
- ✅ Contact forms (mobile-friendly)
- ✅ Filter bar (horizontal scroll)
- ✅ Admin panel (sidebar collapse, tables)
- ✅ Modal forms (full-width mobile)
- ✅ Statistics (adaptive grid)

## 📞 İletişim

**Codigma Academy**
- 📧 Email: info@codigma.az
- 📍 Şəhər: Bakı, Azərbaycan
- 🌐 Website: https://codigma.academy

## 📜 Lisenziya

MIT License - Sərbəst istifadə üçün

## 👨‍💻 Geliştirici

Codigma Academy Development Team

---

**Son Güncelleme**: April 2026
**Versiyon**: 1.0.0
