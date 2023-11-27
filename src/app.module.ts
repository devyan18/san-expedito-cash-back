import { Module } from "@nestjs/common";
import { UsersModule } from "./users/users.module";
import { AuthModule } from "./auth/auth.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { config } from "./settings/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BoxesModule } from "./modules/boxes/boxes.module";
import { ProfitsModule } from "./modules/profits/profits.module";
import { ItemsModule } from "./modules/items/items.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],

      useFactory: (configService: ConfigService) => ({
        type: "postgres",
        host: configService.get<string>("DB.HOST"),
        port: configService.get<number>("DB.PORT"),
        username: configService.get<string>("DB.USERNAME"),
        password: configService.get<string>("DB.PASSWORD"),
        database: configService.get<string>("DB.DATABASE_NAME"),
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
    UsersModule,
    AuthModule,
    BoxesModule,
    ProfitsModule,
    ItemsModule,
  ],
})
export class AppModule {}
