import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateNetworkSecurityGroupInput } from './dto/input/create-networkSecurityGroup.input';
import { Test } from './model/test';
import { SdkNetworkSecurityGroupService } from './sdk-network-security-group.service';

@Resolver()
export class SdkNetworkSecurityGroupResolver {
  constructor(
    private readonly sdkNetworkSecurityGroup: SdkNetworkSecurityGroupService,
  ) {}

  @Mutation(() => Test)
  async createNetworkSecurityGroup(
    @Args('createNSG') createNSGInput: CreateNetworkSecurityGroupInput,
  ) {
    return this.sdkNetworkSecurityGroup.createNetworkSecurityGroup(
      createNSGInput,
    );
  }
}
