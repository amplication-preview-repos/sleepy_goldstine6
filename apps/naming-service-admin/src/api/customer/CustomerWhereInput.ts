import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { QuestionnaireListRelationFilter } from "../questionnaire/QuestionnaireListRelationFilter";
import { SuggestionRequestListRelationFilter } from "../suggestionRequest/SuggestionRequestListRelationFilter";

export type CustomerWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  questionnaires?: QuestionnaireListRelationFilter;
  suggestionRequests?: SuggestionRequestListRelationFilter;
};
