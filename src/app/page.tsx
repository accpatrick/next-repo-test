'use client';

import QuantitativeResults from './components/QuantitativeResults';
import DiscussionSection from './components/DiscussionSection';
import RelatedArticles from './components/RelatedArticles';
import Citation from './components/Citation';
import Dataset from './components/Dataset';
import NoticeBanner from './components/NoticeBanner';
import LogoAndTitle from './components/LogoAndTitle';
import LinksSection from './components/LinksSection';
import LatestNews from './components/LatestNews';
import PartnerLogos from './components/PartenerLogos';
import ButtonsAndContent from './components/ButtonsAndContent';
import Introduction from './components/Introduction';

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      {/* Notice Banner */}
      <NoticeBanner />

      {/* Logo and Title */}
      <LogoAndTitle />
        
      {/* Links */}
      <LinksSection />

      {/* Latest News */}
      <LatestNews />

      {/* Partner Logos */}
      <PartnerLogos />
    
      {/* Buttons and Content */}
      <ButtonsAndContent />

      {/* Introduction */}
      <Introduction />

      {/* Dataset */}
      <Dataset />
      
      {/* Quantitative Results */}
      <QuantitativeResults />
      
      {/* Discussion Section */}
      <DiscussionSection />
      
      {/* Related Articles */}
      <RelatedArticles />
      
      {/* Citation */}
      <Citation />
    </main>
  );
}