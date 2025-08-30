// pages/404.js
import { useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Custom404() {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    // Starfield animation with canvas for better performance
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let stars = [];
    let animationFrameId;
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Create stars
    const initStars = () => {
      stars = [];
      const count = Math.min(200, Math.floor(window.innerWidth * window.innerHeight / 2000));
      
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5,
          speed: Math.random() * 0.5 + 0.2,
          opacity: Math.random() * 0.5 + 0.3
        });
      }
    };
    
    initStars();
    
    // Draw stars
    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#0a0a2a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
        
        // Move stars
        star.y += star.speed;
        
        // Reset star if it goes off screen
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });
      
      animationFrameId = requestAnimationFrame(drawStars);
    };
    
    drawStars();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Page Not Found | 404</title>
        <meta name="description" content="The page you're looking for doesn't exist. Let's get you back to safety." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap" rel="stylesheet" />
      </Head>
      
      <div className="min-h-screen bg-[#0a0a2a] text-white font-sans overflow-hidden relative">
        {/* Canvas-based starfield for better performance */}
        <canvas 
          ref={canvasRef} 
          className="absolute top-0 left-0 w-full h-full"
          style={{ zIndex: 0 }}
        />
        
        {/* Enhanced glow effects */}
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-20 animate-pulse-slow delay-3000"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-cyan-500 rounded-full filter blur-3xl opacity-15 animate-pulse-slow delay-2000"></div>
        
        {/* Floating planets/decorations */}
        <div className="absolute top-1/3 left-1/4 w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full filter blur-md opacity-70 animate-float delay-1000"></div>
        <div className="absolute top-1/4 right-1/3 w-8 h-8 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full filter blur-sm opacity-60 animate-float delay-2000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-gradient-to-br from-green-300 to-teal-400 rounded-full filter blur-sm opacity-50 animate-float delay-1500"></div>
        
        <div className="flex items-center justify-center min-h-screen relative z-10 p-4">
          <div className="text-center max-w-3xl mx-auto backdrop-blur-sm bg-black/20 rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
            
            {/* Enhanced Astronaut with more details */}
            <div className="mb-8 mx-auto w-48 h-48 animate-float">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(100 100)">
                  {/* Stars around astronaut */}
                  <circle cx="-45" cy="-55" r="2" fill="white" opacity="0.8" />
                  <circle cx="50" cy="-40" r="1.5" fill="white" opacity="0.6" />
                  <circle cx="30" cy="60" r="1.2" fill="white" opacity="0.7" />
                  <circle cx="-40" cy="50" r="1.8" fill="white" opacity="0.5" />
                  
                  {/* Astronaut Body */}
                  <path d="M-30,-50 a50,50 0 0,1 60,0 l10,70 a40,40 0 0,1 -80,0 z" fill="#E5E7EB"/>
                  <path d="M-20,-40 a40,40 0 0,1 40,0 l5,60 a30,30 0 0,1 -50,0 z" fill="#F9FAFB"/>
                  
                  {/* Helmet with reflection */}
                  <circle cx="0" cy="-35" r="30" fill="#E5E7EB"/>
                  <circle cx="0" cy="-35" r="28" fill="#111827"/>
                  <path d="M-15,-30 a20,15 0 0,1 30,0 a20,15 0 0,1 -30,0" fill="#4B5563" opacity="0.3"/>
                  <ellipse cx="12" cy="-42" rx="5" ry="8" fill="white" opacity="0.2" />
                  
                  {/* Backpack with details */}
                  <rect x="-35" y="-10" width="70" height="40" rx="10" fill="#9CA3AF"/>
                  <rect x="-30" y="-5" width="60" height="30" rx="5" fill="#6B7280"/>
                  <circle cx="0" cy="10" r="5" fill="#4B5563" />
                  <rect x="-5" y="0" width="10" height="5" fill="#9CA3AF" rx="2" />
                  
                  {/* Arms with motion lines */}
                  <path d="M-30,0 c-20,0 -20,30 -40,30" stroke="#E5E7EB" strokeWidth="15" fill="none" strokeLinecap="round"/>
                  <path d="M30,0 c20,0 20,30 40,30" stroke="#E5E7EB" strokeWidth="15" fill="none" strokeLinecap="round"/>
                  <path d="M-45,25 l-5,-5 M-50,20 l-5,-5" stroke="white" strokeWidth="1.5" fill="none" />

                  {/* Legs */}
                  <path d="M-15,20 v30 a10,10 0 0,0 10,10 h10" stroke="#E5E7EB" strokeWidth="15" fill="none" strokeLinecap="round"/>
                  <path d="M15,20 v30 a10,10 0 0,1 -10,10 h-10" stroke="#E5E7EB" strokeWidth="15" fill="none" strokeLinecap="round"/>
                </g>
              </svg>
            </div>
            
            <h1 className="text-7xl md:text-9xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 mb-4 tracking-tighter animate-pulse">
              404
            </h1>
            
            <h2 className="text-2xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Lost in Space
            </h2>
            
            <p className="text-gray-300 mb-10 text-lg max-w-xl mx-auto leading-relaxed">
              Houston, we have a problem! The page you're looking for has drifted off into the cosmos. 
              Let's navigate back to familiar territory.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" passHref>
                <a className="px-8 py-4 rounded-full font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/30 flex items-center justify-center gap-2 group">
                  <svg className="w-5 h-5 transition-transform group-hover:-rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                  </svg>
                  Return to Home Base
                </a>
              </Link>
              
              <button 
                onClick={() => window.history.back()} 
                className="px-8 py-4 rounded-full font-semibold border border-gray-600 hover:border-gray-400 bg-gray-800/40 hover:bg-gray-700/60 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group"
              >
                <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                Go Back
              </button>
            </div>
            
            {/* Additional navigation options */}
            <div className="mt-10 pt-6 border-t border-gray-800">
              <p className="text-gray-400 mb-4">Quick Navigation</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/blog" passHref>
                  <a className="text-sm text-gray-400 hover:text-white transition-colors duration-300">Blog</a>
                </Link>
                <Link href="/about" passHref>
                  <a className="text-sm text-gray-400 hover:text-white transition-colors duration-300">About</a>
                </Link>
                <Link href="/contact" passHref>
                  <a className="text-sm text-gray-400 hover:text-white transition-colors duration-300">Contact</a>
                </Link>
                <Link href="/services" passHref>
                  <a className="text-sm text-gray-400 hover:text-white transition-colors duration-300">Services</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <style jsx global>{`
          body {
            font-family: 'Inter', sans-serif;
            margin: 0;
            overflow-x: hidden;
          }
          
          @keyframes float {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(3deg); }
            100% { transform: translateY(0px) rotate(0deg); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }

          @keyframes pulse-slow {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 0.3; transform: scale(1.05); }
          }
          .animate-pulse-slow {
            animation: pulse-slow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.8; }
          }
          .animate-pulse {
            animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
        `}</style>
      </div>
    </>
  );
          }
