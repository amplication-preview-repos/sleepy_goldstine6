import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { NameSuggestionUpdateManyWithoutSuggestionRequestsInput } from "./NameSuggestionUpdateManyWithoutSuggestionRequestsInput";
import { QuestionnaireWhereUniqueInput } from "../questionnaire/QuestionnaireWhereUniqueInput";

export type SuggestionRequestUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  nameSuggestions?: NameSuggestionUpdateManyWithoutSuggestionRequestsInput;
  questionnaire?: QuestionnaireWhereUniqueInput | null;
  status?: "Option1" | null;
};
