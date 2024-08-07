import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css'; // Global styles
import './Home.css'; // Home page styles
import './Register.css'; // Register page styles
import './Browse.css'; // Browse page styles
import './forums.module.css'; // Forums module-specific styles

// Home Component
function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1 className="hero-title">ANIME VERSE</h1>
        <p className="hero-subtitle">Explore the World of Anime!</p>
        <p className="hero-description">Find your favorite animes, join the community, and more.</p>
        <div className="arcade-img">
          <img src="/pictures/Home page.jpg" alt="Arcade Machine" />
        </div>
      </div>
      <div className="content">
        <div className="fan-art">
          <h3>FAN ART</h3>
          <img src="/pictures/Fan Art.jpg" alt="Fan Art" />
        </div>
        <div className="recommendations">
          <h3>RECOMMENDATIONS</h3>
          <img src="/pictures/tokyo ghoul imag.jpg" alt="Tokyo Ghoul" />
          <p>TOKYO GHOUL</p>
          <p>"Tokyo Ghoul" is a dark fantasy anime set in a world where ghouls, eerie beings who survive on human flesh, secretly exist among us. The story follows Ken Kaneki, a college student who becomes a half-ghoul after an encounter with one. Struggling with his new identity, he must navigate this dangerous world. With its intense action, complex characters, and moral ambiguity, "Tokyo Ghoul" is a gripping, emotional, and thought-provoking series.</p>
        </div>
      </div>
    </div>
  );
}

// Register Component
function Register() {
  return (
    <div className="register">
      <h1>ACCOUNT REGISTRATION</h1>
      <div className="register-content">
        <form className="register-form">
          <label>Email:</label>
          <input type="email" name="email" required />
          <label>Password:</label>
          <input type="password" name="password" required />
          <button type="submit">Sign Up</button>
        </form>
        <div className="register-artwork">
          <img src="/pictures/Registration page.jpg" alt="Artwork" className="small-img" />
        </div>
      </div>
    </div>
  );
}

// Browse Component
function Browse() {
  return (
    <div className="browse">
      <div className="hero">
        <h1 className="hero-title">BROWSE ANIMES</h1>
        <div className="featured-content">
          <img src="pictures\Brose.jpg" alt="Featured Content" />
        </div>
      </div>
      <div className="content">
        <div className="product">
          <h3>Anime Product</h3>
          <img src="pictures\Shopping cart.jpg" alt="Anime Product" />
          <p>$50</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

// Forums Component
function Forums() {
  return (
    <div className="forums">
      <header className="hero">
        <h1 className="hero-title">COMMUNITY FEATURES</h1>
      </header>
      <div className="content">
        <div className="feature-section">
          <div className="feature-item">
            <img src="pictures\Features.jpg" alt="Feature 1" className="feature-img" />
            <p className="feature-text">
              Immerse yourself in the vibrant world of anime culture in Japan, where colorful billboards and lively street scenes celebrate beloved series and characters. Experience the heart of anime fandom with iconic advertisements showcasing popular shows and the latest releases. Join our community to share your favorite anime moments, discuss trends, and explore the impact of Japanese pop culture.
            </p>
          </div>
          <div className="feature-item">
            <img src="pictures/Itachi.jpg" alt="Feature 2" className="feature-img" />
            <p className="feature-text">
              "Naruto" follows the journey of Naruto Uzumaki, a young ninja with a dream of becoming the strongest leader of his village, the Hokage. Despite being shunned due to the powerful Nine-Tails Fox sealed within him, Naruto's determination and unyielding spirit inspire those around him. Alongside his friends and fellow ninjas, Naruto faces formidable foes, uncovers hidden secrets, and embarks on epic adventures. The series is celebrated for its deep storytelling, rich character development, and intense battles. Join the community to discuss Naruto's growth, his allies, and the complex world of ninjutsu.
            </p>
          </div>
        </div>
        <div className="gallery-section">
          <img src="pictures\Forum.jpg" alt="Gallery" className="gallery-img" />
          <p className="gallery-text">
            Dive into the diverse universe of anime with our collection of vibrant posters and series highlights. From action-packed adventures to heartfelt dramas, these posters capture a range of genres and styles that captivate fans worldwide. Join our community to discuss your favorite series, discover new recommendations, and celebrate the art and storytelling of anime.
          </p>
        </div>
      </div>
      <footer className="footer">
      </footer>
    </div>
  );
}

// SignIn Component
function SignIn() {
  return (
    <div className="sign-in">
      <h1>Sign In</h1>
      <p>Please sign in to access more features.</p>
    </div>
  );
}

// NotFound Component
function NotFound() {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
}

// App Component
function App() {
  return (
    <Router>
      <div>
        <nav className="nav-container">
          <div className="site-title">ANIME VERSE</div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/browse">Browse</Link></li>
            <li><Link to="/forums">Forums</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/forums" element={<Forums />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

// Rendering the App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
