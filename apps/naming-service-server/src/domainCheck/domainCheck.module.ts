import { Module } from "@nestjs/common";
import { DomainCheckModuleBase } from "./base/domainCheck.module.base";
import { DomainCheckService } from "./domainCheck.service";
import { DomainCheckController } from "./domainCheck.controller";
import { DomainCheckResolver } from "./domainCheck.resolver";

@Module({
  imports: [DomainCheckModuleBase],
  controllers: [DomainCheckController],
  providers: [DomainCheckService, DomainCheckResolver],
  exports: [DomainCheckService],
})
export class DomainCheckModule {}
