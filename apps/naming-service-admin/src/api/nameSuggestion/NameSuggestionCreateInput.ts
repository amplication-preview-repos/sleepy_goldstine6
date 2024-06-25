import { DomainCheckCreateNestedManyWithoutNameSuggestionsInput } from "./DomainCheckCreateNestedManyWithoutNameSuggestionsInput";
import { SuggestionRequestWhereUniqueInput } from "../suggestionRequest/SuggestionRequestWhereUniqueInput";

export type NameSuggestionCreateInput = {
  domainChecks?: DomainCheckCreateNestedManyWithoutNameSuggestionsInput;
  isChosen?: boolean | null;
  name?: string | null;
  suggestionRequest?: SuggestionRequestWhereUniqueInput | null;
};
