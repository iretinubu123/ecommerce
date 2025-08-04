# E-Commerce Platform

A full-stack e-commerce solution built with React, Node.js, MongoDB, and Stripe payment integration.

## Features

### Frontend (React)
- Modern, responsive UI with Tailwind CSS
- Product catalog with search and filtering
- Shopping cart functionality
- User authentication and profile management
- Order tracking and history
- Admin dashboard for product and order management
- Stripe payment integration

### Backend (Node.js)
- RESTful API with Express.js
- JWT-based authentication
- MongoDB database with Mongoose ODM
- Product management with categories and ratings
- Order processing and status tracking
- Stripe payment processing
- Input validation and error handling
- Security middleware (helmet, rate limiting)

### Database (MongoDB)
- User management with password hashing
- Product catalog with images and inventory
- Order tracking with status updates
- Rating and review system

### Payment (Stripe)
- Secure payment processing
- Payment intent creation
- Webhook handling for payment status updates
- Refund functionality

## Tech Stack

- **Frontend**: React 18, React Router, React Query, Tailwind CSS, Framer Motion
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Payment**: Stripe
- **Authentication**: JWT, bcryptjs
- **State Management**: React Context API, Zustand
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Notifications**: React Hot Toast

## Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- Stripe account for payment processing

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ecommerce
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Install backend dependencies
   cd backend
   npm install
   
   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Environment Setup**

   Create a `.env` file in the backend directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/ecommerce
   JWT_SECRET=your_jwt_secret_key_here
   STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here
   STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here
   STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here
   NODE_ENV=development
   ```

   Create a `.env` file in the frontend directory:
   ```env
   REACT_APP_API_URL=http://localhost:5000
   REACT_APP_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here
   ```

4. **Database Setup**
   - Start MongoDB locally or use MongoDB Atlas
   - The application will automatically create collections on first run

5. **Stripe Setup**
   - Create a Stripe account
   - Get your API keys from the Stripe dashboard
   - Set up webhooks for payment status updates

## Running the Application

### Development Mode

1. **Start the backend server**
   ```bash
   cd backend
   npm run dev
   ```

2. **Start the frontend development server**
   ```bash
   cd frontend
   npm start
   ```

3. **Or run both simultaneously**
   ```bash
   npm run dev
   ```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

### Production Build

1. **Build the frontend**
   ```bash
   cd frontend
   npm run build
   ```

2. **Start the production server**
   ```bash
   cd backend
   npm start
   ```

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile
- `PUT /api/auth/profile` - Update user profile

### Products
- `GET /api/products` - Get all products (with filtering)
- `GET /api/products/featured` - Get featured products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (admin)
- `PUT /api/products/:id` - Update product (admin)
- `DELETE /api/products/:id` - Delete product (admin)
- `POST /api/products/:id/ratings` - Add product rating

### Orders
- `GET /api/orders/my-orders` - Get user orders
- `GET /api/orders/:id` - Get single order
- `POST /api/orders` - Create order
- `PATCH /api/orders/:id/status` - Update order status (admin)
- `GET /api/orders` - Get all orders (admin)
- `PATCH /api/orders/:id/cancel` - Cancel order

### Payments
- `POST /api/payments/create-payment-intent` - Create payment intent
- `POST /api/payments/confirm-payment` - Confirm payment
- `POST /api/payments/webhook` - Stripe webhook handler
- `POST /api/payments/refund` - Process refund (admin)

## Project Structure

```
ecommerce/
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   ├── Product.js
│   │   └── Order.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── products.js
│   │   ├── orders.js
│   │   └── payments.js
│   ├── middleware/
│   │   └── auth.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── layout/
│   │   ├── context/
│   │   │   ├── AuthContext.js
│   │   │   └── CartContext.js
│   │   ├── pages/
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
└── package.json
```

## Key Features

### User Features
- Browse products with search and filtering
- Add items to cart
- Secure checkout with Stripe
- Order tracking
- Product ratings and reviews
- User profile management

### Admin Features
- Product management (CRUD operations)
- Order management and status updates
- User management
- Payment processing and refunds
- Analytics dashboard

### Security Features
- JWT authentication
- Password hashing with bcrypt
- Input validation
- Rate limiting
- CORS protection
- Helmet security headers

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, email support@shophub.com or create an issue in the repository. 