// Single source of truth for site-wide facts and config flags.
// Copy source: content.md §2 (global content). Decisions: DECISIONS.md.

export const site = {
  name: 'APEX D.E.F',
  legalLine: 'Apex Environment Solutions',
  domain: 'https://apexdef.in',
  address: {
    lines: ['Plot No. 415, Industrial Area', 'Bulandshahr, Uttar Pradesh — 203001, India'],
    short: 'Plot No. 415, Industrial Area, Bulandshahr, UP — 203001',
    mapsQuery: 'Plot No. 415, Industrial Area, Bulandshahr, Uttar Pradesh 203001',
  },
  gstin: '09BJNPN5877K1Z7',
  phones: [
    { display: '+91 84495 07181', tel: '+918449507181', primary: true },
    { display: '+91 88002 54537', tel: '+918800254537', primary: false },
  ],
  hours: 'Monday–Saturday, 9:00 AM – 6:00 PM IST',
  // Config flags (DECISIONS.md #13, #20): OFF until mailboxes/social handles are live.
  showEmails: false,
  emails: [
    { address: 'info@apexdef.in', label: 'general' },
    { address: 'sales@apexdef.in', label: 'orders' },
    { address: 'dealers@apexdef.in', label: 'dealership' },
  ],
  socials: [], // e.g. { name: 'Facebook', url: '' } — empty = row hidden
  whatsapp: {
    number: '918449507181',
    generic:
      'Hi APEX D.E.F, I want to enquire about DEF supply.\nName:\nCity/District:\nVehicle or equipment:\nPack size (5L / 10L / 20L / 210L / 1000L / Bulk):',
    product: (pack) =>
      `Hi APEX D.E.F, I'm interested in the ${pack} pack. Please share availability and price for delivery to my city.`,
    dealer:
      'Hi APEX D.E.F, I want to discuss a dealership/distribution opportunity.\nName:\nFirm:\nCity/District:\nCurrent business:',
  },
  // Web3Forms access key — client creates at launch (DECISIONS.md #22). Empty = forms render with a mailto fallback note.
  web3formsKey: import.meta.env.PUBLIC_WEB3FORMS_KEY ?? '',
};

export const waLink = (message = site.whatsapp.generic) =>
  `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Applications', href: '/applications' },
  { label: 'What is DEF?', href: '/what-is-def' },
  { label: 'About', href: '/about' },
  { label: 'Dealers', href: '/dealers' },
  { label: 'Contact', href: '/contact' },
];

export const skus = [
  {
    id: 'def-5l',
    pack: '5 L Can',
    capacity: '5 litres',
    title: 'APEX D.E.F 5 L Can',
    oneLiner: 'Glovebox-and-workshop size for cars, SUVs and small tractors.',
    bestFor: 'Cars & SUVs with SCR, small tractors, retail counters',
  },
  {
    id: 'def-10l',
    pack: '10 L Can',
    capacity: '10 litres',
    title: 'APEX D.E.F 10 L Can',
    oneLiner: "One tractor season's sensible starting point.",
    bestFor: 'TREM IV tractor owners, single-truck operators',
  },
  {
    id: 'def-20l',
    pack: '20 L Bucket',
    capacity: '20 litres',
    title: 'APEX D.E.F 20 L Bucket',
    oneLiner: 'The workhorse pack for trucks, harvesters and workshops.',
    bestFor: 'Trucks, combine harvesters, workshops and service points',
  },
  {
    id: 'def-210l',
    pack: '210 L Drum',
    capacity: '210 litres',
    title: 'APEX D.E.F 210 L Drum',
    oneLiner: 'Fleet-yard staple. One drum runs a BS-VI truck ~12,500 km.',
    bestFor: 'Fleets, vehicle dealerships and service centres, fuel pumps',
  },
  {
    id: 'def-1000l',
    pack: '1000 L IBC Tote',
    capacity: '1000 litres',
    title: 'APEX D.E.F 1000 L IBC Tote',
    oneLiner: 'Depot-scale supply with dispensing discipline built in.',
    bestFor: 'Large fleets, OEM service networks, genset operators, distributors',
  },
  {
    id: 'def-bulk',
    pack: 'Bulk / Tanker',
    capacity: 'Loose supply',
    title: 'APEX D.E.F Bulk & Tanker Supply',
    oneLiner: 'Loose supply for OEM plants, pumps and institutions.',
    bestFor: 'OEM plants, fuel pumps with DEF storage, institutions, government fleets',
  },
];
