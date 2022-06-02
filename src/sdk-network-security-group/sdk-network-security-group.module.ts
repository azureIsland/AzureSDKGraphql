import { Module } from '@nestjs/common';
import { SdkNetworkSecurityGroupService } from './sdk-network-security-group.service';
import { SdkNetworkSecurityGroupResolver } from './sdk-network-security-group.resolver';

@Module({
  providers: [SdkNetworkSecurityGroupService, SdkNetworkSecurityGroupResolver],
  exports: [SdkNetworkSecurityGroupService],
})
export class SdkNetworkSecurityGroupModule {}
