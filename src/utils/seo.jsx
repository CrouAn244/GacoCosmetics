import React from 'react';
import { Helmet } from 'react-helmet-async';

export const SEO = ({
  title,
  description,
  keywords,
  image = '/logo.png',
  url = 'https://gacocosmetics.vn',
  schemaType = 'Organization',
  schemaData = null
}) => {
  const fullTitle = title 
    ? `${title} | Gaco Cosmetics – Son Dưỡng Hữu Cơ`
    : 'Gaco Cosmetics – Son Dưỡng Môi Hữu Cơ Gấc & Dầu Dừa 100% Thuần Chay';

  const metaDesc = description || 'Son dưỡng môi hữu cơ Gaco từ 100% nông sản Việt (Gấc & Dầu dừa Bến Tre). Không chì, dưỡng ẩm, trị thâm môi, an toàn cho mẹ bầu và sinh viên.';
  const metaKeywords = keywords || 'son dưỡng gấc dầu dừa, son trị thâm môi, son dưỡng thiên nhiên, son cho bà bầu, mỹ phẩm thuần chay';

  const defaultOrgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Gaco Cosmetics',
    url: 'https://gacocosmetics.vn',
    logo: 'https://gacocosmetics.vn/logo.png',
    description: 'Thương hiệu mỹ phẩm thuần chay từ 100% nông sản Việt',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '79 Hồ Tùng Mậu',
      addressLocality: 'Cầu Giấy',
      addressRegion: 'Hà Nội',
      addressCountry: 'VN'
    }
  };

  const currentSchema = schemaData || (schemaType === 'Organization' ? defaultOrgSchema : null);

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDesc} />
      <meta name="keywords" content={metaKeywords} />
      <link rel="canonical" href={url} />

      {/* OpenGraph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="vi_VN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Structured Data */}
      {currentSchema && (
        <script type="application/ld+json">
          {JSON.stringify(currentSchema)}
        </script>
      )}
    </Helmet>
  );
};
