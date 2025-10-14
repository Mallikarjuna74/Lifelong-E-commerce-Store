import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from './features/auth/authSlice';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import UserProfile from './components/UserProfile';

// A wrapper for routes that require authentication
const PrivateRoute = ({ children }) => {
    const user = useSelector(selectUser);
    return user ? children : <Navigate to="/signin" />;
};

// A wrapper for public routes (e.g., signin/signup should not be accessible if logged in)
const PublicRoute = ({ children }) => {
    const user = useSelector(selectUser);
    return !user ? children : <Navigate to="/profile" />;
}

const AuthRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/profile" />} />
        <Route path="/signup" element={
            <PublicRoute>
                <SignUp />
            </PublicRoute>
        } />
        <Route path="/signin" element={
            <PublicRoute>
                <SignIn />
            </PublicRoute>
        } />
        <Route path="/profile" element={
            <PrivateRoute>
              <UserProfile />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default AuthRouter;
