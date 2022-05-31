import { Query, Resolver } from '@nestjs/graphql';
import { AzureService } from './azure.service';
import { Azure } from './models/azure';

@Resolver()
export class AzureResolver {
  constructor(private readonly azureService: AzureService) {}

  @Query(() => Azure, { name: 'azure', nullable: true })
  async getResource() {
    return this.azureService.getUser();
  }
}
