import { ButtonLink, ImageFrame, SectionHeading, Seo, pageImages } from '@/components/Layout';
import { Icon, type IconName } from '@/components/Icons';

const values: { icon: IconName; title: string; text: string }[] = [
  { icon: 'shield', title: 'Reliable', text: 'We believe showing up well starts with being clear, consistent and accountable.' },
  { icon: 'sparkle', title: 'Detail-oriented', text: 'We pay attention to the finishing touches because they change how a space feels.' },
  { icon: 'bubbles', title: 'Friendly', text: 'A warm, respectful experience matters just as much as a clean result.' },
  { icon: 'house', title: 'Careful with your space', text: 'We work thoughtfully around the things, surfaces and routines that make it yours.' },
];

export default function About() {
  return <main>
    <Seo title="About VNR Professional LLC Cleaning" description="Learn about VNR Professional LLC Cleaning, a thoughtful residential and commercial cleaning company based in Vancouver, Washington." />
    <section className="about-hero"><div className="about-hero-photo" style={{ backgroundImage: `linear-gradient(90deg, rgba(6,45,83,.93), rgba(6,45,83,.36)), url(${pageImages.homeHero})` }} /><div className="container about-hero-content"><span className="eyebrow eyebrow--yellow">A little about us</span><h1>Clean spaces.<br /><em>Good energy.</em></h1><p>VNR Professional LLC Cleaning brings a careful, human approach to homes and businesses in Vancouver, WA and the surrounding area.</p><ButtonLink to="/contact">Start a conversation</ButtonLink></div><div className="about-hero-stamp"><span>VNR</span><small>Professional<br />cleaning</small></div></section>
    <section className="section story-section"><div className="container story-grid"><div className="story-copy"><SectionHeading eyebrow="Our story" title="The kind of care you can feel." /><p>Cleaning is personal. It is the moment a home begins to feel calm again, the first impression a business gives its guests, and the quiet relief of knowing a space has been looked after.</p><p>VNR Professional LLC Cleaning was created with that feeling in mind. We serve residential and commercial spaces with a straightforward promise: do good work, communicate honestly and treat every space with care.</p><p>Whether you need a one-time reset, support during a move or a dependable office clean, we meet the moment with attention and respect.</p><ButtonLink to="/services" variant="outline">Explore our services</ButtonLink></div><div className="story-image"><ImageFrame src={pageImages.bathroom} alt="A detailed bathroom clean" /><div className="story-side-note"><Icon name="sparkle" size={20} /><span>Care in<br />the details</span></div></div></div></section>
    <section className="section values-section"><div className="container"><SectionHeading eyebrow="What guides us" title="Simple values. Thoughtful work." text="The way we work matters. These are the qualities we bring into every appointment." /><div className="values-about-grid">{values.map((value) => <div className="about-value" key={value.title}><span className="icon-round"><Icon name={value.icon} size={25} /></span><span className="about-value-number">0{values.indexOf(value) + 1}</span><h3>{value.title}</h3><p>{value.text}</p></div>)}</div></div></section>
    <section className="promise-section"><div className="container promise-grid"><div><span className="eyebrow eyebrow--yellow">Our cleaning promise</span><h2>Leave every space feeling more cared for than we found it.</h2></div><div><p>We will listen to what you need, communicate clearly about the work and bring our best attention to the details in front of us.</p><ButtonLink to="/contact">Get a free quote</ButtonLink></div></div></section>
  </main>;
}
