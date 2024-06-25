import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QuestionnaireServiceBase } from "./base/questionnaire.service.base";

@Injectable()
export class QuestionnaireService extends QuestionnaireServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
