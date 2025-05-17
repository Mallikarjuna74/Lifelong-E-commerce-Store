import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header  from "./components/layout/Header.jsx"
import BottomHeader from "./components/layout/BottomHeader.jsx"
import MainContent from "./components/layout/MainContent.jsx"
import Footer from './components/layout/Footer.jsx';
import ProductPage from "./pages/Productpage.jsx"
import GiftStorePage from "./pages/GiftStorePage.jsx"
import BestSellerPage from './pages/BestSellerPage.jsx';

import "./App.css"
function App() {
  
  return (
    <Router>
      <Header/> {/* Header appears on all pages */}
      <BottomHeader/> {/* BottomFooter appears on all pages */}
      <div className="page-content-wrapper"> {/* Optional: for styling main content area */}
        <Routes>
          <Route path="/MainContent" element={<MainContent/>} />
          <Route path="/Productpage" element={<ProductPage/>} />
          <Route path="/GiftStorePage" element={<GiftStorePage/>} />
          <Route path="/BestSellerPage" element={<BestSellerPage/>} />
          {/* 
            Add routes for your new pages here, matching the hrefs in BottomFooter.jsx:
            <Route path="/gift-store" component={GiftStorePage} />
            <Route path="/best-sellers" component={BestSellersPage} />
            <Route path="/support" component={SupportPage} /> 
            <Route path="/extended-warranty" component={ExtendedWarrantyPage} />
            Ensure you create and import these page components.
            Note: The "Products" link in BottomFooter points to "/Productpage".
            It's good practice to use lowercase for routes (e.g., "/productpage").
          */}
        </Routes>
      </div>
      <Footer/> {/* Footer appears on all pages */}
    </Router>
  )
}

export default App;
