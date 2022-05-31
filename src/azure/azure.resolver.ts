import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AzureService } from './azure.service';
import { CreateVNetInput } from './dto/input/create-vnet.intput';
import { Azure } from './models/azure';

@Resolver()
export class AzureResolver {
  constructor(private readonly azureService: AzureService) {}

  @Query(() => Azure, { name: 'azure', nullable: true })
  async getResource() {
    // return this.azureService.getUser();
  }

  @Mutation(() => Azure)
  async createVNet(@Args('createVNet') createVNet: CreateVNetInput) {
    return this.azureService.createVNet(createVNet);
  }
}
