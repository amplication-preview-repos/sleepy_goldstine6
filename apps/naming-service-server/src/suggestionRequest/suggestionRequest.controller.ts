import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SuggestionRequestService } from "./suggestionRequest.service";
import { SuggestionRequestControllerBase } from "./base/suggestionRequest.controller.base";

@swagger.ApiTags("suggestionRequests")
@common.Controller("suggestionRequests")
export class SuggestionRequestController extends SuggestionRequestControllerBase {
  constructor(protected readonly service: SuggestionRequestService) {
    super(service);
  }
}
