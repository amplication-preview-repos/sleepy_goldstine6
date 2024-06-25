import { QuestionnaireCreateNestedManyWithoutCustomersInput } from "./QuestionnaireCreateNestedManyWithoutCustomersInput";
import { SuggestionRequestCreateNestedManyWithoutCustomersInput } from "./SuggestionRequestCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  email?: string | null;
  name?: string | null;
  questionnaires?: QuestionnaireCreateNestedManyWithoutCustomersInput;
  suggestionRequests?: SuggestionRequestCreateNestedManyWithoutCustomersInput;
};
