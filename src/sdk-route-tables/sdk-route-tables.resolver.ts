import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateRouteTablesInput } from './dto/input/create-routeTables.input';
import { SDKStatus } from './model/SDKStatus';
import { SdkRouteTablesService } from './sdk-route-tables.service';

@Resolver()
export class SdkRouteTablesResolver {
  constructor(private readonly sdkRouteTablesService: SdkRouteTablesService) {}

  @Mutation(() => SDKStatus)
  async createRouteTables(
    @Args('createRouteTable') args: CreateRouteTablesInput,
  ) {
    return this.sdkRouteTablesService.createRouteTables(args);
  }
}
