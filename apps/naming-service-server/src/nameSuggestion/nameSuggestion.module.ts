import { Module } from "@nestjs/common";
import { NameSuggestionModuleBase } from "./base/nameSuggestion.module.base";
import { NameSuggestionService } from "./nameSuggestion.service";
import { NameSuggestionController } from "./nameSuggestion.controller";
import { NameSuggestionResolver } from "./nameSuggestion.resolver";

@Module({
  imports: [NameSuggestionModuleBase],
  controllers: [NameSuggestionController],
  providers: [NameSuggestionService, NameSuggestionResolver],
  exports: [NameSuggestionService],
})
export class NameSuggestionModule {}
