import * as graphql from "@nestjs/graphql";
import { DomainCheckResolverBase } from "./base/domainCheck.resolver.base";
import { DomainCheck } from "./base/DomainCheck";
import { DomainCheckService } from "./domainCheck.service";

@graphql.Resolver(() => DomainCheck)
export class DomainCheckResolver extends DomainCheckResolverBase {
  constructor(protected readonly service: DomainCheckService) {
    super(service);
  }
}
