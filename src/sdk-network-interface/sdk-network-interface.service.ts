import { NetworkInterface, NetworkManagementClient } from '@azure/arm-network';
import { ClientSecretCredential } from '@azure/identity';
import { Injectable } from '@nestjs/common';
import { SdkSecretService } from 'src/sdk-secret/sdk-secret.service';
import { CreatedNetInfInput } from './dto/input/create-network-interface';

@Injectable()
export class SdkNetworkInterfaceService {
  constructor(private readonly sdkSeacretService: SdkSecretService) {}

  async createNetworkInterface(args: CreatedNetInfInput) {
    const secret = await this.sdkSeacretService.findFirst({
      where: { id: { equals: args.id } },
    });

    //   Credentialの認証
    const networkClient = new NetworkManagementClient(
      new ClientSecretCredential(
        secret.tenantId,
        secret.clientId,
        secret.clientSecret,
      ),
      secret.subscriptionId,
    );

    //   NetWorkInterfaceを作るうえで必要なパラメータ
    const parameter: NetworkInterface = {
      location: secret.location,
      ipConfigurations: [
        {
          name: args.name,
          subnet: {
            id:
              '/subscriptions/' +
              secret.subscriptionId +
              '/resourceGroups/' +
              secret.resourceGroup +
              '/providers/Microsoft.Network/virtualNetworks/' +
              args.vnetName +
              '/subnets/' +
              args.subnetName,
          },
        },
      ],
    };

    //   NetworkInterfaceを作成する処理
    const nic_info =
      await networkClient.networkInterfaces.beginCreateOrUpdateAndWait(
        secret.resourceGroup,
        args.interfaceName,
        parameter,
      );
    return nic_info;
  }
}
