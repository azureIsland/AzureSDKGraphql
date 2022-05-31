import { Module } from '@nestjs/common';
import { AzureService } from './azure.service';
import { AzureResolver } from './azure.resolver';

@Module({
  providers: [AzureService, AzureResolver],
  exports: [AzureService],
})
export class AzureModule {}
