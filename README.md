# Electron Course

**Electron Course** is a learning project demonstrating how to build a desktop application using **Electron**, **React**, and **TypeScript**.  
It showcases a modular approach to structuring both the Electron main process and the React renderer process, as well as implementing advanced desktop-specific features such as a custom window frame, system tray integration, and fully type-safe IPC communication.

## 🚀 Technologies

- [Electron](https://www.electronjs.org/) – cross-platform desktop development
- [React 19](https://react.dev/) – building the user interface
- [TypeScript](https://www.typescriptlang.org/) – static type checking
- [Vite](https://vitejs.dev/) – fast build and development server
- [Playwright](https://playwright.dev/) – end-to-end testing
- [Vitest](https://vitest.dev/) – unit testing

## 📦 Project Structure

- `src/electron/` – Main process logic (application lifecycle, tray, menu, system resource management, IPC)
- `src/ui/` – Renderer process (React-based user interface)
- `e2e/` – End-to-end tests using Playwright

## ⚙️ Available Scripts

```bash
# Start application in development mode
npm run dev

# Build the application
npm run build

# Create Windows distributable
npm run dist:win

# Create Linux distributable
npm run dist:linux

# Create macOS distributable
npm run dist:mac

# Run E2E tests
npm run test:e2e

# Run unit tests
npm run test:unit

```

## 🙏 Credits

This project was created as part of a learning process and was inspired by:

🎥 [Build an Electron App with React and TypeScript](https://www.youtube.com/watch?v=fP-371MN0Ck&t=933s)  
Author: [freeCodeCamp.org](https://www.freecodecamp.org/)

📂 Reference repository: [N-Ziermann-YouTube/electron-course](https://github.com/N-Ziermann-YouTube/electron-course)

> ⚠️ This is a non-production educational project intended for exploring desktop application development with Electron, React, and TypeScript.
