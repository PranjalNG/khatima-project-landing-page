import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import { Leaf, Truck, Clock, ShoppingBag, ArrowUp, MousePointerClick, Sprout, Home, CheckCircle2 } from 'lucide-react';

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  // Grab the link from your .env file (with a safe fallback just in case)
  const storeLink = import.meta.env.VITE_STORE_URL || '/store';

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useGSAP(() => {
    // 1. Initial Page Load Animations
    const tlLoad = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

    tlLoad
      .from('.nav-brand', { y: -20, opacity: 0, duration: 0.8, delay: 0.2 })
      .from('.hero-badge', { scale: 0.8, opacity: 0 }, '-=0.5')
      .from('.hero-text', { y: 30, opacity: 0, stagger: 0.15 }, '-=0.6')
      .from('.hero-btn', { scale: 0.9, opacity: 0, ease: 'back.out(1.7)' }, '-=0.5');

    // 2. Infinite Marquee Animation
    gsap.to('.marquee-content', {
      xPercent: -50,
      repeat: -1,
      duration: 20,
      ease: 'linear',
    });

    // 3. Feature Cards Stagger
    gsap.from('.feature-card', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.feature-cards-container',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });

    // 4. "How It Works" Timeline Animation
    gsap.from('.step-item', {
      opacity: 0,
      x: -40,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.3,
      scrollTrigger: {
        trigger: '.steps-container',
        start: 'top 75%',
        toggleActions: 'play none none reverse',
      },
    });

    // 5. Final Promo Banner Scale-In
    gsap.from('.promo-banner', {
      opacity: 0,
      scale: 0.9,
      y: 40,
      duration: 1,
      ease: 'back.out(1.2)',
      scrollTrigger: {
        trigger: '.promo-banner',
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    });

    // 6. Floating Parallax Icons
    gsap.utils.toArray('.float-icon').forEach((icon: any, i) => {
      gsap.to(icon, {
        y: -50 * (i + 1),
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    // 7. Back to Top Button Fade
    gsap.to('.back-to-top', {
        opacity: 1,
        duration: 0.4,
        scrollTrigger: {
            trigger: '.feature-cards-container',
            start: 'top 40%',
            toggleActions: 'play none none reverse'
        }
    });

    // Button Hover
    if (buttonRef.current) {
      buttonRef.current.addEventListener('mouseenter', () => {
        gsap.to(buttonRef.current, { scale: 1.05, boxShadow: "0px 10px 30px rgba(74, 222, 128, 0.2)", duration: 0.3 });
      });
      buttonRef.current.addEventListener('mouseleave', () => {
        gsap.to(buttonRef.current, { scale: 1, boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)", duration: 0.3 });
      });
    }
  }, { scope: containerRef });

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const marqueeItems = ["🍅 Fresh Tomatoes", "🧅 Crisp Onions", "🥔 Organic Potatoes", "🥬 Green Spinach", "🌶️ Spicy Chilies", "🥕 Crunchy Carrots", "🥦 Farm Broccoli"];

  return (
    <div id="root" ref={containerRef} className="font-sans text-white bg-[#0a1a12] relative overflow-hidden">
      
      {/* Ambient Glows */}
      <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-[#122e1f] rounded-full blur-[100px] opacity-40 z-0 pointer-events-none"></div>
      <div className="absolute top-[40%] right-[-10%] w-[400px] h-[400px] bg-[#0d2417] rounded-full blur-[120px] opacity-50 z-0 pointer-events-none"></div>

      {/* Floating Decorative Icons */}
      <Leaf className="float-icon absolute top-[20%] right-[15%] w-12 h-12 text-[#1e4630] opacity-30 z-0 rotate-45" />
      <Sprout className="float-icon absolute top-[60%] left-[10%] w-16 h-16 text-[#1e4630] opacity-30 z-0 -rotate-12" />

      {/* --- NAVIGATION --- */}
      <nav className="flex flex-col items-center justify-center p-8 max-w-7xl mx-auto nav-brand relative z-10 gap-3">
        <div className="flex items-center gap-2 text-[#d4f0df] font-bold text-4xl font-serif tracking-wide">
          <Leaf className="w-9 h-9 text-[#4ade80]" />
          <span>GreenKart</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-[#8ba895] text-sm font-medium">
          <span className="flex items-center gap-1.5 bg-[#0f2418] border border-[#1e4630] px-3 py-1 rounded-full"><CheckCircle2 className="w-4 h-4 text-[#4ade80]"/> 10km Delivery</span>
          <span className="flex items-center gap-1.5 bg-[#0f2418] border border-[#1e4630] px-3 py-1 rounded-full"><CheckCircle2 className="w-4 h-4 text-[#4ade80]"/> Khatima Mandi</span>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <main className="relative z-10 flex flex-col items-center justify-center pt-8 pb-20 px-4 text-center">
        <div className="hero-badge flex items-center gap-2 bg-[#122e1f] border border-[#1e4630] text-[#4ade80] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-8 shadow-lg">
          <span className="w-2 h-2 bg-[#4ade80] rounded-full animate-pulse shadow-[0_0_8px_#4ade80]"></span>
          Sourced Daily
        </div>

        <h1 className="hero-text text-5xl md:text-7xl font-serif font-bold text-[#d4f0df] tracking-tight mb-6 max-w-4xl leading-tight">
          Today's Picks, <br className="hidden md:block" />
          <span className="text-[#4ade80]">Fresh from the Mandi.</span>
        </h1>
        
        <p className="hero-text text-lg md:text-xl text-[#8ba895] mb-12 max-w-2xl leading-relaxed">
          Farm-fresh veggies strictly sourced from Khatima Sabji Mandi. Ensuring quality and freshness delivered straight to your door.
        </p>

        {/* Link updated to use the .env variable */}
        <a 
          ref={buttonRef} 
          href={storeLink}
          className="hero-btn flex items-center gap-3 bg-[#1e4630] border border-[#2d6b46] text-[#d4f0df] px-10 py-4 rounded-xl font-semibold text-lg transition-colors shadow-xl cursor-pointer"
        >
          <ShoppingBag className="w-5 h-5 text-[#4ade80]" />
          Enter Store
        </a>
      </main>

      {/* --- INFINITE MARQUEE --- */}
      <div className="relative z-10 w-full bg-[#4ade80] py-3 overflow-hidden rotate-1 mt-10 shadow-2xl">
        <div className="marquee-content flex whitespace-nowrap w-[200%]">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={index} className="text-[#0a1a12] text-lg font-bold uppercase tracking-widest px-8">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* --- FEATURES SECTION --- */}
      <section className="relative z-10 py-24 px-4 feature-cards-container">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="feature-card flex flex-col items-center text-center p-8 rounded-3xl bg-[#0f2418] border border-[#1e4630] hover:border-[#2d6b46] transition-colors shadow-lg">
            <div className="w-16 h-16 bg-[#163323] rounded-2xl flex items-center justify-center mb-6 text-[#4ade80]">
              <Leaf className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-serif font-bold mb-3 text-[#d4f0df]">Local & Fresh</h3>
            <p className="text-[#8ba895]">Handpicked daily from the Sabji Mandi. If it's not fresh, it's not on our app.</p>
          </div>

          <div className="feature-card flex flex-col items-center text-center p-8 rounded-3xl bg-[#0f2418] border border-[#1e4630] hover:border-[#2d6b46] transition-colors shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#4ade80] text-[#0a1a12] text-xs font-bold px-4 py-1 rounded-bl-xl tracking-wider">FREE ZONE</div>
            <div className="w-16 h-16 bg-[#163323] rounded-2xl flex items-center justify-center mb-6 text-[#4ade80]">
              <Truck className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-serif font-bold mb-3 text-[#d4f0df]">Fast Delivery</h3>
            <p className="text-[#8ba895]">Delivering up to 10km. Enjoy <span className="text-[#4ade80] font-semibold">100% Free Delivery</span> if you are within a 2km radius.</p>
          </div>

          <div className="feature-card flex flex-col items-center text-center p-8 rounded-3xl bg-[#0f2418] border border-[#1e4630] hover:border-[#2d6b46] transition-colors shadow-lg">
            <div className="w-16 h-16 bg-[#163323] rounded-2xl flex items-center justify-center mb-6 text-[#4ade80]">
              <Clock className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-serif font-bold mb-3 text-[#d4f0df]">Daily Stock Updates</h3>
            <p className="text-[#8ba895]">Prices and availability are updated every single morning to match true Mandi rates.</p>
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS SECTION --- */}
      <section className="relative z-10 py-20 px-4 steps-container bg-[#0d2417] border-y border-[#1e4630]/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-[#d4f0df] mb-4">From Mandi to Kitchen</h2>
            <p className="text-[#8ba895]">How GreenKart gets the freshest vegetables to your door.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-[2px] bg-[#1e4630] z-0"></div>

            <div className="step-item relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#1e4630] rounded-full flex items-center justify-center mb-6 border-4 border-[#0d2417] text-[#4ade80] shadow-[0_0_15px_rgba(74,222,128,0.2)]">
                <MousePointerClick className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#d4f0df]">1. You Order</h3>
              <p className="text-[#8ba895] text-sm px-4">Browse today's live inventory and place your order before the cutoff time.</p>
            </div>

            <div className="step-item relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#1e4630] rounded-full flex items-center justify-center mb-6 border-4 border-[#0d2417] text-[#4ade80] shadow-[0_0_15px_rgba(74,222,128,0.2)]">
                <Sprout className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#d4f0df]">2. We Source</h3>
              <p className="text-[#8ba895] text-sm px-4">Early next morning, we handpick your items directly from Khatima Sabji Mandi.</p>
            </div>

            <div className="step-item relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#1e4630] rounded-full flex items-center justify-center mb-6 border-4 border-[#0d2417] text-[#4ade80] shadow-[0_0_15px_rgba(74,222,128,0.2)]">
                <Home className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#d4f0df]">3. We Deliver</h3>
              <p className="text-[#8ba895] text-sm px-4">Your fresh produce arrives at your doorstep, free of charge if within 2km.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL PROMO BANNER --- */}
      <section className="relative z-10 py-24 px-4">
        <div className="promo-banner max-w-4xl mx-auto bg-gradient-to-br from-[#122e1f] to-[#0a1a12] border border-[#4ade80]/30 rounded-3xl p-10 md:p-14 text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Ready to cook with the freshest ingredients?</h2>
          <p className="text-[#8ba895] mb-10 text-lg">Check out what arrived at the Mandi today.</p>
          
          {/* Link updated to use the .env variable */}
          <a 
            href={storeLink} 
            className="inline-block bg-[#4ade80] text-[#0a1a12] font-bold text-lg px-12 py-4 rounded-xl shadow-[0_4px_20px_rgba(74,222,128,0.4)] hover:bg-[#22c55e] transition-colors"
          >
            View Today's Stock
          </a>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="w-full text-center text-[#8ba895]/60 text-xs pb-10 relative z-10">
          © 2026 GreenKart. Khatima Mandi Delivery. 10km Range. 
      </footer>

      {/* --- BACK TO TOP BUTTON --- */}
      <button 
          onClick={scrollToTop}
          className="back-to-top fixed bottom-8 right-8 w-14 h-14 bg-[#4ade80] text-[#0a1a12] hover:bg-[#22c55e] border-2 border-[#16a34a] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(74,222,128,0.3)] opacity-0 z-50 transition-all hover:scale-110 active:scale-95 cursor-pointer"
          aria-label="Scroll to top"
      >
        <ArrowUp className="w-7 h-7" />
      </button>

    </div>
  );
};

export default App;