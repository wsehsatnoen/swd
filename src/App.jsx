import { useState } from 'react'
import Resume from './Resume.jsx'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h1>Shane Darilek</h1>
      <nav>
        <button onClick={() => navigateTo('home')}>Home</button>
        <button onClick={() => navigateTo('resume')}>Resume</button>
        <button onClick={visitGitHub}>GitHub</button>
        <button onClick={() => navigateTo('contact')}>Contact Info</button>
      </nav>
      
      {/* Render different content based on currentPage */}
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'resume' && <Resume />}
      {currentPage === 'contact' && <ContactPage />}
    </div>
  )
}

// Page Components
function HomePage() {
  return (
    <div>
      <h2>Welcome to my personal blog!</h2>
      <p>This is the home page content.</p>
    </div>
  );
}

function ContactPage() {
  return (
    <div>
      <h2>Contact Information</h2>
      <p>Feel free to reach out to me!</p>
      {/* Add your contact details here */}
    </div>
  );
}

function visitGitHub() {
  window.open("https://www.github.com/wsehsatnoen", "_blank");
}

export default App
