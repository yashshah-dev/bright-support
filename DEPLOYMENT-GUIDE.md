# GitHub Pages Deployment Guide

## 📋 Prerequisites

- [x] Git repository initialized
- [x] Initial commit created
- [ ] GitHub account
- [ ] GitHub repository created

## 🚀 Step-by-Step Deployment

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **+** icon in the top right → **New repository**
3. Repository settings:
   - **Repository name**: `brightsupport`
   - **Description**: "Modern NDIS website for Bright Support"
   - **Visibility**: Public (required for free GitHub Pages)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. Click **Create repository**

### 2. Push to GitHub

After creating the repository, run these commands:

```bash
# Add remote repository (replace 'yourusername' with your GitHub username)
git remote add origin https://github.com/yourusername/brightsupport.git

# Verify the remote was added
git remote -v

# Push to GitHub
git push -u origin main
```

If you encounter authentication issues:
- Use a Personal Access Token (PAT) instead of password
- Or configure SSH keys (recommended)

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section (left sidebar → Pages)
4. Under **Source**, select:
   - Source: **GitHub Actions** (not "Deploy from a branch")
5. Click **Save**

### 4. Automatic Deployment

Once you push to the `main` branch, GitHub Actions will automatically:
1. Install dependencies
2. Build the Next.js site
3. Export static files
4. Deploy to GitHub Pages

View deployment progress:
- Go to **Actions** tab in your repository
- Click on the latest workflow run
- Watch the build and deploy process

### 5. Access Your Site

After successful deployment (2-3 minutes):
- Your site will be available at: `https://yourusername.github.io/brightsupport/`
- Check the deployment status in the Actions tab

## 🔧 Configuration Notes

### Current Configuration

The project is already configured for GitHub Pages:

**next.config.ts**:
```typescript
output: 'export',              // Static site generation
basePath: '/brightsupport',    // Repository name as subdirectory
images: {
  unoptimized: true           // Required for static export
},
trailingSlash: true           // Better routing for static sites
```

**package.json**:
```json
"scripts": {
  "export": "next build && touch out/.nojekyll"
}
```

### Using Custom Domain

If you want to use a custom domain (e.g., `www.brightsupport.com.au`):

1. **Add CNAME file**:
   ```bash
   echo "www.brightsupport.com.au" > public/CNAME
   ```

2. **Update next.config.ts**:
   ```typescript
   basePath: '',  // Remove basePath for custom domain
   ```

3. **Configure DNS** with your domain provider:
   - Add A records pointing to GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Or add CNAME record pointing to: `yourusername.github.io`

4. **Enable in GitHub Settings**:
   - Go to Settings → Pages
   - Enter your custom domain
   - Enable "Enforce HTTPS" (wait 24 hours for SSL certificate)

5. **Commit and push changes**:
   ```bash
   git add public/CNAME next.config.ts
   git commit -m "Configure custom domain"
   git push
   ```

## 📦 Manual Deployment (Alternative)

If you prefer manual deployment without GitHub Actions:

1. **Build and export**:
   ```bash
   npm run export
   ```

2. **Deploy using gh-pages branch**:
   ```bash
   npm install -g gh-pages
   gh-pages -d out
   ```

3. **Configure GitHub Pages**:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `root`

## 🔄 Making Updates

After making changes to your site:

```bash
# Stage changes
git add .

# Commit with descriptive message
git commit -m "Update: describe your changes"

# Push to GitHub (triggers automatic deployment)
git push
```

## 🛠️ Troubleshooting

### Build Fails

**Problem**: Build fails in GitHub Actions

**Solutions**:
- Check Actions tab for error details
- Verify `package.json` dependencies are correct
- Test build locally: `npm run build`
- Check Node.js version (should be 20+)

### 404 Errors

**Problem**: Site shows 404 or pages don't load

**Solutions**:
- Verify `basePath` in `next.config.ts` matches repository name
- Check that GitHub Pages source is set to "GitHub Actions"
- Wait 2-3 minutes after deployment
- Clear browser cache

### Images Not Loading

**Problem**: Images return 404 errors

**Solutions**:
- Ensure images are in `/public/images/` directory
- Check that image paths are correct
- Verify images are committed to git
- Use relative paths (not absolute)

### CSS Not Loading

**Problem**: Site loads but styling is broken

**Solutions**:
- Verify `basePath` matches repository name
- Check browser console for asset loading errors
- Rebuild with `npm run export`

## 📊 Performance Optimization

### After Deployment

1. **Test Performance**:
   - Run Lighthouse audit in Chrome DevTools
   - Check [PageSpeed Insights](https://pagespeed.web.dev/)

2. **Add Real Images**:
   - Replace placeholder images with actual images
   - Use WebP format for better compression
   - Optimize images before uploading (< 200KB each)

3. **Monitor Site**:
   - Set up Google Analytics (optional)
   - Monitor Core Web Vitals
   - Check mobile performance

## 🎯 Next Steps

- [ ] Push code to GitHub
- [ ] Enable GitHub Pages
- [ ] Verify site is live
- [ ] Generate and upload images using AI prompts from `IMAGE-PLACEMENT-GUIDE.md`
- [ ] Test all pages and links
- [ ] Run Lighthouse audit
- [ ] Share with stakeholders
- [ ] Optional: Configure custom domain

## 📞 Support

For GitHub Pages issues:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Next.js Static Export Documentation](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)

---

**Repository Status**: ✅ Ready for deployment
**Last Updated**: 2024
