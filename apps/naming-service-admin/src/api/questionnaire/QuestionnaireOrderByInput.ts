import { SortOrder } from "../../util/SortOrder";

export type QuestionnaireOrderByInput = {
  answers?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  questions?: SortOrder;
  updatedAt?: SortOrder;
};
