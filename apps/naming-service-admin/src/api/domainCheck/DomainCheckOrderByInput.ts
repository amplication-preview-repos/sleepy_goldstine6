import { SortOrder } from "../../util/SortOrder";

export type DomainCheckOrderByInput = {
  createdAt?: SortOrder;
  domain?: SortOrder;
  id?: SortOrder;
  isAvailable?: SortOrder;
  nameSuggestionId?: SortOrder;
  updatedAt?: SortOrder;
};
