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
import {
  IsString,
  MaxLength,
  IsOptional,
  IsBoolean,
  ValidateNested,
} from "class-validator";
import { NameSuggestionWhereUniqueInput } from "../../nameSuggestion/base/NameSuggestionWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class DomainCheckCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  domain?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isAvailable?: boolean | null;

  @ApiProperty({
    required: false,
    type: () => NameSuggestionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => NameSuggestionWhereUniqueInput)
  @IsOptional()
  @Field(() => NameSuggestionWhereUniqueInput, {
    nullable: true,
  })
  nameSuggestion?: NameSuggestionWhereUniqueInput | null;
}

export { DomainCheckCreateInput as DomainCheckCreateInput };
