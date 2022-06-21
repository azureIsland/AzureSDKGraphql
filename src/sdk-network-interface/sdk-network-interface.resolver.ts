import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreatedNetInfInput } from './dto/input/create-network-interface';
import { CreateNetInfStatus } from './model/createNetworkInterfaceStatus';
import { SdkNetworkInterfaceService } from './sdk-network-interface.service';

@Resolver()
export class SdkNetworkInterfaceResolver {
  constructor(private readonly sdkNetInfService: SdkNetworkInterfaceService) {}

  @Mutation(() => CreateNetInfStatus, { name: 'createNet' })
  async createNetInf(@Args('createNetInf') args: CreatedNetInfInput) {
    return this.sdkNetInfService.createNetworkInterface(args);
  }
}
