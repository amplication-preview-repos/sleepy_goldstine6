import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SuggestionRequestServiceBase } from "./base/suggestionRequest.service.base";

@Injectable()
export class SuggestionRequestService extends SuggestionRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
