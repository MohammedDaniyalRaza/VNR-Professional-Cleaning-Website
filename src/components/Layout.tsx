import { useEffect, useState, type CSSProperties, type ReactNode } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '@/assets/vinpr_professional_llc_cleaning_transparent.png';
import { areas } from '@/data/areas';
import { services } from '@/data/services';
import { Icon, type IconName } from '@/components/Icons';
import { images } from '@/data/images';

export const phone = '+1 360-997-7967';
export const phoneHref = 'tel:+13609977967';
export const email = 'vnrprocleaning@gmail.com';
export const facebook = 'https://www.facebook.com/profile.php?id=61560413926453';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/service-areas', label: 'Service Areas' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export function Logo({ compact = false }: { compact?: boolean }) {
  return <img className={compact ? 'brand-logo brand-logo--compact' : 'brand-logo'} src={logo} alt="VNR Professional LLC Cleaning" />;
}

export function ButtonLink({ to, children, variant = 'yellow', className = '' }: { to: string; children: ReactNode; variant?: 'yellow' | 'outline' | 'dark'; className?: string }) {
  return <Link className={`button button--${variant} magnetic ${className}`} to={to}>{children}<Icon name="arrow" size={17} /></Link>;
}

export function SiteHeader() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location.pathname]);
  useEffect(() => { document.body.classList.toggle('menu-open', menuOpen); return () => document.body.classList.remove('menu-open'); }, [menuOpen]);

  return <>
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="container header-inner">
        <Link to="/" className="header-logo" aria-label="VNR Professional LLC Cleaning home"><Logo compact /></Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => <NavLink key={item.to} to={item.to} end={item.to === '/'} className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}>{item.label}</NavLink>)}
        </nav>
        <div className="header-actions">
          <ButtonLink to="/contact">Get a Free Quote</ButtonLink>
          <a className="phone-link" href={phoneHref}><Icon name="phone" size={17} /> <span>{phone}</span></a>
        </div>
        <button className="menu-toggle" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Icon name="menu" size={27} /></button>
      </div>
    </header>
    <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`} aria-hidden={!menuOpen}>
      <div className="mobile-menu-top"><Logo compact /><button className="menu-toggle menu-toggle--close" onClick={() => setMenuOpen(false)} aria-label="Close menu"><Icon name="close" size={27} /></button></div>
      <nav className="mobile-nav" aria-label="Mobile navigation">
        {navItems.map((item, index) => <NavLink key={item.to} to={item.to} end={item.to === '/'} style={{ '--delay': `${index * 45}ms` } as CSSProperties}>{item.label}<Icon name="arrow" size={20} /></NavLink>)}
      </nav>
      <div className="mobile-menu-contact">
        <a href={phoneHref}><Icon name="phone" size={18} /> {phone}</a>
        <a href={`mailto:${email}`}><Icon name="mail" size={18} /> {email}</a>
        <a href={facebook} target="_blank" rel="noreferrer"><Icon name="facebook" size={18} /> Follow on Facebook</a>
      </div>
    </div>
    <div className="mobile-bar"><a href={phoneHref}><Icon name="phone" size={17} /> Call</a><Link to="/contact"><Icon name="sparkle" size={17} /> Get a Quote</Link></div>
  </>;
}

export function Footer() {
  return <footer className="site-footer">
    <div className="footer-bubbles" aria-hidden="true"><span /><span /><span /><span /><span /></div>
    <div className="container footer-grid">
      <div className="footer-brand"><Logo /><p>Thoughtful cleaning for homes, offices and the spaces in between.</p><a className="footer-social" href={facebook} target="_blank" rel="noreferrer" aria-label="VNR Professional Cleaning on Facebook"><Icon name="facebook" size={20} /></a></div>
      <div><h3>Explore</h3><div className="footer-links">{navItems.slice(1, 6).map((item) => <Link key={item.to} to={item.to}>{item.label}</Link>)}</div></div>
      <div><h3>Services</h3><div className="footer-links">{services.map((service) => <Link key={service.slug} to={`/services#${service.slug}`}>{service.title}</Link>)}</div></div>
      <div><h3>Service areas</h3><div className="footer-links">{areas.map((area) => <Link key={area.name} to="/service-areas">{area.name}</Link>)}</div></div>
      <div className="footer-contact"><h3>Say hello</h3><a href={phoneHref}><Icon name="phone" size={17} /> {phone}</a><a href={`mailto:${email}`}><Icon name="mail" size={17} /> {email}</a><p><Icon name="pin" size={17} /> Vancouver, WA 98665</p></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} VNR Professional LLC Cleaning</span><span>Serving Clark County and surrounding regions</span><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><Icon name="arrow" size={16} /> Back to top</button></div>
  </footer>;
}

export function PageShell({ children }: { children: ReactNode }) {
  return <><SiteHeader />{children}<Footer /></>;
}

export function PageHero({ eyebrow, title, text, image, children }: { eyebrow: string; title: string; text: string; image: string; children?: ReactNode }) {
  return <section className="inner-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(6,45,83,.9) 0%, rgba(6,45,83,.67) 54%, rgba(6,45,83,.18) 100%), url(${image})` }}><div className="container inner-hero-content"><span className="eyebrow eyebrow--light">{eyebrow}</span><h1>{title}</h1><p>{text}</p>{children}</div></section>;
}

export function SectionHeading({ eyebrow, title, text, light = false }: { eyebrow: string; title: string; text?: string; light?: boolean }) {
  return <div className={`section-heading ${light ? 'section-heading--light' : ''}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

export function IconTile({ icon, label, detail }: { icon: IconName; label: string; detail?: string }) {
  return <div className="icon-tile"><span className="icon-tile-icon"><Icon name={icon} size={24} /></span><div><strong>{label}</strong>{detail && <small>{detail}</small>}</div></div>;
}

export function ImageFrame({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return <div className={`image-frame ${className}`}><img src={src} alt={alt} loading="lazy" /></div>;
}

export function Seo({ title, description }: { title: string; description: string }) {
  useEffect(() => {
    document.title = `${title} | VNR Professional LLC Cleaning`;
    const descriptionTag = document.querySelector('meta[name="description"]');
    descriptionTag?.setAttribute('content', description);
    const localBusiness = document.getElementById('local-business-json');
    if (localBusiness) localBusiness.textContent = JSON.stringify({ '@context': 'https://schema.org', '@type': 'HouseCleaningService', name: 'VNR Professional LLC Cleaning', telephone: phone, email, address: { '@type': 'PostalAddress', addressLocality: 'Vancouver', addressRegion: 'WA', postalCode: '98665', addressCountry: 'US' }, areaServed: areas.map((area) => area.name), url: window.location.origin });
  }, [title, description]);
  return null;
}

export const pageImages = images;
