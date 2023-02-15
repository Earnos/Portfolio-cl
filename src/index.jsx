import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style/index.css';
import Home from './pages/Home';
import Error from "./components/Error"
import Header from './components/Header';
import Footer from './components/Footer';

const RootComponent = () => (
  <React.StrictMode>
    <Router>
      <Header />
      <>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </>
      <Footer />
    </Router>
  </React.StrictMode>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RootComponent />)
