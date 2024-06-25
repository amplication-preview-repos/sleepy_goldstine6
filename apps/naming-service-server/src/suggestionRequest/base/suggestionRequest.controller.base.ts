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
import { SuggestionRequestService } from "../suggestionRequest.service";
import { SuggestionRequestCreateInput } from "./SuggestionRequestCreateInput";
import { SuggestionRequest } from "./SuggestionRequest";
import { SuggestionRequestFindManyArgs } from "./SuggestionRequestFindManyArgs";
import { SuggestionRequestWhereUniqueInput } from "./SuggestionRequestWhereUniqueInput";
import { SuggestionRequestUpdateInput } from "./SuggestionRequestUpdateInput";
import { NameSuggestionFindManyArgs } from "../../nameSuggestion/base/NameSuggestionFindManyArgs";
import { NameSuggestion } from "../../nameSuggestion/base/NameSuggestion";
import { NameSuggestionWhereUniqueInput } from "../../nameSuggestion/base/NameSuggestionWhereUniqueInput";

export class SuggestionRequestControllerBase {
  constructor(protected readonly service: SuggestionRequestService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SuggestionRequest })
  async createSuggestionRequest(
    @common.Body() data: SuggestionRequestCreateInput
  ): Promise<SuggestionRequest> {
    return await this.service.createSuggestionRequest({
      data: {
        ...data,

        customer: data.customer
          ? {
              connect: data.customer,
            }
          : undefined,

        questionnaire: data.questionnaire
          ? {
              connect: data.questionnaire,
            }
          : undefined,
      },
      select: {
        createdAt: true,

        customer: {
          select: {
            id: true,
          },
        },

        id: true,

        questionnaire: {
          select: {
            id: true,
          },
        },

        status: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [SuggestionRequest] })
  @ApiNestedQuery(SuggestionRequestFindManyArgs)
  async suggestionRequests(
    @common.Req() request: Request
  ): Promise<SuggestionRequest[]> {
    const args = plainToClass(SuggestionRequestFindManyArgs, request.query);
    return this.service.suggestionRequests({
      ...args,
      select: {
        createdAt: true,

        customer: {
          select: {
            id: true,
          },
        },

        id: true,

        questionnaire: {
          select: {
            id: true,
          },
        },

        status: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SuggestionRequest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async suggestionRequest(
    @common.Param() params: SuggestionRequestWhereUniqueInput
  ): Promise<SuggestionRequest | null> {
    const result = await this.service.suggestionRequest({
      where: params,
      select: {
        createdAt: true,

        customer: {
          select: {
            id: true,
          },
        },

        id: true,

        questionnaire: {
          select: {
            id: true,
          },
        },

        status: true,
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
  @swagger.ApiOkResponse({ type: SuggestionRequest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateSuggestionRequest(
    @common.Param() params: SuggestionRequestWhereUniqueInput,
    @common.Body() data: SuggestionRequestUpdateInput
  ): Promise<SuggestionRequest | null> {
    try {
      return await this.service.updateSuggestionRequest({
        where: params,
        data: {
          ...data,

          customer: data.customer
            ? {
                connect: data.customer,
              }
            : undefined,

          questionnaire: data.questionnaire
            ? {
                connect: data.questionnaire,
              }
            : undefined,
        },
        select: {
          createdAt: true,

          customer: {
            select: {
              id: true,
            },
          },

          id: true,

          questionnaire: {
            select: {
              id: true,
            },
          },

          status: true,
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
  @swagger.ApiOkResponse({ type: SuggestionRequest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteSuggestionRequest(
    @common.Param() params: SuggestionRequestWhereUniqueInput
  ): Promise<SuggestionRequest | null> {
    try {
      return await this.service.deleteSuggestionRequest({
        where: params,
        select: {
          createdAt: true,

          customer: {
            select: {
              id: true,
            },
          },

          id: true,

          questionnaire: {
            select: {
              id: true,
            },
          },

          status: true,
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

  @common.Get("/:id/nameSuggestions")
  @ApiNestedQuery(NameSuggestionFindManyArgs)
  async findNameSuggestions(
    @common.Req() request: Request,
    @common.Param() params: SuggestionRequestWhereUniqueInput
  ): Promise<NameSuggestion[]> {
    const query = plainToClass(NameSuggestionFindManyArgs, request.query);
    const results = await this.service.findNameSuggestions(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/nameSuggestions")
  async connectNameSuggestions(
    @common.Param() params: SuggestionRequestWhereUniqueInput,
    @common.Body() body: NameSuggestionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      nameSuggestions: {
        connect: body,
      },
    };
    await this.service.updateSuggestionRequest({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/nameSuggestions")
  async updateNameSuggestions(
    @common.Param() params: SuggestionRequestWhereUniqueInput,
    @common.Body() body: NameSuggestionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      nameSuggestions: {
        set: body,
      },
    };
    await this.service.updateSuggestionRequest({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/nameSuggestions")
  async disconnectNameSuggestions(
    @common.Param() params: SuggestionRequestWhereUniqueInput,
    @common.Body() body: NameSuggestionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      nameSuggestions: {
        disconnect: body,
      },
    };
    await this.service.updateSuggestionRequest({
      where: params,
      data,
      select: { id: true },
    });
  }
}
