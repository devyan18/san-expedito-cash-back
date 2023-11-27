import { Module } from "@nestjs/common";
import { ProfitsService } from "./profits.service";
import { ProfitsController } from "./profits.controller";
import { Profit } from "./entities/profit.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([Profit])],
  controllers: [ProfitsController],
  providers: [ProfitsService],
})
export class ProfitsModule {}
