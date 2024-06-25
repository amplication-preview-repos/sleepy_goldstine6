import { Module } from "@nestjs/common";
import { SuggestionRequestModuleBase } from "./base/suggestionRequest.module.base";
import { SuggestionRequestService } from "./suggestionRequest.service";
import { SuggestionRequestController } from "./suggestionRequest.controller";
import { SuggestionRequestResolver } from "./suggestionRequest.resolver";

@Module({
  imports: [SuggestionRequestModuleBase],
  controllers: [SuggestionRequestController],
  providers: [SuggestionRequestService, SuggestionRequestResolver],
  exports: [SuggestionRequestService],
})
export class SuggestionRequestModule {}
