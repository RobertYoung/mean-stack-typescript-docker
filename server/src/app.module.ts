import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from '@server/users/users.module';
import { RouterModule } from 'nest-router';
import { ApiModule } from '@server/api/api.module';
import { routes } from '@server/app.routes';
import { ConfigModule } from '@server/config/config.module';

@Module({
  imports: [
    RouterModule.forRoutes(routes),
    MongooseModule.forRoot(`mongodb://mean-stack-database/mean`),
    UsersModule,
    ApiModule,
    ConfigModule
  ]
})
export class AppModule {}
