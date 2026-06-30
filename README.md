# SINCHANA K K — Portfolio (React)

Pixel-perfect React portfolio following the Shiva Balan portfolio format.

---

## 🚀 Run Locally

```bash
# Step 1 — Install Node.js from https://nodejs.org (LTS version)

# Step 2 — Install dependencies
npm install

# Step 3 — Start dev server
npm start
# Opens http://localhost:3000
```

---

## 🌐 Deploy Free on Vercel

### Option A — GitHub + Vercel (recommended)
1. Push this folder to a new GitHub repo
2. Go to https://vercel.com/new
3. Import your repo → it auto-detects React → click **Deploy**
4. Your portfolio is live in ~60 seconds!

### Option B — Vercel CLI
```bash
npm install -g vercel
vercel
# Follow prompts → select "Create React App"
```

---

## ✏️ Edit Your Content

**All content is in one file:**
```
src/data/portfolioData.js
```

| What to change | Key in portfolioData.js |
|---|---|
| Name, email, phone, links | `META` |
| Hero typewriter phrases | `TYPEWRITER_ROLES` |
| Stats (CGPA, projects) | `STATS` |
| Skills by category | `SKILL_CATEGORIES` |
| Work & education history | `EXPERIENCE` |
| Projects | `PROJECTS` |
| Certifications | `CERTIFICATIONS` |

---

## 🗂️ File Structure

```
sinchana-portfolio/
├── public/index.html
└── src/
    ├── data/portfolioData.js   ← ALL CONTENT HERE
    ├── hooks/
    │   ├── useTypewriter.js
    │   └── useScrollSpy.js
    ├── components/
    │   ├── Navbar.jsx + .css
    │   ├── Hero.jsx + .css
    │   ├── About.jsx + .css
    │   ├── Skills.jsx + .css
    │   ├── Experience.jsx + .css
    │   ├── Projects.jsx + .css
    │   ├── Contact.jsx + .css
    │   └── Footer.jsx + .css
    ├── App.jsx
    ├── index.js
    └── index.css              ← Global CSS variables
```

---

## 🎨 Change Theme Color

Open `src/index.css` and change:
```css
--teal:  #14b8a6;  /* main accent color */
--teal2: #0d9488;  /* hover shade */
```

Built with React 18 · Pure CSS · No UI libraries
