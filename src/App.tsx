import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PageShell } from '@/components/Layout';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import ServiceAreas from '@/pages/ServiceAreas';
import HowItWorks from '@/pages/HowItWorks';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';

gsap.registerPlugin(ScrollTrigger);

function MotionController() {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.05, smoothWheel: true });
    let animationFrame = 0;
    const raf = (time: number) => { lenis.raf(time); animationFrame = requestAnimationFrame(raf); };
    animationFrame = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(animationFrame); lenis.destroy(); };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    const elements = gsap.utils.toArray<HTMLElement>('.section-heading, .service-detail, .zone, .compare-card, .process-step, .value-block, .area-card, .timeline-item, .contact-card, .about-value');
    const tween = gsap.fromTo(elements, { y: 26, opacity: 0 }, { y: 0, opacity: 1, duration: 0.75, stagger: 0.07, ease: 'power2.out', scrollTrigger: { trigger: elements[0] ?? document.body, start: 'top 88%', once: true } });
    const parallaxImage = gsap.utils.toArray<HTMLElement>('.inner-hero, .about-hero-photo').map((element) => gsap.to(element, { backgroundPositionY: '20%', ease: 'none', scrollTrigger: { trigger: element, start: 'top top', end: 'bottom top', scrub: true } }));
    const refresh = window.setTimeout(() => ScrollTrigger.refresh(), 80);
    return () => { tween.kill(); parallaxImage.forEach((item) => item.kill()); window.clearTimeout(refresh); };
  }, [location.pathname]);

  return <div className="page-fade" key={location.pathname}><PageShell><Routes><Route path="/" element={<Home />} /><Route path="/services" element={<Services />} /><Route path="/service-areas" element={<ServiceAreas />} /><Route path="/how-it-works" element={<HowItWorks />} /><Route path="/about" element={<About />} /><Route path="/contact" element={<Contact />} /><Route path="*" element={<NotFound />} /></Routes></PageShell></div>;
}

export default function App() {
  return <BrowserRouter><MotionController /></BrowserRouter>;
}
