import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AzureService } from './azure.service';
import { GetVNetListsArgs } from './dto/args/get-vnetLists.args';
import { CreateNetworkSecurityGroupInput } from './dto/input/create-networkSecurityGroup.input';
import { CreateVNetInput } from './dto/input/create-vnet.intput';
import { Azure } from './models/azure';
import { VNet } from './models/vnet';

@Resolver()
export class AzureResolver {
  constructor(private readonly azureService: AzureService) {}

  @Query(() => [VNet], { name: 'VNets', nullable: true })
  async listsVNets(@Args() getVNetListsArgs: GetVNetListsArgs) {
    return this.azureService.listsVNet(getVNetListsArgs);
  }

  @Query(() => [VNet], { name: 'SecurityGroups', nullable: true })
  async listsSecurityGroup(@Args() getVNetListsArgs: GetVNetListsArgs) {
    return this.azureService.listsNetworkSecurityGroup(getVNetListsArgs);
  }

  @Mutation(() => Azure)
  async createNetworkSecurityGroup(
    @Args('createNSG') createNSGInput: CreateNetworkSecurityGroupInput,
  ) {
    return this.azureService.createNetworkSecurityGroup(createNSGInput);
  }

  @Mutation(() => Azure)
  async createVNet(@Args('createVNet') createVNet: CreateVNetInput) {
    return this.azureService.createVNet(createVNet);
  }
}
