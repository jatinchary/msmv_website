import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Approach from './components/Approach'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <Services />
        <Approach />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}