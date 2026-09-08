import React from 'react';
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
  return (
    <>
      <SEO
        title="Trang Chủ – Mỹ Phẩm 100% Thuần Chay Nông Sản Việt"
        description="Gaco Original Vietnam – Mỹ phẩm 100% thuần chay từ nông sản Việt. Son dưỡng hữu cơ gấc & dầu dừa Bến Tre ép lạnh, cam kết không chì, an toàn cho mẹ bầu và sinh viên."
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
