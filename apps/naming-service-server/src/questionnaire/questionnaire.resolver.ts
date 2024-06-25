import * as graphql from "@nestjs/graphql";
import { QuestionnaireResolverBase } from "./base/questionnaire.resolver.base";
import { Questionnaire } from "./base/Questionnaire";
import { QuestionnaireService } from "./questionnaire.service";

@graphql.Resolver(() => Questionnaire)
export class QuestionnaireResolver extends QuestionnaireResolverBase {
  constructor(protected readonly service: QuestionnaireService) {
    super(service);
  }
}
