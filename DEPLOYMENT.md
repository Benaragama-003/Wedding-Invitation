# Cloudflare Pages Deployment Guide

This project is a React application built with Vite and is perfectly configured for free hosting on Cloudflare Pages.

## Prerequisites
1. A GitHub account with this repository pushed.
2. A Cloudflare account (free tier is fine).

## Deployment Steps

1. **Log in to Cloudflare**
   Go to your [Cloudflare Dashboard](https://dash.cloudflare.com/) and navigate to **Workers & Pages**.

2. **Create a new Project**
   - Click on **Create application**.
   - Select the **Pages** tab.
   - Click on **Connect to Git**.

3. **Select Repository**
   - Authorize Cloudflare to access your GitHub account if you haven't already.
   - Select your repository: `Benaragama-003/Wedding-Invitation`.
   - Click **Begin setup**.

4. **Configure Build Settings**
   Configure the build settings exactly as follows:
   
   - **Project name**: (e.g., `wedding-invitation` - this will form your URL like `wedding-invitation.pages.dev`)
   - **Production branch**: `main`
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory (advanced)**: `/Frontend` *(Note: Since the code is inside the `Frontend` folder, set this to `/Frontend`. If you moved everything to the root, leave it as `/`)*

   > **Note on Root Directory**: If your `package.json` is located in a subfolder like `/Frontend`, you **must** specify `/Frontend` as the Root directory in the Cloudflare Pages configuration, otherwise the build will fail.

5. **Deploy**
   - Click **Save and Deploy**.
   - Cloudflare will clone your repository, run `npm install` and `npm run build`, and deploy the `dist` folder to their edge network.

## Routing configuration
A `public/_redirects` file has been included with the rule `/* /index.html 200`. This ensures that any page reloads or direct links do not return a 404 error but instead route gracefully back to your React application.

## Updates
Because you linked this to your Git repository, any future `git push` to the `main` branch will automatically trigger a new deployment on Cloudflare Pages.
