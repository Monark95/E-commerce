# 🛍️ MERN Ecommerce Application

A full-featured ecommerce platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js) featuring user authentication, admin panel, shopping cart, and payment integration.

## ✨ Features

### 🛒 Shopping Features
- **Product Catalog** - Browse and search products
- **Shopping Cart** - Add/remove items, quantity management
- **User Reviews** - Rate and review products
- **Order Management** - Track order status and history
- **Address Management** - Multiple shipping addresses
- **Search & Filter** - Advanced product filtering

### 👤 User Features
- **Authentication** - Secure login/register with JWT
- **User Dashboard** - Manage profile and orders
- **Wishlist** - Save favorite products
- **Order Tracking** - Real-time order status

### 🔧 Admin Features
- **Product Management** - CRUD operations for products
- **Order Management** - Process and track orders
- **User Management** - View and manage users
- **Analytics Dashboard** - Sales and performance metrics
- **Image Upload** - Cloudinary integration

### 💳 Payment Integration
- **PayPal Integration** - Secure payment processing
- **Order Confirmation** - Email notifications
- **Payment Status** - Real-time payment tracking

## 🚀 Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **Multer** - File uploads
- **Cloudinary** - Image storage
- **PayPal SDK** - Payment processing

### Frontend
- **React.js** - UI library
- **Redux Toolkit** - State management
- **React Router** - Navigation
- **Axios** - HTTP client
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Radix UI** - Component library

## 📁 Project Structure

```
mern-ecommerce-2024-master/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   │   ├── admin-view/ # Admin panel components
│   │   │   ├── auth/       # Authentication components
│   │   │   ├── shopping-view/ # Shopping components
│   │   │   ├── ui/         # UI components
│   │   │   └── common/     # Common utilities
│   │   ├── pages/          # Page components
│   │   ├── store/          # Redux store
│   │   ├── config/         # API configuration
│   │   └── assets/         # Static assets
│   └── package.json
├── server/                 # Express Backend
│   ├── controllers/        # Business logic
│   ├── models/            # MongoDB schemas
│   ├── routes/            # API routes
│   ├── helpers/           # Utility functions
│   └── server.js
└── DEPLOYMENT.md          # Deployment guide
```

## 🛠️ Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account
- PayPal Developer account (optional)

### Backend Setup
```bash
cd server
npm install
```

Create `.env` file:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
FRONTEND_URL=http://localhost:5173
PORT=5000
```

Start server:
```bash
npm run dev
```

### Frontend Setup
```bash
cd client
npm install
```

Create `.env` file:
```env
VITE_API_URL=http://localhost:5000
```

Start client:
```bash
npm run dev
```

## 🔐 Environment Variables

### Backend (.env)
```env
# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database

# Authentication
JWT_SECRET=your-super-secret-jwt-key

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173

# Port
PORT=5000
```

### Frontend (.env)
```env
# Backend API URL
VITE_API_URL=http://localhost:5000
```

## 🚀 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy
1. **Backend**: Deploy to Railway/Render
2. **Frontend**: Deploy to Vercel
3. **Database**: Use MongoDB Atlas

## 📱 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/logout` - User logout

### Products
- `GET /api/shop/products` - Get all products
- `GET /api/shop/products/:id` - Get product details
- `POST /api/admin/products` - Create product (admin)
- `PUT /api/admin/products/:id` - Update product (admin)
- `DELETE /api/admin/products/:id` - Delete product (admin)

### Cart
- `GET /api/shop/cart` - Get user cart
- `POST /api/shop/cart` - Add to cart
- `PUT /api/shop/cart/:id` - Update cart item
- `DELETE /api/shop/cart/:id` - Remove from cart

### Orders
- `GET /api/shop/order` - Get user orders
- `POST /api/shop/order` - Create order
- `GET /api/admin/orders` - Get all orders (admin)
- `PUT /api/admin/orders/:id` - Update order status (admin)

## 🎨 Features Demo

### User Journey
1. **Register/Login** - Create account or sign in
2. **Browse Products** - View catalog with search/filter
3. **Add to Cart** - Select products and quantities
4. **Checkout** - Enter shipping and payment details
5. **Order Confirmation** - Receive order confirmation

### Admin Journey
1. **Login** - Access admin panel
2. **Manage Products** - Add/edit/delete products
3. **Process Orders** - Update order status
4. **View Analytics** - Monitor sales and performance

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Monark Vekariya**
- GitHub: [@monarkvekariya](https://github.com/monarkvekariya)
- LinkedIn: [Monark Vekariya](https://linkedin.com/in/monarkvekariya)

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Radix UI](https://www.radix-ui.com/) for components
- [Vite](https://vitejs.dev/) for build tool
- [MongoDB Atlas](https://www.mongodb.com/atlas) for database
- [Railway](https://railway.app/) for hosting

---

⭐ **Star this repository if you found it helpful!** 