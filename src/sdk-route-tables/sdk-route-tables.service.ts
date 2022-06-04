import { NetworkManagementClient, Route, Subnet } from '@azure/arm-network';
import { ClientSecretCredential } from '@azure/identity';
import { Injectable } from '@nestjs/common';
import { SdkSecretService } from 'src/sdk-secret/sdk-secret.service';
import { CreateRouteTablesInput } from './dto/input/create-routeTables.input';

@Injectable()
export class SdkRouteTablesService {
  constructor(private readonly sdkSecretService: SdkSecretService) {}

  // ルートテーブルの作成・更新
  async createRouteTables(createRouteTablesInput: CreateRouteTablesInput) {
    const secret = await this.sdkSecretService.findFirst({
      where: {
        id: {
          equals: createRouteTablesInput.id,
        },
      },
    });

    const networkClient = new NetworkManagementClient(
      new ClientSecretCredential(
        secret.tenantId,
        secret.clientId,
        secret.clientSecret,
      ),
      secret.subscriptionId,
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

    const routeTable =
      await networkClient.routeTables.beginCreateOrUpdateAndWait(
        secret.resourceGroup,
        createRouteTablesInput.routeTableName,
        {
          location: secret.location,
          disableBgpRoutePropagation:
            !createRouteTablesInput.IsConnectDefaultGateway,
          routes,
        },
      );
    return routeTable;
  }
}
