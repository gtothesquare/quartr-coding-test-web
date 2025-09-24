export type CompanyEvent = {
  reportUrl: string;
  pdfUrl: string;
  eventId: number;
  eventTitle: string;
  eventDate: string;
  qnaTimestamp: number;
  fiscalPeriod: string;
  fiscalYear: string;
};

export type ColorSettings = {
  brandColor: string;
};

export type Company = {
  companyId: number;
  companyName: string;
  companyCountry: string;
  companyTicker: string;
  displayName: string;
  infoUrl: string;
  liveUrl: string;
  logoLightUrl: string;
  logoDarkUrl: string;
  iconUrl: string;
  description: string;
  reportingCurrency: string;
  colorSettings: ColorSettings;
  events: CompanyEvent[];
  isins: string[];
};
