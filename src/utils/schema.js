// JSON-LD builders — content.md §5 plan. Plain functions returning schema.org
// objects; pages compose them with graph(...) and hand the result to BaseLayout.
// Decisions honoured: NO legalName, NO foundingDate, NO sameAs on Organization;
// NO offers node on Product (no price is published anywhere on the site).
import { site, skus } from '../data/site.js';

const ORG_ID = `${site.domain}/#org`;

export function organization() {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: 'APEX D.E.F',
    url: `${site.domain}/`,
    logo: `${site.domain}/favicon.svg`,
    founder: { '@type': 'Person', name: 'Naveen Singh' },
    parentOrganization: { '@type': 'Organization', name: 'Apex Environment Solutions' },
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.lines[0],
      addressLocality: 'Bulandshahr',
      addressRegion: 'Uttar Pradesh',
      postalCode: '203001',
      addressCountry: 'IN',
    },
    contactPoint: site.phones.map((p) => ({
      '@type': 'ContactPoint',
      telephone: p.tel,
      contactType: 'sales',
      areaServed: 'IN',
      availableLanguage: ['en', 'hi'],
    })),
    taxID: site.gstin,
  };
}

export function webSite() {
  return {
    '@type': 'WebSite',
    '@id': `${site.domain}/#website`,
    url: `${site.domain}/`,
    name: 'APEX D.E.F',
    inLanguage: 'en-IN',
    publisher: { '@id': ORG_ID },
  };
}

/** items: [{ name, path }] — path like '/products' */
export function breadcrumbs(items) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${site.domain}${item.path === '/' ? '/' : item.path}`,
    })),
  };
}

/** items: [{ q, a }] — one FAQPage per URL max (content.md §5 rules) */
export function faqPage(items) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

export function productSchema() {
  return {
    '@type': 'Product',
    '@id': `${site.domain}/products#product`,
    name: 'APEX D.E.F Diesel Exhaust Fluid (AUS 32)',
    brand: { '@type': 'Brand', name: 'APEX D.E.F' },
    manufacturer: { '@id': ORG_ID },
    description:
      'Diesel Exhaust Fluid (AUS 32) — 32.5% automotive-grade urea solution for SCR systems, manufactured in Bulandshahr, Uttar Pradesh. Available in 5 L, 10 L and 20 L packs, 210 L drums, 1000 L IBC totes and bulk tanker supply.',
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Urea concentration', value: '32.5%' },
      { '@type': 'PropertyValue', name: 'Standard', value: 'ISO 22241-1 / IS 17042 (Part 1)' },
      ...skus.map((s) => ({ '@type': 'PropertyValue', name: 'Pack size', value: s.pack })),
    ],
  };
}

export const graph = (...nodes) => ({
  '@context': 'https://schema.org',
  '@graph': nodes.filter(Boolean),
});
