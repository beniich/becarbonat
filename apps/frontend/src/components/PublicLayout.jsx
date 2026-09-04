import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import BeeCarbonatLogo from './BeeCarbonatLogo';

export default function PublicLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bizos-bg bizos-honeycomb text-[#e2e8f0] flex flex-col font-sans selection:bg-[#d946ef] selection:text-white">
      {/* Public Header Flottant Bizos */}
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="sticky top-4 z-50 px-4 sm:px-6"
      >
        <header className="max-w-6xl mx-auto bizos-header-glow rounded-full h-16 px-6 sm:px-8 flex items-center justify-between shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_25px_rgba(217,70,239,0.2)]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <BeeCarbonatLogo size={32} showText={true} />
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 font-mono text-[11px] uppercase tracking-[0.15em] font-semibold">
            {[
              { path: '/about', label: 'About & Roots' },
              { path: '/market', label: 'Carbon Market' },
              { path: '/case-studies', label: 'Success Stories' },
              { path: '/impact', label: 'Impact Report' },
              { path: '/pricing', label: 'Pricing' }
            ].map((tab) => {
              const isActive = location.pathname === tab.path;
              return (
                <Link
                  key={tab.path}
                  to={tab.path}
                  className={`transition-all py-1.5 px-3.5 rounded-full ${
                    isActive 
                      ? 'bg-[rgba(217,70,239,0.2)] text-[#f472b6] border border-[rgba(217,70,239,0.5)] shadow-[0_0_12px_rgba(217,70,239,0.3)] font-bold' 
                      : 'text-[#a78bfa] hover:text-[#f472b6] hover:bg-[rgba(217,70,239,0.1)]'
                  }`}
                >
                  {tab.label}
                </Link>
              );
            })}
          </nav>

          {/* Call-to-actions */}
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#a78bfa] hover:text-white transition-colors px-3 py-2"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="text-[11px] font-mono font-bold tracking-wider uppercase bizos-cta-pink text-white px-5 py-2 rounded-full transition-all shadow-[0_0_20px_rgba(217,70,239,0.4)]"
            >
              Get Started
            </Link>
          </div>
        </header>
      </motion.div>

      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Public Footer Bizos Neon Wave */}
      <footer className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 my-12 w-full">
        <div className="relative rounded-3xl bg-[#0c0517]/90 backdrop-blur-2xl border border-[#d946ef]/30 p-8 sm:p-12 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(217,70,239,0.15)]">
          {/* Electric Energy Waves Ambient Graphic */}
          <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-gradient-to-tr from-[#d946ef]/30 via-[#8b5cf6]/20 to-transparent blur-3xl pointer-events-none"></div>
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-gradient-to-tl from-[#ec4899]/30 via-[#d946ef]/20 to-transparent blur-3xl pointer-events-none"></div>
          
          {/* Light Wave SVG overlay trails */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" viewBox="0 0 1000 300" preserveAspectRatio="none">
            <path d="M-100 250 Q 200 120 500 280 T 1100 150" fill="none" stroke="url(#publicPinkWave)" strokeWidth="3" />
            <path d="M-50 280 Q 300 180 600 290 T 1150 180" fill="none" stroke="url(#publicPurpleWave)" strokeWidth="1.5" strokeDasharray="6 6" />
            <defs>
              <linearGradient id="publicPinkWave" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#d946ef" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#ec4899" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="publicPurpleWave" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#d946ef" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#ec4899" stopOpacity="0.8" />
              </linearGradient>
            </defs>
          </svg>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div className="space-y-4">
              <BeeCarbonatLogo size={34} showText={true} />
              <p className="text-sm text-[#a78bfa] max-w-xs leading-relaxed">
                Pioneering sovereign smart facility ecosystems through zero-emission AI & Spider CAFM engineering.
              </p>
            </div>
            <div>
              <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-white mb-5">Platform</h4>
              <ul className="space-y-2.5 text-xs text-[#a78bfa]">
                <li><Link to="/about" className="hover:text-[#f472b6] transition-colors">About & Roots</Link></li>
                <li><Link to="/market" className="hover:text-[#f472b6] transition-colors">Carbon Market</Link></li>
                <li><Link to="/case-studies" className="hover:text-[#f472b6] transition-colors">Success Stories</Link></li>
                <li><Link to="/impact" className="hover:text-[#f472b6] transition-colors">Impact Report</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-white mb-5">Legal & Security</h4>
              <ul className="space-y-2.5 text-xs text-[#a78bfa]">
                <li><Link to="/pricing" className="hover:text-[#f472b6] transition-colors">Pricing & Plans</Link></li>
                <li><Link to="#" className="hover:text-[#f472b6] transition-colors">Privacy Policy</Link></li>
                <li><Link to="#" className="hover:text-[#f472b6] transition-colors">Terms of Service</Link></li>
                <li><Link to="#" className="hover:text-[#f472b6] transition-colors">SOC2 Compliance</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-white mb-5">Connect</h4>
              <ul className="space-y-2.5 text-xs text-[#a78bfa]">
                <li><a href="mailto:contact@beecarbonat.com" className="hover:text-[#f472b6] transition-colors">contact@beecarbonat.com</a></li>
                <li><Link to="/partner-portal" className="hover:text-[#f472b6] transition-colors">Partner Portal</Link></li>
                <li><Link to="/careers" className="hover:text-[#f472b6] transition-colors">Careers</Link></li>
              </ul>
            </div>
          </div>

          <div className="relative z-10 pt-6 border-t border-white/10 text-xs text-[#94a3b8] flex flex-col md:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} BeeCarbonat PRO x Spider CAFM. Tous droits réservés.</p>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                BizOS Engine Connected
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
