import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
// Layout Components
import Header from "./components/layout/Header.jsx";
import BottomHeader from "./components/layout/BottomHeader.jsx";
// Page Components
import MainContent from "./components/layout/MainContent.jsx";
import ProductPage from "./pages/Productpage.jsx";
import GiftStorePage from "./pages/GiftStorePage.jsx";
import BestSellerPage from './pages/BestSellerPage.jsx';
import CartPage from './pages/CartPage.jsx';
import Login from './pages/user/Login.jsx';
import SignUp from './pages/user/SignUp.jsx';
import ProductDetailPage from './pages/ProductDetailPage.jsx';

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
  <Router>
    <Header />
    <BottomHeader />
    <div className="page-content-wrapper">
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