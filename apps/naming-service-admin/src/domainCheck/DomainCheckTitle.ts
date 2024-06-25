import { DomainCheck as TDomainCheck } from "../api/domainCheck/DomainCheck";

export const DOMAINCHECK_TITLE_FIELD = "nameSuggestion";

export const DomainCheckTitle = (record: TDomainCheck): string => {
  return record.nameSuggestion?.toString() || String(record.id);
};
