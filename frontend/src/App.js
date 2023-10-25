import About from './components/About';
import ContactUs from './components/ContactUs';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Predict from './components/Predict';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Faq />
              <HowItWorks />
              <ContactUs />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/predict" element={<Predict />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
