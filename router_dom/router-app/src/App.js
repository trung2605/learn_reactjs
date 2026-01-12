import logo from './logo.svg';

import { Routes, Route, Link } from 'react-router-dom'; // import Routes from react-router-dom

import HomePage from './pages/Home';
import NewsPage from './pages/News';
import ContactPage from './pages/Contact';

function App() {
  return (
    <div className="App">        
    <nav style={{borderBottom: "1px solid", paddingBottom: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%"}}>
        <ul style={{listStyle: "none", padding: 0, display: "flex", gap: "1rem"}}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/news">News</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      {/* Đặt trong path trùng với component tương ứng */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

    </div>
  );
}

export default App;
