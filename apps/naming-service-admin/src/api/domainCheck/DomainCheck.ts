import { NameSuggestion } from "../nameSuggestion/NameSuggestion";

export type DomainCheck = {
  createdAt: Date;
  domain: string | null;
  id: string;
  isAvailable: boolean | null;
  nameSuggestion?: NameSuggestion | null;
  updatedAt: Date;
};
