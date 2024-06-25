import { NameSuggestionWhereUniqueInput } from "../nameSuggestion/NameSuggestionWhereUniqueInput";

export type DomainCheckUpdateInput = {
  domain?: string | null;
  isAvailable?: boolean | null;
  nameSuggestion?: NameSuggestionWhereUniqueInput | null;
};
