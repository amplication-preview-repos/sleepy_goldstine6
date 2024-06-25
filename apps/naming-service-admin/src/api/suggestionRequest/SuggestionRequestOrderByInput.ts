import { SortOrder } from "../../util/SortOrder";

export type SuggestionRequestOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  questionnaireId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
