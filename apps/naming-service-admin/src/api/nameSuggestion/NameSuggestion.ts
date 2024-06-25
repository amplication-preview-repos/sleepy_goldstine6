import { DomainCheck } from "../domainCheck/DomainCheck";
import { SuggestionRequest } from "../suggestionRequest/SuggestionRequest";

export type NameSuggestion = {
  createdAt: Date;
  domainChecks?: Array<DomainCheck>;
  id: string;
  isChosen: boolean | null;
  name: string | null;
  suggestionRequest?: SuggestionRequest | null;
  updatedAt: Date;
};
