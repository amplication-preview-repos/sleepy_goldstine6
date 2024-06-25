import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { NameSuggestionService } from "./nameSuggestion.service";
import { NameSuggestionControllerBase } from "./base/nameSuggestion.controller.base";

@swagger.ApiTags("nameSuggestions")
@common.Controller("nameSuggestions")
export class NameSuggestionController extends NameSuggestionControllerBase {
  constructor(protected readonly service: NameSuggestionService) {
    super(service);
  }
}
