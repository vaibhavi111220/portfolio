# 🌟 Modern Portfolio Website

A highly interactive, single-page portfolio website showcasing a modern, professional aesthetic with engaging 3D background effects and smooth animations.

## ✨ Features

- **🎨 Modern Design**: Clean, professional aesthetic with gradient colors and glass morphism effects
- **🌌 3D Background**: Interactive Three.js animations with floating particles and geometric shapes
- **📱 Fully Responsive**: Optimized for all device sizes and screen resolutions
- **🎭 Smooth Animations**: GSAP-powered scroll-triggered animations and transitions
- **⚡ High Performance**: Optimized for fast loading and smooth interactions
- **♿ Accessible**: Built with accessibility best practices in mind
- **🚀 Modern Tech Stack**: React, TypeScript, Three.js, GSAP, Tailwind CSS

## 🏗️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **3D Graphics**: Three.js with React Three Fiber
- **Animations**: GSAP (GreenSock Animation Platform)
- **Styling**: Tailwind CSS with custom components
- **Build Tool**: Vite for fast development and building
- **Deployment**: GitHub Pages with automated CI/CD

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to see the website

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navigation.tsx   # Navigation bar with smooth scrolling
│   └── ThreeBackground.tsx # 3D background with particles
├── sections/           # Main page sections
│   ├── Hero.tsx        # Landing/intro section
│   ├── About.tsx       # About me section
│   ├── Projects.tsx    # Portfolio projects
│   ├── Skills.tsx      # Technical skills
│   ├── Experience.tsx  # Work experience
│   ├── Education.tsx   # Educational background
│   └── Contact.tsx     # Contact form and information
├── hooks/              # Custom React hooks
│   ├── useAnimations.ts # GSAP animation hooks
│   └── useSmoothScroll.ts # Smooth scrolling utility
├── data/               # Data and content
│   └── resumeData.ts   # Resume information and portfolio data
├── utils/              # Utility functions
└── assets/             # Static assets
```

## 🎨 Customization

### Updating Resume Information

Edit the `src/data/resumeData.ts` file to update:
- Personal information
- Work experience
- Education details
- Projects
- Skills
- Contact information

### Color Scheme

The color scheme is defined in `tailwind.config.js`:
- **Primary**: Blue (`#0ea5e9`)
- **Secondary**: Purple (`#8b5cf6`)
- **Accent**: Amber (`#f59e0b`)

### 3D Background

Customize the 3D background in `src/components/ThreeBackground.tsx`:
- Particle count and behavior
- Floating geometry shapes
- Colors and lighting
- Animation speed and patterns

## 🚀 Deployment

### GitHub Pages (Automated)

1. **Push to main branch** - The GitHub Action will automatically build and deploy
2. **Enable GitHub Pages** in repository settings
3. **Set source** to "gh-pages" branch

### Manual Deployment

```bash
npm run build
npm run deploy
```

## 🔧 Configuration

### Vite Configuration

The `vite.config.ts` file includes:
- React plugin configuration
- Base path for GitHub Pages
- Build optimization settings
- Development server configuration

### TypeScript

Strict TypeScript configuration with:
- Modern ES2020 target
- Strict type checking
- Path resolution for clean imports

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly

## 🎯 Performance Optimizations

- Lazy loading of heavy components
- Optimized 3D rendering
- Efficient animation scheduling
- Compressed assets
- Modern image formats

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Three.js](https://threejs.org/) for 3D graphics
- [GSAP](https://greensock.com/gsap/) for animations
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) for React Three.js integration
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Vite](https://vitejs.dev/) for build tooling

## 📞 Contact

Vaibhavi Satish - [vaibhavi.example@email.com](mailto:vaibhavi.example@email.com)

Project Link: [https://github.com/your-username/portfolio-website](https://github.com/your-username/portfolio-website)

---

**Made with ❤️ using React, Three.js, and GSAP**
