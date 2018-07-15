import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { UsersController } from './users/users.controller';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';

@Module({
  imports: [MongooseModule.forRoot(`mongodb://${process.env.MONGO_DB_HOSTNAME}:${process.env.MONGO_DB_PORT}/mean`)],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService]
})
export class AppModule {}
