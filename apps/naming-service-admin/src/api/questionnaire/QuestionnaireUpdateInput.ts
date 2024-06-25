import { InputJsonValue } from "../../types";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { SuggestionRequestUpdateManyWithoutQuestionnairesInput } from "./SuggestionRequestUpdateManyWithoutQuestionnairesInput";

export type QuestionnaireUpdateInput = {
  answers?: InputJsonValue;
  customer?: CustomerWhereUniqueInput | null;
  questions?: InputJsonValue;
  suggestionRequests?: SuggestionRequestUpdateManyWithoutQuestionnairesInput;
};
