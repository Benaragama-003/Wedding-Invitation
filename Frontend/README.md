# Wedding Invitation

A premium, elegant, and interactive cinematic wedding invitation website built with React, Vite, and TailwindCSS. Designed with modern aesthetics featuring smooth scroll reveals, floating particles, glassmorphism UI elements, and a beautiful gallery carousel.

## Features
- **Responsive Design**: Looks beautiful on desktops, tablets, and mobile devices.
- **Cinematic Transitions**: Features a portal vortex loading screen transition.
- **Interactive Gallery**: A fanned photo carousel to showcase memories.
- **Elegant Typography**: Custom script and serif fonts for a premium feel.
- **Lightweight**: Optimized for static hosting without heavy backend dependencies.

## How to run locally
1. Ensure you have [Node.js](https://nodejs.org/) installed.
2. Clone the repository and navigate into the `Frontend` directory:
   ```bash
   cd Frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open `http://localhost:5173` in your browser.

## How to build
To build the project for production, run the following command in the `Frontend` directory:
```bash
npm run build
```
This will compile and optimize the application into a `dist` folder, which can be deployed to any static hosting service.

## How to deploy on Cloudflare Pages
This project is configured and optimized for free hosting on Cloudflare Pages.

1. Push your code to your GitHub repository.
2. Log in to [Cloudflare Pages](https://pages.cloudflare.com/) and create a new project by connecting your GitHub repository.
3. Use the following build configurations:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/Frontend` (Important, since the app is inside the Frontend folder)
4. Click **Save and Deploy**. Cloudflare will automatically build and publish your site!

*(For more details, see the `DEPLOYMENT.md` file located in the root of the repository).*
