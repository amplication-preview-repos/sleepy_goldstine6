import { JsonValue } from "type-fest";
import { Customer } from "../customer/Customer";
import { SuggestionRequest } from "../suggestionRequest/SuggestionRequest";

export type Questionnaire = {
  answers: JsonValue;
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  questions: JsonValue;
  suggestionRequests?: Array<SuggestionRequest>;
  updatedAt: Date;
};
