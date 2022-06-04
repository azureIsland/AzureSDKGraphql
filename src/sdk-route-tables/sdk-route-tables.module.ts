import { Module } from '@nestjs/common';
import { SdkRouteTablesService } from './sdk-route-tables.service';
import { SdkRouteTablesResolver } from './sdk-route-tables.resolver';
import { SdkSecretModule } from 'src/sdk-secret/sdk-secret.module';

@Module({
  imports: [SdkSecretModule],
  providers: [SdkRouteTablesService, SdkRouteTablesResolver],
  exports: [SdkRouteTablesService],
})
export class SdkRouteTablesModule {}
