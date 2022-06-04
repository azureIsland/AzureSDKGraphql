import { Module } from '@nestjs/common';
import { SdkVNetService } from './sdk-vnet.service';
import { SdkVNetResolver } from './sdk-vnet.resolver';
import { SdkSecretModule } from 'src/sdk-secret/sdk-secret.module';

@Module({
  imports: [SdkSecretModule],
  providers: [SdkVNetService, SdkVNetResolver],
  exports: [SdkVNetService],
})
export class SdkVNetModule {}
