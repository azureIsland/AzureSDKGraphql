import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GetVNetListsArgs } from './dto/args/get-vnetLists.args';
import { CreateVNetInput } from './dto/input/create-vnet.intput';
import { VNet } from './model/vnet';
import { SdkVNetService } from './sdk-vnet.service';

@Resolver()
export class SdkVNetResolver {
  constructor(private readonly sdkVNetService: SdkVNetService) {}

  @Query(() => [VNet], { name: 'findAllVNets', nullable: true })
  async listsVNets(@Args() getVNetListsArgs: GetVNetListsArgs) {
    return this.sdkVNetService.listsVNet(getVNetListsArgs);
  }

  @Mutation(() => VNet)
  async createVNet(@Args('createVNet') createVNet: CreateVNetInput) {
    return this.sdkVNetService.createVNet(createVNet);
  }
}
