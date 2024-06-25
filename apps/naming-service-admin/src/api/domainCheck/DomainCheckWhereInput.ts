import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { NameSuggestionWhereUniqueInput } from "../nameSuggestion/NameSuggestionWhereUniqueInput";

export type DomainCheckWhereInput = {
  domain?: StringNullableFilter;
  id?: StringFilter;
  isAvailable?: BooleanNullableFilter;
  nameSuggestion?: NameSuggestionWhereUniqueInput;
};
