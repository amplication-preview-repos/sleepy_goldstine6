import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NameSuggestionServiceBase } from "./base/nameSuggestion.service.base";

@Injectable()
export class NameSuggestionService extends NameSuggestionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
