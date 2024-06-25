import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { NameSuggestionCreateNestedManyWithoutSuggestionRequestsInput } from "./NameSuggestionCreateNestedManyWithoutSuggestionRequestsInput";
import { QuestionnaireWhereUniqueInput } from "../questionnaire/QuestionnaireWhereUniqueInput";

export type SuggestionRequestCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  nameSuggestions?: NameSuggestionCreateNestedManyWithoutSuggestionRequestsInput;
  questionnaire?: QuestionnaireWhereUniqueInput | null;
  status?: "Option1" | null;
};
