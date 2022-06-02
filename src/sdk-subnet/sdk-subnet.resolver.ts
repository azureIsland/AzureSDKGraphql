import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Test } from 'src/sdk-network-security-group/model/test';
import { CreateSubnetInput } from './dto/input/create-subnet.input';
import { SdkSubnetService } from './sdk-subnet.service';

@Resolver()
export class SdkSubnetResolver {
  constructor(private readonly sdkSubNetService: SdkSubnetService) {}

  @Mutation(() => Test)
  async createSubnet(
    @Args('createSubnet') createSubnetInput: CreateSubnetInput,
  ) {
    return this.sdkSubNetService.createSubnet(createSubnetInput);
  }
}
