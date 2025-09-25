import { Tagged } from '~/lib/types';

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

export type CompanyId = Tagged<number, 'CompanyId'>;

export type Company = {
  companyId: CompanyId;
  companyName: string;
  companyCountry: string;
  companyTicker: string;
  displayName: string;
  infoUrl: string;
  liveUrl: string;
  logoLightUrl: string;
  logoDarkUrl: string;
  iconUrl?: string;
  description: string;
  reportingCurrency: string;
  colorSettings: ColorSettings;
  events: CompanyEvent[];
  isins: string[];
};

//constructor helpers

export function toCompanyId(id: string | number) {
  if (typeof id === 'string') {
    return parseInt(id) as CompanyId;
  }
  return id as CompanyId;
}
