import { Header, Footer, Hero } from './components';
import Login from './auth/login';
import Signup from './auth/signup';

import { Product, Delivery, Counts, Store, Testimonials, Mobile, Card, Error, List } from './pages'
import { HashRouter, Routes, Route } from 'react-router-dom';
import './index.css';

function App() {
  return ( 
    <HashRouter>
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/product" element={<Product />} />
      <Route path="/delivery" element={<Delivery />} />
      <Route path="/store" element={<Store />} />
      <Route path="/signup" element={<Signup />} />
      <Route 
          path="/" 
          element={
            <div>
              <Header />
              <Hero />
              <List />
              <Card/>
              <Testimonials />
              <Mobile />
              <Counts/>
              <Footer />
            </div>
          } 
        />
        <Route path="*" element={<Error/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
