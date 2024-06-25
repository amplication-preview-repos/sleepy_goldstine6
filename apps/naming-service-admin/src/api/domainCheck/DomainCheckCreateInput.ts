import { NameSuggestionWhereUniqueInput } from "../nameSuggestion/NameSuggestionWhereUniqueInput";

export type DomainCheckCreateInput = {
  domain?: string | null;
  isAvailable?: boolean | null;
  nameSuggestion?: NameSuggestionWhereUniqueInput | null;
};
