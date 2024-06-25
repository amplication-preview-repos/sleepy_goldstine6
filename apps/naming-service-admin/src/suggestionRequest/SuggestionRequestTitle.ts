import { SuggestionRequest as TSuggestionRequest } from "../api/suggestionRequest/SuggestionRequest";

export const SUGGESTIONREQUEST_TITLE_FIELD = "nameSuggestions";

export const SuggestionRequestTitle = (record: TSuggestionRequest): string => {
  return record.nameSuggestions?.toString() || String(record.id);
};
