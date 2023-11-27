import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Item } from "./entities/item.entity";
import { Repository } from "typeorm";

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private readonly itemRepository: Repository<Item>,
  ) {}

  async seed() {
    await this.itemRepository.clear();

    const corralon = this.itemRepository.create({
      name_item: "Corralón",
      description_item: "Materiales de construcción",
    });

    const ferreteria = this.itemRepository.create({
      name_item: "Ferretería",
      description_item: "Herramientas y materiales de ferretería",
    });

    const plomeria = this.itemRepository.create({
      name_item: "Plomería",
      description_item: "Herramientas y materiales de ferretería",
    });

    const electricidad = this.itemRepository.create({
      name_item: "Electricidad",
      description_item: "Herramientas y materiales de ferretería",
    });

    const pesca = this.itemRepository.create({
      name_item: "Pesca",
      description_item: "Cañas, anzuelos, carnadas, etc",
    });

    await this.itemRepository.save([
      corralon,
      ferreteria,
      plomeria,
      electricidad,
      pesca,
    ]);

    return "Items have been seeded";
  }

  async findAll() {
    return await this.itemRepository.find();
  }
}
