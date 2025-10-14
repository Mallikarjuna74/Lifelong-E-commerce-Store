# Lifelong E-commerce Website

A modern e-commerce platform built with React and Firebase, featuring user authentication, product management, and a responsive shopping experience.

## 🚀 Features

- **User Authentication**
  - Email/Password Sign Up & Login
  - Protected Routes
  - Persistent Auth State

- **Shopping Experience**
  - Product Catalog
  - Shopping Cart
  - Gift Store
  - Best Sellers Section
  - Detailed Product Views

## 🛠️ Tech Stack

- **Frontend:** React + Vite
- **State Management:** Redux Toolkit
- **Authentication:** Firebase Auth
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM

## 📁 Project Structure

```
lifelong-website/
├── src/
│   ├── appStore/          # Redux store configuration
│   ├── components/        # Reusable components
│   ├── features/          # Feature-specific code
│   ├── pages/            # Page components
│   └── firebase.js       # Firebase configuration
```

## 🚦 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Firebase account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/lifelong-website.git
```

2. Install dependencies:
```bash
cd lifelong-website
npm install
```

3. Create a `.env` file in the root directory:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

4. Start the development server:
```bash
npm run dev
```

## 🧪 Testing

Run the test suite:
```bash
npm test
```

## 🚀 Deployment

Build for production:
```bash
npm run build
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## ✨ Acknowledgments

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Firebase](https://firebase.google.com/)
- [Tailwind CSS](https://tailwindcss.com/)