/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { NameSuggestionWhereInput } from "./NameSuggestionWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { NameSuggestionOrderByInput } from "./NameSuggestionOrderByInput";

@ArgsType()
class NameSuggestionFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => NameSuggestionWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => NameSuggestionWhereInput, { nullable: true })
  @Type(() => NameSuggestionWhereInput)
  where?: NameSuggestionWhereInput;

  @ApiProperty({
    required: false,
    type: [NameSuggestionOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [NameSuggestionOrderByInput], { nullable: true })
  @Type(() => NameSuggestionOrderByInput)
  orderBy?: Array<NameSuggestionOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { NameSuggestionFindManyArgs as NameSuggestionFindManyArgs };
