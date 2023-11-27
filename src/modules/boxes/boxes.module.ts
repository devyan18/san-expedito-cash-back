import { Module } from "@nestjs/common";
import { BoxesService } from "./boxes.service";
import { BoxesController } from "./boxes.controller";
import { Box } from "./entities/box.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([Box])],
  controllers: [BoxesController],
  providers: [BoxesService],
})
export class BoxesModule {}
