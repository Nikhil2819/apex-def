// Full ISO 22241-1 / IS 17042 (Part 1) quality requirement — content.md §3.3 #spec-table.
// Copy is VERBATIM and shared by /products (#spec-table) and /def-datasheet.

export const specIntro =
  'This is the ISO 22241-1 / IS 17042 (Part 1) quality requirement every APEX batch is tested against. Most sellers claim it; we publish it.';

export const specRows = [
  { parameter: 'Urea content', unit: '% (m/m)', limit: '31.8 – 33.2', method: 'ISO 22241-2 Annex B/C' },
  { parameter: 'Density @ 20 °C', unit: 'g/cm³', limit: '1.0870 – 1.0930', method: 'ISO 12185 / ISO 3675' },
  { parameter: 'Refractive index @ 20 °C', unit: '—', limit: '1.3814 – 1.3843', method: 'ISO 22241-2 Annex C' },
  { parameter: 'Alkalinity as NH₃', unit: '% (m/m)', limit: 'max 0.2', method: 'Annex D' },
  { parameter: 'Biuret', unit: '% (m/m)', limit: 'max 0.3', method: 'Annex E' },
  { parameter: 'Aldehydes', unit: 'mg/kg', limit: 'max 5', method: 'Annex F' },
  { parameter: 'Insoluble matter', unit: 'mg/kg', limit: 'max 20', method: 'Annex G' },
  { parameter: 'Phosphate (PO₄)', unit: 'mg/kg', limit: 'max 0.5', method: 'Annex H' },
  { parameter: 'Calcium', unit: 'mg/kg', limit: 'max 0.5', method: 'Annex I' },
  { parameter: 'Iron', unit: 'mg/kg', limit: 'max 0.5', method: 'Annex I' },
  { parameter: 'Copper', unit: 'mg/kg', limit: 'max 0.2', method: 'Annex I' },
  { parameter: 'Zinc', unit: 'mg/kg', limit: 'max 0.2', method: 'Annex I' },
  { parameter: 'Chromium', unit: 'mg/kg', limit: 'max 0.2', method: 'Annex I' },
  { parameter: 'Nickel', unit: 'mg/kg', limit: 'max 0.2', method: 'Annex I' },
  { parameter: 'Aluminium', unit: 'mg/kg', limit: 'max 0.5', method: 'Annex I' },
  { parameter: 'Magnesium', unit: 'mg/kg', limit: 'max 0.5', method: 'Annex I' },
  { parameter: 'Sodium', unit: 'mg/kg', limit: 'max 0.5', method: 'Annex I' },
  { parameter: 'Potassium', unit: 'mg/kg', limit: 'max 0.5', method: 'Annex I' },
];

export const specFootnote =
  'Appearance: clear, colourless liquid with a faint ammonia odour. Water: demineralised, conductivity-controlled.';
