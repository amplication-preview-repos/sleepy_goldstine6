import { DomainCheckListRelationFilter } from "../domainCheck/DomainCheckListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SuggestionRequestWhereUniqueInput } from "../suggestionRequest/SuggestionRequestWhereUniqueInput";

export type NameSuggestionWhereInput = {
  domainChecks?: DomainCheckListRelationFilter;
  id?: StringFilter;
  isChosen?: BooleanNullableFilter;
  name?: StringNullableFilter;
  suggestionRequest?: SuggestionRequestWhereUniqueInput;
};
