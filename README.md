# React Redux Shopping Cart

A modern, responsive e-commerce shopping cart application built with React, Redux Toolkit, and Vite.

## 🚀 Features

- **Product Browsing**: Browse and search through a catalog of products
- **Shopping Cart**: Add and remove items from your cart
- **Cart Management**: View cart items with product details and pricing
- **Redux State Management**: Centralized state management with Redux Toolkit
- **Lazy Loading**: Optimized performance with code splitting
- **Responsive Design**: Mobile-friendly UI with SCSS styling
- **Loading States**: Visual feedback with loader component
- **Routing**: Client-side routing with React Router v7

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## 🛠️ Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd react-redux-shopping-cart
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start development server with Vite
- `npm run build` - Build for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview production build locally

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Nav/                 # Navigation bar
│   ├── Home/                # Home page
│   ├── Product/             # Product card component
│   ├── Cart/                # Cart page
│   │   └── CartItem/        # Individual cart item
│   └── Loader/              # Loading spinner
├── redux/
│   ├── slices/
│   │   └── CartSlice.js     # Cart reducer logic
│   └── store.js             # Redux store configuration
├── App.jsx                  # Main app component
├── App.scss                 # Global styles
└── index.scss               # Global CSS reset
```

## 🔧 Technologies Used

- **React** v19.2.0 - UI library
- **Redux Toolkit** v2.11.0 - State management
- **React Router** v7.10.1 - Client-side routing
- **Vite** v7.2.4 - Build tool
- **SCSS** v1.94.2 - CSS preprocessor
- **ESLint** v9.39.1 - Code linting

## 📝 Key Components

### Nav Component

- Displays navigation bar
- Shows cart item count
- Links to home and cart pages

### Product Component

- Displays individual product cards
- Add/Remove from cart functionality
- Shows product details (title, price, rating, category)

### Cart Component

- Lists all cart items
- Displays total price
- Remove item functionality

### Loader Component

- Fixed position overlay
- Shows while components are loading
- Uses high z-index to appear above other content

## 🎯 Redux Store Structure

```javascript
{
  cart: {
    items: []; // Array of cart items
  }
}
```

## 🚀 Performance Optimizations

- **Code Splitting**: Cart component lazy loaded with React.lazy()
- **CSS Modules**: Scoped styling to prevent class conflicts
- **Vite**: Fast build times and hot module replacement

## 📱 Styling

- Global styles in `App.scss` and `index.scss`
- Component-specific styles using CSS Modules (`.module.scss`)
- SCSS features: nesting, variables, mixins

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 💡 Future Enhancements

- User authentication
- Payment integration
- Product filters and sorting
- Wishlist functionality
- Order history
- Product reviews and ratings

---

**Happy Shopping! 🛒**
