# Tushar Dogne - Portfolio Website

> **AI/ML Engineer | Data Scientist | Full Stack Developer**

A premium personal portfolio website built with React, Tailwind CSS, and Framer Motion. Designed to showcase projects, skills, and experience with a professional, modern aesthetic.

![Portfolio Preview](https://via.placeholder.com/1200x630/1E40AF/FFFFFF?text=Tushar+Dogne+Portfolio)

## 🚀 Live Demo

**[View Live Portfolio](https://tushardogne.vercel.app)** *(Replace with your actual URL)*

---

## ✨ Features

### Design & UX
- **Premium Royal White Theme** — Clean, professional aesthetic with Royal Blue, Gold, and Emerald accents
- **Smooth Scroll Animations** — Framer Motion powered scroll reveals and transitions
- **Responsive Design** — Mobile-first, looks perfect on all devices
- **Loading Screen** — Elegant preloader with brand identity
- **Scroll Progress Bar** — Visual indicator at the top of the page
- **Back to Top Button** — Appears after scrolling down

### Sections
1. **Hero** — Typewriter effect, floating badges, call-to-action buttons
2. **About** — Professional story with stats cards and future goals
3. **Skills** — Interactive category tabs with animated progress bars
4. **Experience** — Timeline design with color-coded entries
5. **Projects** — Filterable grid with detail modals
6. **AI & Data Science** — ML workflow visualization and capability cards
7. **Certifications** — IBM, Python, MERN, Java certificates
8. **Achievements** — Animated counters with highlights
9. **GitHub Stats** — Contribution graph and language breakdown
10. **Contact** — Functional form with social links
11. **Footer** — Quick links, social icons, copyright

### Technical Highlights
- React 18 with functional components and hooks
- Tailwind CSS for utility-first styling
- Framer Motion for declarative animations
- React Intersection Observer for scroll triggers
- React CountUp for animated numbers
- React Type Animation for hero text
- Fully responsive navigation (desktop + mobile drawer)

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React 18 |
| Styling | Tailwind CSS 3.4 |
| Animation | Framer Motion |
| Icons | Lucide React |
| Fonts | Inter, Poppins (Google Fonts) |
| Deployment | Vercel |

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/tushardogne/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

---

## 🎨 Customization Guide

### 1. Update Personal Information

Edit the following files to add your details:

**`src/sections/Hero.js`**
- Replace placeholder profile image with your photo
- Update social links (GitHub, LinkedIn, email)
- Update resume download link

**`src/sections/About.js`**
- Adjust story points to match your journey
- Update stats values

**`src/sections/Contact.js`**
- Update email, phone, location
- Update social media links

**`src/sections/GitHubStats.js`**
- Change `GITHUB_USERNAME` to your actual GitHub username

### 2. Update Projects

In **`src/sections/Projects.js`**:
- Replace project details with your actual projects
- Add real GitHub and live demo links
- Upload project screenshots to replace placeholder images

### 3. Update Skills

In **`src/sections/Skills.js`**:
- Adjust skill levels and descriptions
- Add/remove technologies as needed

### 4. Update Certifications

In **`src/sections/Certifications.js`**:
- Add your actual certificates
- Update credential IDs and verification URLs

### 5. Update Resume Link

Replace all instances of:
```
https://drive.google.com/file/d/your-resume-id/view
```
with your actual Google Drive or hosting link.

### 6. Update Colors (Optional)

Edit **`tailwind.config.js`** to change the color scheme:
```js
colors: {
  royal: { ... },    // Primary brand color
  gold: { ... },      // Accent color
  emerald: { ... },   // Success/highlight color
}
```

---

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Framework preset: Create React App
5. Deploy!

### Netlify
1. Run `npm run build`
2. Drag `build/` folder to Netlify

### GitHub Pages
1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "homepage": "https://tushardogne.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Run `npm run deploy`

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── ScrollProgress.js
│   │   ├── BackToTop.js
│   │   └── SectionHeader.js
│   ├── sections/
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Experience.js
│   │   ├── Projects.js
│   │   ├── AIDataScience.js
│   │   ├── Certifications.js
│   │   ├── Achievements.js
│   │   ├── GitHubStats.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

## 🔧 Troubleshooting

### Build fails
```bash
rm -rf node_modules package-lock.json
npm install
npm start
```

### Tailwind styles not loading
Ensure `postcss.config.js` and `tailwind.config.js` are in the project root.

### Animations not working
Check that `framer-motion` is installed:
```bash
npm install framer-motion
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🤝 Connect With Me

- **GitHub**: [@tushardogne](https://github.com/tushardogne)
- **LinkedIn**: [Tushar Dogne](https://linkedin.com/in/tushardogne)
- **Email**: tushardogne123@gmail.com
- **Phone**: +91 93028 58988

---

> *"I don't just write code — I solve problems, manage deadlines, and deliver results."* — Tushar Dogne
