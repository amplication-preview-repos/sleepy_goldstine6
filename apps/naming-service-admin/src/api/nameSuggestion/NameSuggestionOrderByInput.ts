import { SortOrder } from "../../util/SortOrder";

export type NameSuggestionOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  isChosen?: SortOrder;
  name?: SortOrder;
  suggestionRequestId?: SortOrder;
  updatedAt?: SortOrder;
};
