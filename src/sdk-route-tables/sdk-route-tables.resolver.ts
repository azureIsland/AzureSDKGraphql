import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreatedStatus } from 'src/sdk-modelShare/createdStatus';
import { GetRouteTablesAllArgs } from './dto/args/get-routeTablesAll.args';
import { GetRouteTablesFindOneArgs } from './dto/args/get-routeTablesFindOne.args';
import { CreateRouteTablesInput } from './dto/input/create-routeTables.input';
import { RouteTable } from './model/routeTable';
import { SdkRouteTablesService } from './sdk-route-tables.service';

@Resolver()
export class SdkRouteTablesResolver {
  constructor(private readonly sdkRouteTablesService: SdkRouteTablesService) {}

  @Query(() => [RouteTable], { name: 'findAllRouteTables' })
  async getRouteTablesAll(@Args() args: GetRouteTablesAllArgs) {
    return this.sdkRouteTablesService.getRouteTablesAll(args);
  }

  @Query(() => RouteTable, { name: 'findOneRouteTables' })
  async getRouteTablesOne(@Args() args: GetRouteTablesFindOneArgs) {
    return this.sdkRouteTablesService.getRouteTablesFindOne(args);
  }

  @Mutation(() => CreatedStatus)
  async createRouteTables(
    @Args('createRouteTable') args: CreateRouteTablesInput,
  ) {
    return this.sdkRouteTablesService.createRouteTables(args);
  }
}
