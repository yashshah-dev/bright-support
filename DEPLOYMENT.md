# Deployment Guide - Bright Support Website

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"

3. **Custom Domain**
   - Go to Project Settings → Domains
   - Add `www.brightsupport.com.au`
   - Update DNS records as instructed

### Option 2: Netlify

1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

2. **Environment Variables** (if needed)
   - Add in Netlify dashboard

### Option 3: Traditional Hosting (cPanel, VPS)

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Setup Node.js environment**
   - Ensure Node.js 18+ is installed
   - Copy all files to server

3. **Install dependencies on server**
   ```bash
   npm install --production
   ```

4. **Start with PM2** (process manager)
   ```bash
   npm install -g pm2
   pm2 start npm --name "brightsupport" -- start
   pm2 save
   pm2 startup
   ```

5. **Configure Nginx reverse proxy**
   ```nginx
   server {
       listen 80;
       server_name www.brightsupport.com.au brightsupport.com.au;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## Environment Variables

Create `.env.local` file for environment-specific settings:

```env
# Email Service (Optional - for contact form)
RESEND_API_KEY=your_api_key_here

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# Site URL (for production)
NEXT_PUBLIC_SITE_URL=https://www.brightsupport.com.au
```

## Pre-Deployment Checklist

- [ ] Update contact information in components
- [ ] Add real images to `/public` folder
- [ ] Configure email service for contact form
- [ ] Test all pages in production build
- [ ] Verify SEO metadata on all pages
- [ ] Test responsive design on mobile devices
- [ ] Check page load performance (Lighthouse)
- [ ] Verify all links work correctly
- [ ] Test contact form submission
- [ ] Set up error monitoring (optional: Sentry)
- [ ] Configure analytics (optional: Google Analytics)

## Post-Deployment

### 1. Submit Sitemap to Google
- Go to [Google Search Console](https://search.google.com/search-console)
- Add property: `https://www.brightsupport.com.au`
- Submit sitemap: `https://www.brightsupport.com.au/sitemap.xml`

### 2. Test Website Performance
- Use [Google PageSpeed Insights](https://pagespeed.web.dev/)
- Aim for 90+ scores on all metrics
- Use [GTmetrix](https://gtmetrix.com/) for additional insights

### 3. Monitor Website
- Set up uptime monitoring (e.g., UptimeRobot)
- Configure error tracking
- Monitor analytics

### 4. SSL Certificate
- Ensure HTTPS is enabled
- Vercel/Netlify handle this automatically
- For custom hosting, use Let's Encrypt

## Updating Content

### Update a Service Page
1. Navigate to `src/app/services/[service-name]/page.tsx`
2. Edit the content
3. Commit and push changes
4. Automatic deployment (if using Vercel/Netlify)

### Add a New Service
1. Create new file: `src/app/services/new-service/page.tsx`
2. Copy structure from existing service page
3. Update content
4. Add to `src/app/sitemap.ts`
5. Add to `src/app/our-services/page.tsx`

## Performance Tips

1. **Images**: Always use Next.js `<Image>` component
2. **Fonts**: Optimized with `next/font`
3. **Code Splitting**: Automatic with Next.js App Router
4. **Caching**: Configured in `next.config.ts`
5. **Compression**: Enabled by default

## Security

1. Keep dependencies updated: `npm audit`
2. Use environment variables for sensitive data
3. Enable HTTPS
4. Configure security headers in `next.config.ts`
5. Validate all form inputs

## Support & Maintenance

### Regular Updates
- Update dependencies monthly: `npm update`
- Review and update content quarterly
- Monitor performance and fix issues

### Backup
- Ensure code is in version control (Git)
- Backup environment variables
- Keep deployment configs documented

## Troubleshooting

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Port Already in Use
```bash
# Kill process on port 3000
kill -9 $(lsof -ti:3000)
npm run dev
```

### Deployment Failed
- Check build logs
- Verify Node.js version (18+)
- Ensure all dependencies are listed in package.json
- Check for TypeScript errors

---

Need help? Contact: care@brightsupport.com.au
