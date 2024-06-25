import { QuestionnaireUpdateManyWithoutCustomersInput } from "./QuestionnaireUpdateManyWithoutCustomersInput";
import { SuggestionRequestUpdateManyWithoutCustomersInput } from "./SuggestionRequestUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  email?: string | null;
  name?: string | null;
  questionnaires?: QuestionnaireUpdateManyWithoutCustomersInput;
  suggestionRequests?: SuggestionRequestUpdateManyWithoutCustomersInput;
};
