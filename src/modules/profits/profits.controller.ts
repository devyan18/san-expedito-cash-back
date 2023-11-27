import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { ProfitsService } from "./profits.service";
import { CreateProfitDto } from "./dto/create-profit.dto";
import { UpdateProfitDto } from "./dto/update-profit.dto";

@Controller("profits")
export class ProfitsController {
  constructor(private readonly profitsService: ProfitsService) {}

  @Post()
  create(@Body() createProfitDto: CreateProfitDto) {
    return this.profitsService.create(createProfitDto);
  }

  @Get()
  findAll() {
    return this.profitsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.profitsService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateProfitDto: UpdateProfitDto,
  ) {
    return this.profitsService.update(+id, updateProfitDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.profitsService.remove(+id);
  }
}
