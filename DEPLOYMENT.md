# Deployment Guide

This guide provides instructions for deploying the JioHotstar Downloads Portal to various hosting platforms.

## Quick Start (Local Development)

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:3000
```

## Building for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

The production files will be generated in the `dist/` directory.

## Deployment Options

### 1. Netlify (Recommended)

#### Via Netlify CLI:

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=dist
```

#### Via Netlify UI:

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### 2. Vercel

#### Via Vercel CLI:

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

#### Via Vercel UI:

1. Import your repository
2. Vercel auto-detects Vite configuration
3. Deploy!

### 3. GitHub Pages

```bash
# Install gh-pages
npm install -D gh-pages

# Add to package.json scripts:
# "predeploy": "npm run build",
# "deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

**Note**: Update `vite.config.js` with base path:
```javascript
export default defineConfig({
  base: '/your-repo-name/',
  plugins: [react()],
})
```

### 4. Firebase Hosting

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Initialize
firebase init hosting

# Build
npm run build

# Deploy
firebase deploy
```

Configuration for `firebase.json`:
```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

### 5. Traditional Web Hosting (cPanel, etc.)

1. Build the project: `npm run build`
2. Upload all files from the `dist/` directory to your web server
3. Ensure the server is configured to serve `index.html` for all routes

**Apache (.htaccess):**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

**Nginx:**
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## Environment Variables

This project doesn't currently use environment variables, but if you need to add them:

1. Create `.env` file in root:
```
VITE_API_URL=https://api.example.com
```

2. Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

## Post-Deployment Checklist

- [ ] Test registration form
- [ ] Test form validation
- [ ] Test login persistence (refresh page)
- [ ] Test dashboard display
- [ ] Test Instagram modal functionality
- [ ] Test all Instagram links open correctly
- [ ] Test verification checkbox
- [ ] Test error message display
- [ ] Test download redirect
- [ ] Test responsive design on mobile
- [ ] Test logout functionality

## Performance Optimization

The build includes:
- ✅ Minified JavaScript
- ✅ Minified CSS
- ✅ Gzip compression support
- ✅ Code splitting

For additional optimization:
- Enable HTTPS on your hosting platform
- Configure CDN if available
- Enable browser caching
- Compress images (if you add any)

## Troubleshooting

### Blank page after deployment

- Check browser console for errors
- Verify `base` path in `vite.config.js`
- Ensure server is configured for SPA routing

### Routes not working (404 errors)

- Configure server to redirect all routes to `index.html`
- See server configuration examples above

### localStorage not working

- Ensure site is served over HTTPS (required for localStorage in some browsers)
- Check browser privacy settings

## Support

For issues and questions:
- Check the main [README.md](./README.md)
- Review browser console errors
- Verify all dependencies are installed correctly

## License

This project is for educational and demonstration purposes.
