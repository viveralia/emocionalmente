import { es } from "date-fns/locale";

const esFormatRelativeLocale = {
  lastWeek: "eeee 'pasado'",
  yesterday: "'Ayer'",
  today: "'Hoy'",
  tomorrow: "'Mañana'",
  nextWeek: "eeee 'próximo'",
  other: "eeee",
};

export const esShortRelativeLocale = {
  ...es,
  formatRelative: (token: keyof typeof esFormatRelativeLocale) => esFormatRelativeLocale[token],
};
