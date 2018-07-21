import './config/alias/module.alias';

import * as express from 'express';
import { renderFile } from 'ejs';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '@server/app.module';
import { RedirectClientException } from '@server/config/exceptions/redirect-client.exception';
import { DIST_CLIENT } from '@server/app.constants';

async function bootstrap() {
  const server = await NestFactory.create(AppModule, {
    // logger: console
  });

  server.engine('html', renderFile);
  server.setBaseViewsDir(DIST_CLIENT);
  server.useStaticAssets(DIST_CLIENT, {
    index: false,
    redirect: false
  });
  server.use(express.static(DIST_CLIENT));
  server.useGlobalFilters(new RedirectClientException());

  await server.listen(3000);
}
bootstrap();
