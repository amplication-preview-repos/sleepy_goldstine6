import { NameSuggestion as TNameSuggestion } from "../api/nameSuggestion/NameSuggestion";

export const NAMESUGGESTION_TITLE_FIELD = "name";

export const NameSuggestionTitle = (record: TNameSuggestion): string => {
  return record.name?.toString() || String(record.id);
};
