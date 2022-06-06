import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GetVNetRelationSubnetsAllArgs } from './dto/args/get-subnetsAll.args';
import { GetSubnetFindOneArgs } from './dto/args/get-subnetsFindOne.args';
import { CreateSubnetsInput } from './dto/input/create-subnets.input';
import { CreatedSubnetStatus } from './model/createdSubnetStatus';
import { SubNets } from './model/subnets';
import { SdkSubnetsService } from './sdk-subnets.service';

@Resolver()
export class SdkSubnetsResolver {
  constructor(private readonly sdkSubNetsService: SdkSubnetsService) {}

  @Query(() => [SubNets], { name: 'findVNetRelationSubnetAll' })
  async getVNetRelationSubnetsAll(@Args() args: GetVNetRelationSubnetsAllArgs) {
    return this.sdkSubNetsService.getVNetRelationSubNetAll(args);
  }

  @Query(() => SubNets, { name: 'findOneSubnet' })
  async getSubNetFindOne(@Args() args: GetSubnetFindOneArgs) {
    return this.sdkSubNetsService.getSubNetFindOne(args);
  }

  @Mutation(() => CreatedSubnetStatus, { name: 'createSubnet' })
  async createSubnet(@Args('createSubnet') args: CreateSubnetsInput) {
    return this.sdkSubNetsService.createSubnet(args);
  }
}
