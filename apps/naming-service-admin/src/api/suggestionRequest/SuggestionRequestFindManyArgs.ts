import { SuggestionRequestWhereInput } from "./SuggestionRequestWhereInput";
import { SuggestionRequestOrderByInput } from "./SuggestionRequestOrderByInput";

export type SuggestionRequestFindManyArgs = {
  where?: SuggestionRequestWhereInput;
  orderBy?: Array<SuggestionRequestOrderByInput>;
  skip?: number;
  take?: number;
};
