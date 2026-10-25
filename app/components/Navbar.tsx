'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#approach', label: 'Our Approach' },
  { href: '#testimonials', label: 'Clients' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'
  const resolveHref = (href: string) =>
    href.startsWith('#') && !isHome ? `/${href}` : href
  const { scrollYProgress } = useScroll()
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-md' : ''
      }`}
      style={{
        background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(20px)',
        borderBottom: isScrolled ? '1px solid rgba(148, 163, 184, 0.15)' : 'none',
      }}
    >
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-500 to-brand-600"
        style={{ width: progressWidth }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
      />
      
      <nav className="container" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 sm:h-18">
          <Link
            href={isHome ? '#home' : '/'}
            className="flex items-center gap-2 text-xl font-semibold text-slate-900"
            aria-label="MSVV Wealth Partners Home"
          >
            <motion.div
              className="relative w-9 h-9"
              whileHover={{ rotate: 6, scale: 1.05 }}
              transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
            >
              <Image
                src="/images/image.png"
                alt="MSVV Wealth Partners"
                width={36}
                height={36}
                className="w-9 h-9 rounded-lg"
                priority
              />
            </motion.div>
            <span className="hidden sm:block">MSVV Wealth Partners</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={resolveHref(link.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index + 0.1, duration: 0.4 }}
                className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors duration-200 relative"
                whileHover={{ y: -2 }}
              >
                {link.label}
                <motion.span
                  className="absolute bottom-[-6px] left-0 right-0 h-[2px] bg-brand-500 scale-x-0 origin-center"
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
                />
              </motion.a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href={resolveHref('#contact')}
              className="btn-secondary text-sm px-5 py-2"
              whileHover={{ y: -2, boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)' }}
              whileTap={{ scale: 0.98 }}
            >
              Get in Touch
            </motion.a>
            <motion.a
              href="https://calendly.com/haritham-msvvwealthpartners/30min?month=2026-10"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm px-5 py-2 relative overflow-hidden"
              style={{ 
                background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                boxShadow: '0 4px 14px rgba(37, 99, 235, 0.3)'
              }}
              whileHover={{ 
                y: -2, 
                boxShadow: '0 8px 25px rgba(37, 99, 235, 0.4)',
                scale: 1.02 
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Schedule a Call</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-brand-500 to-brand-600 opacity-0 group-hover:opacity-100"
                animate={{ scaleX: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                style={{ transformOrigin: 'left center' }}
              />
            </motion.a>
          </div>

          <motion.button
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            whileHover={{ scale: 1.1, rotate: [0, 10, -10, 0] }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? (
              <motion.div
                initial={{ rotate: 90 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="md:hidden overflow-hidden py-4 border-t border-slate-200"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={resolveHref(link.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: 0.03 * index, duration: 0.3 }}
                    className="text-base font-medium text-slate-600 hover:text-brand-600 transition-colors py-3 border-b border-slate-100"
                    onClick={() => setIsMobileMenuOpen(false)}
                    whileHover={{ x: 8, color: '#2563eb' }}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="flex flex-col gap-3 pt-4"
                >
                  <motion.a
                    href="https://calendly.com/haritham-msvvwealthpartners/30min?month=2026-10"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-center"
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Schedule a Call
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}