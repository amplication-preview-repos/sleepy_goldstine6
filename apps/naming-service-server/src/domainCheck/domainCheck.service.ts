import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DomainCheckServiceBase } from "./base/domainCheck.service.base";

@Injectable()
export class DomainCheckService extends DomainCheckServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
