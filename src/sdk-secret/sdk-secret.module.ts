import { Module } from '@nestjs/common';
import { SdkSecretService } from './sdk-secret.service';
import { SdkSecretResolver } from './sdk-secret.resolver';

@Module({
  providers: [SdkSecretService, SdkSecretResolver],
})
export class SdkSecretModule {}
