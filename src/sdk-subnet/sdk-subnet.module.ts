import { Module } from '@nestjs/common';
import { SdkSubnetService } from './sdk-subnet.service';
import { SdkSubnetResolver } from './sdk-subnet.resolver';

@Module({
  providers: [SdkSubnetService, SdkSubnetResolver],
  exports: [SdkSubnetService],
})
export class SdkSubnetModule {}
