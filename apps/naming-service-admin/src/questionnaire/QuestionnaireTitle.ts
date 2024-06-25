import { Questionnaire as TQuestionnaire } from "../api/questionnaire/Questionnaire";

export const QUESTIONNAIRE_TITLE_FIELD = "id";

export const QuestionnaireTitle = (record: TQuestionnaire): string => {
  return record.id?.toString() || String(record.id);
};
