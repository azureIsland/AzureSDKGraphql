import { NetworkManagementClient, Route, Subnet } from '@azure/arm-network';
import { ClientSecretCredential } from '@azure/identity';
import { Injectable } from '@nestjs/common';
import { CreateRouteTablesInput } from './dto/input/create-routeTables.input';

@Injectable()
export class SdkRouteTablesService {
  // ルートテーブルの作成・更新
  async createRouteTables(createRouteTablesInput: CreateRouteTablesInput) {
    const networkClient = new NetworkManagementClient(
      new ClientSecretCredential(
        createRouteTablesInput.tenantId,
        createRouteTablesInput.clientId,
        createRouteTablesInput.clientSecret,
      ),
      createRouteTablesInput.subscriptionId,
    );

    const routes: Route[] = [
      {
        name: 'aaaaa',
        addressPrefix: '10.0.0.0/24',
        nextHopType: 'VnetLocal',
      },
    ];

    // const subnets: Subnet[] = [
    //   {

    //   }
    // ]

    const RouteTable =
      await networkClient.routeTables.beginCreateOrUpdateAndWait(
        createRouteTablesInput.resourceGroup,
        createRouteTablesInput.routeTableName,
        {
          location: createRouteTablesInput.location,
          disableBgpRoutePropagation:
            !createRouteTablesInput.IsConnectDefaultGateway,
          routes,
        },
      );
    return RouteTable;
  }
}
