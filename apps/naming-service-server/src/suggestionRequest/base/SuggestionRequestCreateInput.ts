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
import { NameSuggestionCreateNestedManyWithoutSuggestionRequestsInput } from "./NameSuggestionCreateNestedManyWithoutSuggestionRequestsInput";
import { QuestionnaireWhereUniqueInput } from "../../questionnaire/base/QuestionnaireWhereUniqueInput";
import { EnumSuggestionRequestStatus } from "./EnumSuggestionRequestStatus";

@InputType()
class SuggestionRequestCreateInput {
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
  customer?: CustomerWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => NameSuggestionCreateNestedManyWithoutSuggestionRequestsInput,
  })
  @ValidateNested()
  @Type(() => NameSuggestionCreateNestedManyWithoutSuggestionRequestsInput)
  @IsOptional()
  @Field(() => NameSuggestionCreateNestedManyWithoutSuggestionRequestsInput, {
    nullable: true,
  })
  nameSuggestions?: NameSuggestionCreateNestedManyWithoutSuggestionRequestsInput;

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
  questionnaire?: QuestionnaireWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    enum: EnumSuggestionRequestStatus,
  })
  @IsEnum(EnumSuggestionRequestStatus)
  @IsOptional()
  @Field(() => EnumSuggestionRequestStatus, {
    nullable: true,
  })
  status?: "Option1" | null;
}

export { SuggestionRequestCreateInput as SuggestionRequestCreateInput };
