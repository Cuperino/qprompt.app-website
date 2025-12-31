# Setup and Installation

Follow these instructions to set up the development environment and run the project locally.

## Prerequisites

- **Bun:** It is highly recommended to use [Bun](https://bun.sh/) as the JavaScript runtime for this project.
- **Node.js:** (Optional) If Bun is not available, standard Node.js and npm can be used.

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Cuperino/qprompt.app-website.git
   cd qprompt.app-website
   ```

2. **Install dependencies:**
   ```bash
   bun install
   ```
   *(or `npm install`)*

## Development

To start the Vite development server with hot module replacement (HMR):

```bash
bun run dev
```
*(or `npm run dev`)*

The site will be available at `http://localhost:8000`.

## Production Build

To generate the optimized static files for production:

```bash
bun run build
```
*(or `npm run build`)*

The output will be in the `dist/` directory.

## Vercel Deployment

This project is configured for easy deployment on Vercel using `vercel.json`. 
1. Push your code to GitHub/GitLab/Bitbucket.
2. Import the project in Vercel.
3. Vercel will automatically detect Vite and Bun.
4. The `vercel.json` file ensures that the required security headers (`COOP`, `COEP`) are applied to all routes, which is essential for the WASM module to function correctly.

## Custom Static Server

The project includes a custom static server (`main.js`) designed to serve the site with the correct headers for WebAssembly. This is useful for testing the production-like environment.

To run the custom server:
```bash
bun main.js
```
*(or `node main.js`)*

The server listens on `http://0.0.0.0:8000`.

### Why use the custom server?
The `qprompt.wasm` module requires specific security headers (`Cross-Origin-Opener-Policy` and `Cross-Origin-Embedder-Policy`) to enable shared memory features. The custom server is pre-configured with these headers.

