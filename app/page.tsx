"use client";

import Link from 'next/link';

export default function Home() {
  return (
    <div className="app-wrapper">
      
      {/* --- Top Navigation Bar --- */}
      <nav className="navbar">
        <div className="logo">
          <h2>Winter's Song</h2>
        </div>
        <ul className="nav-links">
          <li><Link href="/">The Citadel</Link></li>
          <li><Link href="/">The Watch</Link></li>
          <li><Link href="/">Download</Link></li>
          <li className="divider"></li>
          <li><Link href="/">Take the Black</Link></li>
          <li><Link href="/"><button className="login-btn">Enter the North</button></Link></li>
        </ul>
      </nav>

      {/* --- Hero Section --- */}
      <main className="hero">
        <h1>Music is coming</h1>
        <p>Join the Night's Watch for one moon, free. Just 10 Gold Dragons/moon after. Send a raven anytime.</p>
        <div className="cta-buttons">
          <button className="btn btn-primary">TAKE THE OATH</button>
          <button className="btn btn-secondary">VIEW THE SCROLLS</button>
        </div>
        <span className="terms">
          <Link href="/">Terms of the Old Gods and the New</Link> apply. 
          One moon free not for those who have broken their oath.
        </span>
      </main>

      {/* --- Footer Placeholder --- */}
      <footer className="footer-placeholder">
        <p>This is a "Winter's Song" clone for the hackathon.</p>
        <p>(Beyond the Wall)</p>
      </footer>

      {/* --- Component-Specific Styles --- */}
      <style jsx>{`
        .app-wrapper {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background-color: #000;
        }

        /* --- Navbar Styles --- */
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 40px;
          background-color: #000;
          color: #fff;
        }
        
        .logo h2 {
          font-family: 'Times New Roman', Times, serif;
          font-weight: 700;
          color: #fff;
          margin: 0;
          letter-spacing: 1px;
        }
        
        .nav-links {
          display: flex;
          align-items: center;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-links li {
          margin-left: 24px;
          font-weight: 700;
          font-size: 1rem;
        }

        .nav-links .divider {
          height: 16px;
          width: 1px;
          background-color: #fff;
          margin-left: 24px;
        }

        .login-btn {
          background-color: #fff;
          color: #000;
          border: none;
          border-radius: 500px;
          padding: 14px 32px;
          font-weight: 700;
          font-size: 1rem;
          letter-spacing: 0.5px;
        }
        
        .login-btn:hover {
          transform: scale(1.05);
          background-color: #f0f0f0;
        }

        /* --- Hero Section Styles --- */
        .hero {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 40px;
          /* Night King's Icy Blue Gradient */
          background: rgb(10, 25, 50);
          background: linear-gradient(150deg, rgba(10, 25, 50,1) 0%, rgba(20, 70, 120,1) 50%, rgba(0,0,0,1) 100%);
        }
        
        .hero h1 {
          font-size: 5rem; /* 80px */
          font-weight: 900;
          margin-bottom: 20px;
          letter-spacing: -0.04em;
          font-family: 'Times New Roman', Times, serif;
        }
        
        .hero p {
          font-size: 1.125rem; /* 18px */
          margin-bottom: 30px;
        }
        
        .cta-buttons {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
        }
        
        .btn {
          border: none;
          border-radius: 500px;
          padding: 16px 32px;
          font-weight: 700;
          font-size: 1rem;
          letter-spacing: 1px; /* More epic spacing */
          transform: scale(1.0);
          transition: transform 0.2s ease;
        }
        
        .btn:hover {
          transform: scale(1.05);
        }

        .btn-primary {
          background-color: #75d1ff; /* Icy Blue */
          color: #000;
        }
        
        .btn-secondary {
          background-color: transparent;
          color: #fff;
          border: 2px solid #878787;
        }
        
        .terms {
          font-size: 0.7rem;
          color: #a7a7a7;
        }
        
        .terms a {
          color: #a7a7a7;
          text-decoration: underline;
        }

        /* --- Footer Placeholder Styles --- */
        .footer-placeholder {
          text-align: center;
          padding: 50px;
          background-color: #000;
          color: #535353;
          border-top: 1px solid #222;
        }
      `}</style>
    </div>
  );
}