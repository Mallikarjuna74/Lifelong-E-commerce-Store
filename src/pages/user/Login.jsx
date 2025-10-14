import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [view, setView] = useState('login'); // 'login', 'recover', 'resetSuccess'
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [recoverEmail, setRecoverEmail] = useState('');
    const navigate = useNavigate();

    const handleLoginSubmit = async (event) => {
        event.preventDefault();
        if (!email || !password) {
            alert("Please enter both email and password.");
            return;
        }
        console.log('Login attempt with:', { email, password });

        // TODO: Implement actual login logic (e.g., API call)
        // Example structure for an API call:
        // try {
        //   const response = await fetch('/api/account/login', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ email, password }),
        //   });
        //   const data = await response.json();
        //   if (response.ok) {
        //     console.log('Login successful:', data);
        //     // Store token, user info, etc.
        //     navigate('/MainContent'); // or to a dashboard
        //   } else {
        //     alert(data.message || 'Login failed. Please check your credentials.');
        //   }
        // } catch (error) {
        //   console.error('Login error:', error);
        //   alert('An error occurred during login. Please try again later.');
        // }

        // Current placeholder logic:
        alert(`Simulating login for: ${email}. Redirecting...`); // Placeholder
        // Simulate a delay for UX if needed, then navigate
        setTimeout(() => {
            navigate('/MainContent'); // Navigate after successful simulation
        }, 1000);
    };

    const handleRecoverSubmit = async (event) => {
        event.preventDefault();
        if (!recoverEmail) {
            alert("Please enter your email address to recover your password.");
            return;
        }
        console.log('Password recovery attempt for:', recoverEmail);

        // TODO: Implement actual password recovery logic (e.g., API call)
        // Example:
        // try {
        //   const response = await fetch('/api/account/recover', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ email: recoverEmail }),
        //   });
        //   if (response.ok) {
        //     setView('resetSuccess');
        //   } else {
        //     const data = await response.json();
        //     alert(data.message || 'Password recovery failed.');
        //   }
        // } catch (error) {
        //   console.error('Recovery error:', error);
        //   alert('An error occurred during password recovery.');
        // }

        // Current placeholder logic:
        alert(`Simulating password recovery for: ${recoverEmail}. Check your email (simulated).`); // Placeholder
        setView('resetSuccess'); // Simulate success
        setRecoverEmail(''); // Clear the input field
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
                <h2 className="text-4xl font-extrabold text-[#b31f29]">
                    Welcome
                </h2>
            </div>

            <div className="bg-white pt-8 pb-10 px-6 sm:px-10 rounded-xl shadow-2xl w-full max-w-lg">
                {view === 'resetSuccess' && (
                    <div className="note form-success text-center p-4 mb-6 bg-green-50 border border-green-300 rounded-md" id="ResetSuccess">
                        <p className="text-green-700 font-medium">We've sent you an email with a link to update your password.</p>
                        <p className="mt-4">
                            <button
                                onClick={() => setView('login')}
                                className="font-semibold text-indigo-600 hover:text-indigo-500 transition-colors duration-150"
                            >
                                Back to Login
                            </button>
                        </p>
                    </div>
                )}

                {view === 'login' && (
                    <div id="CustomerLoginForm">
                        <form onSubmit={handleLoginSubmit} noValidate className="space-y-6">
                            <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Login</h3>
                            <div>
                                <label htmlFor="CustomerEmail" className="sr-only">Email</label>
                                <input
                                    type="email"
                                    name="customer[email]"
                                    id="CustomerEmail"
                                    className="appearance-none rounded-md relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    autoComplete="email"
                                />
                            </div>
                            <div>
                                <label htmlFor="CustomerPassword" className="sr-only">Password</label>
                                <input
                                    type="password"
                                    name="customer[password]"
                                    id="CustomerPassword"
                                    className="appearance-none rounded-md relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    autoComplete="current-password"
                                />
                            </div>
                            <div>
                                <button type="submit" className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#b31f29] hover:bg-[#9c1b24] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#b31f29] transition-colors duration-150">
                                    Sign In
                                </button>
                            </div>
                            <div className="text-sm text-center space-y-2 pt-4">
                                <p>
                                    <Link to="/" className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-150">
                                        Return to Store
                                    </Link>
                                </p>
                                <p>
                                    <Link to="/SignUp" id="customer_register_link" className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-150">
                                        Create account
                                    </Link>
                                </p>
                                <p>
                                    <button
                                        type="button"
                                        onClick={() => setView('recover')}
                                        className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-150"
                                        id="RecoverPassword"
                                    >
                                        Forgot your password?
                                    </button>
                                </p>
                            </div>
                            {/* 
                              If you plan to use hCaptcha or similar:
                              <div className="h-captcha mt-4" data-sitekey="YOUR_ACTUAL_SITE_KEY" data-size="invisible"></div> 
                              You might need a React wrapper or useEffect to initialize it properly when the form view changes.
                            */}
                        </form>
                    </div>
                )}

                {view === 'recover' && (
                    <div id="RecoverPasswordForm">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Reset your password</h2>
                        <p className="text-center text-sm text-gray-600 mb-8">We will send you an email to reset your password.</p>
                        <form onSubmit={handleRecoverSubmit} noValidate className="space-y-6">
                            <div>
                                <label htmlFor="RecoverEmail" className="sr-only">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="RecoverEmail"
                                    className="appearance-none rounded-md relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="Email"
                                    autoCorrect="off"
                                    autoCapitalize="off"
                                    value={recoverEmail}
                                    onChange={(e) => setRecoverEmail(e.target.value)}
                                    required
                                    autoComplete="email"
                                />
                            </div>
                            <div>
                                <button type="submit" className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#b31f29] hover:bg-[#9c1b24] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#b31f29] transition-colors duration-150">
                                    Submit
                                </button>
                            </div>
                            <div className="text-center pt-2">
                                <button
                                    type="button"
                                    onClick={() => setView('login')}
                                    className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-150"
                                    id="HideRecoverPasswordLink"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Login;
