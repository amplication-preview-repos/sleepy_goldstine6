/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { NameSuggestionService } from "../nameSuggestion.service";
import { NameSuggestionCreateInput } from "./NameSuggestionCreateInput";
import { NameSuggestion } from "./NameSuggestion";
import { NameSuggestionFindManyArgs } from "./NameSuggestionFindManyArgs";
import { NameSuggestionWhereUniqueInput } from "./NameSuggestionWhereUniqueInput";
import { NameSuggestionUpdateInput } from "./NameSuggestionUpdateInput";
import { DomainCheckFindManyArgs } from "../../domainCheck/base/DomainCheckFindManyArgs";
import { DomainCheck } from "../../domainCheck/base/DomainCheck";
import { DomainCheckWhereUniqueInput } from "../../domainCheck/base/DomainCheckWhereUniqueInput";

export class NameSuggestionControllerBase {
  constructor(protected readonly service: NameSuggestionService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: NameSuggestion })
  async createNameSuggestion(
    @common.Body() data: NameSuggestionCreateInput
  ): Promise<NameSuggestion> {
    return await this.service.createNameSuggestion({
      data: {
        ...data,

        suggestionRequest: data.suggestionRequest
          ? {
              connect: data.suggestionRequest,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,
        isChosen: true,
        name: true,

        suggestionRequest: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [NameSuggestion] })
  @ApiNestedQuery(NameSuggestionFindManyArgs)
  async nameSuggestions(
    @common.Req() request: Request
  ): Promise<NameSuggestion[]> {
    const args = plainToClass(NameSuggestionFindManyArgs, request.query);
    return this.service.nameSuggestions({
      ...args,
      select: {
        createdAt: true,
        id: true,
        isChosen: true,
        name: true,

        suggestionRequest: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: NameSuggestion })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async nameSuggestion(
    @common.Param() params: NameSuggestionWhereUniqueInput
  ): Promise<NameSuggestion | null> {
    const result = await this.service.nameSuggestion({
      where: params,
      select: {
        createdAt: true,
        id: true,
        isChosen: true,
        name: true,

        suggestionRequest: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: NameSuggestion })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateNameSuggestion(
    @common.Param() params: NameSuggestionWhereUniqueInput,
    @common.Body() data: NameSuggestionUpdateInput
  ): Promise<NameSuggestion | null> {
    try {
      return await this.service.updateNameSuggestion({
        where: params,
        data: {
          ...data,

          suggestionRequest: data.suggestionRequest
            ? {
                connect: data.suggestionRequest,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,
          isChosen: true,
          name: true,

          suggestionRequest: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: NameSuggestion })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteNameSuggestion(
    @common.Param() params: NameSuggestionWhereUniqueInput
  ): Promise<NameSuggestion | null> {
    try {
      return await this.service.deleteNameSuggestion({
        where: params,
        select: {
          createdAt: true,
          id: true,
          isChosen: true,
          name: true,

          suggestionRequest: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/domainChecks")
  @ApiNestedQuery(DomainCheckFindManyArgs)
  async findDomainChecks(
    @common.Req() request: Request,
    @common.Param() params: NameSuggestionWhereUniqueInput
  ): Promise<DomainCheck[]> {
    const query = plainToClass(DomainCheckFindManyArgs, request.query);
    const results = await this.service.findDomainChecks(params.id, {
      ...query,
      select: {
        createdAt: true,
        domain: true,
        id: true,
        isAvailable: true,

        nameSuggestion: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/domainChecks")
  async connectDomainChecks(
    @common.Param() params: NameSuggestionWhereUniqueInput,
    @common.Body() body: DomainCheckWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      domainChecks: {
        connect: body,
      },
    };
    await this.service.updateNameSuggestion({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/domainChecks")
  async updateDomainChecks(
    @common.Param() params: NameSuggestionWhereUniqueInput,
    @common.Body() body: DomainCheckWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      domainChecks: {
        set: body,
      },
    };
    await this.service.updateNameSuggestion({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/domainChecks")
  async disconnectDomainChecks(
    @common.Param() params: NameSuggestionWhereUniqueInput,
    @common.Body() body: DomainCheckWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      domainChecks: {
        disconnect: body,
      },
    };
    await this.service.updateNameSuggestion({
      where: params,
      data,
      select: { id: true },
    });
  }
}
