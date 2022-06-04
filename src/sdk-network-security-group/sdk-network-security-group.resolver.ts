import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GetNetworkSecurityGroupArgs } from './dto/args/get-networkSecurityGroup.args';
import { CreateNetworkSecurityGroupInput } from './dto/input/create-networkSecurityGroup.input';
import { Test } from './model/test';
import { SdkNetworkSecurityGroupService } from './sdk-network-security-group.service';

@Resolver()
export class SdkNetworkSecurityGroupResolver {
  constructor(
    private readonly sdkNetworkSecurityGroup: SdkNetworkSecurityGroupService,
  ) {}

  @Query(() => [Test], { name: 'findAllNSG' })
  async listNetworkSecurityGroup(@Args() args: GetNetworkSecurityGroupArgs) {
    return this.sdkNetworkSecurityGroup.listsNetworkSecurityGroup(args);
  }

  @Mutation(() => Test, { name: 'createNSG' })
  async createNetworkSecurityGroup(
    @Args('createNSG') args: CreateNetworkSecurityGroupInput,
  ) {
    return this.sdkNetworkSecurityGroup.createNetworkSecurityGroup(args);
  }
}
