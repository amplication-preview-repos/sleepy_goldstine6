import { DomainCheckUpdateManyWithoutNameSuggestionsInput } from "./DomainCheckUpdateManyWithoutNameSuggestionsInput";
import { SuggestionRequestWhereUniqueInput } from "../suggestionRequest/SuggestionRequestWhereUniqueInput";

export type NameSuggestionUpdateInput = {
  domainChecks?: DomainCheckUpdateManyWithoutNameSuggestionsInput;
  isChosen?: boolean | null;
  name?: string | null;
  suggestionRequest?: SuggestionRequestWhereUniqueInput | null;
};
