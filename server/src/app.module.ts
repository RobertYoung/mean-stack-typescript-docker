import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from '@server/app.controller';
import { UsersController } from '@server/users/controllers/users.controller';
import { AppService } from '@server/app.service';
import { UsersService } from '@server/users/services/users.service';
import { ConfigService } from '@server/config/services/config.service';
import { ConfigModule } from '@server/config/config.module';
import { UsersModule } from './users/users.module';

// TODO: Wait for a recommended way of passing credentials to the mongoose module
// https://github.com/nestjs/nest/issues/530
const configService: ConfigService = new ConfigService(`${process.env.NODE_ENV}.env`);

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://${configService.get('MONGO_DB_HOSTNAME')}:${configService.get('MONGO_DB_PORT')}/mean`),
    ConfigModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
