# Personal Portfolio | Software & AI/ML Engineer

A minimalist, high-fidelity developer portfolio website showcasing cybersecurity scanning platforms, machine learning classifiers, and premium web architectures. Built using **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

🌐 **Live Demo (Placeholder)**: [rudraprajapati.dev](https://rudraprajapati.dev)

---

## ✨ Features

- **Interactive Project Showcases**: Deep dive case studies for featured engineering projects with a responsive overlay drawer.
- **Dynamic Role Carousel**: Smoothly transitions between key professional specializations.
- **Simulated GitHub Grid**: Interactive grid visualizing open-source contributions.
- **Magnetic Components**: Floating buttons that dynamically pull toward the cursor for improved engagement.
- **Custom Cursor Layer**: Lag-behind pointer that reacts dynamically to interactive page elements.
- **Verification Badges**: Interactive certifications validation checks.
- **SEO & Metadata Optimized**: Fully-configured Open Graph, metadata keys, and semantic tags.

---

## 🛠️ Tech Stack & Architecture

### Frontend Core
- **Framework**: [Next.js 16](https://nextjs.org/) (App Router & Static Generation)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

### System Architecture
```text
my-portfolio/
├── src/
│   ├── app/                # Next.js App Router (pages, layout, globals)
│   ├── components/         # Interactive UI components (Hero, About, Projects, etc.)
│   ├── hooks/              # Custom React hooks (useMagnetic)
│   └── lib/                # Utility helper scripts (cn class merger)
├── public/                 # Static assets and favicon
├── next.config.ts          # Next.js compiler settings
└── tsconfig.json           # TypeScript configuration
```

---

## 🚀 Showcased Projects

### 🛡️ [SecureU](https://github.com/Rudra4604/SecureU) — Threat Scanner & AI Assistant
- **Overview**: Hybrid web vulnerability scanner and compliance inspector. Conducts automated server audits (SSL socket TLS checkups, security header configurations) alongside a Logistic Regression model to predict URL malicious intent, utilizing a Groq LLaMA 3.3 chatbot for remediation code snippets.
- **Stack**: Python, Flask, Scikit-Learn, Groq LLaMA API, Bootstrap 5.

### ✨ [AuraBeauty AI](https://github.com/Rudra4604/AuraBeautyAI) — Salon Discovery & Advisor
- **Overview**: AI-powered discovery and booking marketplace in Ahmedabad. Uses structured prompt recommendations, a proprietary quality weighting score (Aura Score), and dynamic appointment scheduling calendars.
- **Stack**: Next.js 15, TypeScript, Tailwind CSS, Framer Motion.

---

## 💻 Getting Started

### Prerequisites
Make sure you have Node.js (v18+) and npm installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Rudra4604/MyPortfolio.git
   cd MyPortfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the local development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## ⚡ Build and Deployment

### Production Build
Compile and optimize the site for production:
```bash
npm run build
```

### Deploy to Vercel
Deploying is as simple as importing the repository to [Vercel](https://vercel.com/):
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

---

## 📄 License

Distributed under the MIT License. See [LICENSE](LICENSE) for details.

---

## ✉️ Contact

- **Name**: Rudra Prajapati
- **Email**: rudracprajapati@gmail.com
- **LinkedIn**: [rudra-prajapati-874277254](https://www.linkedin.com/in/rudra-prajapati-874277254)
- **GitHub**: [@Rudra4604](https://github.com/Rudra4604)
