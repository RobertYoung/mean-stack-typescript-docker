import { Injectable } from '@nestjs/common';

const packageJson = require('@server/../package.json');

@Injectable()
export class AppService {
  root(): string {
    return `${packageJson.name} ${packageJson.version}`;
  }
}
