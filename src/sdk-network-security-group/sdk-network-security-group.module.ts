import { Module } from '@nestjs/common';
import { SdkNetworkSecurityGroupService } from './sdk-network-security-group.service';
import { SdkNetworkSecurityGroupResolver } from './sdk-network-security-group.resolver';
import { SdkSecretModule } from 'src/sdk-secret/sdk-secret.module';

@Module({
  imports: [SdkSecretModule],
  providers: [SdkNetworkSecurityGroupService, SdkNetworkSecurityGroupResolver],
  exports: [SdkNetworkSecurityGroupService],
})
export class SdkNetworkSecurityGroupModule {}
