import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './component/Index'
import Cart from './component/Cart'
import Blog from './component/Blog'
import Checkout from './component/Checkout'
import Contact from './component/Contact'
import Error from './component/Error'
import Faq from './component/Faq'
import Service from './component/Service'
import OrderSuccess from './component/Success';
import Certificate from "./component/Certificate"

function App() {
  return (
    <div> 
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/error" element={<Error />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/service" element={<Service />} />
            <Route path="/Certificate" element={<Certificate />} />
            <Route path="/success/:id" element={<OrderSuccess />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;