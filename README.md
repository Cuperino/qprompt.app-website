# QPrompt Website

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![Runtime: Bun](https://img.shields.io/badge/Runtime-Bun-black?logo=bun)](https://bun.sh/)
[![Build: Vite](https://img.shields.io/badge/Build-Vite-646CFF?logo=vite)](https://vitejs.dev/)

The official website for **QPrompt**, a teleprompter app for all video creators. Built with ease of use, productivity, control accuracy, and smooth performance in mind. This repo stores the project's landing page, featuring a WebAssembly (WASM) demo of the prompter.

## 🚀 Key Features

- **WASM Demo:** Experience the prompter directly in your browser.
- **Modern UI/UX:** Built with Tailwind CSS and Alpine.js.
- **High Performance:** Optimized assets and animations.
- **Cross-Platform Downloads:** Easy access to all QPrompt versions across Linux, Windows, and macOS.

## 🛠 Technology Stack

- **Runtime:** [Bun](https://bun.sh/) (Recommended)
- **Bundler:** [Vite](https://vitejs.dev/)
- **CSS:** [Tailwind CSS](https://tailwindcss.com/)
- **Interactivity:** [Alpine.js](https://alpinejs.dev/)
- **Core Engine:** WebAssembly (WASM)

## 📖 Documentation

Detailed documentation is available in the [`/Documentation`](./Documentation) directory:

- [**Architecture Overview**](./Documentation/Architecture.md): Project structure and technology choices.
- [**Setup and Installation**](./Documentation/Setup.md): Instructions for running the project locally.
- [**WASM Integration**](./Documentation/WASM-Integration.md): Technical details on how the QPrompt core runs in the browser.
- [**Development Guide**](./Documentation/Development.md): Guidelines for contributors and UI modifications.

## 🚦 Quick Start

### Prerequisites

An installation of [Bun](https://bun.sh/) is needed for local development.

### Setup

```bash
bun install
```

### Development Server

Run the Vite development server:

```bash
bun run dev
```
The site will be available at `http://localhost:8000`.

### Test Server (with WASM headers)

To serve the site with the specific security headers required for WebAssembly:

```bash
bun main.js
```

## 🤝 Contributing

Contributions are welcome! Please see the [Development Guide](./Documentation/Development.md) for more details.

## 📄 License

This project is licensed under the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/) - see the [LICENSE](LICENSE) file for details.

---

Developed with ❤️ by [Javier O. Cordero Pérez](https://github.com/Cuperino) & Contributors.
