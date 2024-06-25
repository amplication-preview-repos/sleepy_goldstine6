/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  ValidateNested,
  IsOptional,
  IsString,
  IsBoolean,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { DomainCheck } from "../../domainCheck/base/DomainCheck";
import { SuggestionRequest } from "../../suggestionRequest/base/SuggestionRequest";

@ObjectType()
class NameSuggestion {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: () => [DomainCheck],
  })
  @ValidateNested()
  @Type(() => DomainCheck)
  @IsOptional()
  domainChecks?: Array<DomainCheck>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isChosen!: boolean | null;

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
  name!: string | null;

  @ApiProperty({
    required: false,
    type: () => SuggestionRequest,
  })
  @ValidateNested()
  @Type(() => SuggestionRequest)
  @IsOptional()
  suggestionRequest?: SuggestionRequest | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { NameSuggestion as NameSuggestion };
