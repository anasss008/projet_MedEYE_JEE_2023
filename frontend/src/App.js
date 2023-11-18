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
import HWHeader from './components/HWHeader';
import Result from './components/Result';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <About />
              <Faq />
              <HowItWorks />
              <ContactUs />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Header />
              <Login />
            </>
          }
        />
        <Route
          path="/sign-up"
          element={
            <>
              <Header />
              <SignUp />
            </>
          }
        />
        <Route
          path="/predict"
          element={
            <>
              <HWHeader />
              <Predict />
            </>
          }
        />
        <Route
          path="/result"
          element={
            <>
              <HWHeader />
              <Result />
            </>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
