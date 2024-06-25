import { InputJsonValue } from "../../types";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { SuggestionRequestCreateNestedManyWithoutQuestionnairesInput } from "./SuggestionRequestCreateNestedManyWithoutQuestionnairesInput";

export type QuestionnaireCreateInput = {
  answers?: InputJsonValue;
  customer?: CustomerWhereUniqueInput | null;
  questions?: InputJsonValue;
  suggestionRequests?: SuggestionRequestCreateNestedManyWithoutQuestionnairesInput;
};
