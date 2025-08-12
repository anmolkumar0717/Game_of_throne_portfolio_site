# 🏰 3D Interactive Portfolio — Game of Thrones Themed

A cinematic, interactive portfolio site built with **Three.js** and **Vite**, designed as a 3D fantasy map inspired by *Game of Thrones*.  
Each location (Winterfell, King’s Landing, Meereen, Iron Islands) represents a section of the portfolio — About, Projects, Pricing, and more.

![Portfolio Preview](./Screenshot%202024-11-24%20131547.png)

---

## 🚀 Live Demo

[View Site](https://portfolio-site-kappa-self.vercel.app)

---

## ✨ Features

- **Immersive 3D World** — Navigate between themed locations.
- **Three.js Rendering** — Smooth lighting, shadows, and animations.
- **Interactive Camera Controls** — Pan, zoom, and explore.
- **Click-to-Navigate** — Select locations to open different sections.
- **Responsive Layout** — Works across devices.
- **Fantasy Theme** — Low-poly models and stylized lighting.

---

## 🛠️ Tech Stack

- **Three.js** — 3D rendering and animations
- **JavaScript (ES6)** — App logic
- **Vite** — Fast development and build tool
- **CSS** — Styling for overlays and menus
- **GLTF Models** — Low-poly 3D assets

---

## 📂 Project Structure

portfolio_site/
├── public/ # Static files (images, icons)
├── src/
│ ├── assets/ # Textures, models
│ ├── components/ # UI overlays (About, Projects, Pricing)
│ ├── three/ # Scene, camera, lights, controls
│ ├── styles/ # CSS styles
│ ├── main.js # Entry point
│ └── index.html
├── package.json
├── vite.config.js
└── README.md

## 📦 Installation & Setup

**Prerequisites:**
- Node.js >= 14
- npm (or yarn/pnpm)

```bash
# Clone repository
git clone https://github.com/anmolkumar0717/portfolio_site.git

# Enter project directory
cd portfolio_site

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview


🎮 Controls
WASD / Arrow Keys — Move camera

Scroll — Zoom in/out

Click + Drag — Rotate / pan

Click Location — Open content panel

ESC / Back Button — Close content and return to map

🖌️ Customization
Models — Replace .gltf files in src/assets/models/.

Map Layout — Edit src/three/islands.js for location names and coordinates.

Content — Update src/components/ for About, Projects, and Pricing text/images.

Colors & Lighting — Modify scene.js to adjust mood and atmosphere.

⚡ Performance Tips
Compress textures before use (use TinyPNG or similar).

Use low-poly models for faster load times.

Enable Draco compression for GLTF.

Lower shadow map resolution for better FPS.

Use requestAnimationFrame wisely to avoid unnecessary renders.

🐛 Troubleshooting
Black Screen / Nothing Renders

Check browser console for missing asset paths.

Ensure models/textures are inside public/ or properly imported.

Low FPS / Lag

Reduce texture resolution and polycount.

Limit shadow quality.

Controls Not Working

Check controls.js for event listener setup.

Make sure overlay UI is not blocking pointer events.

📜 License
java
Copy
Edit
MIT License
Copyright (c) 2024 anmolkumar0717
📬 Contact
Author: anmolkumar0717

GitHub: @anmolkumar0717

Portfolio: Live Demo

🖼️ Preview

sql
Copy
Edit



