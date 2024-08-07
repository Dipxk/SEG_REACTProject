import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <header>
                <div className="nav-container">
                    <h1 className="site-title">ANIME VERSE</h1>
                    <nav>
                        <ul className="nav-links">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Discover</a></li>
                            <li><a href="#">Forums</a></li>
                            <li><a href="#">Profile</a></li>
                            <li><a href="#">Sign Up</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main>
                <section className="hero">
                    <h2 className="hero-title">ANIME VERSE</h2>
                    <p className="hero-subtitle">Explore the world of Anime! Find your favorite series, join the community, and more.</p>
                    <div className="arcade-img">
                        <img src={`${process.env.PUBLIC_URL}/arcade.jpg`} alt="Anime Arcade" />
                    </div>
                </section>
                <section className="content">
                    <div className="fan-art">
                        <h3>FAN ART</h3>
                        <img src={`${process.env.PUBLIC_URL}/fan-art.jpg`} alt="Fan Art" />
                    </div>
                    <div className="recommendations">
                        <h3>RECOMMENDATIONS</h3>
                        <img src={`${process.env.PUBLIC_URL}/tokyo-ghoul.jpg`} alt="Tokyo Ghoul" />
                        <p>"Tokyo Ghoul" is a dark fantasy anime set in a world where ghouls, creatures who eat human flesh, live secretly among humans. The story follows Ken Kaneki, a college student who becomes a half-ghoul after a deadly encounter. Struggling with his new identity, Kaneki navigates the dangerous world of ghouls while hiding his true nature from those around him. The anime explores themes of identity, humanity, and survival, presenting a gripping tale of internal conflict and moral ambiguity.</p>
                    </div>
                </section>
            </main>
            <footer>
                <div className="social-links">
                    <a href="#">Facebook</a>
                    <a href="#">Twitter</a>
                    <a href="#">Instagram</a>
                    <a href="#">YouTube</a>
                </div>
            </footer>
        </div>
    );
}

export default App;