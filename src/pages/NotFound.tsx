import { ButtonLink, Seo } from '@/components/Layout';
import { Icon } from '@/components/Icons';

export default function NotFound() {
  return <main className="not-found"><Seo title="Page not found" description="The page you are looking for could not be found." /><div className="not-found-art"><Icon name="bubbles" size={70} /><span>404</span></div><span className="eyebrow">A little off the path</span><h1>This page has wandered away.</h1><p>Let’s get you back to a clean starting point.</p><ButtonLink to="/">Back to Home</ButtonLink></main>;
}
