import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { NameSuggestionListRelationFilter } from "../nameSuggestion/NameSuggestionListRelationFilter";
import { QuestionnaireWhereUniqueInput } from "../questionnaire/QuestionnaireWhereUniqueInput";

export type SuggestionRequestWhereInput = {
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  nameSuggestions?: NameSuggestionListRelationFilter;
  questionnaire?: QuestionnaireWhereUniqueInput;
  status?: "Option1";
};
