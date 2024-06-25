import { QuestionnaireWhereInput } from "./QuestionnaireWhereInput";
import { QuestionnaireOrderByInput } from "./QuestionnaireOrderByInput";

export type QuestionnaireFindManyArgs = {
  where?: QuestionnaireWhereInput;
  orderBy?: Array<QuestionnaireOrderByInput>;
  skip?: number;
  take?: number;
};
