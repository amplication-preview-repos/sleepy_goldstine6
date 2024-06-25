import * as graphql from "@nestjs/graphql";
import { NameSuggestionResolverBase } from "./base/nameSuggestion.resolver.base";
import { NameSuggestion } from "./base/NameSuggestion";
import { NameSuggestionService } from "./nameSuggestion.service";

@graphql.Resolver(() => NameSuggestion)
export class NameSuggestionResolver extends NameSuggestionResolverBase {
  constructor(protected readonly service: NameSuggestionService) {
    super(service);
  }
}
