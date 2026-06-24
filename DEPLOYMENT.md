# Deployment Guide (Netlify / GitHub Pages)

This project is a static site (HTML/CSS/JS) and can be deployed instantly using platforms like Netlify, Vercel, or GitHub Pages.

## Option 1: Netlify (Recommended)
1. Create a free account at [Netlify.com](https://www.netlify.com).
2. Go to your Dashboard and click **"Add new site"** > **"Deploy manually"**.
3. Drag and drop the entire `emeraldspa-sf` folder into the upload box.
4. Go to **Domain Management** in Netlify and link `emeraldspasf.com`.

## Option 2: GitHub Pages
1. Push this folder to a GitHub repository.
2. Go to the repository **Settings** > **Pages**.
3. Under "Build and deployment", set the source to `main` branch.
4. Add your custom domain `emeraldspasf.com`.

## DNS Configuration
Wherever you deploy, you will need to log into your domain registrar (e.g., GoDaddy, Namecheap) and point your DNS A-Record or CNAME to the hosting provider's IP address.
