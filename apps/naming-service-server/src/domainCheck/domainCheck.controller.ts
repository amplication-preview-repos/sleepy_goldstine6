import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DomainCheckService } from "./domainCheck.service";
import { DomainCheckControllerBase } from "./base/domainCheck.controller.base";

@swagger.ApiTags("domainChecks")
@common.Controller("domainChecks")
export class DomainCheckController extends DomainCheckControllerBase {
  constructor(protected readonly service: DomainCheckService) {
    super(service);
  }
}
