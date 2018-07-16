import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from '@server/app.controller';
import { AppService } from '@server/app.service';
import { UsersModule } from '@server/users/users.module';

@Module({
  imports: [MongooseModule.forRoot(`mongodb://mean-stack-database/mean`), UsersModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
