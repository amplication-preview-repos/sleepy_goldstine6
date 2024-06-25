import { Questionnaire } from "../questionnaire/Questionnaire";
import { SuggestionRequest } from "../suggestionRequest/SuggestionRequest";

export type Customer = {
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  questionnaires?: Array<Questionnaire>;
  suggestionRequests?: Array<SuggestionRequest>;
  updatedAt: Date;
};
