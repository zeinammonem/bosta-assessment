import { format } from "date-fns";
import { enUS, arSA } from "date-fns/locale";

const locales = {
  en: enUS,
  ar: arSA,
};

export const formatDate = (
  date,
  locale,
  shortenMonth = false,
  includeYear = false
) => {
  if (!date) {
    return null;
  }

  let formatString = "EEEE, d MMMM";

  // Adjust format string to shorten the month if needed
  if (shortenMonth && locale !== "ar") {
    formatString = "EEEE, d MMM.";
  }

  // Include the year if requested
  if (includeYear) {
    formatString += " yyyy";
  }
  // Base format: Full weekday, day, and full month
  return format(date, formatString, {
    locale: locales[locale] || locales.en,
  });
};

export const formatTime = (date, locale) => {
  const formatString = "h:mm a";
  const formattedTime = format(date, formatString, { locale: locales[locale] });

  if (locale === "ar") {
    return formattedTime.replace("AM", "ص").replace("PM", "م");
  }
  return formattedTime;
};
