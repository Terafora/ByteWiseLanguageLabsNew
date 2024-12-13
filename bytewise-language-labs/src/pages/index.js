import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Bytewise Language Labs</title>
        <meta name="description" content="Learn Japanese in VR with Bytewise Language Labs" />
      </Head>
      <header className="navbar">
        <nav>
          <Link href="/" className="logo">
            Bytewise Language Labs
          </Link>
          <ul className="nav-links">
            <li><Link href="/blog" className="nav-link">Blog</Link></li>
            <li><Link href="/about" className="nav-link">About</Link></li>
            <li><Link href="/contact" className="nav-link">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main className="hero">
        <div className="video-container">
          <video 
            autoPlay 
            muted 
            loop
            playsInline
          >
            <source src="https://videos.pexels.com/video-files/8762946/8762946-uhd_2560_1440_25fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="hero-content">
          <h1>Step Into Japan—Virtually, Powerfully, Fluently.</h1>
          <p>Unlock the language, culture, and confidence of Japanese with cutting-edge virtual reality. Immerse yourself in a world where learning feels natural, engaging, and unforgettable.</p>
        </div>
      </main>
    </>
  );
}

