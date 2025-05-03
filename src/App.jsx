import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Aboutus from './Components/Aboutus/Aboutus';
import Contact from './Components/Contactus/Contactus';
import Menu from './Components/Menu/Menu';
import Feedback from './Components/Feedback/Feedback';

// The MainPage component that holds sections like Home, About Us, and Contact Us
function MainPage() {
  return (
    <>
      <section id="home"><Home /></section>
      <section id="aboutus"><Aboutus /></section>
      <section id="contactus"><Contact /></section>
    </>
  );
}

function App() {
  // Define search query state at the app level
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <Router>
        {/* Pass the searchQuery and setSearchQuery to Navbar */}
        <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* Pass searchQuery as a prop to Menu so it can filter items */}
          <Route path="/Menu" element={<Menu searchQuery={searchQuery} />} />
          <Route path="/Feedback" element={<Feedback />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
