import { Controller, Get } from "@nestjs/common";
import { ItemsService } from "./items.service";

@Controller("items")
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get("/seed")
  seed() {
    return this.itemsService.seed();
  }

  @Get()
  findAll() {
    return this.itemsService.findAll();
  }
}
