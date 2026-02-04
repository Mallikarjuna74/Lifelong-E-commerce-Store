import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
// Layout Components
import Header from "./components/layout/Header.jsx";
import BottomHeader from "./components/layout/BottomHeader.jsx";
// Page Components
const MainContent = React.lazy(() => import("./components/layout/MainContent.jsx"));
const ProductPage = React.lazy(() => import("./pages/Productpage.jsx"));
const GiftStorePage = React.lazy(() => import("./pages/GiftStorePage.jsx"));
const BestSellerPage = React.lazy(() => import('./pages/BestSellerPage.jsx'));
const CartPage = React.lazy(() => import('./pages/CartPage.jsx'));
const Login = React.lazy(() => import('./pages/user/Login.jsx'));
const SignUp = React.lazy(() => import('./pages/user/SignUp.jsx'));
const ProductDetailPage = React.lazy(() => import('./pages/ProductDetailPage.jsx'));

// Redux and Auth
import { store } from './appStore/store.js';
import Footer from './components/layout/Footer.jsx';
import AuthStateObserver from './features/auth/AuthStateObserver.jsx';
import { selectUser } from './features/auth/authSlice.js';

// A wrapper for routes that require authentication
const PrivateRoute = ({ children }) => {
  const user = useSelector(selectUser);
  return user ? children : <Navigate to="/login" />;
};

// A wrapper for public routes (e.g., login/signup) that should not be accessible if logged in
const PublicRoute = ({ children }) => {
  const user = useSelector(selectUser);
  // Redirect to a dashboard/profile page if the user is already logged in
  return !user ? children : <Navigate to="/cartpage" />;
}

// This component contains the main layout and routing logic
const AppRouter = () => (
  <Router basename={import.meta.env.BASE_URL}>
    <Header />
    <BottomHeader />
    <div className="page-content-wrapper">
      <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}>
        <Routes>
          {/* Public routes accessible to everyone */}
          <Route path="/" element={<MainContent />} />
          <Route path="/productpage" element={<ProductPage />} />
          <Route path="/giftstorepage" element={<GiftStorePage />} />
          <Route path="/bestsellerpage" element={<BestSellerPage />} />
          <Route path="/products/:productSlug" element={<ProductDetailPage />} />

          {/* Auth routes for users who are not logged in */}
          <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
          <Route path="/signup" element={<PublicRoute><SignUp /></PublicRoute>} />

          {/* Private routes accessible only to logged-in users */}
          <Route path="/cartpage" element={<PrivateRoute><CartPage /></PrivateRoute>} />
        </Routes>
      </Suspense>
    </div>
    <Footer />
  </Router>
);

function App() {
  return (
    <Provider store={store}>
      <AuthStateObserver>
        <AppRouter />
      </AuthStateObserver>
    </Provider>
  );
}

export default App;