import { Module } from '@nestjs/common';
import { RedirectClientException } from '@server/config/exceptions/redirect-client.exception';

@Module({
  providers: [RedirectClientException]
})
export class ConfigModule {}
