import { Module } from "@nestjs/common";
import { QuestionnaireModuleBase } from "./base/questionnaire.module.base";
import { QuestionnaireService } from "./questionnaire.service";
import { QuestionnaireController } from "./questionnaire.controller";
import { QuestionnaireResolver } from "./questionnaire.resolver";

@Module({
  imports: [QuestionnaireModuleBase],
  controllers: [QuestionnaireController],
  providers: [QuestionnaireService, QuestionnaireResolver],
  exports: [QuestionnaireService],
})
export class QuestionnaireModule {}
