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
import { NameSuggestionWhereInput } from "./NameSuggestionWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class NameSuggestionListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => NameSuggestionWhereInput,
  })
  @ValidateNested()
  @Type(() => NameSuggestionWhereInput)
  @IsOptional()
  @Field(() => NameSuggestionWhereInput, {
    nullable: true,
  })
  every?: NameSuggestionWhereInput;

  @ApiProperty({
    required: false,
    type: () => NameSuggestionWhereInput,
  })
  @ValidateNested()
  @Type(() => NameSuggestionWhereInput)
  @IsOptional()
  @Field(() => NameSuggestionWhereInput, {
    nullable: true,
  })
  some?: NameSuggestionWhereInput;

  @ApiProperty({
    required: false,
    type: () => NameSuggestionWhereInput,
  })
  @ValidateNested()
  @Type(() => NameSuggestionWhereInput)
  @IsOptional()
  @Field(() => NameSuggestionWhereInput, {
    nullable: true,
  })
  none?: NameSuggestionWhereInput;
}
export { NameSuggestionListRelationFilter as NameSuggestionListRelationFilter };
