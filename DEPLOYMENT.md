# MERN Ecommerce Deployment Guide

## 🚀 Complete Ecommerce Application Deployment

This is a full-featured MERN stack ecommerce application with:
- ✅ User Authentication (Login/Register)
- ✅ Admin Panel (Products, Orders Management)
- ✅ Shopping Cart & Checkout
- ✅ Product Search & Reviews
- ✅ Address Management
- ✅ Order Tracking

## 📋 Prerequisites

1. **MongoDB Atlas Account** - For database
2. **GitHub Account** - For code repository
3. **Railway/Render Account** - For backend hosting
4. **Vercel Account** - For frontend hosting

## 🔧 Backend Deployment

### Option 1: Railway (Recommended)

1. **Go to [railway.app](https://railway.app)**
2. **Sign up with GitHub**
3. **Create New Project** → Deploy from GitHub repo
4. **Configure:**
   - Root Directory: `server`
   - Build Command: `npm install`
   - Start Command: `npm start`

5. **Add Environment Variables:**
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database
   JWT_SECRET=your-super-secret-jwt-key-here
   FRONTEND_URL=https://your-frontend.vercel.app
   PORT=5000
   ```

### Option 2: Render

1. **Go to [render.com](https://render.com)**
2. **Create Web Service**
3. **Connect GitHub repository**
4. **Configure:**
   - Root Directory: `server`
   - Build Command: `npm install`
   - Start Command: `npm start`
5. **Add same environment variables as above**

## 🎨 Frontend Deployment (Vercel)

1. **Go to [vercel.com](https://vercel.com)**
2. **Import GitHub repository**
3. **Configure:**
   - Root Directory: `client`
   - Framework Preset: Vite
4. **Add Environment Variable:**
   ```env
   VITE_API_URL=https://your-backend.railway.app
   ```

## 📁 Project Structure

```
mern-ecommerce-2024-master/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── store/         # Redux store
│   │   └── config/        # API configuration
│   └── package.json
├── server/                 # Express Backend
│   ├── controllers/       # Business logic
│   ├── models/           # MongoDB schemas
│   ├── routes/           # API routes
│   │   ├── auth/         # Authentication routes
│   │   ├── admin/        # Admin panel routes
│   │   └── shop/         # Shopping routes
│   └── server.js
└── DEPLOYMENT.md
```

## 🔐 Environment Variables Setup

### Backend (.env)
```env
# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ecommerce

# Authentication
JWT_SECRET=your-super-secret-jwt-key-minimum-32-characters

# Frontend URL (for CORS)
FRONTEND_URL=https://your-app.vercel.app

# Port (auto-set by hosting platform)
PORT=5000
```

### Frontend (.env)
```env
# Backend API URL
VITE_API_URL=https://your-backend.railway.app
```

## 🚀 Deployment Steps

### Step 1: Prepare Repository
```bash
# Initialize Git (if not already done)
git init
git add .
git commit -m "Initial commit: Complete MERN ecommerce app"

# Push to GitHub
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
```

### Step 2: Deploy Backend
1. Deploy to Railway/Render
2. Get your backend URL (e.g., `https://your-app.railway.app`)
3. Test: Visit the URL to see "Ecommerce API is running!"

### Step 3: Deploy Frontend
1. Deploy to Vercel
2. Set `VITE_API_URL` to your backend URL
3. Update backend's `FRONTEND_URL` with your Vercel URL

### Step 4: Test Everything
1. **Backend API**: Test endpoints
2. **Frontend**: Test user registration/login
3. **Admin Panel**: Test product management
4. **Shopping**: Test cart and checkout

## 🛠️ Features Included

### User Features
- ✅ User registration and login
- ✅ Product browsing and search
- ✅ Shopping cart management
- ✅ Address management
- ✅ Order placement and tracking
- ✅ Product reviews and ratings

### Admin Features
- ✅ Product management (CRUD)
- ✅ Order management
- ✅ User management
- ✅ Dashboard analytics

## 🔧 Local Development

```bash
# Backend
cd server
npm install
npm run dev

# Frontend
cd client
npm install
npm run dev
```

## 🐛 Common Issues & Solutions

### CORS Errors
- Ensure `FRONTEND_URL` is set correctly in backend
- Check that frontend URL is in allowed origins

### MongoDB Connection
- Verify `MONGODB_URI` is correct
- Ensure IP whitelist includes hosting platform

### API 404 Errors
- Check that `VITE_API_URL` points to correct backend
- Verify API routes are properly configured

### Build Errors
- Ensure all dependencies are installed
- Check for missing environment variables

## 📞 Support

If you encounter issues:
1. Check the deployment logs
2. Verify environment variables
3. Test API endpoints individually
4. Check CORS configuration

## 🎉 Success!

Once deployed, you'll have a fully functional ecommerce application with:
- Modern React frontend
- Secure Express backend
- MongoDB database
- User authentication
- Admin panel
- Shopping functionality

Your app will be live and ready for users! 🚀 