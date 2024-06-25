import { JsonFilter } from "../../util/JsonFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { SuggestionRequestListRelationFilter } from "../suggestionRequest/SuggestionRequestListRelationFilter";

export type QuestionnaireWhereInput = {
  answers?: JsonFilter;
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  questions?: JsonFilter;
  suggestionRequests?: SuggestionRequestListRelationFilter;
};
