import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GetVNetFindOneArgs } from './dto/args/get-vnetFindOne.args';
import { GetVNetAllArgs } from './dto/args/get-vnetListsAll.args';
import { CreateVNetInput } from './dto/input/create-vnet.intput';
import { CreatedVNetStatus } from './model/createdVNetStatus';
import { VNet } from './model/vnet';
import { SdkVNetService } from './sdk-vnet.service';

@Resolver()
export class SdkVNetResolver {
  constructor(private readonly sdkVNetService: SdkVNetService) {}

  @Query(() => [VNet], { name: 'findAllVNets' })
  async getVNetsAll(@Args() args: GetVNetAllArgs) {
    return this.sdkVNetService.getVNetsAll(args);
  }

  @Query(() => VNet, { name: 'findOneVNets' })
  async getVNetsFindOne(@Args() args: GetVNetFindOneArgs) {
    return this.sdkVNetService.getVNetsFindOne(args);
  }

  @Mutation(() => CreatedVNetStatus)
  async createVNet(@Args('createVNets') args: CreateVNetInput) {
    return this.sdkVNetService.createVNet(args);
  }
}
