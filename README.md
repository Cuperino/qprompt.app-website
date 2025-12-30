# QPrompt Website

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![Runtime: Bun](https://img.shields.io/badge/Runtime-Bun-black?logo=bun)](https://bun.sh/)
[![Build: Vite](https://img.shields.io/badge/Build-Vite-646CFF?logo=vite)](https://vitejs.dev/)

The official website for **QPrompt**, the ultimate professional-grade teleprompter application. This project showcases a high-performance landing page featuring a live WebAssembly (WASM) demo of the prompter, built with modern web technologies.

## 🚀 Key Features

- **Live WASM Demo:** Experience the prompter directly in your browser.
- **Modern UI/UX:** Built with Tailwind CSS and Alpine.js for a smooth, responsive experience.
- **High Performance:** Optimized assets and animations powered by Motion One.
- **Cross-Platform Downloads:** Easy access to all QPrompt versions across Linux, Windows, and macOS.

## 🛠 Technology Stack

- **Runtime:** [Bun](https://bun.sh/) (Recommended)
- **Bundler:** [Vite](https://vitejs.dev/)
- **CSS:** [Tailwind CSS](https://tailwindcss.com/)
- **Interactivity:** [Alpine.js](https://alpinejs.dev/)
- **Core Engine:** WebAssembly (WASM)

## 📖 Documentation

Detailed documentation is available in the [`/Documentation`](./Documentation) directory:

- [**Architecture Overview**](./Documentation/Architecture.md): Deep dive into the project structure and technology choices.
- [**Setup and Installation**](./Documentation/Setup.md): Instructions for running the project locally.
- [**WASM Integration**](./Documentation/WASM-Integration.md): Technical details on how the QPrompt core runs in the browser.
- [**Development Guide**](./Documentation/Development.md): Guidelines for contributors and UI modifications.

## 🚦 Quick Start

### Prerequisites

We recommend using [Bun](https://bun.sh/) for the best development experience.

### Installation

```bash
bun install
```

### Development Server

Run the Vite development server:

```bash
bun run dev
```
The site will be available at `http://localhost:8000`.

### Production Server (with WASM headers)

To serve the site with the specific security headers required for WebAssembly:

```bash
bun main.js
```

## 🤝 Contributing

Contributions are welcome! Please see the [Development Guide](./Documentation/Development.md) for more details.

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details (if available).

---

Developed with ❤️ by [Javier O. Cordero Pérez](https://github.com/Cuperino) & Contributors.
