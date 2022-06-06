import { Module } from '@nestjs/common';
import { SdkSubnetsService } from './sdk-subnets.service';
import { SdkSubnetsResolver } from './sdk-subnets.resolver';
import { SdkSecretModule } from 'src/sdk-secret/sdk-secret.module';

@Module({
  imports: [SdkSecretModule],
  providers: [SdkSubnetsService, SdkSubnetsResolver],
  exports: [SdkSubnetsService],
})
export class SdkSubnetsModule {}
