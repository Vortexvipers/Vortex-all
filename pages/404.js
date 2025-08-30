// pages/404.js
import Head from 'next/head';
import Link from 'next/link';

export default function Simple404() {
  return (
    <>
      <Head>
        <title>Page Not Found | 404</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-700 via-blue-800 to-cyan-900 text-white font-sans px-4 text-center">
        <h1 className="text-9xl font-extrabold mb-4 animate-pulse-simple">404</h1>
        <h2 className="text-3xl font-semibold mb-6">Oops! Page Not Found</h2>
        <p className="max-w-md mb-8 text-gray-300">
          Sorry, the page you are looking for does not exist or has been moved.
          Let's get you back on track.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link href="/" passHref>
            <a className="px-6 py-3 bg-blue-600 rounded-full font-semibold hover:bg-blue-700 transition">
              Go to Homepage
            </a>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 border border-white rounded-full font-semibold hover:bg-white hover:text-blue-900 transition"
          >
            Go Back
          </button>
        </div>

        <style jsx global>{`
          body {
            margin: 0;
            font-family: 'Inter', sans-serif;
            background: #0f172a;
            overflow-x: hidden;
          }
          @keyframes pulse-simple {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.6; }
          }
          .animate-pulse-simple {
            animation: pulse-simple 3s ease-in-out infinite;
          }
        `}</style>
      </div>
    </>
  );
              }
