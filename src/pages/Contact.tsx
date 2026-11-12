import { useState, type FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ButtonLink, PageHero, SectionHeading, Seo, email, facebook, phone, phoneHref, pageImages } from '@/components/Layout';
import { Icon } from '@/components/Icons';
import { areas } from '@/data/areas';
import { services } from '@/data/services';

export default function Contact() {
  const [params] = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const selectedService = params.get('service') ?? '';
  const selectedProperty = params.get('property') ?? '';

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setLoading(true);
    window.setTimeout(() => { setLoading(false); setSubmitted(true); }, 850);
  };

  return <main>
    <Seo title="Contact & Free Quote" description="Contact VNR Professional LLC Cleaning in Vancouver, WA for a friendly conversation and free quote request." />
    <PageHero eyebrow="Let’s talk about your space" title="A cleaner day starts here." text="Tell us a little about what you need. We’ll get back to you with a clear next step." image={pageImages.bathroomDetail}><a className="hero-phone hero-phone--light" href={phoneHref}><span className="hero-phone-icon"><Icon name="phone" size={18} /></span><span><small>Prefer to call?</small>{phone}</span></a></PageHero>
    <section className="contact-section section"><div className="container"><div className="contact-top"><SectionHeading eyebrow="Get in touch" title="Choose the easiest way to reach us." text="We are here to answer questions, talk through your space and help you find the right service." /><div className="contact-cards"><a href={phoneHref} className="contact-card"><span><Icon name="phone" size={22} /></span><small>Call or text</small><strong>{phone}</strong><em>Let’s talk <Icon name="arrow" size={15} /></em></a><a href={`mailto:${email}`} className="contact-card"><span><Icon name="mail" size={22} /></span><small>Email</small><strong>{email}</strong><em>Send a note <Icon name="arrow" size={15} /></em></a><a href={facebook} target="_blank" rel="noreferrer" className="contact-card"><span><Icon name="facebook" size={22} /></span><small>Social</small><strong>Find us on Facebook</strong><em>Visit our page <Icon name="arrow" size={15} /></em></a><div className="contact-card"><span><Icon name="pin" size={22} /></span><small>Based in</small><strong>Vancouver, WA 98665</strong><em>Serving Clark County</em></div></div></div>
      <div className="quote-layout"><div className="quote-form-wrap"><div className="form-intro"><span className="eyebrow">Free quote request</span><h2>Tell us about your clean.</h2><p>Just the helpful details. We’ll take it from there.</p></div>{submitted ? <div className="success-state"><span className="success-check"><Icon name="check" size={28} /></span><span className="eyebrow">Message received</span><h3>Thanks for reaching out.</h3><p>Your quote request is ready for a friendly follow-up. We look forward to learning more about your space.</p><ButtonLink to="/">Back to home</ButtonLink></div> : <form className="quote-form" onSubmit={handleSubmit} noValidate>{error && <div className="form-error">{error}</div>}<div className="form-row"><label>Name<input name="name" type="text" placeholder="Your name" required /></label><label>Phone<input name="phone" type="tel" placeholder="(360) 000-0000" required /></label></div><div className="form-row"><label>Email<input name="email" type="email" placeholder="you@example.com" required /></label><label>Preferred date<input name="date" type="date" /></label></div><div className="form-row"><label>Service<select name="service" defaultValue={selectedService} required><option value="" disabled>Select a service</option>{services.map((service) => <option key={service.slug} value={service.title}>{service.title}</option>)}</select></label><label>Property type<select name="property" defaultValue={selectedProperty} required><option value="" disabled>Choose one</option><option>Home</option><option>Office</option><option>Other</option></select></label></div><label>City<select name="city" defaultValue=""><option value="" disabled>Choose your city</option>{areas.map((area) => <option key={area.name}>{area.name}</option>)}</select></label><label>How can we help?<textarea name="message" rows={5} placeholder="Tell us about your space, priorities or timing." required /></label><button className="button button--yellow form-submit magnetic" type="submit" disabled={loading}>{loading ? <><span className="button-spinner" />Sending your request</> : <>Send quote request <Icon name="arrow" size={17} /></>}</button><p className="form-footnote">This form is a friendly starting point. No payment or booking is taken here.</p></form>}</div><aside className="contact-aside"><div className="map-card"><div className="map-card-top"><span className="eyebrow eyebrow--yellow">Find us in Vancouver</span><span><Icon name="pin" size={17} />98665</span></div><iframe title="Map of Vancouver, Washington" loading="lazy" src="https://www.google.com/maps?q=Vancouver%2C%20WA%2098665&output=embed" /></div><div className="hours-card"><span className="icon-round icon-round--blue"><Icon name="clock" size={22} /></span><div><span className="eyebrow">Hours</span><h3>Editable placeholder</h3><p>Update this section with your preferred contact hours.</p></div></div></aside></div></div></section>
  </main>;
}
