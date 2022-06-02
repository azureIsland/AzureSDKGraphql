import { Module } from '@nestjs/common';
import { SdkVNetService } from './sdk-vnet.service';
import { SdkVNetResolver } from './sdk-vnet.resolver';

@Module({
  providers: [SdkVNetService, SdkVNetResolver],
  exports: [SdkVNetService],
})
export class SdkVNetModule {}
