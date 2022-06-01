import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AzureService } from './azure.service';
import { GetVNetListsArgs } from './dto/args/get-vnetLists.args';
import { CreateVNetInput } from './dto/input/create-vnet.intput';
import { Azure } from './models/azure';
import { VNet } from './models/vnet';

@Resolver()
export class AzureResolver {
  constructor(private readonly azureService: AzureService) {}

  @Query(() => [VNet], { name: 'VNets', nullable: false })
  async listsVNets(@Args() getVNetListsArgs: GetVNetListsArgs) {
    return this.azureService.listsVNet(getVNetListsArgs);
  }

  @Mutation(() => Azure)
  async createVNet(@Args('createVNet') createVNet: CreateVNetInput) {
    return this.azureService.createVNet(createVNet);
  }
}
