import { useState } from 'react';
import { ButtonLink, PageHero, SectionHeading, Seo, pageImages } from '@/components/Layout';
import { Icon } from '@/components/Icons';
import { faqItems } from '@/data/faq';

const timeline = [
  ['01', 'Request a quote', 'Share a few details about your space, the service you are considering and where you are located.'],
  ['02', 'Confirm the details', 'We talk through the rooms, surfaces, timing and any priorities so the plan feels clear.'],
  ['03', 'Schedule your clean', 'Choose a time that works for your home or business and your day-to-day rhythm.'],
  ['04', 'The cleaning', 'We arrive prepared, work with care and keep the focus on the details you asked us to notice.'],
  ['05', 'Final walkthrough', 'We make space for a final check-in so you can feel good about the finished clean.'],
];

const prep = ['Put away small personal items you want kept out of the way.', 'Share any surface preferences, access notes or areas to prioritize.', 'Let us know about rooms that are off-limits or need special attention.', 'Make sure we have the details needed to access the space at the agreed time.'];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return <div className="faq-list">{faqItems.map((item, index) => <div className={`faq-item ${open === index ? 'is-open' : ''}`} key={item.question}><button onClick={() => setOpen(open === index ? null : index)} aria-expanded={open === index}><span>{item.question}</span><span className="faq-icon"><Icon name="plus" size={18} /></span></button><div className="faq-answer"><p>{item.answer}</p></div></div>)}</div>;
}

export default function HowItWorks() {
  return <main>
    <Seo title="How It Works" description="See how VNR Professional LLC Cleaning makes it simple to request, plan and enjoy a thoughtful clean in Vancouver, WA." />
    <PageHero eyebrow="A simple path forward" title="From first hello to a space that feels better." text="We keep the process clear, friendly and focused on what your home or business actually needs." image={pageImages.suppliesStudio}><ButtonLink to="/contact">Request a quote</ButtonLink></PageHero>
    <section className="section timeline-section"><div className="container"><SectionHeading eyebrow="The process" title="A little clarity goes a long way." text="Here is what you can expect when you reach out to VNR Professional LLC Cleaning." /><div className="timeline">{timeline.map(([number, title, text]) => <div className="timeline-item" key={number}><div className="timeline-marker">{number}</div><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></div></section>
    <section className="section prep-section"><div className="container prep-grid"><div className="prep-image"><img src={pageImages.supplies} alt="Cleaning supplies ready for a home clean" loading="lazy" /><span className="image-caption">Prepared with care</span></div><div><SectionHeading eyebrow="Before we arrive" title="How to prepare for your cleaning." text="You do not need to do the cleaning before the cleaning. A few simple details help us make the most of our time together." /><ul className="check-list prep-list">{prep.map((item) => <li key={item}><Icon name="check" size={18} />{item}</li>)}</ul></div></div></section>
    <section className="expect-section"><div className="container expect-grid"><div><span className="eyebrow eyebrow--yellow">What to expect</span><h2>Respect for your space, from start to finish.</h2></div><div className="expect-points"><p><Icon name="shield" size={21} /><span><strong>Thoughtful entry</strong>We treat your home or business like it belongs to someone we know.</span></p><p><Icon name="sparkle" size={21} /><span><strong>Clear attention</strong>We keep the focus on the details and priorities we discussed.</span></p><p><Icon name="clock" size={21} /><span><strong>Friendly communication</strong>Questions are welcome before, during and after the clean.</span></p></div></div></section>
    <section className="section faq-section"><div className="container faq-grid"><div className="faq-heading"><SectionHeading eyebrow="Questions, answered" title="Good to know before you book." text="A few practical answers to help you feel comfortable getting started." /><ButtonLink to="/contact" variant="outline">Ask us directly</ButtonLink></div><FAQ /></div></section>
  </main>;
}
