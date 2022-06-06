import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreatedStatus } from 'src/sdk-modelShare/createdStatus';
import { GetNetworkSecurityGroupAllArgs } from './dto/args/get-networkSecurityGroupAll.args';
import { GetNetworkSecurityGroupFindOneArgs } from './dto/args/get-networkSecurityGroupFindOne.args';
import { CreateNetworkSecurityGroupInput } from './dto/input/create-networkSecurityGroup.input';
import { NetworkSecurityGroup } from './model/networkSecurityGroup';
import { SdkNetworkSecurityGroupService } from './sdk-network-security-group.service';

@Resolver()
export class SdkNetworkSecurityGroupResolver {
  constructor(
    private readonly sdkNetworkSecurityGroup: SdkNetworkSecurityGroupService,
  ) {}

  @Query(() => [NetworkSecurityGroup], { name: 'findAllNSG' })
  async getNetworkSecurityGroupAll(
    @Args() args: GetNetworkSecurityGroupAllArgs,
  ) {
    return this.sdkNetworkSecurityGroup.getNetworkSecurityGroupAll(args);
  }

  @Query(() => NetworkSecurityGroup, { name: 'findOneNSG' })
  async getNetworkSecurityGroupOne(
    @Args() args: GetNetworkSecurityGroupFindOneArgs,
  ) {
    return this.sdkNetworkSecurityGroup.getNetworkSecurityGroupFindOne(args);
  }

  @Mutation(() => CreatedStatus, { name: 'createNSG' })
  async createNetworkSecurityGroup(
    @Args('createNSG') args: CreateNetworkSecurityGroupInput,
  ) {
    return this.sdkNetworkSecurityGroup.createNetworkSecurityGroup(args);
  }
}
