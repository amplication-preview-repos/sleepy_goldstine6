import { Customer } from "../customer/Customer";
import { NameSuggestion } from "../nameSuggestion/NameSuggestion";
import { Questionnaire } from "../questionnaire/Questionnaire";

export type SuggestionRequest = {
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  nameSuggestions?: Array<NameSuggestion>;
  questionnaire?: Questionnaire | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
