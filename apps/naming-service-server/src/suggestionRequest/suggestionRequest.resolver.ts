import * as graphql from "@nestjs/graphql";
import { SuggestionRequestResolverBase } from "./base/suggestionRequest.resolver.base";
import { SuggestionRequest } from "./base/SuggestionRequest";
import { SuggestionRequestService } from "./suggestionRequest.service";

@graphql.Resolver(() => SuggestionRequest)
export class SuggestionRequestResolver extends SuggestionRequestResolverBase {
  constructor(protected readonly service: SuggestionRequestService) {
    super(service);
  }
}
