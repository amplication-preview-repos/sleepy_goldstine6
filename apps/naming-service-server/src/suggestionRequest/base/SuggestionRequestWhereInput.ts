/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CustomerWhereUniqueInput } from "../../customer/base/CustomerWhereUniqueInput";
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { NameSuggestionListRelationFilter } from "../../nameSuggestion/base/NameSuggestionListRelationFilter";
import { QuestionnaireWhereUniqueInput } from "../../questionnaire/base/QuestionnaireWhereUniqueInput";
import { EnumSuggestionRequestStatus } from "./EnumSuggestionRequestStatus";

@InputType()
class SuggestionRequestWhereInput {
  @ApiProperty({
    required: false,
    type: () => CustomerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomerWhereUniqueInput)
  @IsOptional()
  @Field(() => CustomerWhereUniqueInput, {
    nullable: true,
  })
  customer?: CustomerWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => NameSuggestionListRelationFilter,
  })
  @ValidateNested()
  @Type(() => NameSuggestionListRelationFilter)
  @IsOptional()
  @Field(() => NameSuggestionListRelationFilter, {
    nullable: true,
  })
  nameSuggestions?: NameSuggestionListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => QuestionnaireWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QuestionnaireWhereUniqueInput)
  @IsOptional()
  @Field(() => QuestionnaireWhereUniqueInput, {
    nullable: true,
  })
  questionnaire?: QuestionnaireWhereUniqueInput;

  @ApiProperty({
    required: false,
    enum: EnumSuggestionRequestStatus,
  })
  @IsEnum(EnumSuggestionRequestStatus)
  @IsOptional()
  @Field(() => EnumSuggestionRequestStatus, {
    nullable: true,
  })
  status?: "Option1";
}

export { SuggestionRequestWhereInput as SuggestionRequestWhereInput };
