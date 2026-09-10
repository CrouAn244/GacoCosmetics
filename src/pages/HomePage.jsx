import React from 'react';
import { useTranslation } from 'react-i18next';
import { SEO } from '../utils/seo';
import { HeroSection } from '../sections/HeroSection';
import { FeaturedProductsSection } from '../sections/FeaturedProductsSection';
import { StorySection } from '../sections/StorySection';
import { IngredientsSection } from '../sections/IngredientsSection';
import { TrustSection } from '../sections/TrustSection';
import { TestimonialsSection } from '../sections/TestimonialsSection';
import { FAQSection } from '../sections/FAQSection';
import { BottomCTASection } from '../sections/BottomCTASection';

export const HomePage = () => {
  const { i18n } = useTranslation();
  const isEn = (i18n.language || 'vi').toLowerCase().startsWith('en');

  return (
    <>
      <SEO
        title={isEn ? "Home – 100% Vegan Native Botanical Cosmetics" : "Trang Chủ – Mỹ Phẩm 100% Thuần Chay Nông Sản Việt"}
        description={isEn ? "Gaco Original Vietnam – 100% vegan cosmetics from native Vietnamese crops. Organic cold-pressed gac and coconut lip balm, 0% lead guaranteed." : "Gaco Original Vietnam – Mỹ phẩm 100% thuần chay từ nông sản Việt. Son dưỡng hữu cơ gấc & dầu dừa Bến Tre ép lạnh, cam kết không chì, an toàn cho mẹ bầu và sinh viên."}
      />
      <main className="bg-[#FEFBF4]">
        <HeroSection />
        <FeaturedProductsSection />
        <StorySection />
        <IngredientsSection />
        <TrustSection />
        <TestimonialsSection />
        <FAQSection />
        <BottomCTASection />
      </main>
    </>
  );
};
