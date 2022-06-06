import { NetworkManagementClient, Route, RouteTable } from '@azure/arm-network';
import { ClientSecretCredential } from '@azure/identity';
import { Injectable } from '@nestjs/common';
import { SdkSecretService } from 'src/sdk-secret/sdk-secret.service';
import { GetRouteTablesAllArgs } from './dto/args/get-routeTablesAll.args';
import { GetRouteTablesFindOneArgs } from './dto/args/get-routeTablesFindOne.args';
import { CreateRouteTablesInput } from './dto/input/create-routeTables.input';

@Injectable()
export class SdkRouteTablesService {
  constructor(private readonly sdkSecretService: SdkSecretService) {}

  // ルートテーブル全取得
  async getRouteTablesAll(args: GetRouteTablesAllArgs) {
    const secret = await this.sdkSecretService.findFirst({
      where: { id: { equals: args.id } },
    });

    const networkClient = new NetworkManagementClient(
      new ClientSecretCredential(
        secret.tenantId,
        secret.clientId,
        secret.clientSecret,
      ),
      secret.subscriptionId,
    );

    const routeTablesLists = networkClient.routeTables.listAll();
    const routeTables: RouteTable[] = [];
    for await (const item of routeTablesLists) {
      routeTables.push(item);
    }
    return routeTables;
  }

  // ルートテーブル単体取得
  async getRouteTablesFindOne(args: GetRouteTablesFindOneArgs) {
    const secret = await this.sdkSecretService.findFirst({
      where: { id: { equals: args.id } },
    });

    const networkClient = new NetworkManagementClient(
      new ClientSecretCredential(
        secret.tenantId,
        secret.clientId,
        secret.clientSecret,
      ),
      secret.subscriptionId,
    );

    const routeTable = await networkClient.routeTables.get(
      secret.resourceGroup,
      args.routeTableName,
    );
    return routeTable;
  }

  // ルートテーブルの作成・更新
  async createRouteTables(args: CreateRouteTablesInput) {
    const secret = await this.sdkSecretService.findFirst({
      where: { id: { equals: args.id } },
    });

    const networkClient = new NetworkManagementClient(
      new ClientSecretCredential(
        secret.tenantId,
        secret.clientId,
        secret.clientSecret,
      ),
      secret.subscriptionId,
    );

    const routes: Route[] = args.routes;

    const routeTable =
      await networkClient.routeTables.beginCreateOrUpdateAndWait(
        secret.resourceGroup,
        args.routeTableName,
        {
          location: secret.location,
          disableBgpRoutePropagation: !args.IsConnectDefaultGateway,
          routes,
        },
      );
    return routeTable;
  }
}
