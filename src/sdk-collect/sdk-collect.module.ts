import { Module } from '@nestjs/common';
import { SdkNetworkInterfaceModule } from 'src/sdk-network-interface/sdk-network-interface.module';
import { SdkSecretModule } from 'src/sdk-secret/sdk-secret.module';
import { SdkSubnetsModule } from 'src/sdk-subnets/sdk-subnets.module';
import { SdkVmModule } from 'src/sdk-vm/sdk-vm.module';
import { SdkVNetModule } from 'src/sdk-vnet/sdk-vnet.module';
import { SdkCollectResolver } from './sdk-collect.resolver';
import { SdkCollectService } from './sdk-collect.service';

@Module({
  imports: [
    SdkSecretModule,
    SdkVNetModule,
    SdkSubnetsModule,
    SdkNetworkInterfaceModule,
    SdkVmModule,
  ],
  providers: [SdkCollectResolver, SdkCollectService],
})
export class SdkCollectModule {}
