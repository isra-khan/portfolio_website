# Firebase Deployment Guide

Your app is configured for Firebase Hosting! Follow these steps to deploy:

## Step 1: Initialize Firebase (if not already done)

Run this command to initialize Firebase Hosting and select/create a project:

```bash
firebase init hosting
```

When prompted:
- **Select an existing project** or **create a new project**
- **Public directory**: Type `dist` (this is already configured in firebase.json)
- **Configure as a single-page app**: Yes
- **Set up automatic builds**: No (optional)

## Step 2: Deploy

Once initialized, deploy your app:

```bash
npm run deploy
```

Or manually:
```bash
npm run build
firebase deploy
```

## Alternative: Quick Deploy (if you have a project ID)

If you already have a Firebase project ID, you can set it directly:

```bash
firebase use <your-project-id>
npm run deploy
```

## What's Already Configured

✅ `firebase.json` - Hosting configuration pointing to `dist` folder
✅ `vite.config.mts` - Build output set to `dist`
✅ `package.json` - Deploy script added
✅ Build tested and working

Your app will be available at: `https://<your-project-id>.web.app`


