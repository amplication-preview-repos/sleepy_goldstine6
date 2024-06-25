import { NameSuggestionWhereInput } from "./NameSuggestionWhereInput";
import { NameSuggestionOrderByInput } from "./NameSuggestionOrderByInput";

export type NameSuggestionFindManyArgs = {
  where?: NameSuggestionWhereInput;
  orderBy?: Array<NameSuggestionOrderByInput>;
  skip?: number;
  take?: number;
};
