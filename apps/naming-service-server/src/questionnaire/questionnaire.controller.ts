import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QuestionnaireService } from "./questionnaire.service";
import { QuestionnaireControllerBase } from "./base/questionnaire.controller.base";

@swagger.ApiTags("questionnaires")
@common.Controller("questionnaires")
export class QuestionnaireController extends QuestionnaireControllerBase {
  constructor(protected readonly service: QuestionnaireService) {
    super(service);
  }
}
