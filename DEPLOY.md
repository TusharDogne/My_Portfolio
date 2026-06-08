# 🚀 Deployment Guide

## Quick Deploy to Vercel (Recommended)

### Step 1: Push to GitHub
```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio commit"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/tushardogne/portfolio.git

# Push
git push -u origin main
```

### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "Add New Project"
3. Import your GitHub repository
4. Framework Preset: **Create React App**
5. Click **Deploy**
6. Your site will be live in ~2 minutes!

### Step 3: Custom Domain (Optional)
1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your domain (e.g., tushardogne.dev)
4. Follow DNS instructions

---

## Alternative: Netlify

### Method 1: Drag & Drop
```bash
npm run build
```
Then drag the `build/` folder to [netlify.com](https://netlify.com)

### Method 2: Git Integration
1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. "Add new site" → "Import from Git"
4. Select your repo
5. Build command: `npm run build`
6. Publish directory: `build`
7. Deploy!

---

## Alternative: GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json:
"homepage": "https://tushardogne.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

# Deploy
npm run deploy
```

---

## Before You Deploy - Checklist

- [ ] Updated all social links (GitHub, LinkedIn, email)
- [ ] Added your actual resume download link
- [ ] Replaced placeholder project images with screenshots
- [ ] Updated GitHub username in GitHubStats.js
- [ ] Tested contact form (add Formspree endpoint)
- [ ] Added Google Analytics (optional)
- [ ] Updated SEO meta tags in public/index.html
- [ ] Tested on mobile device
- [ ] Checked all external links work

---

## Post-Deployment

### Add Google Analytics
```html
<!-- Add to public/index.html before closing </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Enable Contact Form
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Copy your form endpoint
4. Update `.env` file with: `REACT_APP_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_ID`
5. Or directly update the form action in Contact.js

### Update Resume Link
Replace all instances of the placeholder Google Drive link with your actual resume URL.

---

## Troubleshooting

### "Page not found" on refresh (Vercel)
Create `vercel.json` in project root:
```json
{
  "routes": [
    { "src": "/[^.]+", "dest": "/", "status": 200 }
  ]
}
```

### Images not loading
- Ensure images are in `public/` folder
- Use relative paths: `/images/project1.jpg`

### Fonts not loading
- Check that Google Fonts link is in `public/index.html`
- Verify font names match in `tailwind.config.js`
