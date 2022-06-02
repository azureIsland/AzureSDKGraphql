import { Module } from '@nestjs/common';
import { SdkRouteTablesService } from './sdk-route-tables.service';
import { SdkRouteTablesResolver } from './sdk-route-tables.resolver';

@Module({
  providers: [SdkRouteTablesService, SdkRouteTablesResolver],
  exports: [SdkRouteTablesService],
})
export class SdkRouteTablesModule {}
