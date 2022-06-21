import { Module } from '@nestjs/common';
import { SdkSecretModule } from 'src/sdk-secret/sdk-secret.module';
import { SdkNetworkInterfaceResolver } from './sdk-network-interface.resolver';
import { SdkNetworkInterfaceService } from './sdk-network-interface.service';

@Module({
  imports: [SdkSecretModule],
  providers: [SdkNetworkInterfaceResolver, SdkNetworkInterfaceService],
  exports: [SdkNetworkInterfaceService],
})
export class SdkNetworkInterfaceModule {}
